"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Clock, ChefHat, ArrowRight } from 'lucide-react';

export default function RecipeCard({ recipe, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      // Added h-full to make the motion div fill the grid cell
      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-brand-green text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
            {recipe.category}
          </span>
        </div>
      </div>

      {/* Content Area - Added flex-grow and flex flex-col */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-gray-400 text-[11px] mb-3">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{recipe.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <ChefHat className="w-3.5 h-3.5" />
            <span>{recipe.difficulty}</span>
          </div>
        </div>

        <h3 className="text-lg font-bold text-brand-charcoal mb-3 leading-snug group-hover:text-brand-green transition-colors line-clamp-2">
          {recipe.title}
        </h3>
        
        <p className="text-gray-500 text-sm line-clamp-3 mb-6 leading-relaxed">
          {recipe.description}
        </p>

        {/* mt-auto pushes the link to the very bottom of the card */}
        <div className="mt-auto">
            <Link 
              href={`/tips/recipe-tips/${recipe.id}`}
              className="inline-flex items-center gap-2 text-brand-green text-sm font-bold group/link"
            >
              Read Full Recipe
              <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
        </div>
      </div>
    </motion.div>
  );
}