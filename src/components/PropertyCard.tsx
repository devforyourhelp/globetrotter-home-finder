
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Maximize2, ArrowRightLeft, Bath, BedDouble } from 'lucide-react';

export interface Property {
  id: string;
  title: string;
  price: number;
  currency: string;
  location: string;
  country: string;
  type: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  areaUnit: string;
  images: string[];
  isForSale: boolean;
  isForRent: boolean;
  description?: string;
  features?: string[];
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  // Format price with commas and currency symbol
  const formatPrice = (price: number, currency: string) => {
    let symbol = '$';
    if (currency === 'EUR') symbol = '€';
    else if (currency === 'GBP') symbol = '£';
    else if (currency === 'JPY') symbol = '¥';
    
    return `${symbol}${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  return (
    <Card className="property-card overflow-hidden h-full flex flex-col">
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-60 w-full object-cover"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {property.isForSale && (
            <Badge className="bg-estate-600 hover:bg-estate-700">For Sale</Badge>
          )}
          {property.isForRent && (
            <Badge className="bg-amber-600 hover:bg-amber-700">For Rent</Badge>
          )}
          <Badge variant="outline" className="bg-white/70 text-gray-800 hover:bg-white">
            {property.type}
          </Badge>
        </div>
      </div>
      
      <CardContent className="pt-6 flex-grow">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{property.title}</h3>
          <p className="font-bold text-estate-600">{formatPrice(property.price, property.currency)}</p>
        </div>
        
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm line-clamp-1">{property.location}, {property.country}</span>
        </div>
        
        <div className="grid grid-cols-3 gap-2 text-sm mt-4">
          <div className="flex items-center">
            <BedDouble className="h-4 w-4 mr-2 text-estate-500" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-2 text-estate-500" />
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <Maximize2 className="h-4 w-4 mr-2 text-estate-500" />
            <span>{property.area} {property.areaUnit}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <div className="w-full flex items-center justify-between">
          <Link 
            to={`/properties/${property.id}`}
            className="text-estate-600 hover:text-estate-800 font-medium text-sm"
          >
            View Details
          </Link>
          <button className="flex items-center text-gray-500 hover:text-estate-600">
            <ArrowRightLeft className="h-4 w-4 mr-1" />
            <span className="text-sm">Compare</span>
          </button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
