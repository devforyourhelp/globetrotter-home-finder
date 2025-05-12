
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Home, Maximize2, ArrowRightLeft, Bath, BedDouble, ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Format price with commas and currency symbol
  const formatPrice = (price: number, currency: string) => {
    let symbol = '$';
    if (currency === 'EUR') symbol = '€';
    else if (currency === 'GBP') symbol = '£';
    else if (currency === 'JPY') symbol = '¥';
    
    return `${symbol}${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === Math.min(property.images.length - 1, 4) ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? Math.min(property.images.length - 1, 4) : prevIndex - 1
    );
  };

  const imageCount = Math.min(property.images.length, 5);

  return (
    <Card className="property-card overflow-hidden h-full flex flex-col hover:shadow-lg transition-all duration-300 border-gray-200">
      <div className="relative">
        <AspectRatio ratio={16 / 9} className="bg-muted">
          {property.images && property.images.length > 0 ? (
            <>
              <img
                src={property.images[currentImageIndex]}
                alt={property.title}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
              {imageCount > 1 && (
                <div className="absolute inset-0 flex justify-between items-center px-2">
                  <button 
                    onClick={prevImage}
                    className="bg-black/30 text-white p-1 rounded-full hover:bg-black/50 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="bg-black/30 text-white p-1 rounded-full hover:bg-black/50 transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              )}
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
                {currentImageIndex + 1}/{imageCount}
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full bg-gray-100">
              <ImageIcon className="h-10 w-10 text-gray-400" />
            </div>
          )}
        </AspectRatio>
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {property.isForSale && (
            <Badge className="bg-estate-600 hover:bg-estate-700">For Sale</Badge>
          )}
          {property.isForRent && (
            <Badge className="bg-amber-600 hover:bg-amber-700">For Rent</Badge>
          )}
          <Badge variant="outline" className="bg-white/90 text-gray-800 hover:bg-white backdrop-blur-sm">
            {property.type}
          </Badge>
        </div>
        <div className="absolute bottom-4 right-4">
          <Badge className="bg-estate-600/90 text-white backdrop-blur-sm font-bold text-md hover:bg-estate-700">
            {formatPrice(property.price, property.currency)}
          </Badge>
        </div>
      </div>
      
      <CardContent className="pt-6 flex-grow">
        <h3 className="font-semibold text-lg mb-2 text-estate-800 hover:text-estate-600 transition-colors line-clamp-2">{property.title}</h3>
        
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
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
            className="text-estate-600 hover:text-estate-800 font-medium text-sm flex items-center"
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
