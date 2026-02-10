"use client";

import ProductList from '@/components/sections/ProductList';
import { motion } from 'framer-motion';

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <section className="py-16 bg-white relative overflow-hidden">
        
        {/* INCREASED MAX-WIDTH TO MATCH LARGE NAVBARS */}
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center md:text-left">
          
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-green font-black uppercase tracking-[0.3em] text-[14px] md:text-[16px] block mb-3"
          >
            Fresh & Quality
          </motion.span>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[38px] md:text-[52px] lg:text-[64px] font-black text-[#0f172a] leading-[1.1] tracking-tight"
          >
            Our <span className="text-brand-red">Products</span>
          </motion.h2>

          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-2 bg-brand-green mt-6 mx-auto md:mx-0 rounded-full" 
          />
        </div>

           <ProductList />

      </section>
    </main>
  );
}