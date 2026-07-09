import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingWebsites from "@/components/TrendingWebsites";
import AndroidApps from "@/components/AndroidApps";
import AITools from "@/components/AITools";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pb-24">

  <div className="mb-32">
    <Hero />
  </div>

  <div className="mb-32">
    <TrendingWebsites />
  </div>

  <div className="mb-32">
    <AndroidApps />
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