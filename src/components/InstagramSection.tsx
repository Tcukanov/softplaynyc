"use client";
import { useEffect } from "react";

export function InstagramSection() {
  useEffect(() => {
    if (document.getElementById("ig-embed-script")) return;
    const s = document.createElement("script");
    s.id = "ig-embed-script";
    s.async = true;
    s.src = "https://www.instagram.com/embed.js";
    document.body.appendChild(s);
  }, []);
  return (
    <section className="bg-white py-16 px-5 text-center">
      <div className="container-pad">
        <h2 className="h-section mb-2">Follow Us on Instagram</h2>
        <a
          href="https://www.instagram.com/softplayrentalnyc"
          target="_blank"
          rel="noopener"
          className="inline-block mb-8 text-brand-ig font-semibold hover:opacity-80"
          style={{ color: "#c13584" }}
        >
          @softplayrentalnyc
        </a>
        <div className="flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/p/DLh4K1hRb_W/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#fff",
              border: 0,
              borderRadius: 3,
              boxShadow: "0 0 1px 0 rgba(0,0,0,.5),0 1px 10px 0 rgba(0,0,0,.15)",
              maxWidth: 540,
              minWidth: 326,
              padding: 0,
              width: "calc(100% - 2px)",
            }}
          >
            <a
              href="https://www.instagram.com/p/DLh4K1hRb_W/?utm_source=ig_embed&utm_campaign=loading"
              target="_blank"
              rel="noopener"
              style={{
                color: "#c9c8cd",
                fontFamily: "Arial, sans-serif",
                fontSize: 14,
                textAlign: "center",
                textDecoration: "none",
                width: "100%",
                display: "block",
                padding: "16px 0",
              }}
            >
              View this post on Instagram
            </a>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
