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
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h1 className="h-display mb-6">Get in Touch</h1>
              <p className="text-lg mb-8 text-gray-700">Questions about our rentals? We're happy to help. Reach out by phone, email, or fill out the form below.</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@softplaynyc.com" className="text-brand-deep hover:underline">info@softplaynyc.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+19292909469" className="text-brand-deep hover:underline">(929) 290-9469</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🕐</span>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-700">Mon-Sun 9am-6pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-700">32 Union Square East,<br/>New York, NY 10003</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-md flex flex-col justify-center">
              <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
              <p className="mb-6 text-gray-700">Fill out the form and we'll respond within 24 hours.</p>
              <p className="text-brand-deep">↓ Form below ↓</p>
            </div>
          </div>
        </div>
      </section>
      <HoneyBookForm heading="Contact Us" subheading="Send us a message and we'll get back to you shortly." />
    </>
  );
}
