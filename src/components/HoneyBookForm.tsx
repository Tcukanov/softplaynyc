"use client";
import { useEffect } from "react";

export function HoneyBookForm({ heading = "Request a Quote", subheading = "Fill out the form below and we'll get back to you within 24 hours." }) {
  useEffect(() => {
    // Remove any existing HoneyBook script so it re-scans the DOM on every mount
    const existing = document.getElementById("hb-loader-script");
    if (existing) existing.remove();

    // @ts-ignore
    window._HB_ = { pid: "66ecfa7460fe58002c3ab66d" };

    const script = document.createElement("script");
    script.id = "hb-loader-script";
    script.async = true;
    script.src = "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js";
    document.body.appendChild(script);
  }, []);
  return (
    <section className="py-16 px-5 bg-white text-center">
      <div className="container-pad">
        <h2 className="h-section mb-2">{heading}</h2>
        <p className="text-base text-gray-700 mb-8">{subheading}</p>
        <div className="hb-embed mx-auto max-w-3xl">
          <div className="hb-p-66ecfa7460fe58002c3ab66d-1" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: "none" }} src="https://www.honeybook.com/p.png?pid=66ecfa7460fe58002c3ab66d" alt="" />
        </div>
      </div>
    </section>
  );
}
