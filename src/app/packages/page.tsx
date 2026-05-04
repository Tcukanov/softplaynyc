import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rental Packages & Pricing | Soft Play Rentals NYC & NJ",
  description: "Explore soft play rental packages starting at $199. Ball pits, soft play sets, and bounce houses for NYC and NJ events. Packages to fit every budget.",
  alternates: { canonical: "/packages" },
  openGraph: { url: "https://softplaynyc.com/packages" },
};

const packages = [
  {
    name: "Bounce House",
    price: 199,
    tagline: "Perfect for backyards & birthdays",
    features: ["Modern, beautiful bounce houses", "Setup & pickup included", "2-hour rental", "Sanitized between events"],
    cta: "Book Bounce House",
    color: "from-yellow-50 to-orange-50",
  },
  {
    name: "Luxury Ball Pit",
    price: 299,
    tagline: "Most popular for kids' parties",
    popular: true,
    features: ["Premium ball pit setup", "Themed color options", "Setup & pickup included", "Hundreds of clean balls"],
    cta: "Book Ball Pit",
    color: "from-pink-50 to-rose-50",
  },
  {
    name: "Full Soft Play",
    price: 399,
    tagline: "Complete soft play experience",
    features: ["Premium soft play set + ball pit", "Slides, climbers, tunnels", "Setup & pickup included", "Perfect for ages 1-5"],
    cta: "Book Soft Play",
    color: "from-blue-50 to-indigo-50",
  },
];

export default function PackagesPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="container-pad text-center">
          <h1 className="h-display mb-4">Our Packages</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Find the perfect rental package for your event. All packages include delivery, setup, and pickup.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-pad">
          <div className="grid gap-8 md:grid-cols-3">
            {packages.map((p) => (
              <div key={p.name} className={`relative bg-gradient-to-br ${p.color} rounded-2xl p-8 ${p.popular ? "ring-4 ring-brand-pink scale-105" : ""}`}>
                {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-pink text-white text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full">Most Popular</span>}
                <h3 className="text-2xl font-bold mb-1">{p.name}</h3>
                <p className="text-gray-700 mb-6">{p.tagline}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-brand-deep">${p.price}</span>
                  <span className="text-gray-700">/event</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="text-brand-pink mt-1">✓</span>
                      <span className="text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book-now" className="btn-primary w-full">{p.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-pad text-center">
          <h2 className="h-section mb-4">Custom Quote?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">Need something specific? We create custom packages for any event size and budget.</p>
          <Link href="/contact" className="btn-pink">Get Custom Quote</Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: packages.map((p, i) => ({
              "@type": "Product",
              position: i + 1,
              name: p.name,
              offers: { "@type": "Offer", price: p.price, priceCurrency: "USD" },
            })),
          }),
        }}
      />
    </>
  );
}
