"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LeftPanel from "@/components/LeftPanel";
import NavRail from "@/components/NavRail";
import MobileHeader from "@/components/MobileHeader";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "UI/UX Design", level: 95, color: "bg-primary-container" },
  { name: "No-Code Development", level: 90, color: "bg-primary-container" },
  { name: "Framer", level: 88, color: "bg-tertiary-container" },
  { name: "Figma", level: 95, color: "bg-primary-container" },
  { name: "Webflow", level: 85, color: "bg-tertiary-container" },
  { name: "React / Next.js", level: 75, color: "bg-primary-container" },
];

const timeline = [
  { year: "2024–Now", role: "Lead UI Designer", company: "Freelance", desc: "Helping startups build premium digital products." },
  { year: "2021–2024", role: "Senior Designer", company: "DesignCo Agency", desc: "Led design for 40+ client projects across SaaS and fintech." },
  { year: "2018–2021", role: "UI Designer", company: "TechStart Inc.", desc: "Built design systems and component libraries from scratch." },
  { year: "2015–2018", role: "Junior Designer", company: "Creative Studio", desc: "Mastered the fundamentals of visual design and branding." },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-section", { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: pageRef.current, start: "top 80%", once: true }
      });

      // Skill bars
      gsap.fromTo(".skill-bar-fill", { width: "0%" }, {
        width: (i, el) => el.dataset.level + "%",
        duration: 1.2, ease: "power2.out", stagger: 0.08, delay: 0.5,
        scrollTrigger: { trigger: ".skills-section", start: "top 80%", once: true }
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <MobileHeader />
      <LeftPanel />
      <main className="flex-1 xl:ml-left-panel-width-lg min-h-screen relative p-8 md:px-container-padding md:py-container-padding md:pr-24">
        <div ref={pageRef} className="max-w-3xl mx-auto w-full pt-16 md:pt-0">
          {/* Page Title */}
          <div className="about-section mb-12" style={{ opacity: 0 }}>
            <p className="section-label mb-3">01 / About</p>
            <h1 className="font-grotesk text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mb-4">
              Crafting digital<br />
              <span className="text-primary-container">experiences</span> that matter
            </h1>
            <p className="text-on-surface-variant text-body-md max-w-xl leading-relaxed">
              I&apos;m Alexander Isak — a UI Designer and No-Code Developer with 10+ years of experience helping startups and scale-ups build premium digital products. I believe great design is not just how it looks, but how it works and how it makes people feel.
            </p>
          </div>

          {/* Skills */}
          <div className="about-section skills-section mb-12" style={{ opacity: 0 }}>
            <p className="section-label mb-6">Skills & Expertise</p>
            <div className="flex flex-col gap-5">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-geist text-[13px] text-on-surface uppercase tracking-wider">{skill.name}</span>
                    <span className="font-geist text-[11px] text-on-surface-variant">{skill.level}%</span>
                  </div>
                  <div className="h-1 bg-surface-container-high rounded-full overflow-hidden">
                    <div
                      className={`skill-bar-fill h-full ${skill.color} rounded-full`}
                      style={{ width: "0%" }}
                      data-level={skill.level}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="about-section" style={{ opacity: 0 }}>
            <p className="section-label mb-6">Experience Timeline</p>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary-container via-outline-variant to-transparent" />
              <div className="flex flex-col gap-8 pl-8">
                {timeline.map((item, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-8 top-1.5 w-3 h-3 rounded-full border-2 border-primary-container bg-background" />
                    <span className="font-geist text-[11px] text-primary-container uppercase tracking-wider">{item.year}</span>
                    <h3 className="font-grotesk text-on-surface font-semibold mt-1">{item.role}</h3>
                    <p className="font-geist text-[12px] text-on-surface-variant uppercase tracking-wider mt-0.5">{item.company}</p>
                    <p className="text-on-surface-variant text-[15px] mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <NavRail />
    </div>
  );
}
