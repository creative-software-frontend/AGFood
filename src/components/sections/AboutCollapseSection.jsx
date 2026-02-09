"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgAboutCollapseSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4">

        {/* Top Center Title */}
        <div className="text-center mb-14">
          <p className="text-sm tracking-widest text-[#1d7239] font-semibold">
            AG Agro food Ltd. Products
          </p>
          <h2 className="text-4xl font-extrabold text-[#222] mt-2">
            Frozen Food Company in Bangladesh
          </h2>
        </div>

        {/* Left aligned content */}
        <div className="text-left text-gray-700 leading-relaxed text-lg space-y-6">
          <p>
            Food is one of the most important things in our daily life.
            There is no substitute for food for the survival of every animal.
            But nowadays it is difficult to get good quality food.
            Therefore, considering the overall well-being of your family,
            AG Agro Foods Ltd has started our service as the best food company
            in Bangladesh.
          </p>

          <p>
            We offer better quality services than all the food companies in
            Bangladesh. You will find a variety of healthy processed food in
            our store. We have been transformed into the best-processed food
            company in Bangladesh for this healthy food.
          </p>
        </div>

        {/* Collapsible section */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mt-10 text-left text-gray-700 leading-relaxed text-lg space-y-6">
                <p>
                  So now let’s find out the details about why our product and
                  company is the best-processed food company in Bangladesh.
                </p>

                <h3 className="text-2xl font-bold text-[#222]">
                  What makes us the best processed food company in Dhaka, Bangladesh?
                </h3>

                <p>
                  We are a bit different from any other processed food company
                  in Bangladesh in terms of our products and services.
                  We have been leading our food service in Bangladesh since 1986.
                </p>

                <p>
                  We carefully preserve all types of raw materials used in our
                  products so that the quality of each product remains the highest.
                </p>

                <h3 className="text-2xl font-bold text-[#222]">
                  Quality Frozen Food Company in Bangladesh
                </h3>

                <p>
                  At AG Agro Foods Limited, we provide Quality Frozen Food all over
                  Bangladesh. Our Frozen Food is considered to be the right food
                  to make you healthy.
                </p>

                <h3 className="text-2xl font-bold text-[#222]">
                  How to Select Healthy Frozen Foods in Dhaka Bangladesh?
                </h3>

                <ul className="list-decimal pl-6 space-y-3">
                  <li>Notice at least 5 grams of fiber</li>
                  <li>Notice minimum 15 grams of protein</li>
                  <li>Keep sodium under 600 mg</li>
                  <li>Buy plain frozen vegetables</li>
                  <li>Pick 100% frozen fruits without sugar</li>
                  <li>Limit breaded and fried foods</li>
                  <li>Choose low mercury fish</li>
                  <li>Maintain balanced meals</li>
                  <li>Focus on calorie count</li>
                  <li>Review ingredient list carefully</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Center Button */}
        <div className="text-center mt-14">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center gap-2 text-[#1d7239] font-semibold text-lg hover:gap-3 transition-all"
          >
            {open ? "Read less" : "Read more"}
            <span className="text-xl">{open ? "↑" : "↓"}</span>
          </button>
        </div>

      </div>
    </section>
  );
}
