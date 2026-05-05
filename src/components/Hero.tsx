import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  sideImage?: string;
  bgColor?: string;
}

export function Hero({ eyebrow, title, description, ctaText = "Check Availability", ctaHref = "/book-now", sideImage, bgColor = "#fff5f7" }: HeroProps) {
  return (
    <section style={{ background: bgColor }} className="overflow-hidden">
      <div className="container-pad py-16 md:py-24">
        <div className={`grid gap-10 items-center ${sideImage ? "md:grid-cols-2" : ""}`}>
          <div>
            {eyebrow && <p className="text-sm font-semibold mb-4 uppercase tracking-wider text-brand-deep">{eyebrow}</p>}
            <h1 className="h-display mb-6">{title}</h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700">{description}</p>
            <Link href={ctaHref} className="btn-primary">{ctaText}</Link>
          </div>
          {sideImage && (
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image src={sideImage} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
