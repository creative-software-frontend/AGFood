import AboutHero from "@/components/sections/about/AboutHero";
import CompanyInfo from "@/components/sections/about/CompanyInfo";
import VisionMission from "@/components/sections/about/VisionMission";
import Chairman from "@/components/sections/about/Chairman";
import Board from "@/components/sections/about/Board";
import Management from "@/components/sections/about/Management";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />

      <section id="info" className="scroll-mt-24">
        <CompanyInfo />
      </section>

      <section id="vision" className="scroll-mt-24">
        <VisionMission />
      </section>

      <section id="chairman" className="scroll-mt-24">
        <Chairman />
      </section>

      <section id="board" className="scroll-mt-24">
        <Board />
      </section>

      <section id="management" className="scroll-mt-24">
        <Management />
      </section>
    </main>
  );
}
