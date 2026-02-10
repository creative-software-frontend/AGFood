import TeamCard from "@/components/ui/TeamCard";

export default function Chairman() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <TeamCard
          image="/chairman.jpg"
          name="Mr. Abdul Rahman"
          role="Chairman"
        />

        <div>
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            Message from the Chairman
          </h2>

          <p className="text-[#475569] leading-relaxed mb-4">
            The Chairman of AG Agro Foods Ltd. believes that safe and healthy
            food is a fundamental right for every family in Bangladesh.
          </p>

          <p className="text-[#475569] leading-relaxed">
            Under his leadership, the company is committed to ethical business
            practices, innovation, and long-term sustainability.
          </p>
        </div>

      </div>
    </section>
  );
}
