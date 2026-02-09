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
      image: "/product-nuggets.jpg",
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
      features: ["100% Natural", "No Preservatives", "Fresh Daily"],
    },
    {
      image: "/product-chicken.jpg",
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
      features: ["Farm Fresh", "Quality Checked", "Hygienic"],
    },
  ];

  if (!isMounted) return null;

  return (
    <section className="relative w-full overflow-hidden bg-white pt-20 pb-20 lg:pt-12 lg:pb-12">
      
      <div ref={sliderRef} className="keen-slider h-full">
        {slides.map((slide, index) => (
          <div key={index} className="keen-slider__slide relative h-full">
            
            <div className="max-w-7xl mx-auto px-4 lg:px-8 h-full flex items-center">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-8 lg:py-0">

                {/* LEFT CONTENT (Text) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="space-y-4 md:space-y-6 text-center lg:text-left order-2 lg:order-1"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#e30613]" />
                    <span className="text-xs md:text-sm font-semibold tracking-widest text-[#1d7239]">
                      {slide.highlight}
                    </span>
                  </div>

                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                    <span className="block text-[#333333]">{slide.title}</span>
                    <span className="block text-[#1d7239]">{slide.subtitle}</span>
                  </h1>

                  <p className="text-base md:text-lg text-[#4b5563] max-w-xl mx-auto lg:mx-0 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3">
                    {slide.features.map((f, i) => (
                      <div key={i}
                        className="px-3 py-1.5 md:px-4 md:py-2 rounded-full border text-xs md:text-sm font-medium"
                        style={{
                          background: "#1d723910",
                          borderColor: "#1d723925",
                          color: "#1d7239"
                        }}>
                        ✓ {f}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
                    <div>
                        <p className="text-3xl md:text-4xl font-black text-[#1d7239]">
                        ৳{slide.price}
                        <span className="text-sm md:text-base font-normal text-[#4b5563] ml-1">{slide.unit}</span>
                        </p>
                    </div>
                    <div className="h-8 w-[2px] bg-gray-200 hidden sm:block"></div>
                    <p className="text-sm md:text-lg font-semibold text-[#333333] leading-tight max-w-[200px]">
                      {slide.quality}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2">

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: .95 }}
                      className="w-full sm:w-1/2 md:w-1/2 px-10 py-3 md:py-4 rounded-full text-white font-bold shadow-xl transition-all"
                      style={{ background: "#e30613" }}
                    >
                      {slide.cta}
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: .95 }}
                      className="w-full sm:w-1/2 md:w-1/2 px-10 py-3 md:py-4 rounded-full text-white font-bold shadow-xl transition-all"
                      style={{ background: "#1d7239" }}
                    >
                      {slide.store}
                    </motion.button>
                  </div>
                </motion.div>

                {/* RIGHT CONTENT (Image) */}
                <motion.div
                  initial={{ opacity: 0, scale: .8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: .7 }}
                  className="flex justify-center lg:justify-end order-1 lg:order-2"
                >
                  <div className="relative bg-[#f8fafc] p-4 sm:p-8 lg:p-12 rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl border border-gray-100">
                    <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px]">
                      <Image
                        src={slide.image}
                        alt={slide.subtitle}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>

                    <div
                      className="absolute -top-2 -right-2 lg:top-4 lg:-right-4 text-white px-4 py-1.5 lg:px-5 lg:py-2 rounded-full text-[10px] lg:text-sm font-black shadow-lg"
                      style={{ background: "#e30613" }}
                    >
                      NEW ARRIVAL
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS - Hidden on small mobile for cleaner UI */}
      {loaded && instanceRef.current && (
        <div className="hidden sm:block">
          <button
            onClick={() => instanceRef.current.prev()}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/80 backdrop-blur rounded-full shadow-lg text-[#333333] hover:bg-[#1d7239] hover:text-white transition-all z-10 flex items-center justify-center text-xl lg:text-2xl"
          >
            ‹
          </button>

          <button
            onClick={() => instanceRef.current.next()}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-white/80 backdrop-blur rounded-full shadow-lg text-[#333333] hover:bg-[#1d7239] hover:text-white transition-all z-10 flex items-center justify-center text-xl lg:text-2xl"
          >
            ›
          </button>
        </div>
      )}

      {/* DOTS - Adjusted position for mobile spacing */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => instanceRef.current?.moveToIdx(i)}
            className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${currentSlide === i
                ? "w-8 md:w-10 bg-[#1d7239]"
                : "w-2 md:w-2.5 bg-gray-300"
              }`}
          ></button>
        ))}
      </div>

    </section>
  );
}