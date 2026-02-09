export default function Management() {
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#0F172A] mb-10 text-center">
          Management Team
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 text-center shadow-sm"
            >
              <img
                src={`/user${i}.jpg`}
                alt="Management Member"
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />

              <h4 className="text-lg font-semibold text-[#0F172A]">
                Manager {i}
              </h4>

              <p className="text-[#475569] text-sm mt-1">
                Department Head
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
