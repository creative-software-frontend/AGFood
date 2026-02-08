"use client";

import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      mode: "snap",
      dragSpeed: 0.8,
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  const slides = [
    {
      image: "/slide1.jpg",
      highlight: "THE REAL NUGGETS",
      title: "Fresh & Healthy",
      subtitle: "Chicken Nuggets",
      description: "Made with 100% real chicken, no preservatives added",
      price: "299",
      unit: "/ pack",
      quality: "Premium Quality Chicken",
      meatType: "Perfect White Meat",
      cta: "SHOP NOW",
      store: "Bayna.store",
    },
    {
      image: "/slide2.jpg",
      highlight: "PREMIUM QUALITY",
      title: "Always Fresh",
      subtitle: "Chicken Products",
      description: "Farm to table freshness guaranteed",
      price: "349",
      unit: "/ pack",
      quality: "100% Natural Ingredients",
      meatType: "Fresh Daily",
      cta: "SHOP NOW",
      store: "Bayna.store",
    },
  ];

  if (!isMounted) {
    return (
      <section className="relative w-full h-[85vh] bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-red-500/20 border-t-red-600 rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[85vh] md:h-[90vh] overflow-hidden">
      {/* Main Slider */}
      <div ref={sliderRef} className="keen-slider h-full">
        {slides.map((slide, index) => (
          <div key={index} className="keen-slider__slide relative">
            {/* Subtle Background Image - Smaller and Elegant */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover scale-110"
                quality={95}
                style={{ objectPosition: "center 30%" }}
              />
              
              {/* Minimal Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            {/* Content Container - Clean and Minimal */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                  {/* Left Column - Minimal Text Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: 0.2,
                      ease: "easeOut" 
                    }}
                    className="text-white space-y-4 md:space-y-6"
                  >
                    {/* Small Highlight Badge */}
                    <div className="inline-block">
                      <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-xs font-medium tracking-wider uppercase">
                          {slide.highlight}
                        </span>
                      </div>
                    </div>

                    {/* Quality Tag */}
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm md:text-base font-medium text-amber-300">
                        {slide.quality}
                      </span>
                    </div>

                    {/* Main Title - Clean and Bold */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                      <span className="block">{slide.title}</span>
                      <span className="text-amber-300 block mt-2">{slide.subtitle}</span>
                    </h1>

                    {/* Description - Minimal */}
                    <p className="text-base md:text-lg lg:text-xl text-white/90 font-light max-w-lg leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Price and Meat Type */}
                    <div className="flex items-baseline space-x-4 pt-4">
                      <div className="text-3xl md:text-4xl font-bold text-amber-300">
                        ৳{slide.price}
                        <span className="text-lg text-white/70 ml-1">{slide.unit}</span>
                      </div>
                      <div className="h-8 w-px bg-white/30"></div>
                      <div className="text-base md:text-lg font-medium text-white">
                        {slide.meatType}
                      </div>
                    </div>

                    {/* CTA Buttons - Clean and Simple */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 group"
                      >
                        <span>{slide.cta}</span>
                        <svg 
                          className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base hover:bg-white/20 transition-all duration-300"
                      >
                        {slide.store}
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Right Column - Simple Visual Element */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="hidden lg:flex justify-center items-center"
                  >
                    <div className="relative">
                      {/* Minimal Product Visual */}
                      <div className="relative w-56 h-56">
                        {/* Decorative Circle */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-red-500/10 rounded-full blur-xl"></div>
                        
                        {/* Clean Product Card */}
                        <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl">
                          <div className="text-center">
                            {/* Simple Icon */}
                            <div className="text-5xl mb-4">🍗</div>
                            
                            {/* Minimal Info */}
                            <div className="space-y-2">
                              <h3 className="text-xl font-bold text-white">Chicken Nuggets</h3>
                              <div className="text-amber-300 font-bold text-2xl">৳{slide.price}</div>
                              <div className="text-white/70 text-sm">per pack</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Minimal Navigation Controls */}
      {loaded && instanceRef.current && (
        <>
          {/* Clean Arrow Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 border border-white/10 transition-all duration-300 z-10"
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/5 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/10 border border-white/10 transition-all duration-300 z-10"
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Simple Dot Navigation */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "bg-white"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Minimal Shop Now Indicator */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="text-xs text-white/60">
          Scroll for more
        </div>
      </div>
    </section>
  );
}