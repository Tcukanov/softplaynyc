"use client";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-12 bg-brand-rose text-white" style={{ background: "#c46780" }}>
      <div className="container-pad grid grid-cols-1 gap-10 py-16 md:grid-cols-4">
        <div>
          <Link href="/" className="inline-block mb-6">
            <Image src="/assets/images/logo.png" alt="Soft Play Rentals" width={80} height={80} className="h-16 w-auto" />
          </Link>
          <h3 className="text-xl font-bold text-white mb-4">Subscribe to our newsletter</h3>
          <form className="flex flex-col gap-3" action="#" method="post" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email address"
              className="rounded-lg px-4 py-3 text-brand-dark"
              aria-label="Email address"
            />
            <button type="submit" className="rounded-lg bg-brand-dark/40 px-6 py-3 text-white font-medium hover:bg-brand-dark/60 self-start">
              Submit
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Contacts</h3>
          <p className="mb-2"><a href="mailto:info@softplaynyc.com" className="hover:underline">info@softplaynyc.com</a></p>
          <p className="mb-6"><a href="tel:+19292909469" className="hover:underline">(929) 290-9469</a></p>
          <p>
            <Link href="/waiver" className="underline font-bold">Waiver</Link>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Socials</h3>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/kidspartyentertainment.nyc" target="_blank" rel="noopener" aria-label="Facebook" className="bg-white text-brand-rose w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12z"/></svg>
            </a>
            <a href="https://www.instagram.com/softplayrentalnyc" target="_blank" rel="noopener" aria-label="Instagram" className="bg-white text-brand-rose w-10 h-10 rounded-full flex items-center justify-center hover:opacity-90">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.4a4 4 0 1 1-7.9 1 4 4 0 0 1 7.9-1z"/><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-4">Areas We Serve:</h3>
          <p className="mb-3"><strong><em>NYC</em></strong>: Manhattan, Brooklyn, Bronx, Staten Island, Long Island</p>
          <p><strong><em>NJ</em></strong>: Bergen, Essex, Hudson, Morris, Passaic, Sussex, Union, and Warren</p>
        </div>
      </div>
      <div className="border-t border-white/30">
        <div className="container-pad py-4 text-sm text-white/90 text-center">
          &copy; {new Date().getFullYear()} Soft Play Rentals NYC &amp; NJ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
