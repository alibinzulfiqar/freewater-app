"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const STORAGE_KEY = "fw_popup_dismissed";
const DISMISS_DAYS = 7;

export default function BookPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if it was dismissed recently
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      const dismissedAt = parseInt(dismissed, 10);
      const daysSince = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24);
      if (daysSince < DISMISS_DAYS) return;
    }

    // Show popup after 5 seconds OR after user scrolls 40% of the page
    let shown = false;

    const show = () => {
      if (!shown) {
        shown = true;
        setVisible(true);
        window.removeEventListener("scroll", onScroll);
        clearTimeout(timer);
      }
    };

    const onScroll = () => {
      const scrolled = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrolled > 0.4) show();
    };

    const timer = setTimeout(show, 5000);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const dismiss = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Book promotion"
        className="fixed inset-0 z-[201] flex items-center justify-center p-4"
      >
        <div
          className="relative w-full max-w-md rounded-3xl shadow-2xl overflow-hidden"
          style={{ background: "#dbeafe" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={dismiss}
            aria-label="Close popup"
            className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/60 hover:bg-white transition-colors text-slate-600 hover:text-slate-900 text-xl font-light"
          >
            ✕
          </button>

          <div className="px-8 pt-10 pb-8 text-center">
            {/* Headline */}
            <h2
              className="text-2xl font-bold text-slate-800 leading-tight mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Do you think water and food should be free? Please support our
              mission and start your own free water or food project.
            </h2>

            {/* Sub-text */}
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Order a copy of our new ebook. It&apos;s a step-by-step guide for
              starting game-changing projects in your community.
            </p>

            {/* Book cover */}
            <div className="flex justify-center mb-7">
              <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/images/book-cover.jpg"
                  alt="How to Make a Free Product Company — Josh Cliffords"
                  width={200}
                  height={280}
                  className="object-cover"
                />
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://a.co/d/jdnpHqu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-3 px-6 rounded-full bg-slate-900 text-white font-bold text-base hover:bg-slate-700 transition-colors"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Get your copy
            </a>

            {/* Dismiss link */}
            <button
              onClick={dismiss}
              className="mt-4 text-slate-400 text-xs hover:text-slate-600 transition-colors underline-offset-2 hover:underline"
            >
              No thanks
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
