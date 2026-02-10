import TeamCard from "@/components/ui/TeamCard";

export default function Board() {

  const boardMembers = [
    { image: "/user1.jpg", name: "Rabie Elkheir", role: "Director" },
    { image: "/user2.jpg", name: "Rabie Elkheir", role: "Director" },
    { image: "/user3.jpg", name: "Rabie Elkheir", role: "Director" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-[#0F172A] mb-12 text-center">
          Board of Directors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {boardMembers.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>

      </div>
    </section>
  );
}
