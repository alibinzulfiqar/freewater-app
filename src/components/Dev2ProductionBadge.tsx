import Image from "next/image";

interface Props {
  variant?: "dark" | "light";
}

export default function Dev2ProductionBadge({ variant = "dark" }: Props) {
  const isDark = variant === "dark";

  return (
    <a
      href="https://dev2production.com"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex flex-col items-center gap-2 mt-6 group"
      aria-label="Developed by Dev2Production"
    >
      <span
        className={`text-xs font-medium tracking-widest uppercase ${
          isDark ? "text-sky-200/70" : "text-slate-400"
        }`}
      >
        Developed by
      </span>
      <span
        className={`flex items-center justify-center px-4 py-2 rounded-xl border transition-all duration-300 group-hover:scale-105 ${
          isDark
            ? "bg-white/10 border-white/20 group-hover:bg-white/20"
            : "bg-slate-100 border-slate-200 group-hover:bg-slate-200"
        }`}
      >
        <Image
          src="/images/dev2production-logo.png"
          alt="Dev2Production"
          width={160}
          height={48}
          className="h-10 w-auto object-contain"
        />
      </span>
    </a>
  );
}
