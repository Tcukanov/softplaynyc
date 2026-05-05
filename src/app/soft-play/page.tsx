import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Soft Play Rental NYC & NJ | Premium Soft Play Sets for Kids",
  description: "Rent premium soft play equipment in NYC and NJ. Safe, colorful sets for toddlers and kids at birthday parties and baby showers.",
  alternates: { canonical: "/soft-play" },
  openGraph: { url: "https://softplaynyc.com/soft-play" },
};

type Product = { name: string; image: string; bullets: string[]; price: string };
type Section = { heading: string; products: Product[] };

const sections: Section[] = [
  {
    heading: "SMALL SIZE SETS",
    products: [
      {
        name: "PINK SET",
        image: "/assets/images/sp-pink.png",
        bullets: [
          "8x8",
          "White ball pit (4x4 ft) OR (6x6 ft)",
          "900 White Anti-bacterial balls",
          "Off white foam mats",
          "White fence (optional)",
          "Climb, or tunnel",
          "2 bouncy hoppers",
          "Soft foam blocks",
          "Slide",
          "4 Hours of Rental",
        ],
        price: "$399",
      },
      {
        name: "BLUE/GREEN SET",
        image: "/assets/images/sp-blue-green.jpg",
        bullets: [
          "8x8",
          "White ball pit (4x4 ft) OR (6x6 ft)",
          "900 White Anti-bacterial balls",
          "Off white foam mats",
          "White fence (optional)",
          "Climb, or tunnel",
          "2 Dino hoppers",
          "Soft foam blocks",
          "Extra slide",
          "4 Hours of Rental",
        ],
        price: "$399",
      },
      {
        name: "WHITE/GREY SET",
        image: "/assets/images/sp-white-grey.png",
        bullets: [
          "8x8",
          "White ball pit (4x4 ft)",
          "600 White Anti-bacterial balls",
          "Off white foam mats",
          "White fence (optional)",
          "Climber & Slide",
          "2 bounce hoppers",
          "Soft foam blocks",
          "Slide (optional)",
          "Banana",
          "4 Hours of Rental",
        ],
        price: "$399",
      },
    ],
  },
  {
    heading: "MEDIUM SIZE SETS",
    products: [
      {
        name: "PINK SET",
        image: "/assets/images/sp-medium.jpg",
        bullets: [
          "13x13",
          "White ball pit (6x6ft)",
          "1,200 White Anti-bacterial balls",
          "Off white foam mats",
          "White fence (optional)",
          "Climb, or tunnel",
          "2 Bouncy hoppers",
          "Soft foam blocks",
          "Extra slide",
          "4 Hours of Rental",
        ],
        price: "$599",
      },
      {
        name: "BLUE SET",
        image: "/assets/images/img-2731f729.avif",
        bullets: [
          "13x13",
          "White ball pit (6x6ft)",
          "1,200 White Anti-bacterial balls",
          "Blue/White foam mats",
          "White fence (optional)",
          "Climb and tunnel",
          "2 Bouncy hoppers",
          "Soft foam blocks",
          "Slide into Ball pit",
          "4 Hours of Rental",
        ],
        price: "$599",
      },
      {
        name: "BROWN/BEIGE SET",
        image: "/assets/images/img-cffb746e.avif",
        bullets: [
          "13x13",
          "White ball pit (6x6ft)",
          "1,300 White Anti-bacterial balls",
          "Off white foam mats",
          "White fence (optional)",
          "Climb, or tunnel",
          "2 Bouncy hoppers",
          "Soft foam blocks",
          "Extra slide",
          "4 Hours of Rental",
        ],
        price: "$599",
      },
      {
        name: "WHITE",
        image: "/assets/images/img-846c9359.avif",
        bullets: [
          "13x13",
          "White ball pit (6x6ft)",
          "1,300 White Anti-bacterial balls",
          "Off white foam mats",
          "White fence (optional)",
          "Climb and tunnel",
          "2 Bouncy hoppers",
          "Soft foam blocks",
          "4 Hours of Rental",
        ],
        price: "$699",
      },
    ],
  },
  {
    heading: "LARGE SIZE DELUXE SETS",
    products: [
      {
        name: "PINK SET",
        image: "/assets/images/sp-large-pink.jpg",
        bullets: [
          "17x17",
          "Pink Flower ball pit (8x8ft)",
          "2,500 White Anti-bacterial balls",
          "White foam mats",
          "White-pink fence (optional)",
          "Big Climb or slide balance",
          "2 Bouncy hoppers",
          "Wooden white slide",
          "Kingdom climber",
          "Rainbow",
          "2 six-set flower",
          "Up to 4 hours of fun",
          "Bounce House (optional)",
        ],
        price: "$999",
      },
      {
        name: "WHITE SET",
        image: "/assets/images/sp-large-white.webp",
        bullets: [
          "17x17",
          "White ball pit (6x6ft)",
          "1,500 White Anti-bacterial balls",
          "White foam mats",
          "White fence (optional)",
          "Big Climb or slide balance",
          "Slide climber",
          "1 Car",
          "2 Bananas",
          "Soft foam blocks",
          "Wooden white slide",
          "Up to 4 hours of fun",
          "Foam toy mushroom",
          "Bounce House (optional)",
        ],
        price: "$999",
      },
    ],
  },
];

export default function SoftPlayPage() {
  let globalIndex = 0;
  return (
    <section className="py-16">
      <div className="container-pad">
        <h1 className="h-display text-center mb-16">SOFT PLAY RENTALS</h1>
        {sections.map((sec) => (
          <div key={sec.heading} className="mb-20">
            <h2 className="h-section text-center mb-12">{sec.heading}</h2>
            <div className="space-y-20">
              {sec.products.map((p) => {
                const idx = globalIndex++;
                return (
                  <div key={p.name} className={`grid md:grid-cols-2 gap-10 items-center ${idx % 2 === 1 ? "md:[direction:rtl]" : ""}`}>
                    <div className={idx % 2 === 1 ? "[direction:ltr]" : ""}>
                      <Image src={p.image} alt={p.name} width={606} height={496} className="rounded-xl w-full object-cover" />
                    </div>
                    <div className={idx % 2 === 1 ? "[direction:ltr]" : ""}>
                      <h3 className="text-2xl font-bold mb-4 text-brand-deep">{p.name}</h3>
                      <ul className="space-y-2 mb-5">
                        {p.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-gray-700">
                            <span className="text-brand-pink mt-1 shrink-0">•</span>{b}
                          </li>
                        ))}
                      </ul>
                      <p className="font-bold text-lg mb-1">Price {p.price}</p>
                      <p className="text-sm text-gray-500 mb-5">*Delivery fee may apply</p>
                      <Link href="/book-now" className="btn-primary">Book Now</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
