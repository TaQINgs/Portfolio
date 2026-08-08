"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10, suffix: "+", label: "Year of experience" },
  { value: 6,  suffix: "x", label: "Industry Awards" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numbersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      stats.forEach((stat, i) => {
        const el = numbersRef.current[i];
        if (!el) return;
        const obj = { val: 0 };

        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.to(obj, {
              val: stat.value,
              duration: 1.8,
              ease: "power2.out",
              delay: i * 0.15,
              onUpdate: () => {
                el.textContent = Math.round(obj.val).toString();
              },
            });
          },
        });
      });

      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col gap-stack-lg">
      {stats.map((stat, i) => (
        <div key={i} className="stat-item" style={{ opacity: 0 }}>
          <div className="flex items-baseline gap-1">
            <span
              ref={(el) => { numbersRef.current[i] = el; }}
              className="stat-number text-on-surface"
            >
              0
            </span>
            <span className="stat-number text-primary-container">{stat.suffix}</span>
          </div>
          <div className="section-label mt-1" style={{ textTransform: "none", letterSpacing: "0.02em", fontSize: "13px" }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
