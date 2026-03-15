"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const subjectOptions = [
  "General Inquiry",
  "Advertising",
  "Distribution",
  "Investor",
  "Press / Media",
  "Partnership",
  "Other",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    subject: "", message: "", consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-sky-400 blur-3xl" />
          <div className="absolute bottom-5 left-10 w-48 h-48 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="flex items-center justify-center gap-2 text-sky-400 text-sm font-medium mb-4">
            <Link href="/" className="hover:text-sky-300 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </div>
          <h1 className="section-heading text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Have a question, want to advertise, distribute, invest, or just say hi?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left – Bottle image + info */}
            <div>
              <div className="flex justify-center mb-10">
                <div className="float-animation">
                  <Image
                    src="/images/aluminum-bottle.png"
                    alt="FreeWater aluminum bottle"
                    width={280}
                    height={400}
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              <div className="space-y-5">
                {[
                  {
                    icon: "📧",
                    label: "Email",
                    value: "hello@freewater.io",
                    href: "mailto:hello@freewater.io",
                  },
                  {
                    icon: "📍",
                    label: "Based in",
                    value: "Austin, Texas",
                    href: undefined,
                  },
                  {
                    icon: "📱",
                    label: "Social",
                    value: "@drinkfreewater",
                    href: "https://www.instagram.com/drinkfreewater",
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl bg-sky-50 border border-sky-100">
                    <div className="text-2xl w-10 text-center">{item.icon}</div>
                    <div>
                      <div className="text-xs font-semibold text-sky-500 uppercase tracking-wider">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-slate-700 font-medium hover:text-sky-500 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-slate-700 font-medium">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Form */}
            <div>
              {submitted ? (
                <div className="rounded-3xl p-10 text-center bg-sky-50 border border-sky-100">
                  <div className="text-5xl mb-4">✉️</div>
                  <h3 className="text-slate-800 text-2xl font-bold mb-2">Message sent!</h3>
                  <p className="text-slate-500">
                    Our team will get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-slate-600 text-sm font-medium block mb-1">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Jane"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="input-field-light"
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "12px",
                          border: "1.5px solid #e2e8f0",
                          background: "#f8fafc",
                          outline: "none",
                          fontSize: "14px",
                          color: "#1e293b",
                          transition: "border-color 0.2s",
                        }}
                      />
                    </div>
                    <div>
                      <label className="text-slate-600 text-sm font-medium block mb-1">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "12px",
                          border: "1.5px solid #e2e8f0",
                          background: "#f8fafc",
                          outline: "none",
                          fontSize: "14px",
                          color: "#1e293b",
                        }}
                      />
                    </div>
                  </div>

                  {[
                    { label: "Email *", field: "email", type: "email", placeholder: "jane@gmail.com" },
                    { label: "Phone Number", field: "phone", type: "tel", placeholder: "+1 (555) 000-0000" },
                  ].map(({ label, field, type, placeholder }) => (
                    <div key={field}>
                      <label className="text-slate-600 text-sm font-medium block mb-1">{label}</label>
                      <input
                        type={type}
                        required={label.includes("*")}
                        placeholder={placeholder}
                        value={formData[field as keyof typeof formData] as string}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "12px",
                          border: "1.5px solid #e2e8f0",
                          background: "#f8fafc",
                          outline: "none",
                          fontSize: "14px",
                          color: "#1e293b",
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="text-slate-600 text-sm font-medium block mb-1">Subject *</label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "12px",
                        border: "1.5px solid #e2e8f0",
                        background: "#f8fafc",
                        outline: "none",
                        fontSize: "14px",
                        color: formData.subject ? "#1e293b" : "#94a3b8",
                        appearance: "none",
                      }}
                    >
                      <option value="" disabled>Select a subject</option>
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-600 text-sm font-medium block mb-1">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "12px",
                        border: "1.5px solid #e2e8f0",
                        background: "#f8fafc",
                        outline: "none",
                        fontSize: "14px",
                        color: "#1e293b",
                        resize: "vertical",
                      }}
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
                    <span className="text-slate-500 text-sm">
                      I agree to be contacted by FreeWater® in response to my message.
                    </span>
                  </label>

                  <button type="submit" className="btn-primary w-full text-center">
                    Send Message →
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
