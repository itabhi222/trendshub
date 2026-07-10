import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trendshub | Trending Apps, AI Tools & Websites",
  description:
    "Discover trending websites, hidden Android apps and AI tools every day.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="global-padding">
        {children}

        {/* Monetag Vignette */}
        <Script
          id="monetag-vignette"
          strategy="afterInteractive"
        >
          {`
            (function(s){
              s.dataset.zone='11260742';
              s.src='https://n6wxm.com/vignette.min.js';
            })(
              [document.documentElement, document.body]
                .filter(Boolean)
                .pop()
                .appendChild(document.createElement('script'))
            );
          `}
        </Script>

        

      </body>
    </html>
  );
}