import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingWebsites from "@/components/TrendingWebsites";
import AndroidApps from "@/components/AndroidApps";
import AITools from "@/components/AITools";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import BannerAd from "@/components/BannerAd";
import OpenInBrowserPopup from "@/components/OpenInBrowserPopup";

export default function Home() {
  return (
    <>
      <OpenInBrowserPopup />
      <Navbar />

      <main className="pb-24">
        <div className="mb-32">
          <Hero />
        </div>

        {/* Banner after Hero */}
        <div className="mb-20">
          <BannerAd />
        </div>

        <div className="mb-32">
          <TrendingWebsites />
        </div>

        {/* Banner */}
        <div className="mb-20">
          <BannerAd />
        </div>

        <div className="mb-32">
          <AndroidApps />
        </div>

        {/* Banner */}
        <div className="mb-20">
          <BannerAd />
        </div>

        

        <div className="mb-32">
          <AITools />
        </div>

        <div className="mb-32">
          <AboutSection />
        </div>
      </main>

      <Footer />
    </>
  );
}