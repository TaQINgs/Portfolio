import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      title: "UI/UX Design",
      desc: "End-to-end product design from wireframes to high-fidelity prototypes. I craft interfaces that are intuitive, beautiful, and conversion-focused.",
      items: ["User Research", "Wireframing", "UI Design", "Prototyping", "Usability Testing"],
      accent: "#59e073",
    },
    {
      number: "02",
      title: "No-Code Development",
      desc: "Production-ready websites and web apps built without traditional code. Faster delivery, lower cost, same premium quality.",
      items: ["Webflow Development", "Framer Sites", "CMS Setup", "E-Commerce", "Custom Animations"],
      accent: "#ffb68f",
    },
    {
      number: "03",
      title: "Design Systems",
      desc: "Scalable design systems and component libraries that keep your product consistent as it grows.",
      items: ["Component Library", "Token System", "Documentation", "Figma Variables", "Style Guide"],
      accent: "#59e073",
    },
    {
      number: "04",
      title: "Brand Identity",
      desc: "Strategic visual identities that communicate your brand's essence and stand out in crowded markets.",
      items: ["Logo Design", "Color System", "Typography", "Brand Guidelines", "Motion Identity"],
      accent: "#ffdbca",
    },
  ];

  return (
    <div className="pt-16 md:pt-0">
      <div className="mb-12">
        <p className="section-label mb-3">03 / Services</p>
        <h1 className="font-grotesk text-headline-lg-mobile md:text-headline-lg font-bold text-on-surface mb-4">
          What I <span className="text-primary-container">offer</span>
        </h1>
        <p className="text-on-surface-variant text-body-md max-w-xl">
          A focused set of high-impact services designed to help your product look stunning and perform flawlessly.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.number}
            className="group relative bg-surface-container rounded-2xl p-8 border border-white/5 hover:border-white/10 transition-all duration-300 overflow-hidden"
          >
            <div
              className="absolute top-0 left-0 w-48 h-48 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-700 blur-3xl -translate-x-1/2 -translate-y-1/2"
              style={{ background: service.accent }}
            />
            <div className="flex justify-between items-start mb-6">
              <span className="font-geist text-[11px] text-primary-container uppercase tracking-widest">{service.number}</span>
              <span
                className="w-8 h-8 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ background: service.accent }}
              />
            </div>
            <h2 className="font-grotesk text-xl font-semibold text-on-surface mb-3">{service.title}</h2>
            <p className="text-on-surface-variant text-[15px] leading-relaxed mb-6">{service.desc}</p>
            <div className="flex flex-wrap gap-2">
              {service.items.map((item) => (
                <span
                  key={item}
                  className="font-geist text-[10px] uppercase tracking-wider text-on-surface-variant bg-surface-container-high px-3 py-1.5 rounded-full border border-white/5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
