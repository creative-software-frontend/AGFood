import { FaCheck } from "react-icons/fa";

export default function PlantInfoSection({
  title,
  bgImage,
  leftItems,
  rightItems,
}) {
  return (
    <section
      className="relative py-24"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="border border-white/60 rounded-2xl p-10 md:p-14 backdrop-blur-sm">
          <h2 className="text-4xl font-bold text-white text-center mb-10">
            {title}
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-white">
            <ul className="space-y-4">
              {leftItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheck className="text-[#2FBF71] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <ul className="space-y-4">
              {rightItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FaCheck className="text-[#2FBF71] mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
