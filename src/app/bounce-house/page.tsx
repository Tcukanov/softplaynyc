import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bounce House Rental NYC & NJ | Modern Bounce Houses from $199",
  description: "Rent a modern bounce house in NYC or NJ from $199. Beautiful, safe bounce houses for birthday parties and events. Delivery and setup included.",
  alternates: { canonical: "/bounce-house" },
  openGraph: { url: "https://softplaynyc.com/bounce-house" },
};

const products = [
  {
    name: "PINK/BLUE SMALL",
    image: "/assets/images/bh-pink-small.webp",
    bullets: [
      "9 x 9 x 9.5 ft",
      "Includes: Up to 6 hours rental, 1 Blower, 1 Tarp, 1 extension cord (if needed), and 1 rules sign",
      "Max weight 150 lbs or 4-5 toddlers at a time",
      "Recommended for ages 1-4 years old",
      "Toddlers must be supervised by an adult at all times",
    ],
    price: "$250",
  },
  {
    name: "WHITE",
    image: "/assets/images/bh-white.jpg",
    bullets: [
      "Bounce House for Kids",
    ],
    price: null,
  },
  {
    name: "WHITE MEDIUM SIZE",
    image: "/assets/images/bh-white-medium.webp",
    bullets: [
      "13 x 13 x 13 ft",
      "Includes: Up to 6 hours rental, 1 Blower, 1 Tarp, 1 extension cord (if needed), and 1 rules sign",
      "Max weight 200 lbs or 4-5 children at a time",
      "Recommended for ages 3-8 years old",
      "Children must be supervised by an adult at all times",
    ],
    price: "$299",
  },
  {
    name: "BUBBLE HOUSE",
    image: "/assets/images/bh-bubble.jpg",
    bullets: [
      "10ft",
    ],
    price: null,
  },
];

export default function BounceHousePage() {
  return (
    <section className="py-16">
      <div className="container-pad">
        <h1 className="h-display text-center mb-16">BOUNCE HOUSE RENTALS</h1>
        <div className="space-y-20">
          {products.map((p, i) => (
            <div key={p.name} className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
              <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                <Image src={p.image} alt={p.name} width={606} height={496} className="rounded-xl w-full object-cover" />
              </div>
              <div className={i % 2 === 1 ? "[direction:ltr]" : ""}>
                <h2 className="text-2xl font-bold mb-4 text-brand-deep">{p.name}</h2>
                <ul className="space-y-2 mb-5">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-gray-700">
                      <span className="text-brand-pink mt-1 shrink-0">•</span>{b}
                    </li>
                  ))}
                </ul>
                {p.price && <p className="font-bold text-lg mb-1">Price {p.price}</p>}
                <p className="text-sm text-gray-500 mb-5">*Delivery fee may apply</p>
                <Link href="/book-now" className="btn-primary">Book Now</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
