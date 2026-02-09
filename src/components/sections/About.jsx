import Link from "next/link";

export default function About() {
  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">

          {/* IMAGE (will appear first on mobile) */}
          <div className="order-1 relative">
            <div className="rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-lg">
              <img
                src="/product-chicken.jpg"
                alt="About Preview"
                className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
              />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="order-2">

            <span className="text-sm font-semibold tracking-wider text-[#2FBF71] uppercase">
              Our Story
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] mt-3 mb-5">
              Healthy Food, Happy Life
            </h2>

            <p className="text-[#475569] text-base sm:text-lg mb-4 leading-relaxed">
              We are passionate about bringing you the finest quality food
              products sourced directly from local farmers and trusted
              producers.
            </p>

            <p className="text-[#475569] text-base sm:text-lg mb-7 leading-relaxed">
              Every product is carefully selected to ensure freshness, taste,
              and nutrition for your family.
            </p>

            {/* BUTTON */}
            <Link href="/about">
              <button className="bg-[#e30613] hover:bg-[#1F7A4D] text-white font-semibold px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                Learn More About Us
              </button>
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}
