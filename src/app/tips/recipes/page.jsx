import Image from 'next/image';
import RecipeCard from '@/components/ui/RecipeCard';
import { MOCK_RECIPES, RECIPE_HERO_CONTENT } from '@/data/recipes';

export default function RecipeTipsPage() {
  const { subtitle, titleMain, titleAccent, description, features } = RECIPE_HERO_CONTENT;

  return (
    <main className="min-h-screen bg-[#FCFCFC]">
      {/* 1. Hero Banner Section */}
      <section className="relative w-full h-[450px] md:h-[550px] flex items-center overflow-hidden bg-brand-charcoal">
        <Image 
          src="/recipe_hero.jpg" 
          alt="Chicken Recipe Hero"
          fill
          className="object-cover opacity-60"
          priority
        />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-stretch gap-0 max-w-7xl mx-auto shadow-2xl rounded-2xl overflow-hidden">
            {/* Left Glass Box */}
            <div className="bg-white/10 backdrop-blur-xl border-y border-l border-white/20 p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-4">
                {subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
                {titleMain} <br /> <span className="text-brand-green">{titleAccent}</span>
              </h1>
            </div>

            {/* Right Brand Box */}
            <div className="bg-brand-red p-8 md:p-12 md:w-1/2 flex flex-col justify-center relative">
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

      {/* 2. Responsive Recipe Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center mb-12 md:mb-20">
          <h2 className="text-2xl md:text-4xl font-black text-brand-charcoal mb-4 uppercase tracking-tighter text-center">
            Latest Kitchen Secrets
          </h2>
          <div className="w-24 h-1.5 bg-brand-green rounded-full" />
        </div>

        {/* Grid Configuration:
            - Mobile (default): 1 column
            - Tablet (md): 2 columns
            - Desktop (lg): 4 columns
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {MOCK_RECIPES.map((recipe, index) => (
            <RecipeCard key={recipe.id} recipe={recipe} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}