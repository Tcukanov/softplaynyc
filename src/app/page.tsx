import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { InstagramSection } from "@/components/InstagramSection";

export const metadata: Metadata = {
  title: "Soft Play Rentals NYC & NJ | Ball Pit, Bounce House & More",
  description: "Rent premium soft play equipment in NYC and NJ. Ball pits, bounce houses, and soft play sets for birthday parties and corporate events. Book today!",
  alternates: { canonical: "/" },
  openGraph: { url: "https://softplaynyc.com/" },
};

const services = [
  { title: "Ball Pit Rentals", img: "/assets/images/img-585496fe.avif", href: "/ball-pit", desc: "Luxury ball pits for parties from $299. Delivery and setup included.", price: "from $299" },
  { title: "Bounce House Rentals", img: "/assets/images/img-1af35a9f.avif", href: "/bounce-house", desc: "Modern, beautiful bounce houses safe for kids. Starting from $199.", price: "from $199" },
  { title: "Soft Play Sets", img: "/assets/images/img-66c4a0de.avif", href: "/soft-play", desc: "Premium soft play sets for toddlers — colorful, safe, fun.", price: "Premium sets" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="NYC & NJ Premium Party Rentals"
        title="Soft Play Rentals for Unforgettable Parties"
        description="Ball pits, bounce houses, and soft play sets for kids' birthday parties, baby showers, and corporate events across New York and New Jersey."
        ctaText="Get Your Quote"
      />

      {/* Services grid */}
      <section className="py-20">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="h-section mb-4">Our Rentals</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">Choose from our premium selection of party rentals, perfect for any event.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group block rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition">
                <div className="aspect-[4/3] relative bg-gray-100">
                  <Image src={s.img} alt={s.title} fill className="object-cover group-hover:scale-105 transition" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-700 mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-brand-deep font-semibold">{s.price}</span>
                    <span className="text-brand-pink group-hover:translate-x-1 transition">Learn more →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-gray-50 py-20">
        <div className="container-pad">
          <div className="text-center mb-12">
            <h2 className="h-section mb-4">Why Choose Us</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: "🚚", title: "Delivery & Setup Included", desc: "We handle everything — delivery, setup, and pickup. You enjoy the party." },
              { icon: "✨", title: "Pristine, Sanitized Equipment", desc: "Every piece is thoroughly cleaned and sanitized before each event." },
              { icon: "🎉", title: "NYC & NJ Service Area", desc: "Serving Manhattan, Brooklyn, Bronx, Long Island, and all of New Jersey." },
            ].map((b) => (
              <div key={b.title} className="bg-white p-8 rounded-2xl text-center">
                <div className="text-5xl mb-4">{b.icon}</div>
                <h3 className="text-xl font-bold mb-3">{b.title}</h3>
                <p className="text-gray-700">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-deep text-white" style={{ background: "#01416d" }}>
        <div className="container-pad text-center">
          <h2 className="h-section text-white mb-4">Ready to Book Your Party?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">Get in touch and we'll create the perfect rental package for your event.</p>
          <Link href="/book-now" className="btn-pink">Check Availability</Link>
        </div>
      </section>

      <InstagramSection />
    </>
  );
}
