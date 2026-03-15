"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const adStats = [
  {
    icon: "/images/icon-email.webp",
    value: "10x",
    label: "more impressions than direct mail",
    color: "from-sky-500 to-cyan-400",
  },
  {
    icon: "/images/icon-coin.webp",
    value: "$2.50",
    label: "cheaper per ten impressions than direct mail",
    color: "from-amber-500 to-yellow-400",
  },
  {
    icon: "/images/icon-rocket.webp",
    value: "29%",
    label: "return on investment",
    color: "from-violet-500 to-purple-400",
  },
  {
    icon: "/images/icon-people.webp",
    value: "Priceless",
    label: "saving lives and helping the planet",
    color: "from-emerald-500 to-teal-400",
  },
];

const features = [
  {
    title: "Use QR Codes",
    desc: "Connect anything on the internet — websites, coupons, and videos — directly from your packaging.",
  },
  {
    title: "Sell or Freely Distribute",
    desc: "Ad supported FreeWater in aluminum bottles and paper cartons — your choice.",
  },
  {
    title: "Choose a Distribution Model",
    desc: "Distribute in Austin or ship anywhere in the lower 48 states.",
  },
  {
    title: "Subsidize or Cover the Entire Cost",
    desc: "Share the ad space with non-competing brands to cover costs.",
  },
];

const products = [
  {
    name: "Paper Carton",
    size: "16.9 fl oz / 500ml",
    image: "/images/fw-carton.png",
    moq: "10,000 units",
    brands: "Up to 8 brands",
    color: "from-sky-500 to-cyan-400",
  },
  {
    name: "Alumi-Tec Bottle",
    size: "16 fl oz / 474ml",
    image: "/images/aluminum-bottle.png",
    moq: "1,680 units (1 pallet)",
    brands: "Up to 3 brands",
    color: "from-slate-600 to-slate-400",
  },
];

