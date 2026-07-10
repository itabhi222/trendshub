"use client";

import { useEffect, useState } from "react";

export default function OpenInBrowserPopup() {
  const [show, setShow] = useState(false);

  const openInDefaultBrowser = (url: string) => {
    const ua = navigator.userAgent || "";
    
    if (ua.includes("Android")) {
      // Android: try multiple approaches
      try {
        // Method 1: Direct window.open - works on most Android browsers
        window.open(url, "_system");
      } catch (e) {
        try {
          // Method 2: intent:// scheme for Chrome specifically
          const intentUrl = `intent:${url}#Intent;scheme=https;package=com.android.chrome;end`;
          window.location.href = intentUrl;
        } catch (e2) {
          // Method 3: Fallback - simple window.location
          window.location.href = url;
        }
      }
    } else if (ua.includes("iPhone") || ua.includes("iPad")) {
      // iOS: window.open with _system target
      window.open(url, "_system");
    } else {
      // Desktop or other
      window.location.href = url;
    }
  };

  useEffect(() => {
    const ua = navigator.userAgent || "";

    const isInApp =
      ua.includes("FBAN") ||
      ua.includes("FBAV") ||
      ua.includes("Instagram");

    if (isInApp) {
      setShow(true);

      // Intercept all external links to open in default browser
      const handleLinkClick = (e: MouseEvent) => {
        const link = (e.target as HTMLElement).closest("a") as HTMLAnchorElement;
        if (!link) return;

        const href = link.getAttribute("href");
        if (!href || !href.startsWith("http")) return;

        e.preventDefault();
        openInDefaultBrowser(href);
      };

      document.addEventListener("click", handleLinkClick, true);
      return () => document.removeEventListener("click", handleLinkClick, true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-5">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111827] p-8 text-center shadow-2xl">
        <h2 className="text-2xl font-bold text-white">
          Better Experience
        </h2>

        <p className="mt-4 text-gray-300 leading-7">
          You're viewing this website inside the Facebook/Instagram browser.
          <br />
          For the best experience, please open it in your device's default browser.
        </p>

        <div className="mt-8 space-y-4">
          <button
            onClick={() => openInDefaultBrowser(window.location.href)}
            className="w-full rounded-full bg-gradient-to-r from-violet-600 to-blue-600 py-3 font-semibold text-white hover:from-violet-500 hover:to-blue-500 transition-all shadow-lg hover:shadow-xl hover:shadow-violet-500/50"
          >
            Open in Browser
          </button>

          <button
            onClick={() => setShow(false)}
            className="w-full rounded-full border-2 border-violet-500/30 bg-violet-500/10 py-3 font-semibold text-violet-200 hover:bg-violet-500/20 hover:border-violet-500/50 transition-all"
          >
            Continue Here
          </button>

          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-200">
            <b>How to open:</b>
            <br />
            Tap <b>⋮</b> or <b>•••</b> in the top-right corner, then choose
            <b> "Open in browser"</b>.
          </div>
        </div>
      </div>
    </div>
  );
}