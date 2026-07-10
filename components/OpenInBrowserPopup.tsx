"use client";

import { useEffect, useState } from "react";

export default function OpenInBrowserPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || "";

    const isInApp =
      ua.includes("FBAN") ||
      ua.includes("FBAV") ||
      ua.includes("Instagram");

    // if (isInApp)
    {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-5">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#111827] p-8 text-center shadow-2xl">
        <h2 className="text-2xl font-bold text-white">
          Better Experience
        </h2>

        <p className="mt-4 text-gray-300 leading-7">
          You're viewing this website inside the Facebook/Instagram browser.
          <br />
          For the best experience, please open it in your device's default browser.
        </p>

        <div className="mt-8 space-y-4">
          <button
            onClick={() => setShow(false)}
            className="w-full rounded-full bg-gradient-to-r from-violet-600 to-blue-600 py-3 font-semibold text-white"
          >
            Continue Here
          </button>

          <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-200">
            <b>How to open:</b>
            <br />
            Tap <b>⋮</b> or <b>•••</b> in the top-right corner, then choose
            <b> "Open in browser"</b>.
          </div>
        </div>
      </div>
    </div>
  );
}