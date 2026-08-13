"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import StatsSection from "./StatsSection";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef    = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const badgeRef   = useRef<SVGSVGElement>(null);
  const imageRef   = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Headline word stagger
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll(".word");
        gsap.fromTo(words,
          { opacity: 0, y: 50, rotateX: -15 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.85, stagger: 0.07, ease: "power3.out", delay: 0.35 }
        );
      }

      // Badge continuous spin
      if (badgeRef.current) {
        gsap.to(badgeRef.current, { rotation: 360, duration: 14, ease: "none", repeat: -1 });
      }

      // 3D image entrance + float
      if (imageRef.current) {
        gsap.fromTo(imageRef.current,
          { opacity: 0, scale: 0.88, y: 24 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: "power3.out", delay: 0.5 }
        );
        gsap.to(imageRef.current, {
          y: -10, duration: 2.8, ease: "power1.inOut", yoyo: true, repeat: -1, delay: 1.6,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="max-w-4xl mx-auto w-full mt-20 md:mt-0 relative">

      {/* ── Desktop header bar ── */}
      <div className="hidden md:flex justify-between items-center absolute -top-14 left-0 right-0">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div
            className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: "1px solid var(--avatar-border)" }}
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfYAhzYNtoEmMG1ciCHExQzc_hLFTPc8KjHeVWXXNKMzurAUUjbfExOM1YtpW0rQyTHjj4RzFoOFSp9EL2Yn4n5KVDGTLir-i2j4eT81Txv3IGRVvCNJtTUoMVngpgnu9L_-1FDFSynSrIIoN-19HVOQEPQxvbIDvrhVzMNlpHp0xqwI32U2TdVt12VwFS9i5DUwJRW9QbpR7A4KIRvIILHphpOKA8Riu-GDLEz7zKjAzhEY3O_w"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-grotesk text-sm font-semibold text-on-surface leading-tight">
              Alexander Isak
            </p>
            <p className="font-geist text-[11px] text-on-surface-variant">
              UI Designer &amp; No-Code Developer
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-geist text-[11px] text-on-surface-variant">
            {new Date().toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}
          </p>
          <p className="font-geist text-[11px] text-on-surface-variant">
            {new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
      </div>

      {/* ── Main headline ── */}
      <h2
        ref={headlineRef}
        className="font-grotesk font-bold text-on-surface leading-tight mb-stack-lg"
        style={{ fontSize: "clamp(36px, 6vw, 72px)", perspective: "1000px" }}
      >
        {["Start", "building"].map((w, i) => (
          <span key={i} className="word inline-block mr-[0.22em]" style={{ opacity: 0 }}>{w}</span>
        ))}
        <span
          className="word inline-block bg-primary-container text-on-primary px-4 py-1 rounded-full -rotate-2 hover:rotate-0 transition-transform cursor-pointer mr-[0.22em]"
          style={{ opacity: 0 }}
        >
          websites
        </span>
        <br className="hidden md:block" />
        {["people", "remember"].map((w, i) => (
          <span key={i} className="word inline-block mr-[0.22em]" style={{ opacity: 0 }}>{w}</span>
        ))}
      </h2>

      {/* ── Grid: Stats + Visual ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        {/* Stats */}
        <div className="md:col-span-4 order-2 md:order-1">
          <StatsSection />
        </div>

        {/* 3D Visual */}
        <div className="md:col-span-8 order-1 md:order-2 relative h-[280px] md:h-[480px] flex items-center justify-center">
          <img
            ref={imageRef}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiGVowCIE0NCZVDeDxbBA93sMOqXrempVFxPc5WfKw5qz5XeN8jl9Y2454buuGAGTKO7wGZVLxQtKV0ei2gUfjT5dcpjmuiC244uZn5NX38f9EhQ4uSJTqxilYrVPRUAK4ZhZknjvrQNTYLSWXum9SZ_2yJBcLoSflikrNw0nkBVlVtmYpcHnY_mjyvXRvhPkDlWz1Q1Xx9FATJ1HO3a1IG0OVxSPSmxaUayQx-qnfXvOa8Xq1Xg"
            alt="3D Visual"
            className="max-h-full object-contain"
            style={{ opacity: 0, filter: "drop-shadow(0 0 50px rgba(89,224,115,0.22))" }}
          />

          {/* Rotating award badge */}
          <div className="absolute top-1/4 right-1/4 w-28 h-28">
            <svg
              ref={badgeRef}
              className="w-full h-full"
              viewBox="0 0 100 100"
              style={{ color: "var(--badge-color)" }}
            >
              <path
                id="badge-curve"
                d="M 50 50 m -38 0 a 38 38 0 1 1 76 0 a 38 38 0 1 1 -76 0"
                fill="transparent"
              />
              <text fill="currentColor" style={{ fontSize: "9px" }}>
                <textPath href="#badge-curve">AWARD WINNING AGENCY - SINCE 2022 - </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ border: "1px solid var(--badge-inner-border)" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "20px", color: "var(--badge-color)" }}>
                  all_inclusive
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Clients bar ── */}
      <div
        className="mt-stack-lg pt-stack-md flex flex-col md:flex-row items-start md:items-center justify-between gap-stack-md"
        style={{ borderTop: "1px solid var(--divider-color)" }}
      >
        <div className="flex items-center gap-2 text-on-surface-variant">
          <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>language</span>
          <span className="font-geist text-[11px] uppercase tracking-wider">
            Our clients (2015-25©)
          </span>
        </div>

        {/* Client logos — matching reference "Logoipsum" style */}
        <div
          className="flex items-center gap-8 transition-all duration-700 cursor-pointer"
          style={{ opacity: 0.45, filter: "grayscale(1)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLDivElement).style.opacity = "1";
            (e.currentTarget as HTMLDivElement).style.filter = "grayscale(0)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLDivElement).style.opacity = "0.45";
            (e.currentTarget as HTMLDivElement).style.filter = "grayscale(1)";
          }}
        >
          {/* Logoipsum-style text logos */}
          {[
            { icon: "hexagon", name: "Logoipsum" },
            { icon: "pentagon", name: "Logoipsum" },
            { icon: "star", name: "" },
          ].map((brand, i) => (
            <div key={i} className="flex items-center gap-1.5 text-on-surface-variant">
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>{brand.icon}</span>
              {brand.name && (
                <span className="font-grotesk font-semibold text-[13px] tracking-tight">{brand.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
