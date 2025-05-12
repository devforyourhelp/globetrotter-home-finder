
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import properties from '@/data/properties';
import { Property } from '@/components/PropertyCard';
import { X, Bath, BedDouble, Maximize2, Check } from 'lucide-react';

const ComparePage: React.FC = () => {
  const [selectedProperties, setSelectedProperties] = useState<Property[]>([null, null]);
  const [availableProperties, setAvailableProperties] = useState<Property[]>(properties);
  
  // Update available properties when selections change
  useEffect(() => {
    const selectedIds = selectedProperties
      .filter(p => p !== null)
      .map(p => p.id);
    
    setAvailableProperties(
      properties.filter(p => !selectedIds.includes(p.id))
    );
  }, [selectedProperties]);
  
  // Handle property selection
  const handleSelectProperty = (index: number, propertyId: string) => {
    const property = properties.find(p => p.id === propertyId);
    const newSelectedProperties = [...selectedProperties];
    newSelectedProperties[index] = property;
    setSelectedProperties(newSelectedProperties);
  };
  
  // Remove a property from comparison
  const handleRemoveProperty = (index: number) => {
    const newSelectedProperties = [...selectedProperties];
    newSelectedProperties[index] = null;
    setSelectedProperties(newSelectedProperties);
  };
  
  // Format price with commas and currency symbol
  const formatPrice = (price: number, currency: string) => {
    let symbol = '$';
    if (currency === 'EUR') symbol = '€';
    else if (currency === 'GBP') symbol = '£';
    else if (currency === 'JPY') symbol = '¥';
    
    return `${symbol}${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Compare Properties</h1>
        <p className="text-gray-500">Select properties to compare their features side by side.</p>
      </div>
      
      {/* Property Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {selectedProperties.map((property, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Property {index + 1}</h3>
                {property && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-gray-500 hover:text-red-500"
                    onClick={() => handleRemoveProperty(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
              
              {property ? (
                <div>
                  <div className="aspect-video overflow-hidden rounded-md mb-4">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold mb-1">{property.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{property.location}, {property.country}</p>
                  <p className="font-bold text-estate-600">{formatPrice(property.price, property.currency)}</p>
                </div>
              ) : (
                <div>
                  <Select onValueChange={(value) => handleSelectProperty(index, value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a property" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableProperties.map((prop) => (
                        <SelectItem key={prop.id} value={prop.id}>
                          {prop.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <div className="text-center mt-6 py-12 bg-gray-50 rounded-md">
                    <p className="text-gray-400">No property selected</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Comparison Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 bg-gray-50">
          <h2 className="text-xl font-semibold">Property Comparison</h2>
        </div>
        
        <Separator />
        
        {/* Basic Information */}
        <div className="p-6">
          <h3 className="font-semibold mb-4">Basic Information</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Property Type</div>
            {selectedProperties.map((property, index) => (
              <div key={index}>
                {property ? (
                  <Badge variant="outline">{property.type}</Badge>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="font-medium">Status</div>
            {selectedProperties.map((property, index) => (
              <div key={index}>
                {property ? (
                  property.isForSale ? (
                    <Badge className="bg-estate-600 hover:bg-estate-700">For Sale</Badge>
                  ) : (
                    <Badge className="bg-amber-600 hover:bg-amber-700">For Rent</Badge>
                  )
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="font-medium">Price</div>
            {selectedProperties.map((property, index) => (
              <div key={index} className="font-semibold text-estate-600">
                {property ? formatPrice(property.price, property.currency) : <span className="text-gray-400">-</span>}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="font-medium">Location</div>
            {selectedProperties.map((property, index) => (
              <div key={index}>
                {property ? `${property.location}, ${property.country}` : <span className="text-gray-400">-</span>}
              </div>
            ))}
          </div>
        </div>
        
        <Separator />
        
        {/* Details */}
        <div className="p-6">
          <h3 className="font-semibold mb-4">Property Details</h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="font-medium">Bedrooms</div>
            {selectedProperties.map((property, index) => (
              <div key={index} className="flex items-center">
                {property ? (
                  <>
                    <BedDouble className="h-4 w-4 mr-2 text-estate-500" />
                    <span>{property.bedrooms}</span>
                  </>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="font-medium">Bathrooms</div>
            {selectedProperties.map((property, index) => (
              <div key={index} className="flex items-center">
                {property ? (
                  <>
                    <Bath className="h-4 w-4 mr-2 text-estate-500" />
                    <span>{property.bathrooms}</span>
                  </>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="font-medium">Area</div>
            {selectedProperties.map((property, index) => (
              <div key={index} className="flex items-center">
                {property ? (
                  <>
                    <Maximize2 className="h-4 w-4 mr-2 text-estate-500" />
                    <span>{property.area} {property.areaUnit}</span>
                  </>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <Separator />
        
        {/* Features */}
        <div className="p-6">
          <h3 className="font-semibold mb-4">Features</h3>
          
          {['Parking', 'Air Conditioning', 'Heating', 'Internet', 'Security System', 'Elevator'].map((feature) => (
            <div key={feature} className="grid grid-cols-3 gap-4 mt-4 first:mt-0">
              <div className="font-medium">{feature}</div>
              {selectedProperties.map((property, index) => (
                <div key={index} className="text-center">
                  {property ? (
                    <Check className="h-5 w-5 text-green-500 mx-auto" />
                  ) : (
                    <span className="text-gray-400">-</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {selectedProperties.some(p => p !== null) && (
        <div className="mt-8 text-center">
          <Button 
            className="bg-estate-600 hover:bg-estate-700"
            onClick={() => setSelectedProperties([null, null])}
          >
            Clear Comparison
          </Button>
        </div>
      )}
    </div>
  );
};

export default ComparePage;
