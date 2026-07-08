"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Download,
  Star,
} from "lucide-react";

const apps = [
  {
    name: "LocalSend",
    category: "File Sharing",
    description: "Share files between devices without internet.",
    rating: "4.9",
    url: "https://localsend.org",
  },
  {
    name: "Shizuku",
    category: "Android Utility",
    description: "Run advanced Android features without root.",
    rating: "4.8",
    url: "https://shizuku.rikka.app",
  },
  {
    name: "Seal",
    category: "Downloader",
    description: "Download videos from multiple platforms.",
    rating: "4.9",
    url: "https://github.com/JunkFood02/Seal",
  },
  {
    name: "BuzzKill",
    category: "Notifications",
    description: "Control Android notifications intelligently.",
    rating: "4.8",
    url: "https://play.google.com/store/apps/details?id=com.samruston.buzzkill",
  },
  {
    name: "Obtainium",
    category: "Open Source",
    description: "Update apps directly from GitHub & GitLab.",
    rating: "4.9",
    url: "https://obtainium.imranr.dev",
  },
  {
    name: "SD Maid SE",
    category: "Cleaner",
    description: "Clean unnecessary files and optimize storage.",
    rating: "4.7",
    url: "https://github.com/d4rken-org/sdmaid-se",
  },
];

export default function AndroidApps() {
  return (
    <section
      id="apps"
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

          <span className="inline-block rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            Android Collection
          </span>

          <h2 className="mt-6 text-5xl font-black lg:text-6xl">
            Hidden Android Apps
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-gray-400">
            Powerful Android apps that most people don't know about.
            Carefully selected to improve your Android experience.
          </p>

        </motion.div>

        {/* Cards */}

<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mb-32">
          {apps.map((app, index) => (

            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * .08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:border-green-500/40 hover:bg-white/10"
            >

              <div className="flex items-center justify-between">

                <div className="rounded-2xl bg-green-500/15 p-4">

                  <Smartphone
                    size={30}
                    className="text-green-400"
                  />

                </div>

                <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-sm text-yellow-400">

                  <Star size={14} />

                  {app.rating}

                </div>

              </div>

              <span className="mt-8 inline-block rounded-full bg-green-500/10 px-3 py-1 text-xs text-green-400">

                {app.category}

              </span>

              <h3 className="mt-5 text-3xl font-bold">

                {app.name}

              </h3>

              <p className="mt-4 leading-7 text-gray-400">

                {app.description}

              </p>

              <a
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-green-600 px-5 py-3 font-semibold transition-all duration-300 hover:gap-4 hover:bg-green-500"
              >

                <Download size={18} />

                Learn More

              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}