"use client";
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const BrandSection = () => (
    <div className="relative py-6 md:py-4 border-b border-gray-100 overflow-hidden">
        
        {/* --- ১. ব্যাকগ্রাউন্ড ইমেজ লেয়ার --- */}
        <div 
            className="absolute inset-0 z-0 opacity-[0.1]" // ০.১ দিয়েছি যাতে টেক্সচারটি হালকা দেখায়
            style={{ 
                backgroundImage: `url('/menu_bg.png')`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
                backgroundColor: 'white' // মূল ব্যাকগ্রাউন্ড সাদা থাকবে
            }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center justify-between gap-8 md:flex-row">

            {/* 1. Left: Contact Details */}
            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-6 sm:gap-10 md:gap-3 lg:gap-8 text-gray-700 text-[16px] sm:text-[17px] md:text-[15px] lg:text-[16px] font-bold order-2 md:order-1 text-center md:text-left">
                <div className="space-y-3 md:space-y-1">
                    <div className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer">
                        <span className="text-xl text-brand-green group-hover:rotate-12 transition-transform">📞</span>
                        <a href="tel:+8802222286864" className="hover:text-brand-green transition-colors tracking-tight">+880-2-222286864</a>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer">
                        <span className="text-xl text-brand-red group-hover:rotate-12 transition-transform">📠</span>
                        <a href="tel:+8802222264865" className="hover:text-brand-red transition-colors tracking-tight">+880-2-222264865</a>
                    </div>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-3 group cursor-pointer self-center md:self-start">
                    <span className="text-xl text-brand-green group-hover:scale-110 transition-transform">✉️</span>
                    <a href="mailto:info@agfood.com.bd" className="hover:text-brand-green transition-colors hover:underline break-all">info@agfood.com.bd</a>
                </div>
            </div>

            {/* 2. Center: Logo */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="order-1 md:order-2"
            >
                <Link href="/" className="block">
                    <Image
                        src="/ag_food_logo.png"
                        alt="AG Food Logo"
                        width={200}
                        height={100}
                        priority
                        className="h-16 sm:h-20 md:h-22 lg:h-24 w-auto object-contain transition-all"
                    />
                </Link>
            </motion.div>

            {/* 3. Right: Social Icons */}
            <div className="flex items-center justify-center md:justify-end order-3 w-full md:w-auto">
                <div className="flex flex-row items-center gap-4 sm:gap-6 md:gap-4 bg-white/60 backdrop-blur-sm md:bg-transparent px-4 py-2 md:p-0 rounded-full border border-gray-100 md:border-none shadow-sm md:shadow-none">
                    <span className="text-[11px] sm:text-[13px] md:text-[14px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-gray-500 whitespace-nowrap">
                        Follow Us :
                    </span>

                    <div className="flex flex-row items-center gap-5 sm:gap-8 md:gap-5">
                        <Link href="#" target="_blank" className="text-gray-500 hover:text-[#1877F2] transition-all duration-300 hover:scale-125">
                            <FaFacebookF size={20} className="sm:w-6 sm:h-6 md:w-[18px] md:h-[18px]" />
                        </Link>
                        <Link href="#" target="_blank" className="text-gray-500 hover:text-[#FF0000] transition-all duration-300 hover:scale-125">
                            <FaYoutube size={22} className="sm:w-7 sm:h-7 md:w-[20px] md:h-[20px]" />
                        </Link>
                        <Link href="#" target="_blank" className="text-gray-500 hover:text-[#E4405F] transition-all duration-300 hover:scale-125">
                            <FaInstagram size={20} className="sm:w-6 sm:h-6 md:w-[18px] md:h-[18px]" />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    </div>
);

export default BrandSection;