
import React, { useState } from 'react';
import PropertyCard from '@/components/PropertyCard';
import PropertyFilter from '@/components/PropertyFilter';
import PropertyMap from '@/components/PropertyMap';
import properties from '@/data/properties';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { List, MapPin, Gallery } from 'lucide-react';

const PropertiesPage: React.FC = () => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [activeView, setActiveView] = useState<"list" | "map">("list");
  
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-estate-800">Explore Properties</h1>
      
      <PropertyFilter onFilter={handleFilter} />
      
      <div className="mt-8 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <p className="text-gray-500 font-medium">
            {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
          </p>
        </div>
        
        <Tabs value={activeView} onValueChange={(value: string) => setActiveView(value as "list" | "map")} className="w-[200px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="list" className="flex items-center">
              <List className="h-4 w-4 mr-2" /> List
            </TabsTrigger>
            <TabsTrigger value="map" className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" /> Map
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="list" className="w-full">
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {filteredProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg mt-4">
                <p className="text-gray-500 text-lg">No properties match your current filters.</p>
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
            <div className="h-[600px] rounded-lg overflow-hidden mt-4">
              <PropertyMap />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PropertiesPage;
