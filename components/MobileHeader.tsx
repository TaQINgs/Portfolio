"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  }, []);

  useEffect(() => {
    if (!menuRef.current) return;
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -10, display: "none" },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out", display: "flex" }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          if (menuRef.current) menuRef.current.style.display = "none";
        },
      });
    }
  }, [isMenuOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="md:hidden flex justify-between items-center w-full px-6 py-4 fixed top-0 z-50 glass-panel"
        style={{ opacity: 0 }}
      >
        <Link href="/" className="font-grotesk text-2xl font-bold text-on-surface tracking-tight">
          Isak<span className="text-primary-container">.</span>dev
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-on-surface"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined" style={{ fontSize: "22px" }}>
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className="md:hidden fixed top-16 left-4 right-4 z-40 glass-panel rounded-2xl p-4 flex-col gap-1"
        style={{ display: "none" }}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-white/5 transition-all font-geist text-label-sm uppercase tracking-widest"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
