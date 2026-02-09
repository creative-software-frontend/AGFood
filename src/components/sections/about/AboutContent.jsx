export default function AboutContent() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/slide1.jpg"
              alt="Our Team"
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold text-[#0F172A] mb-6">
              We Deliver Quality & Trust
            </h2>

            <p className="text-[#475569] mb-4 leading-relaxed">
              Our mission is to make fresh, healthy, and affordable food
              accessible to every household.
            </p>

            <p className="text-[#475569] mb-4 leading-relaxed">
              We work closely with farmers and suppliers who share our
              values of quality, sustainability, and honesty.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div className="p-5 bg-white rounded-xl shadow">
                <h4 className="text-2xl font-bold text-[#2FBF71]">10k+</h4>
                <p className="text-[#475569]">Happy Customers</p>
              </div>

              <div className="p-5 bg-white rounded-xl shadow">
                <h4 className="text-2xl font-bold text-[#2FBF71]">100+</h4>
                <p className="text-[#475569]">Trusted Farmers</p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
