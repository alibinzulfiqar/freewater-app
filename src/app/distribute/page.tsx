"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function DistributePage() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    company: "", business: "", isEvent: false,
    address: "", city: "", state: "", zip: "",
    footTraffic: "", ageRange: "", monthlyQty: "",
    loadingDock: "", whyDistributing: "", consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-sky-400 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center gap-2 text-sky-400 text-sm font-medium mb-4">
                <Link href="/" className="hover:text-sky-300 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">Distribute</span>
              </div>
              <h1 className="section-heading text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
                Distribute{" "}
                <span className="gradient-text">FreeWater®</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Whether it&apos;s an event or for your business, we have many different
                options for you!
              </p>
              <a href="#distribute-form" className="btn-primary inline-block">
                Apply to Distribute →
              </a>
            </div>
            <div className="flex justify-center">
              <div className="float-animation">
                <Image
                  src="/images/aluminum-bottle.png"
                  alt="FreeWater aluminum bottle"
                  width={320}
                  height={420}
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Distribute */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">Why partner with us</span>
            <h2 className="section-heading text-slate-800 mt-2" style={{ fontFamily: "var(--font-poppins)" }}>
              What you get as a <span className="gradient-text">distributor</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💧",
                title: "Free Water",
                desc: "Offer free, premium water to your customers, guests, or community — at no cost to you.",
              },
              {
                icon: "🌍",
                title: "Make an Impact",
                desc: "10 cents from every container funds clean water projects around the world through our Well Aware partnership.",
              },
              {
                icon: "📦",
                title: "Flexible Quantities",
                desc: "Minimum of one pallet per month. Scale as you grow. We ship across the entire lower 48 states.",
              },
            ].map((item) => (
              <div key={item.title} className="card-hover text-center rounded-3xl p-8 bg-sky-50 border border-sky-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3" style={{ fontFamily: "var(--font-poppins)" }}>
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribute Form */}
      <section id="distribute-form" className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-sky-300"
              style={{
                width: `${80 + i * 60}px`,
                height: `${80 + i * 60}px`,
                left: `${5 + i * 35}%`,
                top: `${5 + i * 30}%`,
                animation: `float ${5 + i}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-10">
            <h2 className="section-heading text-white" style={{ fontFamily: "var(--font-poppins)" }}>
              Distribution <span className="gradient-text">Application</span>
            </h2>
            <p className="text-sky-200 mt-3">
              Tell us about your space and how you plan to distribute FreeWater®.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-3xl p-10 text-center" style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}>
              <div className="text-5xl mb-4">💧</div>
              <h3 className="text-white text-2xl font-bold mb-2">Application received!</h3>
              <p className="text-sky-200">
                We&apos;ll review your application and get back to you within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl p-8 space-y-5"
              style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sky-200 text-sm font-medium block mb-1">First Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="text-sky-200 text-sm font-medium block mb-1">Last Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="input-field"
                  />
                </div>
              </div>

              {[
                { label: "Email *", field: "email", type: "email", placeholder: "jane@company.com" },
                { label: "Phone Number *", field: "phone", type: "tel", placeholder: "+1 (555) 000-0000" },
                { label: "Company / Venue Name", field: "company", type: "text", placeholder: "Acme Corp" },
                { label: "Type of Business *", field: "business", type: "text", placeholder: "Grocery store, event venue..." },
              ].map(({ label, field, type, placeholder }) => (
                <div key={field}>
                  <label className="text-sky-200 text-sm font-medium block mb-1">{label}</label>
                  <input
                    type={type}
                    required={label.includes("*")}
                    placeholder={placeholder}
                    value={formData[field as keyof typeof formData] as string}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="input-field"
                  />
                </div>
              ))}

              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.isEvent}
                  onChange={(e) => setFormData({ ...formData, isEvent: e.target.checked })}
                  className="w-4 h-4"
                  style={{ accentColor: "#0ea5e9" }}
                />
                <span className="text-sky-200 text-sm">This is for an event</span>
              </label>

              <div>
                <label className="text-sky-200 text-sm font-medium block mb-1">Street Address</label>
                <input
                  type="text"
                  placeholder="123 Main St"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="input-field"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "City", field: "city", placeholder: "Austin" },
                  { label: "State", field: "state", placeholder: "TX" },
                  { label: "ZIP", field: "zip", placeholder: "78701" },
                ].map(({ label, field, placeholder }) => (
                  <div key={field}>
                    <label className="text-sky-200 text-sm font-medium block mb-1">{label}</label>
                    <input
                      type="text"
                      placeholder={placeholder}
                      value={formData[field as keyof typeof formData] as string}
                      onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                      className="input-field"
                    />
                  </div>
                ))}
              </div>

              {[
                { label: "Monthly foot traffic", field: "footTraffic", placeholder: "e.g. 2000 visitors/month" },
                { label: "Primary age range of visitors", field: "ageRange", placeholder: "e.g. 18–35" },
                { label: "Desired monthly quantity (cases)", field: "monthlyQty", placeholder: "e.g. 50 cases" },
              ].map(({ label, field, placeholder }) => (
                <div key={field}>
                  <label className="text-sky-200 text-sm font-medium block mb-1">{label}</label>
                  <input
                    type="text"
                    placeholder={placeholder}
                    value={formData[field as keyof typeof formData] as string}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="input-field"
                  />
                </div>
              ))}

              <div>
                <label className="text-sky-200 text-sm font-medium block mb-2">Do you have a loading dock?</label>
                <div className="flex gap-6">
                  {["Yes", "No"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer text-sky-200 text-sm">
                      <input
                        type="radio"
                        name="loadingDock"
                        value={opt}
                        checked={formData.loadingDock === opt}
                        onChange={(e) => setFormData({ ...formData, loadingDock: e.target.value })}
                        style={{ accentColor: "#0ea5e9" }}
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sky-200 text-sm font-medium block mb-1">Why do you want to distribute FreeWater®? *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about your motivation..."
                  value={formData.whyDistributing}
                  onChange={(e) => setFormData({ ...formData, whyDistributing: e.target.value })}
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
                  I agree to be contacted by FreeWater® regarding my distribution application.
                </span>
              </label>

              <button type="submit" className="btn-primary w-full text-center">
                Submit Application →
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
