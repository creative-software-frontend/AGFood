import Hero from "@/components/sections/Hero";
import ExportSection from "@/components/sections/ExportSection";
import About from "@/components/sections/About";
import AboutCollapseSection from "@/components/sections/AboutCollapseSection";
import Reviews from "@/components/sections/Reviews";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Hero />
        <About />
        <AboutCollapseSection />
        <ExportSection />
        <Reviews />
    </div>
  );
}