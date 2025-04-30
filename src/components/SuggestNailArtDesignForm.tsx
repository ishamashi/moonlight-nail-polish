"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { suggestNailArtDesign } from "@/ai/flows/suggest-nail-art-design";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";


const formSchema = z.object({
  color: z.string().min(2, {
    message: "Color must be at least 2 characters.",
  }),
  style: z.string().min(2, {
    message: "Style must be at least 2 characters.",
  }),
  occasion: z.string().min(2, {
    message: "Occasion must be at least 2 characters.",
  }),
});

export function SuggestNailArtDesignForm() {
  const [designSuggestion, setDesignSuggestion] = useState<{
    designSuggestion: string;
    imageUrl: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      color: "",
      style: "",
      occasion: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    setDesignSuggestion(null); // Clear previous suggestion
    try {
      const result = await suggestNailArtDesign(values);
      console.log("AI Response:", result); // <-- Added console.log here
      setDesignSuggestion(result);
    } catch (err) {
      console.error("Error suggesting nail art design:", err);
      setError(err instanceof Error ? err.message : "An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Pastel Pink" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="style"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Style</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Minimalist, Floral" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="occasion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Occasion</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Wedding, Casual" {...field} disabled={isLoading} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Suggesting..." : "Suggest Design"}
          </Button>
        </form>
      </Form>

      {error && (
         <Alert variant="destructive" className="mt-6">
           <Terminal className="h-4 w-4" />
           <AlertTitle>Error</AlertTitle>
           <AlertDescription>{error}</AlertDescription>
         </Alert>
      )}

      {designSuggestion && (
        <Card className="mt-6">
          <CardContent className="pt-6 space-y-2"> {/* Added pt-6 for padding */}
            <h3 className="text-lg font-semibold">Suggested Design</h3>
            <p className="text-muted-foreground">
              {designSuggestion.designSuggestion}
            </p>
            {designSuggestion.imageUrl && (
              <img
                src={designSuggestion.imageUrl}
                alt="Suggested Nail Art Design"
                className="rounded-md mt-4" // Added margin-top
              />
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
}
