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
    <section className="relative w-full h-[90vh] overflow-hidden bg-[#ffffff]">

      <div ref={sliderRef} className="keen-slider h-full">

        {slides.map((slide, index) => (
          <div key={index} className="keen-slider__slide relative">

            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

{/* LEFT */}
<motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  className="space-y-6"
>

<div className="flex items-center gap-2">
  <div className="w-2 h-2 rounded-full bg-[#e30613]" />
  <span className="text-sm font-semibold tracking-widest text-[#1d7239]">
    {slide.highlight}
  </span>
</div>

<h1 className="text-5xl font-bold">
  <span className="block text-[#333333]">{slide.title}</span>
  <span className="block text-[#1d7239]">{slide.subtitle}</span>
</h1>

<p className="text-lg text-[#4b5563] max-w-xl">
  {slide.description}
</p>

<div className="flex flex-wrap gap-3">
{slide.features.map((f,i)=>(
  <div key={i}
    className="px-4 py-2 rounded-full border text-sm"
    style={{
      background:"#1d723915",
      borderColor:"#1d723940",
      color:"#333333"
    }}>
    ✓ {f}
  </div>
))}
</div>

<div className="flex items-center gap-4">
  <p className="text-4xl font-bold text-[#1d7239]">
    ৳{slide.price}
    <span className="text-base text-[#4b5563]">{slide.unit}</span>
  </p>
  <p className="text-lg font-semibold text-[#333333]">
    {slide.quality}
  </p>
</div>

<p className="text-[#1d7239] font-medium">{slide.meatType}</p>

<div className="flex gap-4">

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:.95}}
className="px-8 py-4 rounded-full text-white font-bold shadow-lg"
style={{background:"#e30613"}}
>
{slide.cta}
</motion.button>

<motion.button
whileHover={{scale:1.05}}
whileTap={{scale:.95}}
className="px-8 py-4 rounded-full text-white font-bold shadow-lg"
style={{background:"#1d7239"}}
>
{slide.store}
</motion.button>

</div>

</motion.div>

{/* RIGHT IMAGE */}
<motion.div
initial={{opacity:0,scale:.9}}
animate={{opacity:1,scale:1}}
transition={{duration:.7}}
className="flex justify-center"
>

<div className="relative bg-[#f8fafc] p-8 rounded-2xl shadow-xl">

<div className="relative w-[350px] h-[350px]">
<Image
 src={slide.image}
 alt=""
 fill
 className="object-contain"
/>
</div>

<div
className="absolute -top-3 -right-3 text-white px-4 py-1 rounded-full text-sm font-bold"
style={{background:"#e30613"}}
>
NEW
</div>

<div
className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-white px-6 py-2 rounded-full font-bold"
style={{background:"#1d7239"}}
>
৳{slide.price}
</div>

</div>

</motion.div>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

{/* ARROWS */}
{loaded && instanceRef.current && (
<>
<button
onClick={()=>instanceRef.current.prev()}
className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow text-[#333333]"
>
‹
</button>

<button
onClick={()=>instanceRef.current.next()}
className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow text-[#333333]"
>
›
</button>
</>
)}

{/* DOTS */}
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
{slides.map((_,i)=>(
<button
key={i}
onClick={()=>instanceRef.current?.moveToIdx(i)}
className={`h-2 rounded-full transition-all ${
currentSlide===i
? "w-8 bg-[#1d7239]"
: "w-2 bg-[#33333350]"
}`}
></button>
))}
</div>

    </section>
  );
}
