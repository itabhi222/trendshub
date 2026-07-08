"use client";

import Link from "next/link";
import TelegramTimer from "@/components/TelegramTimer";

export default function Footer() {
  return (
    <footer className="relative mt-48 overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.18),_transparent_55%),rgba(2,6,23,0.95)]">
      <div className="container relative z-10 py-20 lg:py-24">
        <div className="mb-10 h-1 w-full rounded-full bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

        {/* Telegram Unlock Section */}
        <div className="flex justify-center">
          <section
            id="telegram"
            className="mb-16 flex w-full max-w-7xl flex-col items-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-cyan-500/15 p-8 text-center shadow-[0_0_80px_rgba(139,92,246,0.14)] backdrop-blur-xl sm:p-10 lg:p-12"
          >
          <span className="inline-flex rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1 text-sm font-medium text-violet-300">
            Premium Access
          </span>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Join Our Telegram
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-gray-300 sm:text-lg">
            Unlock the latest curated picks, updates, and exclusive insights in one place.
          </p>

          <div className="mt-8 flex justify-center">
            <TelegramTimer />
          </div>
          </section>
        </div>

        <div className="flex flex-col items-center gap-6 text-center">

          {/* Logo */}
          <div className="rounded-2xl bg-black/80 px-5 py-3 shadow-[0_0_20px_rgba(0,0,0,0.35)]">
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl" style={{ color: 'white' }}>
              Trend<span style={{ color: 'white' }}>s</span><span style={{ color: 'white' }}>hub</span>
            </h2>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-5 text-sm font-medium text-gray-400 sm:gap-6 sm:text-base">

            <Link
              href="#websites"
              className="transition hover:text-violet-400"
            >
              Websites
            </Link>

            <Link
              href="#apps"
              className="transition hover:text-violet-400"
            >
              Android Apps
            </Link>

            <Link
              href="#aitools"
              className="transition hover:text-violet-400"
            >
              AI Tools
            </Link>

            <a
              href="#telegram"
              className="transition hover:text-violet-400"
            >
              Telegram
            </a>

          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Trendshub. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}