"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const ShopButton = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    // Skeleton/Placeholder with responsive width
    if (!mounted) return <div className="relative h-[48px] lg:h-[62px] w-[140px] lg:w-[200px] opacity-0" />;

    return (
        <motion.div 
            whileHover={{ y: -2 }} 
            whileTap={{ scale: 0.95 }} 
            className="relative group flex-shrink-0"
        >
            {/* Soft Glow - Hidden on very small screens to save performance, visible on lg */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-red to-orange-500 rounded-xl lg:rounded-2xl blur opacity-0 lg:opacity-10 lg:group-hover:opacity-40 transition duration-500" />
            
            <Link 
                href="https://bayna.store" 
                target="_blank" 
                className="relative h-[48px] lg:h-[62px] bg-white border border-gray-100 rounded-xl lg:rounded-2xl px-4 lg:px-8 flex items-center gap-3 lg:gap-5 shadow-md lg:shadow-lg group overflow-hidden transition-all duration-500"
            >
                {/* Background Fill on Hover (Desktop Only) */}
                <div className="absolute inset-0 w-0 bg-brand-red hidden lg:block transition-all duration-500 ease-out group-hover:w-full" />
                
                {/* Mobile Active State Fill (Simple Background Change) */}
                <div className="absolute inset-0 bg-brand-red opacity-0 active:opacity-100 lg:hidden" />

                {/* Icon Container */}
                <div className="relative z-10 flex items-center justify-center">
                    <span className="text-xl lg:text-3xl group-hover:scale-110 lg:group-hover:-rotate-12 transition-transform duration-500">
                        <motion.span 
                            animate={{ x: [0, -1, 1, -1, 0] }} 
                            transition={{ repeat: Infinity, duration: 4 }}
                        >
                            🛒
                        </motion.span>
                    </span>
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex flex-col leading-tight items-start">
                    <span className="text-[9px] lg:text-[11px] text-gray-400 group-hover:text-white/90 font-black uppercase tracking-[0.15em] lg:tracking-[0.25em] mb-0.5">
                        SHOP NOW
                    </span>
                    <div className="relative overflow-hidden">
                        <span className="text-[14px] lg:text-[20px] font-black tracking-tight flex items-center gap-1.5">
                            <span className="bg-gradient-to-r from-brand-red to-brand-red bg-clip-text text-transparent lg:group-hover:text-white transition-colors duration-300">
                                Bayna.store
                            </span>
                        </span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default ShopButton;