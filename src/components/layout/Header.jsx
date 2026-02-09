"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import TopBar from './TopBar';
import BrandSection from './BrandSection';

const ShopButton = dynamic(() => import('./ShopButton'), { 
  ssr: false,
  loading: () => <div className="h-[50px] w-[140px] bg-white/10 animate-pulse rounded" />
});

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State for Mobile Drawer

  const isActive = (path) => pathname === path;
  
  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeMenu = () => {
    setIsOpen(false);
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (
    <header className="w-full font-sans">
      <TopBar />
      <BrandSection />

      <nav className="bg-[#2D2D2D] sticky top-0 z-[100] shadow-xl">
        <div className="max-w-7xl mx-auto px-4 min-h-[90px] flex items-center justify-between">
          
          {/* --- MOBILE HAMBURGER BUTTON --- */}
          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(true)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* --- DESKTOP NAVIGATION (Your Screen-Matched Style) --- */}
          <div className="hidden lg:flex items-center h-full">
            <ul className="flex flex-row items-center h-[50px] text-white text-[14px] font-medium list-none p-0 m-0">
              <li className="h-full">
                <Link href="/" className={`px-5 h-full flex items-center transition-colors ${isActive('/') ? 'bg-brand-green' : 'hover:bg-brand-green'}`}>
                  Home
                </Link>
              </li>

              {/* About Dropdown */}
              <li className="h-full relative group">
                <div className={`cursor-pointer px-5 h-full flex items-center gap-1 transition-colors ${pathname.includes('/about') ? 'bg-brand-green' : 'group-hover:bg-brand-green'}`}>
                  About
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <ul className="absolute left-0 top-full w-64 bg-[#2D2D2D] border border-white/20 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[110] shadow-2xl">
                  <li><Link href="/about/info" className="block py-3 px-5 hover:bg-brand-green">Company Information</Link></li>
                  <li><Link href="/about/vision" className="block py-3 px-5 hover:bg-brand-green">Vision and Mission</Link></li>
                  <li><Link href="/about/chairman" className="block py-3 px-5 hover:bg-brand-green">Group Chairman</Link></li>
                  <li><Link href="/about/board" className="block py-3 px-5 hover:bg-brand-green">Board of Directors</Link></li>
                  <li><Link href="/about/management" className="block py-3 px-5 hover:bg-brand-green">Management</Link></li>
                </ul>
              </li>

              <li className="h-full relative group">
                <div className={`cursor-pointer px-5 h-full flex items-center gap-1 transition-colors ${pathname.includes('/plant') ? 'bg-brand-green' : 'group-hover:bg-brand-green'}`}>
                  Plant
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <ul className="absolute left-0 top-full w-56 bg-[#2D2D2D] border border-white/20 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[110] shadow-2xl">
                  <li><Link href="/plant/processed" className="block py-3 px-5 hover:bg-brand-green">Processed Plant</Link></li>
                  <li><Link href="/plant/further-processed" className="block py-3 px-5 hover:bg-brand-green">Further Processed</Link></li>
                </ul>
              </li>

              <li className="h-full">
                <Link href="/products" className={`px-5 h-full flex items-center hover:bg-brand-green transition-all ${isActive('/products') ? 'bg-brand-green' : ''}`}>Product</Link>
              </li>

              <li className="h-full relative group">
                <div className={`cursor-pointer px-5 h-full flex items-center gap-1 transition-colors ${pathname.includes('/tips') ? 'bg-brand-green' : 'group-hover:bg-brand-green'}`}>
                  Health & Recipe Tips
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <ul className="absolute left-0 top-full w-64 bg-[#2D2D2D] border border-white/20 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[110] shadow-2xl">
                  <li><Link href="/tips/recipes" className="block py-3 px-5 hover:bg-brand-green">Recipe Tips</Link></li>
                  <li><Link href="/tips/health" className="block py-3 px-5 hover:bg-brand-green">Health Tips</Link></li>
                </ul>
              </li>

              <li className="h-full"><Link href="/news" className="px-5 h-full flex items-center hover:bg-brand-green transition-colors">News</Link></li>
              <li className="h-full"><Link href="/contact" className="px-5 h-full flex items-center hover:bg-brand-green transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Shop Button (Always Visible) */}
          <div className="flex-shrink-0">
            <ShopButton />
          </div>

        </div>

        {/* --- MOBILE DRAWER (SIDEBAR) --- */}
        <div className={`fixed inset-0 z-[200] lg:hidden transition-opacity duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          {/* Overlay/Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          
          {/* Drawer Content */}
          <div className={`absolute left-0 top-0 h-full w-[280px] bg-[#2D2D2D] shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-[#242424]">
              <span className="text-white font-bold uppercase tracking-widest text-sm">Navigation</span>
              <button onClick={() => setIsOpen(false)} className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4">
              <ul className="menu menu-vertical px-4 text-white gap-2">
                <li><Link href="/" className={isActive('/') ? 'bg-brand-green' : ''}>Home</Link></li>
                
                {/* About Accordion */}
                <li className="border-b border-white/5 pb-2">
                  <details>
                    <summary className={pathname.includes('/about') ? 'text-brand-green' : ''}>About</summary>
                    <ul className="mt-2 bg-black/20 rounded">
                      <li><Link href="/about/info">Company Information</Link></li>
                      <li><Link href="/about/vision">Vision and Mission</Link></li>
                      <li><Link href="/about/chairman">Group Chairman</Link></li>
                      <li><Link href="/about/board">Board of Directors</Link></li>
                      <li><Link href="/about/management">Management</Link></li>
                    </ul>
                  </details>
                </li>

                {/* Plant Accordion */}
                <li className="border-b border-white/5 pb-2">
                  <details>
                    <summary className={pathname.includes('/plant') ? 'text-brand-green' : ''}>Plant</summary>
                    <ul className="mt-2 bg-black/20 rounded">
                      <li><Link href="/plant/processed">Processed Plant</Link></li>
                      <li><Link href="/plant/further-processed">Further Processed</Link></li>
                    </ul>
                  </details>
                </li>

                <li><Link href="/products" className={isActive('/products') ? 'bg-brand-green' : ''}>Product</Link></li>

                {/* Tips Accordion */}
                <li className="border-b border-white/5 pb-2">
                  <details>
                    <summary className={pathname.includes('/tips') ? 'text-brand-green' : ''}>Health & Recipe Tips</summary>
                    <ul className="mt-2 bg-black/20 rounded">
                      <li><Link href="/tips/recipes">Recipe Tips</Link></li>
                      <li><Link href="/tips/health">Health Tips</Link></li>
                    </ul>
                  </details>
                </li>

                <li><Link href="/news" className={isActive('/news') ? 'bg-brand-green' : ''}>News</Link></li>
                <li><Link href="/contact" className={isActive('/contact') ? 'bg-brand-green' : ''}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;