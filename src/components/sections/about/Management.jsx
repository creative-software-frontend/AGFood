import TeamCard from "@/components/ui/TeamCard";

export default function Management() {
  const members = [
    { image: "/user1.jpg", name: "Rabie Elkheir", role: "Farmer" },
    { image: "/user2.jpg", name: "Rabie Elkheir", role: "Farmer" },
    { image: "/user3.jpg", name: "Rabie Elkheir", role: "Farmer" },
    { image: "/user4.jpg", name: "Rabie Elkheir", role: "Farmer" },
  ];

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12 text-[#0F172A]">
          Management Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {members.map((m, i) => (
            <TeamCard key={i} {...m} />
          ))}
        </div>

      </div>
    </section>
  );
}
