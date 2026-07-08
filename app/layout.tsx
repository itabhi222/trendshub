import "./globals.css";

export const metadata = {
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
      <body>{children}</body>
    </html>
  );
}