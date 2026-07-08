"use client";

import { useEffect, useState } from "react";

export default function TelegramTimer() {
  const [started, setStarted] = useState(false);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    if (!started || seconds === 0) return;

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [started, seconds]);

  if (!started) {
    return (
      <button
        onClick={() => setStarted(true)}
        className="rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-violet-700 px-10 py-5 text-lg font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition duration-300 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(139,92,246,0.45)]"
      >
        Unlock Telegram
      </button>
    );
  }

  if (seconds > 0) {
    return (
      <div className="space-y-3">
        <p className="text-5xl font-bold text-violet-400">
          {seconds}
        </p>
        <p className="text-gray-400">
          Please wait...
        </p>
      </div>
    );
  }

  return (
    <a
      href="https://t.me/YOUR_TELEGRAM_USERNAME"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
    >
      Join Telegram
    </a>
  );
}