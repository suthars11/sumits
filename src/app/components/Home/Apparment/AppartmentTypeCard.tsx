import React from 'react';

type Props = {
  type: {
    id: number;
    icon: string;
    type: string;
    number: string;
  };
};

const AppartmentTypeCard = ({ type }: Props) => {
  return (
    <div className="flex items-center p-6 hover:scale-110 transition-all duration-300">
      {/* Image Section */}
      <img
        src={type.icon}
        alt={type.type}
        className="w-24 h-28 mr-2"
      />

      {/* Text Section */}
      <div>
        <h1 className="text-sm font-bold">{type.type}</h1>
        <p className="mt-1 text-xs text-gray-700">{type.number}</p>
      </div>
    </div>
  );
};

export default AppartmentTypeCard;
