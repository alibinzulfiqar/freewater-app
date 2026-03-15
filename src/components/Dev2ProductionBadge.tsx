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
        className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 group-hover:scale-105 ${
          isDark
            ? "bg-white/10 border-white/20 group-hover:bg-white/20"
            : "bg-amber-950/5 border-amber-900/20 group-hover:bg-amber-950/10"
        }`}
      >
        {/* Circuit-gear icon */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* Gear outer */}
          <path
            d="M24 6l2.5 3.5 4-1 1.5 4 4 .5-.5 4 3.5 2.5-2 3.5 2 3.5-3.5 2.5.5 4-4 .5-1.5 4-4-1L24 42l-2.5-3.5-4 1-1.5-4-4-.5.5-4L9 29l2-3.5-2-3.5 3.5-2.5-.5-4 4-.5 1.5-4 4 1z"
            fill="#92400e"
          />
          {/* Gear inner circle */}
          <circle cx="24" cy="24" r="8" fill="#1c0a00" />
          {/* PCB trace lines */}
          <line x1="24" y1="16" x2="24" y2="10" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="24" y1="32" x2="24" y2="38" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="16" y1="24" x2="10" y2="24" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="32" y1="24" x2="38" y2="24" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
          {/* Center dot */}
          <circle cx="24" cy="24" r="3" fill="#f59e0b" />
        </svg>

        {/* Text */}
        <span className="flex flex-col leading-none">
          <span className="text-amber-600 font-black text-base tracking-tight">DEV2</span>
          <span className="text-amber-800 font-semibold text-[10px] tracking-widest uppercase">Production</span>
        </span>
      </span>
    </a>
  );
}
