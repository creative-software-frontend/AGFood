"use client";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const ProductCard = ({ product, index = 0 }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.05, duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      // Decreased max-width slightly for a more compact column feel
      className="group relative bg-white rounded-xl transition-all duration-500 flex flex-col h-full overflow-hidden w-full max-w-[280px] mx-auto border border-gray-100 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:border-transparent"
    >
      {/* 1. Upper Site: Slightly shorter aspect ratio (16/9 instead of 16/10) */}
      <div className="relative aspect-[16/9] overflow-hidden bg-white w-full">
        <button className="absolute right-2.5 top-2.5 z-10 p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-full shadow-sm hover:bg-white hover:scale-110 transition-all active:scale-90 border border-gray-200/50">
          <Heart className="w-3.5 h-3.5 text-gray-400 hover:text-brand-red transition-colors" />
        </button>

        {/* Reduced padding from p-8 to p-5 to keep product visible in smaller space */}
        <div className="relative w-full h-full p-5 transition-transform duration-700 group-hover:scale-105">
          <Image
            src={product.image || '/placeholder-food.png'}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-contain"
            priority={index < 4}
          />
        </div>
      </div>

      {/* 2. Lower Site: Tighter Padding (p-4 instead of p-5) */}
      <div className="flex flex-col flex-grow p-4 pt-2 bg-white">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="text-[14px] md:text-[15px] font-bold text-brand-charcoal leading-tight">
            {product.name}
          </h3>
          <div className="flex flex-col items-end flex-shrink-0">
            <span className="text-[15px] font-black text-brand-charcoal">
              <span className="text-[11px] align-top mr-0.5 font-bold">৳</span>{product.price}
            </span>
          </div>
        </div>

        {/* Tighter margin-bottom (mb-3 instead of mb-5) */}
        <p className="text-[10px] text-brand-muted font-medium uppercase tracking-wider mb-3">
          {product.weight} • {product.category}
        </p>

        {/* 3. Action Button - Tighter Padding */}
        <div className="mt-auto flex justify-start"> 
          <Link 
            href={`/products/${product.id}`}
            className="group/btn w-fit px-4 py-1.5 bg-brand-green text-white text-[10px] font-bold rounded-btn hover:bg-[#155a2d] transition-all duration-300 active:scale-95 shadow-md shadow-brand-green/5 flex items-center justify-center gap-1.5"
          >
            <span>View Details</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-2.5 w-2.5 transition-transform duration-300 group-hover/btn:translate-x-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;