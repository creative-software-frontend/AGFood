import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-[#0F172A] mb-6">
        Get in Touch
      </h3>

      <ul className="space-y-6 text-[#475569]">
        <li className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-[#1F7A4D] text-xl mt-1" />
          <span>Dhaka, Bangladesh</span>
        </li>

        <li className="flex items-start gap-4">
          <FaEnvelope className="text-[#1F7A4D] text-xl mt-1" />
          <span>info@agfood.com</span>
        </li>

        <li className="flex items-start gap-4">
          <FaPhoneAlt className="text-[#1F7A4D] text-xl mt-1" />
          <span>+880 1XXX-XXXXXX</span>
        </li>
      </ul>
    </div>
  );
}
