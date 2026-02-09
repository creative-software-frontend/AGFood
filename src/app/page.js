import About from "@/components/sections/About";
import AboutCollapseSection from "@/components/sections/AboutCollapseSection";
import Hero from "@/components/sections/Hero";
import Reviews from "@/components/sections/Reviews";


export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Hero></Hero>
        <About></About>
        <AboutCollapseSection></AboutCollapseSection>
        <Reviews></Reviews>
    </div>
  );
}
