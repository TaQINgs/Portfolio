import LeftPanel from "@/components/LeftPanel";
import NavRail from "@/components/NavRail";
import MobileHeader from "@/components/MobileHeader";
import HeroSection from "@/components/HeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Isak.dev — UI Designer & No-Code Developer",
  description:
    "Alexander Isak — UI Designer & No-Code Developer helping startups grow with smart design. 10+ years of experience, 6x award-winning work.",
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Mobile Header */}
      <MobileHeader />

      {/* Fixed Left Panel */}
      <LeftPanel />

      {/* Main Content */}
      <main className="flex-1 xl:ml-left-panel-width-lg min-h-screen relative p-8 md:px-container-padding md:py-container-padding flex flex-col justify-center md:pr-24">
        <HeroSection />
      </main>

      {/* Right Navigation Rail */}
      <NavRail />
    </div>
  );
}
