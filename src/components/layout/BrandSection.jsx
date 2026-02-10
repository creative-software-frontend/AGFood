"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // Hamburger and Close icons

const BrandSection = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className="relative py-4 md:py-4 border-b border-gray-100 overflow-hidden bg-white">

            {/* --- background texture --- */}
            <div
                className="absolute inset-0 z-0 opacity-[0.1]"
                style={{
                    backgroundImage: `url('/menu_bg.png')`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto',
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">

                {/* 1. LEFT SIDE: Hamburger for Mobile/Tab */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsDrawerOpen(true)}
                        className="p-2 text-brand-charcoal hover:text-brand-green transition-colors"
                    >
                        <HiMenuAlt3 size={32} />
                    </button>
                </div>

                {/* 2. CENTER (DESKTOP) / HIDDEN (MOBILE): Contact Details */}
                <div className="hidden md:flex flex-col lg:flex-row gap-3 lg:gap-8 text-gray-700 text-[15px] lg:text-[16px] font-bold">
                    <div className="space-y-1">
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <span className="text-xl text-brand-green group-hover:rotate-12 transition-transform">📞</span>
                            <a href="tel:+8802222286864" className="hover:text-brand-green transition-colors tracking-tight">+880-2-222286864</a>
                        </div>
                        <div className="flex items-center gap-3 group cursor-pointer">
                            <span className="text-xl text-brand-red group-hover:rotate-12 transition-transform">📠</span>
                            <a href="tel:+8802222264865" className="hover:text-brand-red transition-colors tracking-tight">+880-2-222264865</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 group cursor-pointer self-start">
                        <span className="text-xl text-brand-green group-hover:scale-110 transition-transform">✉️</span>
                        <a href="mailto:info@agfood.com.bd" className="hover:text-brand-green transition-colors hover:underline break-all">info@agfood.com.bd</a>
                    </div>
                </div>

                {/* 3. LOGO: Right side on Mobile/Tab, Center on Desktop */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="md:absolute md:left-1/2 md:-translate-x-1/2"
                >
                    <Link href="/" className="block">
                        <Image
                            src="/ag_food_logo.png"
                            alt="AG Food Logo"
                            width={200}
                            height={100}
                            priority
                            className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain"
                        />
                    </Link>
                </motion.div>

                {/* 4. RIGHT SIDE (DESKTOP ONLY): Social Icons */}
                <div className="hidden md:flex items-center justify-end">
                    <div className="flex flex-row items-center gap-4">
                        <span className="text-[14px] font-black uppercase tracking-[0.1em] text-gray-500 whitespace-nowrap">
                            Follow Us :
                        </span>
                        <div className="flex flex-row items-center gap-4">
                            <Link href="#" className="text-gray-500 hover:text-[#1877F2] transition-all hover:scale-110">
                                <FaFacebookF size={18} />
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-[#FF0000] transition-all hover:scale-110">
                                <FaYoutube size={20} />
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-[#E4405F] transition-all hover:scale-110">
                                <FaInstagram size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MOBILE DRAWER (MENU) --- */}
            <AnimatePresence>
                {isDrawerOpen && (
                    <>
                        {/* Overlay: Managed opacity and backdrop-blur */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsDrawerOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[100] md:hidden"
                        />

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 h-full w-[300px] bg-white z-[110] shadow-2xl md:hidden p-6 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <Image src="/ag_food_logo.png" alt="Logo" width={100} height={50} className="h-10 w-auto" />
                                <button onClick={() => setIsDrawerOpen(false)} className="text-brand-red p-1">
                                    <HiX size={32} />
                                </button>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6 mt-4">
                                <p className="text-xs font-black uppercase tracking-widest text-gray-400 border-b pb-2">Contact Info</p>
                                <div className="space-y-4 font-bold text-gray-700">
                                    <div className="flex items-center gap-4">
                                        <span className="text-brand-green">📞</span>
                                        <a href="tel:+8802222286864" className="hover:text-brand-green transition-colors">+880-2-222286864</a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-brand-red">📠</span>
                                        <a href="tel:+8802222264865" className="hover:text-brand-red transition-colors">+880-2-222264865</a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-brand-green">✉️</span>
                                        <a href="mailto:info@agfood.com.bd" className="break-all hover:text-brand-green transition-colors">info@agfood.com.bd</a>
                                    </div>
                                </div>
                            </div>

                            {/* --- CORRECTED SOCIAL ICONS SECTION --- */}
                            <div className="mt-auto pt-8 border-t border-gray-100">
                                <p className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">Follow Us</p>
                                <div className="flex items-center gap-4">
                                    {/* Facebook */}
                                    <Link
                                        href="#"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#1877F2] hover:text-white transition-all shadow-sm"
                                    >
                                        <FaFacebookF size={18} />
                                    </Link>

                                    {/* YouTube */}
                                    <Link
                                        href="#"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#FF0000] hover:text-white transition-all shadow-sm"
                                    >
                                        <FaYoutube size={20} />
                                    </Link>

                                    {/* Instagram */}
                                    <Link
                                        href="#"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#E4405F] hover:text-white transition-all shadow-sm"
                                    >
                                        <FaInstagram size={18} />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default BrandSection;