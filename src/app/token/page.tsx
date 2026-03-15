import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "How to Start a Free Product Company | FreeWater®",
  description:
    "Learn from FreeWater® founder Josh Cliffords how to launch a free product company funded entirely by advertising.",
};

export default function TokenPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-sky-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-cyan-400 blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center gap-2 text-sky-400 text-sm font-medium mb-4">
                <Link href="/" className="hover:text-sky-300 transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">Book</span>
              </div>
              <div className="inline-block bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-1.5 text-sky-300 text-sm font-medium mb-5">
                📖 Now Available on Amazon
              </div>
              <h1 className="section-heading text-white mb-5" style={{ fontFamily: "var(--font-poppins)" }}>
                How to Start a{" "}
                <span className="gradient-text">Free Product Company</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Written by FreeWater® founder Josh Cliffords — discover the model behind
                giving products away for free by funding them entirely through advertising.
              </p>
              <a
                href="https://a.co/d/jdnpHqu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block text-base px-8 py-3"
              >
                Order Now on Amazon →
              </a>
            </div>
            <div className="flex justify-center">
              <div className="float-animation">
                <Image
                  src="/images/five-bottles.jpg"
                  alt="FreeWater bottles showcasing brand diversity"
                  width={480}
                  height={360}
                  className="rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Details */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Book Cover */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-sky-400 to-cyan-300 blur-2xl opacity-30 scale-105" />
                <Image
                  src="/images/book-cover.jpg"
                  alt="How to Start a Free Product Company book cover"
                  width={340}
                  height={480}
                  className="relative rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <span className="text-sky-500 font-semibold text-sm uppercase tracking-wider">About the book</span>
              <h2 className="section-heading text-slate-800 mt-2 mb-6" style={{ fontFamily: "var(--font-poppins)" }}>
                The blueprint for a{" "}
                <span className="gradient-text">new economy</span>
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed text-lg">
                <p>
                  What if you could give your product away for free — and still make money?
                  That&apos;s the bold premise behind <strong className="text-slate-800">FreeWater®</strong>,
                  the world&apos;s first free bottled water company, where every container is paid for by advertisers.
                </p>
                <p>
                  In this book, founder <strong className="text-slate-800">Josh Cliffords</strong> breaks
                  down the exact business model that makes FreeWater® possible: the economics of ad-supported
                  products, how to find brand sponsors, how to scale distribution, and how to create a mission-driven
                  company that customers love.
                </p>
                <p>
                  Whether you&apos;re an aspiring entrepreneur, a brand marketer, or simply curious about
                  the future of commerce, this book gives you a practical roadmap to launching your own
                  free product company — and doing well by doing good.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "💡", title: "The Free Product Model", desc: "Understand how to give things away and still profit." },
                  { icon: "📈", title: "Scaling Distribution", desc: "From local Austin roots to a national operation." },
                  { icon: "🤝", title: "Finding Sponsors", desc: "How to attract advertisers who fund your product." },
                  { icon: "🌍", title: "Social Impact", desc: "How to build a business that actively helps the world." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 p-4 rounded-2xl bg-sky-50 border border-sky-100">
                    <div className="text-2xl mt-0.5">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1" style={{ fontFamily: "var(--font-poppins)" }}>
                        {item.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://a.co/d/jdnpHqu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-block text-center"
                >
                  Order on Amazon →
                </a>
                <Link href="/contact-us" className="btn-outline inline-block text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-sky-400 blur-3xl" />
        </div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h2 className="section-heading text-white mb-4" style={{ fontFamily: "var(--font-poppins)" }}>
            Ready to start your own{" "}
            <span className="gradient-text">free product company?</span>
          </h2>
          <p className="text-sky-200 text-lg mb-8">
            Join the FreeWater® movement — advertise, distribute, or just start sharing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/advertise" className="btn-primary inline-block">
              Advertise with Us
            </Link>
            <Link href="/distribute" className="btn-outline inline-block border-white text-white hover:bg-white hover:text-slate-900">
              Become a Distributor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
