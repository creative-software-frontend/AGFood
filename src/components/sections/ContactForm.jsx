export default function ContactForm() {
  return (
    <form className="space-y-5">
      <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">
        Send us a message
      </h3>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#2FBF71]"
        />
        <input
          type="text"
          placeholder="Company"
          className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#2FBF71]"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Phone"
          className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#2FBF71]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#2FBF71]"
        />
      </div>

      <input
        type="text"
        placeholder="Subject"
        className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#2FBF71]"
      />

      <textarea
        rows="5"
        placeholder="Message"
        className="w-full rounded-lg border border-[#E2E8F0] bg-white px-4 py-3 text-[#0F172A] placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#2FBF71] resize-none"
      />

      <button
        type="submit"
        className="bg-[#1F7A4D] hover:bg-[#2FBF71] text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
