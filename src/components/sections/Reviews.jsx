"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

export default function Reviews() {
  const [active, setActive] = useState(0);

  const reviews = [
    {
      name: "Asif Hossain",
      role: "Customer",
      text: "AG Food is really a great food I have ever tasted among all food chain of Bangladesh....",
      avatar: "/user1.jpg",
    },
    {
      name: "Jimmy Khan",
      role: "Customer",
      text: "AG always committed to serve the best so all time we may hope for best....",
      avatar: "/user2.jpg",
    },
    {
      name: "MD Jubayed Uddin",
      role: "Customer",
      text: "Ag foods meatball and crispy (drum stick) is really tasty and delicious",
      avatar: "/user3.jpg",
    },
    {
      name: "Rahim Uddin",
      role: "Customer",
      text: "Quality and taste both are excellent. Highly recommended.",
      avatar: "/user4.jpg",
    },
  ];

  const [sliderRef] = useKeenSlider(
  {
    loop: true,
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1 },
      },
    },
    slideChanged(slider) {
      const realIndex =
        slider.track.details.slides[slider.track.details.rel].index;
      setActive(realIndex);
    },
  },
  [
    (slider) => {
      let timeout;
      let mouseOver = true;

      function clearNextTimeout() {
        clearTimeout(timeout);
      }

      function nextTimeout() {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          slider.next();
        }, 3000); 
      }

      slider.on("created", () => {
        nextTimeout();
      });

      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  ]
);


  return (
    <section className="py-24 bg-[#F8FAFC]">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-sm tracking-widest text-[#1d7239] font-semibold">
          TESTIMONIAL
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] mt-2">
          What Our Happy User Says
        </h2>
      </div>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="keen-slider max-w-7xl mx-auto px-4 overflow-visible"
      >
        {reviews.map((item, i) => {
          const isActive = active === i;

          return (
            <div key={i} className="keen-slider__slide flex p-8">
              <motion.div
                
                transition={{
                  duration: 0.35,
                  ease: "easeOut",
                }}
                className={`relative w-full bg-white rounded-2xl p-8 border
                  ${isActive ? "shadow-2xl z-20" : "shadow-md z-10"}`}
              >
                {/* Quote */}
                <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#1d7239] text-white flex items-center justify-center text-xl shadow-lg">
                  <FaQuoteLeft />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 text-[#e30613] mt-6">
                  ★★★★★
                </div>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.text}
                </p>

                {/* User */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-[#222]">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
