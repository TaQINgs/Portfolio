"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";

const navItems = [
  { href: "/",         label: "Home"     },
  { href: "/about",    label: "About"    },
  { href: "/work",     label: "Work"     },
  { href: "/services", label: "Services" },
  { href: "/blog",     label: "Blog"     },
  { href: "/contact",  label: "Contact"  },
];

export default function TopNavbar() {
  const pathname  = usePathname();
  const navRef    = useRef<HTMLElement>(null);
  const [mounted,  setMounted]  = useState(false);
  const [isDark,   setIsDark]   = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── Mount + theme init ── */
  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── GSAP entrance ── */
  useEffect(() => {
    if (!navRef.current || !mounted) return;
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.2 }
    );
  }, [mounted]);

  const toggleTheme = () => {
    const html      = document.documentElement;
    const willBeDark = html.classList.toggle("dark");
    setIsDark(willBeDark);
    try { localStorage.setItem("theme", willBeDark ? "dark" : "light"); } catch (_) {}
  };

  const themeIcon    = !mounted ? "light_mode" : isDark ? "dark_mode"  : "light_mode";
  const themeTooltip = !mounted ? "Dark Mode"  : isDark ? "Light Mode" : "Dark Mode";

  return (
    <header
      ref={navRef}
      className="hidden md:flex fixed top-0 left-0 right-0 z-50 items-center justify-between
                 px-8 h-16"
      style={{
        opacity: 0,
        background: scrolled
          ? "var(--glass-panel-bg)"
          : "transparent",
        backdropFilter:       scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: "1px solid var(--divider-color)",
        transition: "background 0.3s ease, backdrop-filter 0.3s ease",
      }}
    >
      {/* ── Logo ── */}
      <Link
        href="/"
        className="font-grotesk text-xl font-bold text-on-surface tracking-tight hover:opacity-80 transition-opacity"
      >
        Isak<span className="text-primary-container">.</span>dev
      </Link>

      {/* ── Nav links ── */}
      <nav className="flex items-center gap-1" aria-label="Main navigation">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative px-4 py-1.5 rounded-full
                font-geist text-[11px] uppercase tracking-widest
                transition-all duration-200
                ${isActive
                  ? "text-primary-container bg-primary-container/10"
                  : "text-on-surface-variant hover:text-on-surface hover:bg-black/5 dark:hover:bg-white/5"
                }
              `}
            >
              {item.label}
              {/* Active underline dot */}
              {isActive && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-container" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* ── Right actions ── */}
      <div className="flex items-center gap-2">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label={themeTooltip}
          title={themeTooltip}
          className="w-9 h-9 rounded-full flex items-center justify-center
                     text-on-surface-variant hover:text-on-surface
                     hover:bg-black/5 dark:hover:bg-white/10
                     transition-all duration-200"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
            {themeIcon}
          </span>
        </button>

        {/* CTA — Let's talk */}
        <Link
          href="/contact"
          className="flex items-center gap-1.5 rounded-full font-geist font-bold uppercase
                     hover:scale-105 transition-transform"
          style={{
            background:    "var(--color-primary-container)",
            color:         "var(--color-on-primary-container)",
            fontSize:      "10px",
            letterSpacing: "0.06em",
            padding:       "7px 16px",
            boxShadow:     "0 0 14px rgba(89,224,115,0.20)",
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: "13px" }}>
            send
          </span>
          Let&apos;s talk
        </Link>
      </div>
    </header>
  );
}
