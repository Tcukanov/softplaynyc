import type { Metadata } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Gallery | Soft Play Rental Photos NYC & NJ",
  description: "Browse photos of our soft play rentals in action — ball pits, bounce houses, and soft play sets at real NYC and NJ events.",
  alternates: { canonical: "/gallery" },
  openGraph: { url: "https://softplaynyc.com/gallery" },
};

function getImages() {
  const dir = path.join(process.cwd(), "public", "assets", "images");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(avif|webp|jpg|jpeg|png)$/i.test(f) && f !== "logo.png" && !f.includes("(1)"))
    .map((f) => `/assets/images/${f}`);
}

export default function GalleryPage() {
  const images = getImages();
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-pink-50 to-yellow-50">
        <div className="container-pad text-center">
          <h1 className="h-display mb-4">Gallery</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Real events, real smiles. Browse photos of our soft play rentals at NYC and NJ events.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-pad">
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {images.map((src, i) => (
              <div key={src} className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                <Image src={src} alt={`Soft play rental event ${i + 1}`} fill className="object-cover hover:scale-105 transition" sizes="(max-width: 768px) 50vw, 25vw" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
