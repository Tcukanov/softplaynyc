import type { Metadata } from "next";
import { HoneyBookForm } from "@/components/HoneyBookForm";

export const metadata: Metadata = {
  title: "Book Soft Play Rentals NYC & NJ | Request a Quote Today",
  description: "Ready to book? Fill out our simple form to reserve soft play equipment in NYC or NJ. Ball pits, bounce houses, and soft play sets available.",
  alternates: { canonical: "/book-now" },
  openGraph: { url: "https://softplaynyc.com/book-now" },
};

export default function BookNowPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container-pad text-center">
          <h1 className="h-display mb-4">Book Your Soft Play Rental</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Fill out the form below and we'll get back to you within 24 hours with a custom quote for your event.</p>
        </div>
      </section>
      <HoneyBookForm heading="Request a Quote" subheading="Tell us about your event and we'll prepare a personalized quote." />
    </>
  );
}
