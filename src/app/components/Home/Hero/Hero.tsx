import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full"> {/* Ensures the container spans the full width */}
      <div className="relative w-full h-[628px] md:h-[400px] overflow-hidden sm:h-[400px] lg:[400px]">
        {/* Next.js Image with proper layout for responsiveness */}
        <Image
          src="/images/property.png"
          alt="Property Background"
          width={1200} // Specify the width
          height={600}
          objectFit="cover"
          objectPosition="center"
          priority
          layout="responsive"
        />
       
      </div>
    </div>
  );
};

export default Hero;
