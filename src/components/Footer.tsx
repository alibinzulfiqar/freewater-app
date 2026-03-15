import Link from "next/link";
import { TikTok, Instagram, Facebook, Twitter, Youtube, Discord, Reddit, Linkedin } from "@/components/SocialIcons";

const socialLinks = [
  { href: "https://www.tiktok.com/@freewater.io", icon: TikTok, label: "TikTok" },
  { href: "https://instagram.com/freewater.io/", icon: Instagram, label: "Instagram" },
  { href: "https://www.facebook.com/FreeWaterTeam", icon: Facebook, label: "Facebook" },
  { href: "https://twitter.com/freewaterio", icon: Twitter, label: "Twitter" },
  { href: "https://www.youtube.com/channel/UCdV3zOuy9Cld-N1LX5MLeBA", icon: Youtube, label: "YouTube" },
  { href: "https://discord.gg/rfAUWdUWrU", icon: Discord, label: "Discord" },
  { href: "https://www.reddit.com/r/FreeWater_io/", icon: Reddit, label: "Reddit" },
  { href: "https://www.linkedin.com/company/freewater/", icon: Linkedin, label: "LinkedIn" },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { href: "/contact-us", label: "Contact" },
      { href: "/faq", label: "FAQ" },
      { href: "/token", label: "Book" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: "/advertise", label: "Order FreeWater® Boxes" },
      { href: "/advertise", label: "Order FreeWater® Bottles" },
      { href: "https://www.amazon.com/s?rh=n%3A7141123011%2Cp_4%3AFreeWater&ref=bl_sl_s_ap_web_7141123011", label: "Shop Apparel", external: true },
    ],
  },
  {
    title: "Join",
    links: [
      { href: "/distribute", label: "Distribute" },
      { href: "/advertise", label: "Advertise" },
      { href: "/hall-of-fame", label: "Hall Of Fame" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Wave Top */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 80" className="w-full block" preserveAspectRatio="none">
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z"
            fill="#f0f9ff"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-2">
              <span className="gradient-text">Because water</span>
              <br />
              <span className="text-white">should be free</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Help us spread the word and share our movement with your friends and family.
            </p>
            <Link href="/contact-us" className="btn-primary text-sm inline-flex items-center gap-2">
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center hover:bg-sky-500 transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {("external" in link && link.external) ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 text-sm hover:text-sky-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-slate-400 text-sm hover:text-sky-400 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>© 2025 Copyright FreeWater® All Rights Reserved</p>
          <p className="text-sky-500 font-medium">Water that gives back 💧</p>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-800/50 flex justify-center">
          <p className="text-slate-500 text-xs">
            Developed by{" "}
            <a
              href="https://dev2production.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 font-medium transition-colors"
            >
              Dev2Production
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
