import React from 'react';


type Props = {
  property: {
    id: number;
    propertyName: string;
    description: string;
    location: string;
    price: string;
    imageUrl: string;
    bedrooms?: undefined;
    bathrooms?: undefined;
    size?: undefined;
  };
};

const PropertyCard = ({ property }: Props) => {
  return (
    <div className="bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg flex">
      {/* Image Section */}
      <div className="w-1/2">
        <img
          src={property.imageUrl}
          alt={property.propertyName}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>

      {/* Text Section */}
      {/* <div className="w-1/2 p-6 flex flex-col justify-between">
     
        <div>
          <h1 className="text-xl font-bold text-gray-800">{property.propertyName}</h1>
          <p className="text-sm text-gray-600">{property.location}</p>

          <div className="flex items-center space-x-4 mt-4">
            <div className="flex items-center space-x-2">
              
            </div>
            <div className="flex items-center space-x-2">
            
              <p className="text-sm text-gray-600">{property.description} </p>
            </div>
            <div className="flex items-center space-x-2">
              
              <p className="text-sm text-gray-600">{property. location}</p>
            </div>
          </div>
        </div>

       
        <div>
          <p className="text-lg font-bold text-gray-800">₹ {property.price}</p>
          <button className="mt-4 px-4 py-2 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800">
            View More
          </button>
        
        </div>
      </div> */}
         <div className="w-1/2 p-6 flex flex-col">
          <div>
            <h1 className="text-xl font-bold text-gray-800">
            {property.location}
            </h1>
            {/* <p className="text-sm text-gray-600">by Jaipur property deals</p> */}
            <p className="mt-2 text-blue-600 text-sm underline hover:text-blue-800 cursor-pointer">
            {property.description} 
            </p>
            <p className="text-sm text-gray-500 mt-3">{property. location}</p>
          </div>
          <div>
            <p className="text-base font-bold">
            {property.price}
            </p>
            <button className="mt-4 px-4 w-full py-2 bg-purple-700 text-white font-medium rounded-lg hover:bg-purple-800">
              View more
            </button>
          </div>
        </div>
    </div>
  );
};

export default PropertyCard;
