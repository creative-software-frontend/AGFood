export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Our Story</h2>
            <p className="mb-4">
              We are passionate about bringing you the finest quality food products sourced from local farmers and producers.
            </p>
            <p className="mb-6">
              Our commitment to excellence ensures that every dish is prepared with care and attention to detail.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
              More About Us
            </button>
          </div>
          <div className="md:w-1/2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center">
              Image Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}