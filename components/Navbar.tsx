"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    title: "Websites",
    href: "#websites",
  },
  {
    title: "Android Apps",
    href: "#apps",
  },
  {
    title: "AI Tools",
    href: "#aitools",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="container">

        <div
          className={`flex h-fit items-center justify-between rounded-2xl border transition-all duration-300
          ${
            scrolled
               ? "border-white/10 bg-[#0b0b0f] shadow-2xl"
  : "border-white/10 bg-[#0b0b0f]"
          }
          px-6 py-3`}
        >

          {/* LOGO */}

          <Link href="/" className="flex items-center gap-3">

            <Image
              src="/logo.png"
              alt="Trendshub"
              width={150}
              height={150}
              priority
            />

            <div>

              <h2 className="text-2xl font-black tracking-wide">

                Trends
                <span className="text-violet-500">
                  hub
                </span>

              </h2>

              <p className="text-xs text-gray-400">

                Discover Daily

              </p>

            </div>

          </Link>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-10 lg:flex">

            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="relative text-gray-300 transition hover:text-white"
              >
                {item.title}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-violet-500 transition-all duration-300 hover:w-full" />
              </a>
            ))}

          </nav>

          {/* CTA */}

          <div className="hidden lg:flex">


          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden"
          >
            {menuOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -40,
            }}
            className="mx-6 mt-4 h-fit rounded-2xl border border-white/10 bg-black/90 p-6 backdrop-blur-2xl lg:hidden"
          >

            <div className="flex flex-col gap-6">

              {navLinks.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-gray-300"
                >
                  {item.title}
                </a>
              ))}

              <a
                href="#telegram"
                className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 py-4 text-center font-semibold"
              >
                Join Telegram
              </a>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.header>
  );
}