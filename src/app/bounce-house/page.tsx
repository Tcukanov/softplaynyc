import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Bounce House Rental NYC & NJ | Modern Bounce Houses from $199",
  description: "Rent a modern bounce house in NYC or NJ from $199. Beautiful, safe bounce houses for birthday parties and events. Delivery and setup included.",
  alternates: { canonical: "/bounce-house" },
  openGraph: { url: "https://softplaynyc.com/bounce-house" },
};

export default function BounceHousePage() {
  return (
    <ProductPage
      title="Bounce House Rental"
      tagline="NYC & NJ Modern Bounce Houses"
      description="Modern, beautiful, and safe bounce houses for birthday parties and family events. Built with high-quality materials and inspected before every event."
      startingPrice="from $199"
      heroImage="/assets/images/img-1af35a9f.avif"
      features={[
        { icon: "🏰", title: "Modern Designs", desc: "Beautiful aesthetics that look great in photos. No tacky cartoon prints." },
        { icon: "🛡️", title: "Safety First", desc: "Inspected and sanitized before every event. Safe materials throughout." },
        { icon: "🚚", title: "Delivery & Setup", desc: "Full delivery, setup, and pickup included. You handle the celebration." },
      ]}
      galleryImages={[
        "/assets/images/img-1af35a9f.avif",
        "/assets/images/img-19ded5e0.avif",
        "/assets/images/img-29dbc2a0.avif",
        "/assets/images/img-3156ea63.avif",
        "/assets/images/img-296d0913.avif",
        "/assets/images/img-6171f368.avif",
      ]}
    />
  );
}
