import ContactHero from "@/components/sections/ContactHero";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";
// import MapSection from "@/components/sections/Map";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 grid md:grid-cols-2 gap-10">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* <MapSection /> */}
    </>
  );
}
