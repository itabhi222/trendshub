"use client";

import Script from "next/script";

export default function BannerAd() {
  return (
    <Script id="monetag-banner" strategy="afterInteractive">
      {`
        (function(s){
          s.dataset.zone='11260737';
          s.src='https://nap5k.com/tag.min.js';
        })(
          [document.documentElement, document.body]
            .filter(Boolean)
            .pop()
            .appendChild(document.createElement('script'))
        );
      `}
    </Script>
  );
}