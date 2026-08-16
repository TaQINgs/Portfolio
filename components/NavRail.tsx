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
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read the current theme from the <html> class (set by the anti-flash script)
    setIsDark(document.documentElement.classList.contains("dark"));
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
   * Syncs React state so the icon updates immediately without a flash.
   */
  const toggleTheme = () => {
    const html = document.documentElement;
    const willBeDark = html.classList.toggle("dark");
    setIsDark(willBeDark);
    try {
      localStorage.setItem("theme", willBeDark ? "dark" : "light");
    } catch (_) {
      /* ignore storage errors */
    }
  };

  // Before client mounts, show sun as default (matches :root = light)
  const themeIcon    = !mounted ? "light_mode" : isDark ? "dark_mode" : "light_mode";
  const themeTooltip = !mounted ? "Dark Mode"  : isDark ? "Light Mode" : "Dark Mode";

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
          className="relative group w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-black/5 dark:hover:bg-white/10 hover:text-on-surface transition-all duration-200"
          aria-label="Toggle Theme"
        >
          {/* Single icon — controlled by React state, no CSS show/hide conflict */}
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
            {themeIcon}
          </span>

          {/* Tooltip — opposite of current mode (tells user what clicking will do) */}
          <div className="nav-tooltip">{themeTooltip}</div>
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
          className="relative group w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-black/5 dark:hover:bg-white/10 hover:text-on-surface transition-all duration-200"
          aria-label="Back to Top"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>
            arrow_upward
          </span>
          <div className="nav-tooltip">Back to Top</div>
        </button>
      </div>
    </nav>
  );
}
