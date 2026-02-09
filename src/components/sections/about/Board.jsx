export default function Board() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#0F172A] mb-10 text-center">
          Board of Directors
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 text-center shadow-sm"
            >
              <img
                src={`/user${i}.jpg`}
                alt="Board Member"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />

              <h4 className="text-xl font-semibold text-[#0F172A]">
                Board Member {i}
              </h4>

              <p className="text-[#475569] text-sm mt-2">
                Providing strategic direction and governance for sustainable
                growth.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
