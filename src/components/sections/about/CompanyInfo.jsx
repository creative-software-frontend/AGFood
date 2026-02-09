export default function CompanyInfo() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0]">
          <img
            src="/slide1.jpg"
            alt="AG Agro Foods"
            className="w-full h-[420px] object-cover"
          />
        </div>

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            Company Information
          </h2>

          <p className="text-[#475569] mb-5 leading-relaxed">
            AG Agro Foods Ltd. is a trusted agro-food company in Bangladesh,
            committed to delivering safe, healthy, and high-quality food
            products for everyday families.
          </p>

          <p className="text-[#475569] leading-relaxed mb-8">
            We combine modern food processing technology with strict quality
            control to ensure freshness, nutrition, and customer satisfaction
            at every step.
          </p>

          <button className="inline-flex items-center gap-2 bg-[#1F7A4D] text-white px-6 py-3 rounded-full hover:bg-[#2FBF71] transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
