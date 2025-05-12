
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PropertyCard from '@/components/PropertyCard';
import properties from '@/data/properties';
import { Building, Search, MapPin, ArrowRightLeft, Key } from 'lucide-react';

const Index: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Get featured properties (just the first 3)
  const featuredProperties = properties.slice(0, 3);
  
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=2000&auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Find Your Perfect Property Around The World
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Explore our wide range of properties across multiple countries, with local insights and personalized recommendations.
            </p>
            
            <div className="bg-white p-3 rounded-lg shadow-lg flex">
              <Input 
                type="text" 
                placeholder="Search properties by location, type, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow"
              />
              <Button className="ml-3 bg-estate-600 hover:bg-estate-700">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose GlobetrFind?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 text-center shadow hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-estate-100 rounded-full">
                <Building className="h-8 w-8 text-estate-600 feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Properties</h3>
              <p className="text-gray-600">
                Browse thousands of properties from around the world, all in one platform.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-estate-100 rounded-full">
                <Search className="h-8 w-8 text-estate-600 feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Search</h3>
              <p className="text-gray-600">
                Find exactly what you're looking for with our powerful and intuitive search filters.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-estate-100 rounded-full">
                <MapPin className="h-8 w-8 text-estate-600 feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Map Integration</h3>
              <p className="text-gray-600">
                View properties on interactive maps to explore neighborhoods and nearby amenities.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-center shadow hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-estate-100 rounded-full">
                <ArrowRightLeft className="h-8 w-8 text-estate-600 feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Compare Properties</h3>
              <p className="text-gray-600">
                Compare multiple properties side by side to help make your decision easier.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Properties</h2>
            <Link to="/properties" className="text-estate-600 hover:underline font-medium">
              View All Properties
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-estate-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who found their perfect property with GlobetrFind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-estate-600 hover:bg-gray-100">
              <Key className="h-5 w-5 mr-2" />
              List Your Property
            </Button>
            <Button size="lg" className="bg-estate-700 hover:bg-estate-800 text-white border border-estate-500">
              <Search className="h-5 w-5 mr-2" />
              Browse Properties
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials - Simplified for now */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          
          <div className="max-w-4xl mx-auto">
            <blockquote className="italic text-xl text-gray-600 mb-6">
              "GlobetrFind made it so easy to find our vacation home in Spain. The interface is intuitive,
              and we loved being able to compare properties side by side."
            </blockquote>
            <div className="font-semibold">
              - Sarah Johnson, New York
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
