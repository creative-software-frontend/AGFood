'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Optimized scroll listener
    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300);
        };
        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white pt-24 pb-0 relative font-sans border-t border-gray-100 overflow-hidden text-gray-700">
            
            {/* --- 1. BACKGROUND TEXTURES --- */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `url('/menu_bg.png')`, backgroundRepeat: 'repeat' }}
            />
            
            <div className="absolute bottom-0 left-0 w-full h-[400px] z-10 opacity-20 pointer-events-none">
                <Image
                    src="/footer_bg.png"
                    alt=""
                    fill
                    className="object-cover object-bottom"
                    priority
                />
            </div>

            {/* --- 2. SVG DECORATIONS --- */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
                <svg className="relative block w-full h-[60px]" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path fill="#F8F9FA" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                </svg>
            </div>

            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20 pointer-events-none">
                <svg className="relative block w-full h-[120px]" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path fill="#004d26" opacity="0.3" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V100h1000V59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
                    <path fill="#004d26" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,100,0,100 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
                </svg>
            </div>

            {/* --- 3. MAIN CONTENT --- */}
            <div className="relative z-30 max-w-7xl mx-auto px-6 lg:px-8 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">

                    {/* Company Brand Section */}
                    <div className="lg:col-span-4 space-y-6">
                        <Link href="/" className="inline-block transition-transform hover:scale-105">
                            <Image
                                src="/ag_food_logo.png"
                                alt="AG Food Logo"
                                width={220}
                                height={80}
                                className="h-16 sm:h-20 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-[14px] leading-relaxed text-gray-600 text-justify max-w-sm">
                            AG Agro Foods Limited is a concern of <span className="text-[#0056b3] font-bold">AHSAN GROUP</span>, 
                            one of the leading conglomerates in Bangladesh. Founded in 1986, the group operates 
                            in diversified sectors including Trading (Agro, Fertilizer etc), Land development, 
                            Housing & Real Estate, Poultry & Fish feed mills, Breeder Farm, Hatchery, 
                            Investment, Ceramics etc.
                        </p>
                    </div>

                    {/* Contact Info Section */}
                    <div className="lg:col-span-3">
                        <h4 className="font-bold text-[16px] text-[#008141] mb-6 uppercase tracking-widest border-l-4 border-[#008141] pl-3">
                            Contact Us
                        </h4>
                        <ul className="space-y-4 text-[14px]">
                            <li className="flex gap-3 items-start group">
                                <span className="text-[#008141] mt-1 group-hover:scale-110 transition-transform">📍</span>
                                <span>Ahsan Tower 76, Mohakhali C/A Bir Uttam A.K. Khandakar Road, Dhaka – 1213</span>
                            </li>
                            <li className="flex gap-3 items-center group">
                                <span className="text-[#008141] group-hover:scale-110 transition-transform">📞</span>
                                <a href="tel:+8802222286864" className="hover:text-[#008141] transition-colors">+880-2-222286864</a>
                            </li>
                            <li className="flex gap-3 items-center group">
                                <span className="text-[#008141] group-hover:scale-110 transition-transform">💬</span>
                                <a href="https://wa.me/8801700707277" className="hover:text-[#008141] transition-colors">+8801700707277</a>
                            </li>
                            <li className="flex gap-3 items-center group">
                                <span className="text-[#008141] group-hover:scale-110 transition-transform">✉️</span>
                                <a href="mailto:info@agfood.com.bd" className="hover:text-[#008141] transition-colors">info@agfood.com.bd</a>
                            </li>
                            <li className="pt-2 border-t border-gray-100">
                                <p className="font-bold text-gray-800 text-[13px] mb-1">Export Inquiry:</p>
                                <div className="flex gap-3 items-center group">
                                    <span className="text-[#008141]">✉️</span>
                                    <a href="mailto:export@agfood.com.bd" className="hover:text-[#008141] transition-colors">export@agfood.com.bd</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-[16px] text-[#008141] mb-6 uppercase tracking-widest border-l-4 border-[#008141] pl-3">
                            Quick Links
                        </h4>
                        <nav>
                            <ul className="grid grid-cols-1 gap-2 text-[14px] font-medium">
                                {[
                                    { name: 'Home', link: '/' },
                                    { name: 'Processed Plant', link: '#' },
                                    { name: 'Further Processed', link: '#' },
                                    { name: 'Cooking Tips', link: '#' },
                                    { name: 'Modern Trade', link: '#' },
                                    { name: 'News & Events', link: '#' },
                                    { name: 'Contact', link: '#' }
                                ].map((item) => (
                                    <li key={item.name} className="flex items-center gap-2 group">
                                        <span className="text-[#008141] text-[10px] opacity-0 group-hover:opacity-100 -ml-3 transition-all">▶</span>
                                        <Link href={item.link} className="hover:text-[#008141] transition-all hover:translate-x-1">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Find Us Section */}
                    <div className="lg:col-span-3">
                        <h4 className="font-bold text-[16px] text-[#008141] mb-6 uppercase tracking-widest border-l-4 border-[#008141] pl-3">
                            Find Us
                        </h4>
                        <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100 h-48 group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.157852445025!2d90.4005!3d23.7774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ2JzM4LjYiTiA5MMKwMjQnMDEuOCJF!5e0!3m2!1sen!2sbd!4v1620000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                className="grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* --- 4. COPYRIGHT BAR --- */}
            <div className="bg-[#004d26] py-6 text-white/90 text-[13px] relative z-40">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-medium">
                        AG Agro Foods Limited &copy; {new Date().getFullYear()} All Rights Reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white underline underline-offset-4 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white underline underline-offset-4 transition-colors">Terms & Conditions</Link>
                    </div>
                </div>
            </div>

            {/* --- 5. SCROLL TO TOP --- */}
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        onClick={scrollToTop}
                        aria-label="Scroll to top"
                        className="fixed bottom-10 right-10 bg-white text-[#008141] w-12 h-12 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)] flex items-center justify-center transition-all hover:bg-[#008141] hover:text-white z-[999] border border-gray-100"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
};

export default Footer;