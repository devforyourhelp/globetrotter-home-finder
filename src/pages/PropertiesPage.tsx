
import React, { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilter from '@/components/PropertyFilter';
import PropertyMap from '@/components/PropertyMap';
import properties from '@/data/properties';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { List, MapPin, ImageIcon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const PropertiesPage: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [activeView, setActiveView] = useState<"list" | "map" | "gallery">("list");
  const isMobile = useIsMobile();
  
  const handleFilter = (filters: any) => {
    // Simple filtering logic - can be expanded based on requirements
    let results = properties;
    
    if (filters.location) {
      results = results.filter(p => 
        p.location.toLowerCase().includes(filters.location.toLowerCase()) ||
        p.country.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    if (filters.propertyType) {
      results = results.filter(p => 
        p.type.toLowerCase() === filters.propertyType.toLowerCase()
      );
    }
    
    if (filters.status === 'sale') {
      results = results.filter(p => p.isForSale);
    } else if (filters.status === 'rent') {
      results = results.filter(p => p.isForRent);
    }
    
    if (filters.bedrooms) {
      results = results.filter(p => p.bedrooms >= filters.bedrooms);
    }
    
    if (filters.priceRange) {
      results = results.filter(
        p => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
      );
    }
    
    setFilteredProperties(results);
  };
  
  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-estate-800">Explore Properties</h1>
      
      <PropertyFilter onFilter={handleFilter} />
      
      <div className="mt-6 md:mt-8 mb-4 md:mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p className="text-gray-500 font-medium">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
          </p>
        </div>
        
        <Tabs 
          value={activeView} 
          onValueChange={(value: string) => setActiveView(value as "list" | "map" | "gallery")} 
          className="w-full md:w-[300px]"
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="list" className="flex items-center">
              <List className="h-4 w-4 mr-2" /> {!isMobile && "List"}
            </TabsTrigger>
            <TabsTrigger value="map" className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" /> {!isMobile && "Map"}
            </TabsTrigger>
            <TabsTrigger value="gallery" className="flex items-center">
              <ImageIcon className="h-4 w-4 mr-2" /> {!isMobile && "Gallery"}
            </TabsTrigger>
          </TabsList>
        
          <TabsContent value="list" className="mt-4">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 md:py-12 bg-gray-50 rounded-lg mt-4">
                <p className="text-gray-500 text-base md:text-lg">No properties match your current filters.</p>
                <Button 
                  variant="outline"
                  className="mt-4"
                  onClick={() => setFilteredProperties(properties)}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="map">
            <div className="h-[400px] md:h-[600px] rounded-lg overflow-hidden mt-4">
              <PropertyMap />
            </div>
          </TabsContent>
          
          <TabsContent value="gallery">
            <div className="mt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
                {filteredProperties.flatMap((property) => 
                  property.images.slice(0, 5).map((image, index) => (
                    <div key={`${property.id}-image-${index}`} className="relative aspect-square overflow-hidden rounded-lg group">
                      <img 
                        src={image} 
                        alt={`${property.title} - Image ${index + 1}`} 
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 md:p-3">
                        <p className="text-white text-xs md:text-sm truncate">{property.title}</p>
                        <p className="text-white/80 text-xs hidden sm:block">{property.location}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PropertiesPage;
