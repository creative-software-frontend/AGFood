'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
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
        <footer className="bg-[#F8F9FA] pt-16 relative font-sans border-t border-gray-200">

            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* 1. Company Info (Spans 2 columns) */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/">
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="block"
                            >
                                <Image
                                    src="/ag-food-logo.png"
                                    alt="AG Food Logo"
                                    width={200}
                                    height={100}
                                    priority
                                    className="h-16 sm:h-20 w-auto object-contain transition-all"
                                />
                            </motion.div>
                        </Link>
                        <p className="text-[15px] leading-relaxed text-gray-600 text-justify pr-4">
                            AG Agro Foods Limited is a concern of{' '}
                            <span className="text-[#0056b3] font-bold uppercase">Ahsan Group</span>,
                            one of the leading conglomerates in Bangladesh. Founded in 1986, the group
                            operates in diversified sectors including Trading (Agro, Fertilizer etc),
                            Land development, Housing & Real Estate, Poultry & Fish feed mills,
                            Breeder Farm, Hatchery, Investment, Ceramics etc.
                        </p>
                    </div>

                    {/* 2. Contact Us */}
                    <div className="lg:col-span-1">
                        <h4 className="font-black text-[16px] text-brand-green mb-6 border-b-2 border-brand-green pb-2 inline-block tracking-wider">
                            CONTACT US
                        </h4>
                        <div className="space-y-5 text-[14px] text-gray-700">
                            <div className="flex gap-3">
                                <span className="text-brand-green text-lg">📍</span>
                                <p className="leading-snug">
                                    Ahsan Tower 76,<br />
                                    Mohakhali C/A Bir Uttam A.K. Khandakar Road, Dhaka – 1213
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-brand-green text-lg">📞</span>
                                <a href="tel:+8802222286864" className="hover:text-brand-green transition-colors">+880-2-222286864</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-brand-green text-lg">💬</span>
                                <a href="https://wa.me/8801700707277" className="hover:text-brand-green transition-colors">+8801700707277</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-brand-green text-lg">✉️</span>
                                <a href="mailto:info@agfood.com.bd" className="hover:text-brand-green transition-colors font-medium">info@agfood.com.bd</a>
                            </div>
                            <div className="pt-2 border-t border-gray-200">
                                <p className="font-bold text-gray-900 mb-1">Export Inquiry:</p>
                                <div className="flex items-center gap-3">
                                    <span className="text-brand-green text-lg">✉️</span>
                                    <a href="mailto:export@agfood.com.bd" className="hover:text-brand-green transition-colors">export@agfood.com.bd</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Quick Links */}
                    <div className="lg:col-span-1">
                        <h4 className="font-black text-[16px] text-brand-green mb-6 border-b-2 border-brand-green pb-2 inline-block tracking-wider">
                            QUICK LINKS
                        </h4>
                        <ul className="space-y-3 text-[14px] text-gray-600 font-medium">
                            {[
                                { name: 'Home', link: '/' },
                                { name: 'Processed Plant', link: '/plant/processed' },
                                { name: 'Further Processed', link: '/plant/further-processed' },
                                { name: 'Cooking Tips', link: '/tips/recipes' },
                                { name: 'News & Events', link: '/news' },
                                { name: 'Safety Meat', link: '/products' },
                                { name: 'Contact Us', link: '/contact' },
                            ].map((item) => (
                                <li key={item.name} className="flex items-center gap-2 group">
                                    <span className="text-brand-green opacity-0 group-hover:opacity-100 transition-opacity">›</span>
                                    <Link href={item.link} className="hover:text-brand-green transition-colors transform group-hover:translate-x-1 duration-200">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Google Map Section */}
                    <div className="lg:col-span-1">
                        <h4 className="font-black text-[16px] text-brand-green mb-6 border-b-2 border-brand-green pb-2 inline-block tracking-wider">
                            FIND US
                        </h4>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white group h-48 bg-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.139688469956!2d90.40026887588837!3d23.778044787720366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7772643329d%3A0x6b77626966804a5e!2sAhsan%20Tower!5e0!3m2!1sen!2sbd!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                            ></iframe>
                            
                            {/* View Larger Map Link Box */}
                            <div className="absolute top-2 left-2">
                                <div className="bg-white/95 px-2 py-1 rounded shadow text-[#1a73e8] text-[10px] font-medium border border-gray-200">
                                    <a href="https://maps.google.com/maps?ll=23.778045,90.402844&z=16&t=m&hl=en&gl=BD&mapclient=embed&cid=7743958043606731358" target="_blank" rel="noopener noreferrer">
                                        View larger map
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- THE BOTTOM BAR --- */}
            <div className="bg-brand-green py-6 text-white text-[13px] sm:text-sm">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                    <p className="font-medium ">
                        AG Agro Foods Limited © {new Date().getFullYear()} All Rights Reserved.
                    </p>
                </div>
            </div>

            {/* --- ANIMATED SCROLL TO TOP --- */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 bg-white text-brand-green w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:bg-brand-charcoal hover:text-white transition-all duration-500 z-[999] group border-4 border-brand-green/10 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                aria-label="Back to top"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
                </svg>
            </button>
        </footer>
    );
};

export default Footer;