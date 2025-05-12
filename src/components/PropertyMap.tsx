
import React from 'react';

interface PropertyMapProps {
  latitude?: number;
  longitude?: number;
  address?: string;
  zoom?: number;
}

const PropertyMap: React.FC<PropertyMapProps> = ({ 
  latitude = 40.7128, 
  longitude = -74.0060, 
  address = "Property Location", 
  zoom = 13 
}) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-inner h-full min-h-[300px] flex items-center justify-center relative overflow-hidden">
      {/* This is a placeholder for actual map integration */}
      <div className="text-center text-gray-500 p-4 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-2 text-estate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <p>Map will be loaded here with coordinates: {latitude}, {longitude}</p>
        <p>Address: {address}</p>
        <p>Zoom Level: {zoom}</p>
      </div>
      
      {/* Background grid pattern to simulate a map */}
      <div className="absolute inset-0 grid grid-cols-8 grid-rows-8">
        {Array(64).fill(null).map((_, i) => (
          <div key={i} className={`border ${i % 2 === 0 ? 'border-gray-300' : 'border-gray-250'}`}></div>
        ))}
      </div>
    </div>
  );
};

export default PropertyMap;
