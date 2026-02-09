export default function VisionMission() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div>
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            Vision &amp; Mission
          </h2>

          <p className="text-[#475569] mb-4 leading-relaxed">
            Our vision is to become one of the most trusted agro-food brands
            in Bangladesh by delivering nutritious and affordable food.
          </p>

          <p className="text-[#475569] leading-relaxed">
            Our mission is to ensure uncompromised quality, sustainable
            processing, and long-term trust with our customers and partners.
          </p>
        </div>

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-lg border border-[#E2E8F0]">
          <img
            src="/slide2.jpg"
            alt="Vision and Mission"
            className="w-full h-[420px] object-cover"
          />
        </div>

      </div>
    </section>
  );
}
