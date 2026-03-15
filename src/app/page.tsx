"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Dev2ProductionBadge from "@/components/Dev2ProductionBadge";

const features = [
  {
    icon: "/images/icon-save-money.png",
    title: "Save Money",
    desc: "Bottled water costs 2,000 times the price of tap water",
    color: "from-sky-400 to-cyan-300",
  },
  {
    icon: "/images/icon-premium-water.png",
    title: "Premium Water",
    desc: "FreeWater is natural spring water and all containers are BPA free",
    color: "from-blue-400 to-sky-300",
  },
  {
    icon: "/images/icon-eco-friendly.png",
    title: "Eco Friendly",
    desc: "Our goal is to be net positive by 2030",
    color: "from-emerald-400 to-teal-300",
  },
  {
    icon: "/images/icon-save-lives.png",
    title: "Save Lives",
    desc: "Ten cents from each beverage is donated to charity to build water wells for people in need",
    color: "from-cyan-400 to-blue-300",
  },
];

const stats = [
  { value: "$0", label: "Cost to consumer", sub: "100% free water" },
  { value: "10¢", label: "Donated per beverage", sub: "To fight water crisis" },
  { value: "2M+", label: "Bottles distributed", sub: "And growing" },
  { value: "2030", label: "Net positive goal", sub: "Our promise" },
];

