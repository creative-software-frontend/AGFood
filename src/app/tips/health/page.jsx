import Image from 'next/image';
import RecipeCard from '@/components/ui/RecipeCard';
import { HEALTH_TIPS, HEALTH_HERO_CONTENT } from '@/data/healthTips';

export default function HealthTipsPage() {
    const { subtitle, titleMain, titleAccent, description, features } = HEALTH_HERO_CONTENT;

    return (
        <main className="min-h-screen bg-[#FCFCFC]">
            {/* 1. Hero Banner Section */}
            <section className="relative w-full h-[450px] md:h-[550px] flex items-center overflow-hidden bg-gray-200">
                <Image
                    src="/image.png"
                    alt="AG Agro Wellness Hero"
                    fill
                    className="object-cover transition-opacity duration-300"
                    // Removed opacity-40 to keep it crisp. 
                    // If it's too bright for the text, we use a gradient instead of global opacity.
                    priority
                    quality={100} // Force Next.js to deliver maximum quality
                />
                {/* Subtle Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-green/20 to-transparent z-0" />

                <div className="container mx-auto px-4 md:px-8 relative z-10">
                    <div className="flex flex-col md:flex-row items-stretch gap-0 max-w-7xl mx-auto shadow-2xl rounded-2xl overflow-hidden">

                        {/* Left Glass Content */}
                        <div className="bg-white/10 backdrop-blur-xl border-y border-l border-white/20 p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                            <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4">
                                {subtitle}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
                                {titleMain} <br />
                                <span className="text-brand-green">{titleAccent}</span>
                            </h1>
                        </div>

                        {/* Right Brand Panel */}
                        <div className="bg-brand-red p-8 md:p-12 md:w-1/2 flex flex-col justify-center relative">
                            {/* Slanted Separator */}
                            <div className="absolute top-0 -left-10 bottom-0 w-20 bg-brand-red -skew-x-12 hidden md:block" />

                            <div className="relative z-10">
                                <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8 italic font-medium">
                                    "{description}"
                                </p>
                                <ul className="grid grid-cols-1 gap-4">
                                    {features.map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white text-[10px] font-black uppercase tracking-widest">
                                            <span className="w-5 h-[2px] bg-brand-green" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Wellness Grid Section */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
                <div className="flex flex-col items-center mb-16">
                    <h2 className="text-2xl md:text-4xl font-black text-brand-charcoal mb-4 uppercase tracking-tighter text-center">
                        Wellness & Nutrition
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-green rounded-full" />
                </div>

                {/* 4-Column Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {HEALTH_TIPS.map((tip, index) => (
                        <RecipeCard key={tip.id} recipe={tip} index={index} />
                    ))}
                </div>
            </section>
        </main>
    );
}