import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-rubik", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://softplaynyc.com"),
  title: { default: "Soft Play Rentals NYC & NJ | Ball Pit, Bounce House & More", template: "%s" },
  description: "Rent premium soft play equipment in NYC and NJ. Ball pits, bounce houses, and soft play sets for birthday parties and corporate events. Book today!",
  openGraph: {
    type: "website",
    siteName: "Soft Play Rentals",
    images: ["/assets/images/logo.png"],
  },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/assets/images/logo.png", apple: "/assets/images/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={rubik.variable}>
      <body>
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Organization", "LocalBusiness"],
                name: "Soft Play Rentals",
                url: "https://softplaynyc.com",
                logo: "https://softplaynyc.com/assets/images/logo.png",
                telephone: "+1-929-290-9469",
                email: "info@softplaynyc.com",
                sameAs: [
                  "https://www.instagram.com/softplayrentalnyc",
                  "https://www.facebook.com/kidspartyentertainment.nyc",
                ],
              },
            ],
          })}
        </Script>
        <Script src="https://www.googletagmanager.com/gtm.js?id=GTM-NDHZTZWL" strategy="afterInteractive" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
