"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Sparkles,
  ArrowUpRight,
  BadgeCheck,
} from "lucide-react";

const aiTools = [
  {
    name: "ChatGPT",
    category: "AI Assistant",
    type: "Free + Paid",
    description:
      "Generate content, solve coding problems and boost productivity.",
    popular: true,
    color: "bg-green-500/15 text-green-400",
    url: "https://chatgpt.com",
  },
  {
    name: "Claude",
    category: "Writing",
    type: "Free",
    description:
      "Long-form writing and document analysis powered by AI.",
    popular: true,
    color: "bg-orange-500/15 text-orange-400",
    url: "https://claude.ai",
  },
  {
    name: "Gemini",
    category: "Google AI",
    type: "Free",
    description:
      "Google's AI assistant for research and productivity.",
    popular: false,
    color: "bg-blue-500/15 text-blue-400",
    url: "https://gemini.google.com",
  },
  {
    name: "Perplexity",
    category: "Search",
    type: "Free + Paid",
    description:
      "AI-powered search engine with cited answers.",
    popular: true,
    color: "bg-cyan-500/15 text-cyan-400",
    url: "https://www.perplexity.ai",
  },
  {
    name: "Cursor AI",
    category: "Coding",
    type: "Paid",
    description:
      "Modern AI-powered code editor for developers.",
    popular: false,
    color: "bg-purple-500/15 text-purple-400",
    url: "https://cursor.com",
  },
  {
    name: "NotebookLM",
    category: "Research",
    type: "Free",
    description:
      "Summarize notes, PDFs and documents with AI.",
    popular: false,
    color: "bg-pink-500/15 text-pink-400",
    url: "https://notebooklm.google.com",
  },
];

export default function AITools() {
  return (
    <section
      id="aitools"
      className="py-28"
    >
      <div className="container">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
            AI Collection
          </span>

          <h2 className="mt-5 text-5xl font-black">
            Trending AI Tools
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Explore the most useful AI tools for writing,
            coding, research and productivity.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {aiTools.map((tool, index) => (

            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
            >

              {tool.popular && (
                <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-yellow-500/15 px-3 py-1 text-xs text-yellow-400">
                  <BadgeCheck size={14} />
                  Popular
                </div>
              )}

              <div className={`inline-flex w-fit rounded-2xl p-4 ${tool.color}`}>
                <Bot size={34} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {tool.name}
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">

                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                  {tool.category}
                </span>

                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                  {tool.type}
                </span>

              </div>

              {/* Equal Height Description */}

              <p className="mt-5 flex-1 text-gray-400 leading-7">
                {tool.description}
              </p>

              {/* Button */}

              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-3 transition-all duration-300 hover:gap-4"
              >
                <Sparkles size={18} />
                Try Now
                <ArrowUpRight size={18} />
              </a>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}