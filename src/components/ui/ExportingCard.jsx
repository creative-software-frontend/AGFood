import React from 'react';

const ExportingCard = ({
  title = "Exporting Country",
  countries = "(UAE, Korea, Canada, Italy, Australia.)",
  outletCount = "49",
  outletText = "Now we have {count} outlets all over Bangladesh.",
  outlets = "(Dhaka, Mirpur, North Shahjahanpur, Dhaka, Khilgaon, Narsingdi, Mugdha, Ramna, Malibagh, Kakrail, Pantapath, Cantonment, Uttara, Gazipur, Narayanganj, Mymensingh, Munshiganj, Chittagong, Cox’s Bazar, Noakhali, Feni, Chandpur, B-Baria, Bogra, Rangpur, Sylhet, Tangail, Habiganj, Rajshahi, Khulna.)",
  className = "",
}) => {
  const formattedOutletText = outletText.replace("{count}", outletCount);

  return (
    <section 
      className={`w-full text-white py-12 md:py-16 lg:py-20 ${className}`}
      style={{ backgroundColor: '#183519' }} // Deep green background from your reference
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title & Export Countries */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mb-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          <span className="text-lg md:text-xl font-medium opacity-90 pt-1">
            {countries}
          </span>
        </div>

        {/* Outlet Summary Statement */}
        <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8">
          {formattedOutletText}
        </p>

        {/* Detailed Outlet List */}
        <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-80 max-w-6xl mx-auto px-4">
          {outlets}
        </p>
      </div>
    </section>
  );
};

export default ExportingCard;