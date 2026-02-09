import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";


export default function Home() {
  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <Hero></Hero>
        <About></About>
    </div>
  );
}
