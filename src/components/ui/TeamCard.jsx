import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function TeamCard({ image, name, role }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition relative">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-[260px] object-cover"
        />

        {/* SOCIAL BAR */}
        <div className="absolute -bottom-7 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-[#1F7A4D] px-6 py-2 rounded-full flex gap-4 shadow-md">

            <Icon>
              <FaFacebookF />
            </Icon>

            <Icon>
              <FaTwitter />
            </Icon>

            <Icon>
              <FaLinkedinIn />
            </Icon>

          </div>
        </div>
      </div>

      {/* INFO PANEL */}
      <div className="bg-[#1F7A4D] text-center pt-14 pb-10 relative z-10">

        <h4 className="text-white font-semibold text-lg">
          {name}
        </h4>

        <p className="text-[#F4A261] text-sm uppercase mt-1 tracking-wider">
          {role}
        </p>

        

      </div>

    </div>
  );
}

/* ICON */
function Icon({ children }) {
  return (
    <div
      className="w-8 h-8 bg-white text-[#1F7A4D]
      flex items-center justify-center rounded-full
      hover:bg-[#F4A261] hover:text-white transition"
    >
      {children}
    </div>
  );
}
