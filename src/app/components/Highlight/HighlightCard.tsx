import React from "react";

type Props = {
  city: {
    id: number;
    image: string;
    cityName: string;
    location: string;
    price: string;
    size: string;
  };
};

const HighlightCard = ({ city }: Props) => {
  return (
    <div className="relative max-h-full rounded-lg overflow-hidden m-2">
      {/* Full width image */}
      <img
        src={city.image}
        alt="Image"
        width={100}
        height={476}
        className="opacity-100 rounded-lg w-full h-[276px] object-cover"
      />
      {/* Gradient overlay with content at the bottom */}
      <div className="absolute rounded-tr-full mt-44 inset-0 w-full h-[102px] custom-gradient to-[rgba(245,174,237,0.8)]  clip-banner">
        <div className="absolute bottom-0 w-full p-4 ">
          {/* Content inside the bottom section */}
          <h1 className="text-xs font-semibold text-white">{city.cityName}</h1>
          <h3 className="text-xs pt-1 text-white">{city.location}</h3>
          <h1 className="text-sm font-bold pt-2 text-white">{city.price}</h1>
          <p className="text-gray-200">{city.size}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
