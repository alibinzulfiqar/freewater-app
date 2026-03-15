"use client";

import Link from "next/link";
import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

type FAQSection = {
  section: string;
  color: string;
  items: FAQItem[];
};

const faqData: FAQSection[] = [
  {
    section: "General",
    color: "sky",
    items: [
      {
        q: "How is FreeWater free?",
        a: "FreeWater® is paid for by the advertisers on each container. Ten cents from every container sold is donated to clean-water charities such as Well Aware.",
      },
      {
        q: "Will you ship FreeWater to me?",
        a: "We are working on a free 12-pack program that will allow individuals to order free water directly. Stay tuned for updates!",
      },
      {
        q: "Why aluminum bottles and paper cartons?",
        a: "Both aluminum and paper containers are far more sustainable and recyclable than single-use plastic. We chose them to minimize environmental impact.",
      },
      {
        q: "Why BPA free?",
        a: "BPA (bisphenol A) is a chemical found in many plastics that has been linked to a number of health issues. We use BPA-free materials to protect our consumers.",
      },
      {
        q: "What charities do you donate to?",
        a: "We currently partner with Well Aware, an Austin-based non-profit that brings clean water access to communities in Africa. 10¢ from every container funds these projects.",
      },
      {
        q: "How can I help FreeWater?",
        a: "The best thing you can do is share FreeWater on social media! Tag us on Instagram, TikTok, Facebook, and Twitter. Every share helps us spread the mission.",
      },
    ],
  },
  {
    section: "Distribution",
    color: "teal",
    items: [
      {
        q: "How can I distribute FreeWater?",
        a: "Visit our Distribute page and fill out the application form. Our team will review your application and reach out within 48 hours.",
      },
      {
        q: "What are the minimum requirements to distribute?",
        a: "Distributors must order a minimum of 1 pallet per month. We ship to the lower 48 states. You can scale your orders as demand grows.",
      },
      {
        q: "Do distributors have to advertise on the containers?",
        a: "No! Distributors are not required to advertise on the containers. You simply pick up or receive our standard ad-supported containers.",
      },
    ],
  },
  {
    section: "Advertising",
    color: "violet",
    items: [
      {
        q: "What factors affect the cost of advertising?",
        a: "Cost depends on several factors: aluminum bottle vs. paper carton, total quantity ordered, distribution model (Austin pickup vs. nationwide shipping), geographic location, custom design complexity, and whether you choose to co-advertise with other brands.",
      },
      {
        q: "How long does an order take?",
        a: "Aluminum bottle campaigns typically take approximately 6 weeks from order to delivery. Paper carton campaigns take approximately 4 months due to printing lead times.",
      },
      {
        q: "How does FreeWater compare to other advertising mediums?",
        a: "FreeWater generates 10× more impressions than direct mail at $2.50 cheaper per 10 impressions, with an average 29% ROI — plus the added brand loyalty that comes from being associated with giving someone free water.",
      },
      {
        q: "Can I target a specific demographic?",
        a: "Yes! You can choose where your FreeWater is distributed, allowing you to target specific geographies, events, venues, and demographics that align with your brand.",
      },
      {
        q: "How do I start advertising on FreeWater?",
        a: "Visit our Advertise page (freewater.io/advertise) and fill out the Get A Quote form. Our team will connect with you to build a custom campaign.",
      },
    ],
  },
  {
    section: "Other",
    color: "amber",
    items: [
      {
        q: "Can non-profits or schools fundraise with FreeWater?",
        a: "Yes! We offer fundraising partnership opportunities for qualifying 501(c)(3) organizations. Contact us to learn more about our fundraising program.",
      },
      {
        q: "Are there more free products coming?",
        a: "Yes! FreeWater is just the beginning. Our vision is to create a free supermarket — and eventually a free Amazon 2.0 — where everything is paid for by ads.",
      },
      {
        q: "How can I invest in FreeWater?",
        a: "If you're interested in investing, please visit our Contact Us page and use \"Investor\" as the subject. Our team will reach out to discuss investment opportunities.",
      },
    ],
  },
];

const colorMap: Record<string, string> = {
  sky: "bg-sky-50 border-sky-200 text-sky-700",
  teal: "bg-teal-50 border-teal-200 text-teal-700",
  violet: "bg-violet-50 border-violet-200 text-violet-700",
  amber: "bg-amber-50 border-amber-200 text-amber-700",
};

const badgeColor: Record<string, string> = {
  sky: "bg-sky-100 text-sky-600",
  teal: "bg-teal-100 text-teal-600",
  violet: "bg-violet-100 text-violet-600",
  amber: "bg-amber-100 text-amber-600",
};

function Accordion({ items, color }: { items: FAQItem[]; color: string }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`rounded-2xl border ${colorMap[color]} overflow-hidden`}
        >
          <button
            className="w-full px-6 py-4 text-left flex justify-between items-center gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-semibold text-slate-800 text-sm sm:text-base">
              {item.q}
            </span>
            <span
              className={`text-xl flex-shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {item.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-sky-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-sky-400 text-sm font-medium mb-4">
            <Link href="/" className="hover:text-sky-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">FAQ</span>
          </div>
          <h1 className="section-heading text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Everything you need to know about FreeWater®, advertising, distributing, and more.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-14">
          {faqData.map((section) => (
            <div key={section.section}>
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={`text-sm font-bold px-4 py-1.5 rounded-full ${badgeColor[section.color]}`}
                >
                  {section.section}
                </span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>
              <Accordion items={section.items} color={section.color} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-sky-400 blur-3xl" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="section-heading text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Still have questions?
          </h2>
          <p className="text-sky-200 text-lg mb-8">
            Our team is happy to help. Reach out through our contact form.
          </p>
          <Link href="/contact-us" className="btn-primary inline-block text-base px-8 py-3">
            Contact Us →
          </Link>
        </div>
      </section>
    </div>
  );
}
