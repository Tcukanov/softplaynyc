import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ – Soft Play Rentals NYC & NJ | Common Questions Answered",
  description: "Have questions about our soft play rentals? Find answers about delivery, setup, pricing, and packages for NYC and NJ events.",
  alternates: { canonical: "/faq" },
  openGraph: { url: "https://softplaynyc.com/faq" },
};

const faqs = [
  { q: "What areas do you serve?", a: "We deliver and set up across all five boroughs of NYC (Manhattan, Brooklyn, Bronx, Queens, Staten Island), Long Island, and most of New Jersey including Bergen, Essex, Hudson, Morris, Passaic, Sussex, Union, and Warren counties." },
  { q: "Do you deliver and set up?", a: "Yes! Delivery, setup, and pickup are included in every rental. You don't lift a finger — we handle everything." },
  { q: "How much does it cost?", a: "Bounce houses start at $199, ball pits at $299, and full soft play packages from $399. We have packages to fit every budget. Contact us for a custom quote." },
  { q: "How far in advance should I book?", a: "We recommend booking 2-4 weeks in advance, especially for weekends and peak seasons (spring/summer). Last-minute bookings are sometimes available — just ask!" },
  { q: "Are your rentals safe and clean?", a: "Absolutely. Every piece of equipment is thoroughly cleaned and sanitized between rentals. Our soft play sets are made from high-quality, safe materials suitable for toddlers and young children." },
  { q: "What ages are soft play sets for?", a: "Our soft play sets are designed for toddlers and kids aged 1-7. They're perfect for first birthdays, baby showers, and young children's parties." },
  { q: "Do you require a deposit?", a: "Yes, a refundable deposit is required to secure your booking. Details are provided when you request a quote." },
  { q: "Can rentals be used outdoors?", a: "Yes, weather permitting. We recommend a backup indoor location in case of rain. Setup must be on a flat, dry surface." },
];

export default function FAQPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-pink-50">
        <div className="container-pad text-center">
          <h1 className="h-display mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Got questions? We've got answers. Here are the most common ones.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-pad max-w-3xl">
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <summary className="cursor-pointer list-none p-6 font-semibold flex items-center justify-between hover:bg-gray-50 transition">
                  <span>{f.q}</span>
                  <span className="text-brand-deep text-2xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">{f.a}</div>
              </details>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="mb-6 text-gray-700">Still have questions?</p>
            <Link href="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
    </>
  );
}
