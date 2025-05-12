
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Building, Users, Globe, Shield } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section 
        className="relative h-[300px] bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=2000&auto=format&fit=crop&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About GlobetrFind</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Connecting people with their perfect properties across the globe since 2010.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, GlobetrFind began with a simple mission: to make finding the perfect property 
                anywhere in the world simple, transparent, and enjoyable. Our founder, Alex Thompson, 
                experienced firsthand the challenges of finding properties abroad while traveling.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small platform with listings in just three countries has grown into 
                a global marketplace featuring properties in over 50 countries, with millions of monthly 
                visitors and thousands of successful property transactions.
              </p>
              <p className="text-gray-600">
                Today, GlobetrFind continues to innovate at the intersection of real estate and technology, 
                creating powerful tools to help buyers, sellers, and renters navigate the global property 
                market with confidence.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1622565868144-78550ba252c5?w=800&auto=format&fit=crop&q=60"
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Separator />
      
      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Mission & Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-estate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-estate-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
              <p className="text-gray-600">
                We believe everyone deserves access to property opportunities around the world, 
                not limited by geography or language.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-estate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-estate-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-600">
                We provide honest, complete information about properties and neighborhoods to empower 
                informed decisions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-estate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-estate-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                We foster connections between buyers, sellers, agents, and property enthusiasts 
                to create a supportive global network.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <div className="w-16 h-16 bg-estate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-estate-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continually develop new technologies and features to make property search and 
                transactions simpler and more efficient.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Presence */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Global Presence</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 border-l-4 border-estate-500 pl-4">North America</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-estate-500 rounded-full mr-2"></span>
                  United States
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-estate-500 rounded-full mr-2"></span>
                  Canada
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-estate-500 rounded-full mr-2"></span>
                  Mexico
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 border-l-4 border-estate-500 pl-4">Europe</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-estate-500 rounded-full mr-2"></span>
                  United Kingdom
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-estate-500 rounded-full mr-2"></span>
                  Spain
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-estate-500 rounded-full mr-2"></span>
                  France
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-estate-500 rounded-full mr-2"></span>
                  Italy
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-estate-500 rounded-full mr-2"></span>
                  Germany
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 border-l-4 border-estate-500 pl-4">Asia Pacific</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-estate-500 rounded-full mr-2"></span>
                  Australia
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-estate-500 rounded-full mr-2"></span>
                  Japan
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-estate-500 rounded-full mr-2"></span>
                  Singapore
                </li>
                <li className="flex items-center">
                  <span className="w-3 h-3 bg-estate-500 rounded-full mr-2"></span>
                  Thailand
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-500">
              Currently operating in over 50 countries with more than 1 million property listings.
            </p>
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Leadership Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Alex Thompson",
                title: "Founder & CEO",
                image: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Sophia Chen",
                title: "Chief Technology Officer",
                image: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Marcus Johnson",
                title: "Head of Global Operations",
                image: "https://randomuser.me/api/portraits/men/85.jpg"
              },
              {
                name: "Olivia Rodriguez",
                title: "Chief Marketing Officer",
                image: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name} 
                  className="w-full h-48 object-cover object-center" 
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-gray-500">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
