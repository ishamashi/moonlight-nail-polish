// components/AiStylistClientComponent.tsx
"use client";

import React, { useState, useEffect } from "react"; // Tambah useEffect
import Image from "next/image";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { FiSend, FiLoader, FiInfo } from "react-icons/fi";
import { generateAiImage, type AiProvider, type CommonAiParameters } from "@/lib/aiImageService"; // Impor fungsi abstraksi
import type { FalAiParameters } from "@/lib/falApi"; // Untuk parameter spesifik
import type { PollinationsParameters } from "@/lib/pollinationsApi"; // Untuk parameter spesifik

interface AiGeneratedImage {
  id: string;
  url: string;
  alt: string;
}

const AiStylistClientComponent: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedImages, setGeneratedImages] = useState<AiGeneratedImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedProvider, setSelectedProvider] = useState<AiProvider>("fal"); // Default ke Fal AI

  const handleGenerate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!prompt.trim()) {
      setError("Please describe the nail art you're imagining.");
      return;
    }

    setIsLoading(true);
    setError(null);
    generatedImages.forEach((img) => URL.revokeObjectURL(img.url)); // Bersihkan URL lama
    setGeneratedImages([]);

    try {
      let imageBlob: Blob | null = null;
      const specificParams: CommonAiParameters = {}; // Tidak lagi 'any

      if (selectedProvider === "fal") {
        specificParams.fal = {
          // Parameter default atau yang bisa diubah pengguna untuk Fal AI
          num_inference_steps: 25,
          guidance_scale: 7.5,
          // width: 512, height: 512,
        } as FalAiParameters;
      } else if (selectedProvider === "pollinations") {
        specificParams.pollinations = {
          // Parameter default atau yang bisa diubah pengguna untuk Pollinations
          model: "flux", // Contoh
          seed: Math.floor(Math.random() * 1000000000), //150219777
          // width: 512, height: 512,
          nologo: true,
        } as PollinationsParameters;
      }

      imageBlob = await generateAiImage(selectedProvider, prompt, specificParams);

      if (imageBlob) {
        const imageUrl = URL.createObjectURL(imageBlob);
        setGeneratedImages([{ id: Date.now().toString(), url: imageUrl, alt: `AI generated using ${selectedProvider}: ${prompt}` }]);
      } else {
        setError(`Received no image data from ${selectedProvider} AI. Please try a different prompt.`);
      }
    } catch (apiError) {
      console.error(`${selectedProvider} AI API Error in Component:`, apiError);

      let errorMessage = `Failed to generate image with ${selectedProvider}. Please try again.`;
      if (apiError instanceof Error) {
        errorMessage = apiError.message; // Akses .message jika itu instance Error
      } else if (typeof apiError === "string") {
        errorMessage = apiError; // Jika errornya string
      }
      // Anda bisa menambahkan pengecekan lain jika perlu

      setError(errorMessage);
      setGeneratedImages([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      generatedImages.forEach((img) => URL.revokeObjectURL(img.url));
    };
  }, [generatedImages]);

  return (
    <>
      {/* 2. Pengantar & Cara Kerja */}
      <section className="py-6 md:py-8">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">How It Works</h2>
          <p className="text-secondary mb-2">Simply type a description of the nail art you envision. Be as descriptive as you like! For example:</p>
          <p className="text-sm text-muted italic mb-6">
            &quot;Elegant nude base with delicate white floral patterns and a touch of gold foil on short almond nails.&quot;
            <br />
            &quot;Bold geometric black and white design with a matte finish.&quot;
          </p>
          <p className="text-secondary">Our AI will then generate visual concepts to inspire your next look.</p>
        </div>
      </section>

      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-md text-center">
          <label htmlFor="aiProvider" className="block text-sm font-medium text-foreground mb-2">
            Choose AI Image Generator:
          </label>
          <div className="flex justify-center space-x-3">
            <Button variant={selectedProvider === "fal" ? "primary" : "outline"} onClick={() => setSelectedProvider("fal")} size="sm">
              Fal AI (Advanced)
            </Button>
            <Button variant={selectedProvider === "pollinations" ? "primary" : "outline"} onClick={() => setSelectedProvider("pollinations")} size="sm">
              Pollinations (Creative)
            </Button>
          </div>
          {selectedProvider === "fal" && !process.env.NEXT_PUBLIC_HUGGING_FACE_API_TOKEN && <p className="text-xs text-red-500 mt-2">Warning: Fal AI (Hugging Face) Token not configured. This option may not work.</p>}
        </div>
      </section>

      {/* 3. Area Input Pengguna */}
      <section className="pb-10 md:pb-10">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleGenerate} className="bg-gray-50 p-6 md:p-8 rounded-lg shadow-md border border-border">
            <label htmlFor="nailPrompt" className="block text-lg font-semibold text-primary mb-3">
              Describe Your Dream Nail Art (using {selectedProvider === "fal" ? "Fal AI" : "Pollinations"}):
            </label>
            <textarea id="nailPrompt" rows={3} value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="e.g., 'minimalist pastel french tips with a tiny heart on one finger'" className="block w-full px-4 py-2.5 border border-border rounded-md shadow-sm bg-background focus:ring-primary focus:border-primary sm:text-sm mb-4 resize-none" disabled={isLoading} />
            {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
            <Button type="submit" variant="primary" className="w-full flex items-center justify-center" disabled={isLoading}>
              {isLoading ? (
                <>
                  <FiLoader className="animate-spin mr-2 h-5 w-5" /> Generating...
                </>
              ) : (
                <>
                  <FiSend className="mr-2 h-5 w-5" /> Visualize My Design
                </>
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* 4. Area Hasil Gambar */}
      {isLoading && (
        <div className="text-center py-10">
          <FiLoader className="animate-spin mx-auto h-12 w-12 text-primary mb-4" />
          <p className="text-muted">Our AI is crafting your nail art ideas... please wait.</p>
        </div>
      )}

      {!isLoading && generatedImages.length > 0 && (
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8 text-center">Your AI-Generated Inspirations</h2>
            {/* Grid untuk hasil gambar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {generatedImages.map((image) => (
                <div key={image.id} className="rounded-lg overflow-hidden shadow-lg group border border-border">
                  <div className="relative aspect-square bg-gray-100">
                    {" "}
                    {/* Aspek 1:1 umum untuk nail art */}
                    <Image src={image.url} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" style={{ objectFit: "cover" }} className="transition duration-300 group-hover:scale-105" />
                  </div>
                  {/* Bisa tambahkan info atau tombol 'Save Idea' di sini */}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Disclaimer & Langkah Selanjutnya */}
      {!isLoading &&
        (generatedImages.length > 0 || error) && ( // Tampilkan jika ada hasil atau error
          <section className="pb-20 pt-10 border-t border-border bg-gray-50">
            <div className="container mx-auto px-4 max-w-3xl text-center">
              <div className="flex items-center justify-center bg-blue-50 border border-blue-200 text-blue-700 px-4 py-3 rounded-lg mb-8 text-sm" role="alert">
                <FiInfo className="h-5 w-5 mr-3 flex-shrink-0" />
                <p>These AI-generated images are for inspiration. The final look can be discussed and customized with {/** Ganti Natasya */}Natasya to perfectly match your style and nail type.</p>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inspired by a Design?</h3>
              <p className="text-secondary mb-6">Save your favorite ideas and discuss them with us when you book your private appointment at our Jimbaran studio.</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button href="/booking" variant="primary" size="lg">
                  Book Your Appointment
                </Button>
                <Link href="/gallery" className="text-primary hover:text-accent font-semibold transition duration-300 py-2">
                  Or View Our Portfolio →
                </Link>
              </div>
            </div>
          </section>
        )}
    </>
  );
};

export default AiStylistClientComponent;
