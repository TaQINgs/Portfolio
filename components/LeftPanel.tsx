"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const roles = ["Designer", "Frontend", "Data Analyst"];

function useTypingEffect(
  words: string[],
  typingSpeed = 100,
  deletingSpeed = 60,
  pauseDuration = 1800
) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      if (displayed.length < currentWord.length) {
        timeout = setTimeout(
          () => setDisplayed(currentWord.slice(0, displayed.length + 1)),
          typingSpeed
        );
      } else {
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(
          () => setDisplayed(currentWord.slice(0, displayed.length - 1)),
          deletingSpeed
        );
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return displayed;
}

export default function LeftPanel() {
  const panelRef = useRef<HTMLElement>(null);
  const typedRole = useTypingEffect(roles);

  useEffect(() => {
    if (!panelRef.current) return;
    gsap.fromTo(
      panelRef.current,
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  return (
    <>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .cursor-blink {
          animation: blink 1s step-end infinite;
        }
      `}</style>

      <aside
        ref={panelRef}
        className="
          relative
          xl:fixed xl:left-4 xl:top-4 xl:bottom-4
          w-[calc(100%-2rem)] md:w-[420px] lg:w-[460px] xl:w-[500px]
          mx-4 md:mx-auto xl:mx-0
          mt-20 md:mt-8 xl:mt-0
          overflow-visible
          z-20 flex flex-col
        "
        style={{
          opacity: 0,
          borderRadius: "40px",
          border: "2px solid #636363",
          boxShadow: "0 0 0 1px rgba(0,0,0,0.5), 0 28px 70px rgba(0,0,0,0.75)",
        }}
      >
        {/* ── Clipped bg (photo + gradient) ── */}
        <div className="absolute inset-0 overflow-hidden" style={{ borderRadius: "38px" }}>
          <img
            src="/img/1.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.60) 40%, rgba(0,0,0,0.05) 100%)",
            }}
          />
        </div>

        {/* ── Content ── */}
        <div
          className="relative z-10 flex flex-col"
          style={{ minHeight: "520px", height: "clamp(520px, calc(100vh - 2rem), 900px)" }}
        >
          {/* TOP ROW */}
          <div className="flex items-start justify-between p-4">
            {/* Logo */}
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{
                background: "rgba(15,15,15,0.80)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="material-symbols-outlined text-white" style={{ fontSize: "17px" }}>
                architecture
              </span>
            </div>

            {/* Social icons */}
            <div className="flex flex-col gap-1.5">
              {[
                { label: "X", isText: true, content: "𝕏" },
                { label: "Instagram", icon: "photo_camera" },
                { label: "LinkedIn", icon: "business_center" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-white hover:scale-105 transition-transform"
                  style={{
                    background: "rgba(15,15,15,0.80)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {s.isText ? (
                    <span className="font-geist text-[12px] font-bold leading-none">{s.content}</span>
                  ) : (
                    <span className="material-symbols-outlined" style={{ fontSize: "15px" }}>{s.icon}</span>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* BOTTOM */}
          <div className="px-5 pb-5 pt-3">
            <h1
              className="font-grotesk font-bold text-white leading-tight mb-2"
              style={{ fontSize: "clamp(22px, 3.5vw, 32px)" }}
            >
              Hey, I&apos;m{" "}
              <span>
                {typedRole}
                <span
                  className="cursor-blink inline-block align-middle ml-[2px]"
                  style={{ width: "2px", height: "0.8em", background: "#fff", verticalAlign: "middle" }}
                />
              </span>
            </h1>

            <p style={{ color: "rgba(255,255,255,0.50)", fontSize: "12px", lineHeight: "1.6", marginBottom: "14px" }}>
              I help startups grow with smart design and no-code development,
              based in Cupertino, CA.
            </p>

            <div style={{ height: "1px", background: "linear-gradient(to right, rgba(255,255,255,0.18), transparent)", marginBottom: "14px" }} />

            {/* Buttons */}
            <div className="flex items-center gap-2">
              {/* Arrow circle */}
              <Link
                href="/contact"
                aria-label="Contact"
                className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform"
                style={{ background: "#59e073" }}
              >
                <span
                  className="material-symbols-outlined text-black"
                  style={{ fontSize: "16px", display: "inline-block", transform: "rotate(-45deg)" }}
                >
                  arrow_forward
                </span>
              </Link>

              {/* Let's talk */}
              <Link
                href="/contact"
                className="flex-1 text-center rounded-full font-geist font-bold uppercase hover:scale-[1.02] transition-transform"
                style={{
                  background: "#59e073",
                  color: "#003912",
                  fontSize: "11px",
                  letterSpacing: "0.05em",
                  padding: "9px 12px",
                  boxShadow: "0 0 16px rgba(89,224,115,0.28)",
                }}
              >
                Let&apos;s talk
              </Link>

              {/* Download CV */}
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-1 flex-shrink-0 hover:opacity-100 transition-opacity"
                style={{ color: "rgba(255,255,255,0.50)" }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: "14px" }}>download</span>
                <span className="font-geist uppercase" style={{ fontSize: "10px", letterSpacing: "0.05em", whiteSpace: "nowrap" }}>
                  Download CV
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Available for Work — physical left-side notch ── */}
        <div
          className="absolute z-20 flex items-center gap-2"
          style={{
            writingMode: "vertical-rl",
            top: "50%",
            /* sits flush against the left border */
            translate: "0 -50%",
            /* Same grey as card border — looks like a physical device button */
            background: "#2a2a2a",
            borderTop: "2px solid #636363",
            borderBottom: "2px solid #636363",
            borderLeft: "2px solid #636363",
            borderRight: "none",
            borderRadius: "0 10px 10px 0",
            padding: "14px 7px",
          }}
        >
          <div
            className="rounded-full animate-pulse"
            style={{
              width: "7px", height: "7px", flexShrink: 0,
              background: "#59e073",
              boxShadow: "0 0 6px rgba(89,224,115,0.8)",
            }}
          />
          <span
            className="font-geist text-white/55 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.18em" }}
          >
            Available for Work
          </span>
        </div>
      </aside>
    </>
  );
}