export default function HomePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* ====== HERO SECTION ====== */}
      <section className="relative min-h-screen hero-gradient flex items-center overflow-hidden">
        {/* Animated water bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full opacity-10 bg-sky-400"
              style={{
                width: `${80 + i * 40}px`,
                height: `${80 + i * 40}px`,
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animation: `float ${4 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-2 text-sky-300 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                Revolutionary Advertising Platform
              </div>
              <h1 className="section-heading text-white mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
                Put Your Brand In{" "}
                <span className="gradient-text">Everyone&apos;s Hand!</span>
              </h1>
              <p className="text-sky-100/80 text-lg leading-relaxed mb-8 max-w-xl">
                FreeWater® is premium spring water — completely free to consumers,
                paid for by ads on the packaging. Every bottle donates 10¢ to build
                water wells in East Africa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/advertise" className="btn-primary text-base px-7 py-3">
                  Advertise With Us →
                </Link>
                <Link href="/faq" className="btn-outline border-sky-400 text-sky-300 hover:bg-sky-400 hover:text-white text-base px-7 py-3">
                  Learn More
                </Link>
              </div>

              {/* Mini stats */}
              <div className="mt-12 grid grid-cols-3 gap-6">
                {[
                  { val: "Free", label: "For consumers" },
                  { val: "10¢", label: "Per bottle donated" },
                  { val: "BPA-Free", label: "Premium water" },
                ].map(({ val, label }) => (
                  <div key={val} className="text-center">
                    <div className="text-2xl font-bold text-sky-300">{val}</div>
                    <div className="text-sky-200/60 text-xs mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative float-animation">
                <div className="absolute inset-0 rounded-full bg-sky-400/20 blur-3xl scale-110" />
                <Image
                  src="/images/hero-bottles.png"
                  alt="FreeWater branded bottles"
                  width={520}
                  height={520}
                  className="relative z-10 drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="wave-divider">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 block">
            <path d="M0,60 C360,100 1080,20 1440,60 L1440,100 L0,100 Z" fill="#f0f9ff" />
          </svg>
        </div>
      </section>

      {/* ====== FEATURES GRID ====== */}
      <section className="py-20 bg-sky-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Why FreeWater?</span>
            <h2 className="section-heading text-slate-800 mt-2" style={{ fontFamily: "var(--font-poppins)" }}>
              Water that does more
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-sky-100 text-center"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${f.color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <Image src={f.icon} alt={f.title} width={36} height={36} className="object-contain" />
                </div>
                <h3 className="font-bold text-slate-800 text-lg mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  {f.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== STATS SECTION ====== */}
      <section className="py-20 water-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-white blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.value} className="text-center text-white">
                <div className="text-4xl md:text-5xl font-black mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  {s.value}
                </div>
                <div className="font-semibold mb-1">{s.label}</div>
                <div className="text-sky-200 text-sm">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== ABOUT / HOW IT WORKS ====== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-sky-50" />
              <Image
                src="/images/well-aware.webp"
                alt="People drinking FreeWater"
                width={700}
                height={526}
                className="relative z-10 rounded-2xl shadow-xl object-cover w-full"
              />
              <div className="absolute -bottom-4 -right-4 z-20 rounded-2xl p-4 shadow-lg border border-sky-100 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 text-sm">WellAware Partner</div>
                    <div className="text-slate-500 text-xs">Building wells in East Africa</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Our Mission</span>
              <h2 className="section-heading text-slate-800 mt-2 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                We are partnered with{" "}
                <span className="gradient-text">WellAware</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We donate ten cents per beverage to WellAware, an Austin based non-profit
                that builds water wells in East Africa. Every 150 FreeWater® donates enough
                money to provide one person with a safe water source for the rest of their life.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Premium natural spring water in every bottle",
                  "Ads on packaging fund the entire cost",
                  "10¢ per beverage donated to clean water charity",
                  "Zero cost to the end consumer",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-slate-600 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wellawareworld.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Learn More About WellAware →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== NO PLASTIC SECTION ====== */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-sky-400 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider">Sustainability First</span>
              <h2 className="section-heading text-white mt-2 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                We <span className="gradient-text">never</span> use plastic bottles
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                FreeWater® comes in aluminum bottles and paper cartons of natural spring water
                because we didn&apos;t want to make water free and do it in a plastic bottle.
                Glass bottles are coming soon!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/advertise" className="btn-primary">Order FreeWater® Bottles</Link>
                <Link href="/advertise" className="btn-outline border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-white">
                  Order FreeWater® Boxes
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/three-bottles.webp"
                alt="FreeWater aluminum bottles"
                width={600}
                height={440}
                className="rounded-2xl object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== BOOK SECTION ====== */}
      <section className="py-24 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-sky-200/40 rounded-3xl blur-2xl" />
                <Image
                  src="/images/book-cover.jpg"
                  alt="How to Launch a Free Product Company Book"
                  width={320}
                  height={480}
                  className="relative z-10 rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">New Book</span>
              <h2 className="section-heading text-slate-800 mt-2 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                &ldquo;HOW TO LAUNCH A FREE PRODUCT COMPANY — AND MAKE IT WORK&rdquo;
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Please support us by ordering this book. It&apos;s a step-by-step guide to turning
                any product into something you can give away for free or negatively priced —
                and even at a profit. Whether you&apos;re an entrepreneur, marketer, activist, or
                just someone who loves bold ideas, you&apos;ll walk away with the tools to launch
                your own impact-driven organization.
              </p>
              <a
                href="https://a.co/d/jdnpHqu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Order Book on Amazon →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== SUBSCRIBE SECTION ====== */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-sky-300"
              style={{
                width: `${120 + i * 80}px`,
                height: `${120 + i * 80}px`,
                left: `${5 + i * 25}%`,
                top: `${20 + (i % 2) * 40}%`,
                animation: `float ${5 + i}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="section-heading text-white" style={{ fontFamily: "var(--font-poppins)" }}>
              Subscribe To Get Your{" "}
              <span className="gradient-text">FreeWater®</span>
            </h2>
            <p className="text-sky-200 mt-3">
              Join the movement. Get notified when FreeWater launches in your city.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-3xl p-10 text-center" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}>
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-white text-2xl font-bold mb-2">You&apos;re on the list!</h3>
              <p className="text-sky-200">We&apos;ll notify you when FreeWater is available in your city.</p>
              <Dev2ProductionBadge variant="dark" />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl p-8 space-y-4" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sky-200 text-sm font-medium block mb-1">First name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="text-sky-200 text-sm font-medium block mb-1">Last name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="input-field"
                  />
                </div>
              </div>
              <div>
                <label className="text-sky-200 text-sm font-medium block mb-1">Email *</label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="input-field"
                />
              </div>
              <div>
                <label className="text-sky-200 text-sm font-medium block mb-1">City *</label>
                <input
                  type="text"
                  required
                  placeholder="Austin, TX"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="input-field"
                />
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 w-4 h-4 flex-shrink-0"
                  style={{ accentColor: "#0ea5e9" }}
                />
                <span className="text-sky-200/80 text-sm">
                  I agree to receive updates from FreeWater® about our products and services.
                </span>
              </label>
              <button type="submit" className="btn-primary w-full text-center">
                Subscribe — Get FreeWater® 💧
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

