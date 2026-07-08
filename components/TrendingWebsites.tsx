"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ExternalLink,
  Star,
} from "lucide-react";

const websites = [
  {
    title: "Remove.bg",
    category: "AI",
    description: "Remove image backgrounds instantly.",
    url: "https://www.remove.bg",
  },
  {
    title: "Canva",
    category: "Design",
    description: "Create stunning graphics easily.",
    url: "https://www.canva.com",
  },
  {
    title: "TinyWow",
    category: "Tools",
    description: "100+ free online tools.",
    url: "https://tinywow.com",
  },
  {
    title: "Photopea",
    category: "Editing",
    description: "Photoshop alternative online.",
    url: "https://www.photopea.com",
  },
  {
    title: "Gamma AI",
    category: "Presentation",
    description: "AI-powered presentations.",
    url: "https://gamma.app",
  },
  {
    title: "Suno AI",
    category: "Music",
    description: "Generate AI music instantly.",
    url: "https://suno.com",
  },
];

export default function TrendingWebsites() {
  return (
    <section
      id="websites"
      className="py-36"
    >
      <div className="container">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">

            Trending Collection

          </span>

          <h2 className="mt-6 text-5xl font-black lg:text-6xl">

            Useful Websites

          </h2>

          <p className="mt-5 max-w-2xl text-lg text-gray-400">

            Handpicked websites that can improve your productivity,
            creativity and save valuable time every day.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {websites.map((site, index) => (

            <motion.div
              key={site.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 hover:bg-white/10"
            >

              <div className="flex items-center justify-between">

                <div className="rounded-2xl bg-violet-500/15 p-4">

                  <Globe
                    size={30}
                    className="text-violet-400"
                  />

                </div>

                <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-sm text-yellow-400">

                  <Star size={14} />

                  4.9

                </div>

              </div>

              <span className="mt-8 inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs text-blue-400">

                {site.category}

              </span>

              <h3 className="mt-5 text-3xl font-bold">

                {site.title}

              </h3>

              <p className="mt-4 text-gray-400 leading-7">

                {site.description}

              </p>

              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 font-semibold transition-all duration-300 hover:gap-4"
              >

                Visit Website

                <ExternalLink size={18} />

              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}