export default function AdvertisePage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "", business: "",
    advertise: "", budget: "", message: "", consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Page Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-sky-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-56 h-56 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center gap-2 text-sky-400 text-sm font-medium mb-4">
                <Link href="/" className="hover:text-sky-300 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">Advertise</span>
              </div>
              <h1 className="section-heading text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                PUT YOUR BRAND IN{" "}
                <span className="gradient-text">EVERYONE&apos;S HAND™</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Receive meaningful impressions and utilize the greatest brand loyalty
                platform in the ad industry.
              </p>
              <a href="#get-quote" className="btn-primary text-base px-7 py-3 inline-block">
                Get A Quote →
              </a>
            </div>
            <div className="flex justify-center">
              <div className="float-animation">
                <Image
                  src="/images/yes-theory-waterbox.png"
                  alt="FreeWater branded box advertising"
                  width={480}
                  height={320}
                  className="rounded-2xl shadow-2xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Advertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Our Approach</span>
              <h2 className="section-heading text-slate-800 mt-2 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                Our product is a{" "}
                <span className="gradient-text">blank canvas</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                FreeWater® is the opposite of traditional advertising because we are not annoying.
                Instead of making the audience cringe or run for cover, we put a smile on their face,
                and from that state of happiness is when they&apos;ll be excited to support your brand.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((f) => (
                  <div key={f.title} className="bg-sky-50 rounded-2xl p-5 border border-sky-100">
                    <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center mb-3">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
                        <path d="M3 8l3.5 3.5 7-7" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-800 text-sm mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                      {f.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a href="#get-quote" className="btn-primary inline-block">Get A Quote →</a>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/fw-carton.png"
                alt="FreeWater paper carton back"
                width={360}
                height={960}
                className="object-contain drop-shadow-xl max-h-[600px] w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ad Stats */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full bg-sky-400 blur-3xl -translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <span className="text-sky-400 font-semibold text-sm uppercase tracking-wider">By the numbers</span>
            <h2 className="section-heading text-white mt-2" style={{ fontFamily: "var(--font-poppins)" }}>
              Why it&apos;s a mini billboard in your hands
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {adStats.map((s) => (
              <div key={s.value} className="card-hover rounded-2xl p-6 text-center border border-slate-700 bg-slate-800">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-4`}>
                  <Image src={s.icon} alt={s.value} width={36} height={36} className="object-contain" />
                </div>
                <div className="text-3xl font-black text-white mb-2" style={{ fontFamily: "var(--font-poppins)" }}>
                  {s.value}
                </div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 bg-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Our containers</span>
            <h2 className="section-heading text-slate-800 mt-2" style={{ fontFamily: "var(--font-poppins)" }}>
              Choose your canvas
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {products.map((p) => (
              <div key={p.name} className="card-hover bg-white rounded-3xl p-8 shadow-md border border-sky-100 text-center">
                <div className="flex justify-center mb-6 h-48">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={160}
                    height={192}
                    className="object-contain h-full w-auto"
                  />
                </div>
                <div className={`inline-block px-4 py-1 rounded-full text-white text-sm font-semibold bg-gradient-to-r ${p.color} mb-3`}>
                  {p.name}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                  {p.size}
                </h3>
                <div className="space-y-2 mb-6">
                  <div className="flex justify-between text-sm py-2 border-b border-slate-100">
                    <span className="text-slate-500">MOQ</span>
                    <span className="font-semibold text-slate-700">{p.moq}</span>
                  </div>
                  <div className="flex justify-between text-sm py-2">
                    <span className="text-slate-500">Ad space</span>
                    <span className="font-semibold text-slate-700">{p.brands}</span>
                  </div>
                </div>
                <a href="#get-quote" className="btn-primary w-full text-center block">
                  Get A Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="get-quote" className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-sky-300"
              style={{
                width: `${100 + i * 60}px`,
                height: `${100 + i * 60}px`,
                left: `${10 + i * 40}%`,
                top: `${10 + i * 30}%`,
                animation: `float ${4 + i}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="section-heading text-white" style={{ fontFamily: "var(--font-poppins)" }}>
              Get a <span className="gradient-text">Quote</span>
            </h2>
            <p className="text-sky-200 mt-3">
              Fill out the form below and our team will get back to you ASAP.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-3xl p-10 text-center" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}>
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-white text-2xl font-bold mb-2">Quote request received!</h3>
              <p className="text-sky-200">Our team will contact you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rounded-3xl p-8 space-y-4" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}>
              {[
                { label: "First and last name", field: "name", type: "text", placeholder: "Jane Smith" },
                { label: "Email", field: "email", type: "email", placeholder: "jane@company.com" },
                { label: "Phone Number", field: "phone", type: "tel", placeholder: "+1 (555) 000-0000" },
                { label: "Company name", field: "company", type: "text", placeholder: "Acme Corp" },
                { label: "Type of business", field: "business", type: "text", placeholder: "E.g. retail, restaurant" },
                { label: "What do you want to advertise?", field: "advertise", type: "text", placeholder: "New product, event..." },
              ].map(({ label, field, type, placeholder }) => (
                <div key={field}>
                  <label className="text-sky-200 text-sm font-medium block mb-1">{label} *</label>
                  <input
                    type={type}
                    required
                    placeholder={placeholder}
                    value={formData[field as keyof typeof formData] as string}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="input-field"
                  />
                </div>
              ))}
              <div>
                <label className="text-sky-200 text-sm font-medium block mb-1">What is your budget? *</label>
                <input
                  type="number"
                  required
                  placeholder="5000"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="input-field"
                  min="0"
                />
              </div>
              <div>
                <label className="text-sky-200 text-sm font-medium block mb-1">Message</label>
                <textarea
                  rows={3}
                  placeholder="Any additional notes..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="input-field resize-none"
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
                  I agree to be contacted by FreeWater® regarding my advertising inquiry.
                </span>
              </label>
              <button type="submit" className="btn-primary w-full text-center">
                Send Quote Request →
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
