import Link from "next/link";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  bgImage?: string;
  bgColor?: string;
}

export function Hero({ eyebrow, title, description, ctaText = "Check Availability", ctaHref = "/book-now", bgImage, bgColor = "#fff5f7" }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={bgImage ? { backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" } : { background: bgColor }}
    >
      <div className="container-pad py-20 md:py-32">
        <div className="max-w-3xl">
          {eyebrow && <p className={`text-sm font-semibold mb-4 uppercase tracking-wider ${bgImage ? "text-white" : "text-brand-deep"}`}>{eyebrow}</p>}
          <h1 className={`h-display mb-6 ${bgImage ? "text-white" : ""}`}>{title}</h1>
          <p className={`text-lg md:text-xl mb-8 ${bgImage ? "text-white/90" : "text-gray-700"}`}>{description}</p>
          <Link href={ctaHref} className="btn-primary">{ctaText}</Link>
        </div>
      </div>
    </section>
  );
}
