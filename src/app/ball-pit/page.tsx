import type { Metadata } from "next";
import { ProductPage } from "@/components/ProductPage";

export const metadata: Metadata = {
  title: "Ball Pit Rental NYC & NJ | Luxury Ball Pits from $299",
  description: "Rent a luxury ball pit in NYC or NJ from $299. Perfect for birthday parties, baby showers, and corporate events. Delivery and setup included.",
  alternates: { canonical: "/ball-pit" },
  openGraph: { url: "https://softplaynyc.com/ball-pit" },
};

export default function BallPitPage() {
  return (
    <ProductPage
      title="Ball Pit Rental"
      tagline="NYC & NJ Luxury Ball Pits"
      description="Premium ball pits for birthday parties, baby showers, and special events. Hundreds of clean, sanitized balls in customizable color themes."
      startingPrice="from $299"
      heroImage="/assets/images/img-585496fe.avif"
      features={[
        { icon: "🎨", title: "Themed Color Options", desc: "Choose colors to match your party theme — pastels, brights, or custom mixes." },
        { icon: "✨", title: "Premium Quality", desc: "Top-quality construction with hundreds of clean, sanitized balls." },
        { icon: "🚚", title: "Delivery & Setup", desc: "We handle everything — you just enjoy the party. Setup takes ~30 minutes." },
      ]}
      galleryImages={[
        "/assets/images/img-585496fe.avif",
        "/assets/images/img-c248ea22.png",
        "/assets/images/img-66c4a0de.avif",
        "/assets/images/img-deea656a.avif",
        "/assets/images/img-37e14de8.avif",
        "/assets/images/img-3fd93010.avif",
      ]}
    />
  );
}
