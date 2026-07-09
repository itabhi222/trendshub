"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-36"
    >
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl lg:p-14"
        >

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
            About TrendHubs
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Discover the Best Digital Resources
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            TrendHubs is a curated platform where you can discover useful
            websites, hidden Android apps, and powerful AI tools. Our goal is
            to save your time by collecting high-quality resources in one place.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-2xl font-bold">
                Privacy
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                We do not collect personal information unless you voluntarily
                provide it. Analytics and cookies may be used to improve the
                website experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-2xl font-bold">
                Disclaimer
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                All tools, apps and websites belong to their respective owners.
                TrendHubs only recommends useful resources and is not affiliated
                with third-party services unless stated otherwise.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-6">
              <h3 className="text-2xl font-bold">
                Contact
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                Have suggestions or business inquiries?
              </p>

              <a
                href="mailto:contact@trendhubs.uk"
                className="mt-4 inline-block font-semibold text-violet-400 hover:underline"
              >
                contact@trendhubs.uk
              </a>
            </div>

          </div>

          <div className="mt-10 border-t border-white/10 pt-8 text-sm text-gray-500">
            By using TrendHubs, you agree to our privacy practices and terms of
            use. External links may lead to third-party websites with their own
            policies.
          </div>

        </motion.div>

      </div>
    </section>
  );
}