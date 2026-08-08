"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LeftPanel from "@/components/LeftPanel";
import NavRail from "@/components/NavRail";
import MobileHeader from "@/components/MobileHeader";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "UI Design", "Web App", "Branding", "No-Code"];

const projects = [
  {
    id: 1,
    title: "FinTrack Dashboard",
    category: "UI Design",
    tags: ["Figma", "Design System"],
    year: "2024",
    desc: "A real-time financial analytics dashboard with 50+ custom components.",
    accent: "#59e073",
  },
  {
    id: 2,
    title: "Bloom E-Commerce",
    category: "No-Code",
    tags: ["Webflow", "CMS"],
    year: "2024",
    desc: "Full e-commerce platform built entirely in Webflow with custom interactions.",
    accent: "#ffb68f",
  },
  {
    id: 3,
    title: "NeoBank App",
    category: "UI Design",
    tags: ["Figma", "Prototyping"],
    year: "2023",
    desc: "Mobile banking experience for Gen-Z users. Award-winning visual identity.",
    accent: "#59e073",
  },
  {
    id: 4,
    title: "Luminary Brand",
    category: "Branding",
    tags: ["Brand Identity", "Motion"],
    year: "2023",
    desc: "Complete brand identity for a SaaS startup from logo to launch.",
    accent: "#ffdbca",
  },
  {
    id: 5,
    title: "DevFlow SaaS",
    category: "Web App",
    tags: ["Next.js", "Framer"],
    year: "2022",
    desc: "Developer productivity tool with a stunning landing page and onboarding flow.",
    accent: "#59e073",
  },
  {
    id: 6,
    title: "Studio Portfolio",
    category: "No-Code",
    tags: ["Framer", "Animation"],
    year: "2022",
    desc: "Award-winning portfolio site for a creative studio with immersive scroll effects.",
    accent: "#ffb68f",
  },
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const pageRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".page-header", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, ease: "power3.out"
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".project-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.96 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" }
    );
  }, [filtered]);

  return (
    <div className="flex min-h-screen bg-background">
      <MobileHeader />
      <LeftPanel />
      <main className="flex-1 xl:ml-left-panel-width-lg min-h-screen p-8 md:px-container-padding md:py-container-padding md:pr-24">
        <div ref={pageRef} className="max-w-5xl mx-auto w-full pt-16 md:pt-0">
          {/* Header */}
          <div className="page-header mb-10" style={{ opacity: 0 }}>
            <p className="section-label mb-3">02 / Work</p>
            <h1 className="font-grotesk text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mb-4">
              Selected <span className="text-primary-container">Projects</span>
            </h1>
            <p className="text-on-surface-variant text-body-md max-w-lg">
              A curated selection of projects spanning UI design, branding, and no-code development.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full font-geist text-label-sm uppercase tracking-widest transition-all duration-200 ${
                  activeFilter === cat
                    ? "bg-primary-container text-on-primary-container shadow-[0_0_20px_rgba(89,224,115,0.2)]"
                    : "bg-surface-container text-on-surface-variant hover:text-on-surface border border-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="project-card group relative bg-surface-container rounded-2xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer overflow-hidden"
                style={{ opacity: 0 }}
              >
                {/* Accent glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl"
                  style={{ background: project.accent }}
                />

                {/* Top bar */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-2 flex-wrap">
                    {project.tags.map((tag) => (
                      <span key={tag} className="font-geist text-[10px] uppercase tracking-wider text-on-surface-variant bg-surface-container-high px-3 py-1 rounded-full border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="font-geist text-[11px] text-on-surface-variant">{project.year}</span>
                </div>

                {/* Visual placeholder */}
                <div
                  className="w-full h-40 rounded-xl mb-5 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${project.accent}10, ${project.accent}05)` }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl opacity-20"
                    style={{ background: project.accent }}
                  />
                  <div className="absolute inset-0 border border-white/5 rounded-xl" />
                </div>

                {/* Content */}
                <h3 className="font-grotesk text-xl font-semibold text-on-surface mb-2 group-hover:text-primary-container transition-colors">
                  {project.title}
                </h3>
                <p className="text-on-surface-variant text-[15px] leading-relaxed mb-4">{project.desc}</p>

                {/* Link */}
                <div className="flex items-center gap-2 text-on-surface-variant group-hover:text-primary-container transition-colors">
                  <span className="font-geist text-label-sm uppercase tracking-wider">View Project</span>
                  <span className="material-symbols-outlined -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" style={{ fontSize: "16px" }}>
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <NavRail />
    </div>
  );
}
