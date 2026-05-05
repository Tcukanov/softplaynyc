import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ball Pit Rental NYC & NJ | Luxury Ball Pits from $299",
  description: "Rent a luxury ball pit in NYC or NJ from $299. Perfect for birthday parties, baby showers, and corporate events. Delivery and setup included.",
  alternates: { canonical: "/ball-pit" },
  openGraph: { url: "https://softplaynyc.com/ball-pit" },
};

const products = [
  {
    name: "WHITE BALL PIT 5'X5'",
    image: "/assets/images/bp-white-5x5.webp",
    bullets: [
      "1 ~5x5ft and 19 inches deep White Ball Pit",
      "1,500 balls (base colors: white, translucent, and pearl) / Add up to 4 accent colors of your choice",
      "1 Large plastic slide",
      "Foam mats required when setting up on pavement",
    ],
    price: "$349",
  },
  {
    name: "9'X9' WHITE BALL PIT",
    image: "/assets/images/bp-white-9x9.webp",
    bullets: [
      "9x9ft and 19 inches deep White Ball Pit",
      "2,500 balls (base colors: white, translucent) / Add up to 4 accent colors of your choice",
      "1 Wooden white slide",
      "Foam mats required when setting up on pavement",
    ],
    price: "$499",
  },
  {
    name: "FLOWER BALL PIT WITH BASE AND LONG SLIDE 7'X7'",
    image: "/assets/images/bp-flower.jpg",
    bullets: [
      "Flower Ball Pit filled with over 2,500 White + Pink Balls",
      "Soft Foam Mats (Optionally)",
      "Shallow which makes it easy for the smallest guests to climb out of, but still fun for all Ages!",
      "Up to 5 hours of rental",
    ],
    price: "$699",
  },
  {
    name: "WHITE/BEIGE BALL PIT WITH BASE AND LONG SLIDE 9'X9'",
    image: "/assets/images/bp-beige.jpg",
    bullets: [
      "Square Ball Pit filled with over 2,500 pit balls",
      "Soft Foam Mats",
      "Shallow which makes it easy for the smallest guests to climb out of, but still fun for all Ages!",
      "Up to 6 hours of rental",
    ],
    price: "$799",
  },
  {
    name: "WHITE ROUNDED BALL PIT WITH BASE AND LONG SLIDE WITH ARCH 10'X10'",
    image: "/assets/images/img-3fd93010.avif",
    bullets: [
      "Rounded Ball Pit filled with over 4,500 Ball pit balls",
      "Soft Foam Mats",
      "Shallow which makes it easy for the smallest guests to climb out of, but still fun for all Ages!",
      "Up to 6 hours of rental",
    ],
    price: "$1,099",
  },
];

export default function BallPitPage() {
  return (
    <section className="py-16">
      <div className="container-pad">
        <h1 className="h-display text-center mb-16">BALL PIT RENTALS</h1>
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
                <p className="font-bold text-lg mb-1">Price {p.price}</p>
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
