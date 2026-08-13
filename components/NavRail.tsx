"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const navItems = [
  { href: "/", icon: "home", label: "Home" },
  { href: "/about", icon: "person", label: "About" },
  { href: "/work", icon: "work", label: "Work" },
  { href: "/services", icon: "auto_awesome", label: "Services" },
  { href: "/blog", icon: "description", label: "Blog" },
  { href: "/contact", icon: "send", label: "Contact" },
];

export default function NavRail() {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!navRef.current || !mounted) return;
    gsap.fromTo(
      navRef.current,
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.6 }
    );
  }, [mounted]);

  /**
   * Toggle dark/light mode by flipping the `dark` class on <html>.
   * Persist the preference in localStorage so the anti-flash script
   * in layout.tsx can restore it on the next page load.
   */
  const toggleTheme = () => {
    const html = document.documentElement;
    const willBeDark = html.classList.toggle("dark");
    try {
      localStorage.setItem("theme", willBeDark ? "dark" : "light");
    } catch (_) {
      /* ignore storage errors in restricted environments */
    }
  };

  return (
    <nav className="hidden md:flex flex-col justify-center fixed right-6 top-0 h-screen z-40">
      <div
        ref={navRef}
        className="glass-panel rounded-full py-6 px-2 flex flex-col items-center gap-1 shadow-2xl"
        style={{ opacity: 0 }}
      >
        {/* ── Theme toggle ── */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-black/5 dark:hover:bg-white/10 hover:text-on-surface transition-all duration-200"
          title="Toggle Theme"
          aria-label="Toggle Theme"
        >
          {/* Sun icon — visible in light mode, hidden in dark */}
          <span
            className="material-symbols-outlined dark:hidden"
            style={{ fontSize: "20px" }}
          >
            light_mode
          </span>
          {/* Moon icon — hidden in light mode, visible in dark */}
          <span
            className="material-symbols-outlined hidden dark:inline-block"
            style={{ fontSize: "20px" }}
          >
            dark_mode
          </span>
        </button>

        <div className="h-px w-6 bg-black/10 dark:bg-white/10 my-2" />

        {/* ── Nav Items ── */}
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
                isActive
                  ? "bg-primary-container/15 text-primary-container"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-black/5 dark:hover:bg-white/5"
              }`}
              aria-label={item.label}
            >
              <span
                className="material-symbols-outlined"
                style={{
                  fontSize: "20px",
                  fontVariationSettings: isActive ? '"FILL" 1' : '"FILL" 0',
                }}
              >
                {item.icon}
              </span>

              {/* Active indicator dot */}
              {isActive && (
                <span className="absolute -left-1 w-1 h-4 bg-primary-container rounded-full" />
              )}

              {/* Tooltip */}
              <div className="nav-tooltip">{item.label}</div>
            </Link>
          );
        })}

        <div className="h-px w-6 bg-black/10 dark:bg-white/10 my-2" />

        {/* ── Back to top ── */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-black/5 dark:hover:bg-white/10 hover:text-on-surface transition-all duration-200"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontSize: "20px" }}
          >
            arrow_upward
          </span>
        </button>
      </div>
    </nav>
  );
}
