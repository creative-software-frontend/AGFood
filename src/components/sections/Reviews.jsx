"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

export default function TestimonialSlider() {

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <section className="w-full overflow-x-hidden bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">
            What Our Happy Users Say
          </h2>
        </div>

        {/* Slider */}
        <div className="slider-container">
          <Slider {...settings}>
            {reviews.map((item, index) => (
              <div key={index} className="px-3 py-8">

                {/* === CARD DESIGN === */}
                <div className="relative bg-white rounded-2xl p-6 border shadow-md hover:shadow-xl transition h-[320px] flex flex-col justify-between">

                  {/* Quote */}
                  <div className="absolute -top-6 left-6 w-12 h-12 rounded-full bg-[#1d7239] text-white flex items-center justify-center text-xl shadow-lg">
                    <FaQuoteLeft />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 text-[#e30613] mt-6">
                    ★★★★★
                  </div>

                  {/* Text */}
                  <p className="text-gray-600 leading-relaxed">
                    {item.text}
                  </p>

                  {/* User */}
                  <div className="flex items-center gap-4 mt-6">
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

                </div>
                {/* === END CARD === */}

              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
}
