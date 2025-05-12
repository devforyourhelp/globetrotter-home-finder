
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyMap from '@/components/PropertyMap';
import properties from '@/data/properties';
import { ChevronLeft, Home, MapPin, Calendar, Heart, Phone, Mail, ArrowRightLeft, Share2, Bath, BedDouble, Maximize2 } from 'lucide-react';

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Find property by ID
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
        <p className="mb-8">The property you're looking for does not exist or has been removed.</p>
        <Link to="/properties">
          <Button>Back to Properties</Button>
        </Link>
      </div>
    );
  }
  
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
      <Link to="/properties" className="inline-flex items-center text-estate-600 hover:text-estate-800 mb-6">
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Properties
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content - 2/3 width */}
        <div className="lg:col-span-2">
          {/* Property Title and Badges */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {property.isForSale && (
                <Badge className="bg-estate-600 hover:bg-estate-700">For Sale</Badge>
              )}
              {property.isForRent && (
                <Badge className="bg-amber-600 hover:bg-amber-700">For Rent</Badge>
              )}
              <Badge variant="outline">{property.type}</Badge>
            </div>
            
            <h1 className="text-3xl font-bold">{property.title}</h1>
            
            <div className="flex items-center mt-2 text-gray-500">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{property.location}, {property.country}</span>
            </div>
          </div>
          
          {/* Property Images */}
          <div className="mb-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden mb-4">
              <img
                src={property.images[activeImageIndex]}
                alt={`${property.title} - Image ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex overflow-x-auto gap-4 pb-2">
              {property.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`flex-shrink-0 w-24 h-24 rounded-md overflow-hidden cursor-pointer transition-all ${
                    index === activeImageIndex ? 'ring-2 ring-estate-600' : 'opacity-70 hover:opacity-100'
                  }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Property Details */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Property Details</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="text-xl font-semibold text-estate-600">{formatPrice(property.price, property.currency)}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Property Type</p>
                  <p className="font-medium">{property.type}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Status</p>
                  <p className="font-medium">{property.isForSale ? 'For Sale' : 'For Rent'}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Bedrooms</p>
                  <div className="flex items-center">
                    <BedDouble className="h-4 w-4 mr-2 text-estate-500" />
                    <p className="font-medium">{property.bedrooms}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Bathrooms</p>
                  <div className="flex items-center">
                    <Bath className="h-4 w-4 mr-2 text-estate-500" />
                    <p className="font-medium">{property.bathrooms}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Area</p>
                  <div className="flex items-center">
                    <Maximize2 className="h-4 w-4 mr-2 text-estate-500" />
                    <p className="font-medium">{property.area} {property.areaUnit}</p>
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <h3 className="text-xl font-semibold mb-4">Description</h3>
              <p className="text-gray-600 mb-6">
                This beautiful {property.type.toLowerCase()} in {property.location}, {property.country} offers modern living with {property.bedrooms} bedrooms and {property.bathrooms} bathrooms. With a total area of {property.area} {property.areaUnit}, it provides ample space for comfortable living. 
                <br /><br />
                The property features stunning views, high-quality finishes, and is conveniently located near local amenities, transportation, and schools. Perfect for {property.isForSale ? 'buyers looking for a great investment or a new home' : 'renters looking for a comfortable place to live'}.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-estate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Air Conditioning</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-estate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Heating</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-estate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Parking</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-estate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Elevator</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-estate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Internet</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 mr-2 text-estate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Security System</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Location Tab */}
          <Tabs defaultValue="location" className="mb-8">
            <TabsList className="w-full grid grid-cols-2">
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="nearby">Nearby Amenities</TabsTrigger>
            </TabsList>
            <TabsContent value="location" className="mt-4">
              <div className="h-[400px]">
                <PropertyMap />
              </div>
            </TabsContent>
            <TabsContent value="nearby" className="mt-4">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">Nearby Amenities</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Transportation</h4>
                    <p className="text-gray-600">Bus Stop (0.2 miles), Train Station (1.5 miles)</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Education</h4>
                    <p className="text-gray-600">Elementary School (0.5 miles), High School (1.2 miles), University (3 miles)</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Shopping</h4>
                    <p className="text-gray-600">Grocery Store (0.3 miles), Shopping Mall (2 miles)</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Healthcare</h4>
                    <p className="text-gray-600">Pharmacy (0.4 miles), Hospital (2.5 miles)</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Leisure</h4>
                    <p className="text-gray-600">Parks (0.6 miles), Restaurants (0.3 miles), Cinema (1.8 miles)</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar - 1/3 width */}
        <div className="lg:col-span-1">
          {/* Price Card */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-estate-600">
                  {formatPrice(property.price, property.currency)}
                </h3>
                {property.isForRent && <span className="text-gray-500">/ month</span>}
              </div>
              
              <div className="flex items-center text-gray-500 mt-2 mb-6">
                <Home className="h-4 w-4 mr-2" />
                <span>{property.type} in {property.location}</span>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full bg-estate-600 hover:bg-estate-700">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Agent
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Viewing
                </Button>
                
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    <Heart className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <ArrowRightLeft className="h-4 w-4 mr-2" />
                    Compare
                  </Button>
                  <Button variant="outline" className="w-10 p-0">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Agent Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Agent"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">John Smith</h3>
                  <p className="text-sm text-gray-500">Real Estate Agent</p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="I'm interested in this property. Please contact me with more information."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-500"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-estate-600 hover:bg-estate-700"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
            <CardFooter className="bg-gray-50 p-4 text-center text-sm text-gray-500">
              By submitting this form, you agree to our privacy policy
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
