import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Rental Packages & Pricing | Soft Play Rentals NYC & NJ",
  description: "Explore soft play rental packages starting at $199. Ball pits, soft play sets, and bounce houses for NYC and NJ events. Packages to fit every budget.",
  alternates: { canonical: "/packages" },
  openGraph: { url: "https://softplaynyc.com/packages" },
};

const packages = [
  {
    name: "Ball Pit",
    price: "$299",
    image: "/assets/images/img-585496fe.avif",
    desc: "Luxury ball pits can be rented on their own or added to any bounce house rental.",
    href: "/ball-pit",
  },
  {
    name: "Soft Play",
    price: "$399",
    image: "/assets/images/img-66c4a0de.avif",
    desc: "Elevate the play experience of your next event with one of our luxury Soft Play areas.",
    href: "/soft-play",
  },
  {
    name: "Bounce House",
    price: "$199",
    image: "/assets/images/img-1af35a9f.avif",
    desc: "Modern beautiful bounce houses to match the aesthetic of any event!",
    href: "/bounce-house",
  },
];

export default function PackagesPage() {
  return (
    <>
      <section className="py-16">
        <div className="container-pad">
          <h1 className="h-display text-center mb-12">PACKAGES</h1>
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className="flex flex-col">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden mb-5 bg-gray-100">
                  <Image src={p.image} alt={p.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <p className="text-xl font-bold mb-2">STARTS AT {p.price}</p>
                <p className="text-gray-700 mb-5 flex-1">{p.desc}</p>
                <Link href={p.href} className="btn-primary self-start">{p.name.toUpperCase()}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
