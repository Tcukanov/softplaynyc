import Link from "next/link";
import Image from "next/image";

interface ProductPageProps {
  title: string;
  tagline: string;
  description: string;
  startingPrice: string;
  heroImage: string;
  features: { icon: string; title: string; desc: string }[];
  galleryImages: string[];
}

export function ProductPage({ title, tagline, description, startingPrice, heroImage, features, galleryImages }: ProductPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-50 to-yellow-50">
        <div className="container-pad py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-pink mb-3">{tagline}</p>
              <h1 className="h-display mb-6">{title}</h1>
              <p className="text-lg text-gray-700 mb-6">{description}</p>
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-8">
                <span className="text-4xl font-bold text-brand-deep">{startingPrice}</span>
                <span className="text-gray-700">delivery & setup included</span>
              </div>
              <Link href="/book-now" className="btn-primary">Check Availability</Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image src={heroImage} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container-pad">
          <h2 className="h-section text-center mb-12">What's Included</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="text-center">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-700">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-pad">
            <h2 className="h-section text-center mb-10">{title} in Action</h2>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
              {galleryImages.map((src, i) => (
                <div key={src} className="aspect-square relative overflow-hidden rounded-xl bg-gray-100">
                  <Image src={src} alt={`${title} event ${i + 1}`} fill className="object-cover hover:scale-105 transition" sizes="(max-width: 768px) 50vw, 33vw" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-brand-deep text-white" style={{ background: "#01416d" }}>
        <div className="container-pad text-center">
          <h2 className="h-section text-white mb-4">Ready to Book Your {title}?</h2>
          <p className="text-lg text-white/90 mb-8">Get in touch and we'll prepare a custom quote for your event.</p>
          <Link href="/book-now" className="btn-pink">Check Availability</Link>
        </div>
      </section>
    </>
  );
}
