export default function ContactHero() {
  return (
    <section
      className="relative h-[380px] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url(/images/app/contact-hero.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-200">
          We are ready to provide fresh & sustainable food solutions
        </p>
      </div>
    </section>
  );
}
