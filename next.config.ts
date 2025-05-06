import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Pastikan konfigurasi lain Anda tetap ada
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // Protokol yang digunakan (biasanya https)
        hostname: "images.ctfassets.net", // Hostname dari Contentful
        port: "", // Biarkan kosong jika tidak ada port spesifik
        pathname: "/**", // Izinkan path apa pun di bawah hostname ini
      },
      // Anda bisa menambahkan pattern lain di sini jika ada sumber gambar lain
      // Contoh:
      // {
      //   protocol: 'https',
      //   hostname: 'your-other-domain.com',
      // },
    ],
  },
};

export default nextConfig;
