"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import LeftPanel from "@/components/LeftPanel";
import NavRail from "@/components/NavRail";
import MobileHeader from "@/components/MobileHeader";

const contactInfo = [
  { icon: "mail", label: "Email", value: "hello@isak.dev", href: "mailto:hello@isak.dev" },
  { icon: "location_on", label: "Location", value: "Cupertino, CA", href: "#" },
  { icon: "schedule", label: "Availability", value: "Open for Projects", href: "#" },
];

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ name: "", email: "", message: "", budget: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!pageRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-item", { opacity: 0, y: 30 }, {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: "power3.out"
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    gsap.to(formRef.current, {
      opacity: 0, y: -20, duration: 0.4, ease: "power2.in",
      onComplete: () => setSubmitted(true),
    });
  };

  const budgets = ["< $5k", "$5k–$15k", "$15k–$50k", "$50k+", "Let's talk"];

  return (
    <div className="flex min-h-screen bg-background">
      <MobileHeader />
      <LeftPanel />
      <main className="flex-1 xl:ml-left-panel-width-lg min-h-screen p-8 md:px-container-padding md:py-container-padding md:pr-24 flex items-center">
        <div ref={pageRef} className="max-w-3xl mx-auto w-full pt-16 md:pt-0">
          {/* Header */}
          <div className="contact-item mb-10" style={{ opacity: 0 }}>
            <p className="section-label mb-3">04 / Contact</p>
            <h1 className="font-grotesk text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mb-4">
              Let&apos;s build something<br />
              <span className="text-primary-container">great together</span>
            </h1>
            <p className="text-on-surface-variant text-body-md max-w-lg">
              Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Info */}
          <div className="contact-item grid grid-cols-1 md:grid-cols-3 gap-4 mb-10" style={{ opacity: 0 }}>
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                className="bg-surface-container rounded-2xl p-5 border border-white/5 hover:border-primary-container/30 hover:bg-surface-container-high transition-all duration-200 group"
              >
                <span className="material-symbols-outlined text-primary-container mb-3 block" style={{ fontSize: "22px" }}>
                  {info.icon}
                </span>
                <p className="font-geist text-[10px] text-on-surface-variant uppercase tracking-wider mb-1">{info.label}</p>
                <p className="font-grotesk text-on-surface font-medium text-sm">{info.value}</p>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="contact-item" style={{ opacity: 0 }}>
            {!submitted ? (
              <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="font-geist text-[11px] text-on-surface-variant uppercase tracking-wider">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 font-grotesk focus:outline-none focus:border-primary-container/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-geist text-[11px] text-on-surface-variant uppercase tracking-wider">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 font-grotesk focus:outline-none focus:border-primary-container/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Budget selector */}
                <div className="flex flex-col gap-2">
                  <label className="font-geist text-[11px] text-on-surface-variant uppercase tracking-wider">Budget Range</label>
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((b) => (
                      <button
                        key={b}
                        type="button"
                        onClick={() => setFormState({ ...formState, budget: b })}
                        className={`px-4 py-2 rounded-full font-geist text-[11px] uppercase tracking-wider transition-all duration-200 ${
                          formState.budget === b
                            ? "bg-primary-container text-on-primary-container"
                            : "bg-surface-container border border-white/10 text-on-surface-variant hover:text-on-surface"
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-geist text-[11px] text-on-surface-variant uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="bg-surface-container border border-white/10 rounded-xl px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 font-grotesk focus:outline-none focus:border-primary-container/50 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="self-start bg-primary-container text-on-primary-container px-8 py-3.5 rounded-full font-geist text-label-sm uppercase tracking-widest font-bold hover:scale-105 transition-transform flex items-center gap-2 glow-effect shadow-[0_0_30px_rgba(89,224,115,0.15)]"
                >
                  Send Message
                  <span className="material-symbols-outlined -rotate-45" style={{ fontSize: "18px" }}>send</span>
                </button>
              </form>
            ) : (
              <div className="bg-surface-container rounded-2xl p-10 border border-primary-container/20 text-center">
                <div className="w-16 h-16 rounded-full bg-primary-container/10 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontSize: "28px", fontVariationSettings: '"FILL" 1' }}>
                    check_circle
                  </span>
                </div>
                <h3 className="font-grotesk text-xl font-semibold text-on-surface mb-2">Message Sent!</h3>
                <p className="text-on-surface-variant">I&apos;ll get back to you within 24 hours. Looking forward to it!</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <NavRail />
    </div>
  );
}
