import React from 'react';
import ExportingCard from '../ui/ExportingCard';
import Image from 'next/image';

const ExportSection = () => {
  return (
    /* Main container with increased height */
    <section className="relative w-full min-h-[700px] md:min-h-[850px] flex flex-col overflow-hidden ">
      
      {/* 1. Background Image Layer (The Map) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/world-map-bg.png" 
          alt="Export Background Map"
          fill
          className="object-contain object-top pt-12" // Anchors map to top with some padding
          priority
        />
      </div>

      {/* 2. Spacer: Pushes the card to the bottom */}
      <div className="flex-grow"></div>

      {/* 3. Bottom Card Container restricted to max-w-7xl */}
      <div className="relative z-10 w-full  md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* The ExportingCard now sits inside the 7xl container.
             Ensure ExportingCard itself doesn't have its own 
             max-width that conflicts with this.
          */}
          <ExportingCard className="rounded-xl shadow-2xl" />
        </div>
      </div>
      
    </section>
  );
};

export default ExportSection;