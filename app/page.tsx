import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingWebsites from "@/components/TrendingWebsites";
import AndroidApps from "@/components/AndroidApps";
import AITools from "@/components/AITools";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="space-y-32 pb-24">
        <Hero />
        <TrendingWebsites />
        <AndroidApps />
        <AITools />
        <div className="mx-auto mt-12 h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </main>

      <Footer />
    </>
  );
}