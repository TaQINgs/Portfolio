import LeftPanel from "@/components/LeftPanel";
import NavRail from "@/components/NavRail";
import MobileHeader from "@/components/MobileHeader";

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <MobileHeader />
      <LeftPanel />
      <main className="flex-1 xl:ml-left-panel-width-lg min-h-screen p-8 md:px-container-padding md:py-container-padding md:pr-24">
        <div className="max-w-5xl mx-auto w-full">{children}</div>
      </main>
      <NavRail />
    </div>
  );
}
