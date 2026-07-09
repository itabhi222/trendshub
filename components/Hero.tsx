 "use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Globe,
  Smartphone,
  Bot,
  ArrowRight,
} from "lucide-react";

export default function Hero() {
  const handleTelegramClick = () => {
    const footerSection = document.getElementById("telegram");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      className="relative overflow-hidden pt-36 pb-32"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-violet-700/20 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[140px]" />

      </div>

      <div className="container">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">

              <Sparkles size={16} />

              Trending Daily

            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight lg:text-7xl">

              Discover

              <span className="block bg-gradient-to-r from-violet-500 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">

                Trending Apps

              </span>

              Websites & AI Tools

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">

              Explore the internet's best AI tools,
              hidden Android apps and useful websites
              updated every day.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <a
                href="#websites"
                className="rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-blue-600 px-8 py-4 font-semibold text-white shadow-[0_0_25px_rgba(139,92,246,0.35)] transition duration-300 hover:scale-105 animate-pulse"
              >
                Explore
              </a>

              <button
                type="button"
                onClick={handleTelegramClick}
                className="flex items-center gap-2 rounded-full border border-violet-400/30 bg-white/5 px-8 py-4 font-semibold text-violet-200 shadow-[0_0_20px_rgba(167,139,250,0.2)] transition duration-300 hover:scale-105 hover:bg-violet-500/10 animate-pulse"
              >
                Telegram

                <ArrowRight size={18} />

              </button>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .8 }}
          >

            <div className="grid grid-cols-2 gap-6">

              <Card
                icon={<Bot size={34} />}
                title="AI Tools"
                desc="Latest AI discoveries"
              />

              <Card
                icon={<Smartphone size={34} />}
                title="Android Apps"
                desc="Hidden powerful apps"
              />

              <Card
                icon={<Globe size={34} />}
                title="Useful Websites"
                desc="Trending websites"
              />

              <Card
                icon={<Sparkles size={34} />}
                title="Daily Updates"
                desc="Fresh content everyday"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

function Card({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
    >

      <div className="text-violet-400">

        {icon}

      </div>

      <h3 className="mt-5 text-2xl font-bold">

        {title}

      </h3>

      <p className="mt-3 text-gray-400">

        {desc}

      </p>

    </motion.div>
  );
}