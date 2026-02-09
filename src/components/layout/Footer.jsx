'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white pt-32 pb-0 relative font-sans border-t border-gray-100 overflow-hidden">

            {/* --- 1. BASE LAYER: DIAGONAL LINE TEXTURE --- */}
            <div
                className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: `url('/menu_bg.png')`, backgroundRepeat: 'repeat' }}
            ></div>

            {/* --- 2. TEXTURE LAYER: MISTY WAVE IMAGE --- */}
            <div className="absolute bottom-0 left-0 w-full h-[400px] z-10 opacity-30 pointer-events-none">
                <Image
                    src="/footer_bg.png"
                    alt="Footer Wave Background"
                    fill
                    className="object-cover object-bottom"
                    priority
                />
            </div>

            {/* --- 3. TOP TRANSITION: UPPER SVG --- */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[80px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                >
                    <path fill="#F8F9FA" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                </svg>
            </div>

            {/* --- 4. BOTTOM LAYERED WAVE SVG (Matches Green Bar) --- */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
                <svg 
                    className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 1000 100" 
                    preserveAspectRatio="none"
                >
                    {/* Layer 1: Lightest Green */}
                    <path fill="#004d26" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V100h1000V59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                    {/* Layer 2: Medium Green */}
                    <path fill="#004d26" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V100h1000V36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
                    {/* Layer 3: Solid Green (Base) */}
                    <path fill="#004d26" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,100,0,100 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                </svg>
            </div>

            {/* --- 5. MAIN CONTENT LAYER (z-30) --- */}
            <div className="relative z-30 max-w-7xl mx-auto px-4 lg:px-8 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="block"
                            >
                                <Image
                                    src="/ag_food_logo.png"
                                    alt="AG Food Logo"
                                    width={200}
                                    height={100}
                                    className="h-16 sm:h-20 w-auto object-contain"
                                />
                            </motion.div>
                        </Link>
                        <p className="text-[15px] leading-relaxed text-gray-700 text-justify pr-4">
                            AG Agro Foods Limited is a concern of{' '}
                            <span className="text-[#0056b3] font-bold uppercase">Ahsan Group</span>,
                            one of the leading conglomerates in Bangladesh. Founded in 1986, the group
                            operates in diversified sectors including Trading, Real Estate, and Agro.
                        </p>
                    </div>

                    {/* Contact Us */}
                    <div className="lg:col-span-1">
                        <h4 className="font-black text-[15px] text-[#008141] mb-6 border-b-2 border-[#008141] pb-1 inline-block tracking-wider">
                            CONTACT US
                        </h4>
                        <div className="space-y-4 text-[14px] text-gray-800 font-medium">
                            <div className="flex gap-3">
                                <span className="text-[#008141]">📍</span>
                                <p className="leading-snug">Ahsan Tower 76, Mohakhali C/A, Dhaka – 1213</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[#008141]">📞</span>
                                <a href="tel:+8802222286864" className="hover:text-[#008141] transition-colors">+880-2-222286864</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[#008141]">✉️</span>
                                <a href="mailto:info@agfood.com.bd" className="hover:text-[#008141] transition-colors">info@agfood.com.bd</a>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-1">
                        <h4 className="font-black text-[15px] text-[#008141] mb-6 border-b-2 border-[#008141] pb-1 inline-block tracking-wider">
                            QUICK LINKS
                        </h4>
                        <ul className="space-y-3 text-[14px] text-gray-700 font-bold">
                            {['Home', 'Processed Plant', 'Cooking Tips', 'News & Events'].map((name) => (
                                <li key={name} className="flex items-center gap-2 group cursor-pointer">
                                    <span className="text-[#008141] text-xs transition-transform group-hover:translate-x-1">›</span>
                                    <Link href="#" className="hover:text-[#008141] transition-colors">{name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Google Map */}
                    <div className="lg:col-span-1">
                        <h4 className="font-black text-[15px] text-[#008141] mb-6 border-b-2 border-[#008141] pb-1 inline-block tracking-wider">
                            FIND US
                        </h4>
                        <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200 h-40">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.0000!2d90.4000!3d23.7700!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzEyLjAiTiA5MMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sbd!4v123456789"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                className="grayscale contrast-125"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 6. BOTTOM BAR (Green Background) --- */}
            <div className="bg-[#004d26] py-6 text-white text-[13px] relative z-40">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="opacity-90 font-medium">AG Agro Foods Limited © {new Date().getFullYear()} All Rights Reserved.</p>
                    <div className="flex gap-6 opacity-80">
                        <Link href="#" className="hover:text-white underline underline-offset-4">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white underline underline-offset-4">Terms & Conditions</Link>
                    </div>
                </div>
            </div>

            {/* --- SCROLL TO TOP --- */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 bg-white text-[#008141] w-12 h-12 rounded-full shadow-2xl flex items-center justify-center transition-all duration-500 z-[999] border border-gray-200 ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'}`}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </footer>
    );
};

export default Footer;