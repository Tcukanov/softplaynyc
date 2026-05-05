import type { Metadata } from "next";
import { HoneyBookForm } from "@/components/HoneyBookForm";

export const metadata: Metadata = {
  title: "Contact Soft Play Rentals NYC & NJ | (929) 290-9469",
  description: "Get in touch with Soft Play Rentals. Call (929) 290-9469 or send a message for ball pit, bounce house, and soft play rentals in NYC and NJ.",
  alternates: { canonical: "/contact" },
  openGraph: { url: "https://softplaynyc.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 bg-gradient-to-br from-blue-50 to-pink-50">
        <div className="container-pad">
          <h1 className="h-display mb-6 text-center">Get in Touch</h1>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <p className="font-semibold">📧 Email</p>
              <a href="mailto:info@softplaynyc.com" className="text-brand-deep hover:underline">info@softplaynyc.com</a>
            </div>
            <div>
              <p className="font-semibold">📞 Phone</p>
              <a href="tel:+19292909469" className="text-brand-deep hover:underline">(929) 290-9469</a>
            </div>
            <div>
              <p className="font-semibold">🕐 Hours</p>
              <p className="text-gray-700">Mon-Sun 9am-6pm</p>
            </div>
            <div>
              <p className="font-semibold">📍 Address</p>
              <p className="text-gray-700">32 Union Square East, New York, NY 10003</p>
            </div>
          </div>
        </div>
      </section>
      <HoneyBookForm heading="Contact Us" subheading="Send us a message and we'll get back to you shortly." />
    </>
  );
}
