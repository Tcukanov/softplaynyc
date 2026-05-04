import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Soft Play Rental NYC & NJ | Premium Soft Play Sets for Kids",
  description: "Rent premium soft play equipment in NYC and NJ. Safe, colorful sets for toddlers and kids at birthday parties and baby showers.",
  alternates: { canonical: "/soft-play" },
  openGraph: { url: "https://softplaynyc.com/soft-play" },
};

export default function SoftPlayPage() {
  return (
    <ProductPage
      title="Soft Play Rental"
      tagline="NYC & NJ Premium Soft Play Sets"
      description="Premium soft play equipment for toddlers and young kids. Slides, climbers, tunnels, and ball pits — perfect for first birthdays, baby showers, and family events."
      startingPrice="from $399"
      heroImage="/assets/images/img-66c4a0de.avif"
      features={[
        { icon: "🧸", title: "Toddler Friendly", desc: "Designed for kids 1-7 years old. Soft materials, no sharp edges." },
        { icon: "🎨", title: "Colorful & Fun", desc: "Bright, modern designs that make every photo pop." },
        { icon: "🚚", title: "Delivery & Setup", desc: "Complete service — we set up and take everything down." },
      ]}
      galleryImages={[
        "/assets/images/img-66c4a0de.avif",
        "/assets/images/img-846c9359.avif",
        "/assets/images/img-2731f729.avif",
        "/assets/images/img-cffb746e.avif",
        "/assets/images/img-29dbc2a0.avif",
        "/assets/images/img-585496fe.avif",
      ]}
    />
  );
}
