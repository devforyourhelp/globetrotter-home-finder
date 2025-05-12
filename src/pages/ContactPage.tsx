
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Users } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-3">Contact Us</h1>
      <p className="text-gray-500 mb-10">
        We're here to help you with any questions about our properties or services.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-estate-100 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-estate-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium">Our Location</h3>
                    <p className="text-gray-500 mt-1">
                      123 Property Street<br />
                      Real Estate City, 90210<br />
                      United States
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-estate-100 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-estate-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium">Phone</h3>
                    <p className="text-gray-500 mt-1">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-estate-100 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-estate-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium">Email</h3>
                    <p className="text-gray-500 mt-1">
                      info@globetrfind.com<br />
                      support@globetrfind.com
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-estate-100 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-estate-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium">Business Hours</h3>
                    <p className="text-gray-500 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 rounded-full bg-estate-100 flex items-center justify-center hover:bg-estate-200 transition-colors">
                    <svg className="h-5 w-5 text-estate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-estate-100 flex items-center justify-center hover:bg-estate-200 transition-colors">
                    <svg className="h-5 w-5 text-estate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-estate-100 flex items-center justify-center hover:bg-estate-200 transition-colors">
                    <svg className="h-5 w-5 text-estate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                  </a>
                  <a href="#" className="h-10 w-10 rounded-full bg-estate-100 flex items-center justify-center hover:bg-estate-200 transition-colors">
                    <svg className="h-5 w-5 text-estate-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="First Name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Last Name" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your Email" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="Your Phone" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Message Subject" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea 
                    id="message" 
                    className="w-full min-h-[150px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-estate-500"
                    placeholder="Your message..."
                    required
                  ></textarea>
                </div>
                
                <div>
                  <Button type="submit" className="bg-estate-600 hover:bg-estate-700">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Offices Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Our Global Offices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              city: "New York",
              country: "United States",
              address: "123 Fifth Avenue, NY 10160",
              phone: "+1 (555) 123-4567",
              email: "newyork@globetrfind.com"
            },
            {
              city: "London",
              country: "United Kingdom",
              address: "456 Oxford Street, London W1C 1AP",
              phone: "+44 20 7123 4567",
              email: "london@globetrfind.com"
            },
            {
              city: "Singapore",
              country: "Singapore",
              address: "789 Orchard Road, Singapore 238839",
              phone: "+65 6123 4567",
              email: "singapore@globetrfind.com"
            }
          ].map((office, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-1">{office.city}</h3>
                <p className="text-gray-500 mb-4">{office.country}</p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-estate-500 mr-3 mt-0.5" />
                    <span>{office.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-estate-500 mr-3" />
                    <span>{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-estate-500 mr-3" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="mt-16">
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="flex items-center mb-6">
            <Users className="h-6 w-6 text-estate-600 mr-2" />
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">How do I list my property on GlobetrFind?</h3>
              <p className="text-gray-600">
                To list your property, create an account, click on "List Property" in the top navigation, 
                and follow the step-by-step instructions to add your property details, photos, and pricing information.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Is there a fee for listing properties?</h3>
              <p className="text-gray-600">
                Basic listings are free. Premium listings with enhanced visibility and features require a 
                subscription or one-time payment. Check our pricing page for more details.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">How can I schedule a property viewing?</h3>
              <p className="text-gray-600">
                You can schedule a viewing by clicking the "Schedule Viewing" button on any property listing 
                page. You'll be able to select available dates and times for your visit.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Does GlobetrFind operate in my country?</h3>
              <p className="text-gray-600">
                GlobetrFind currently operates in over 50 countries worldwide. Check our "Global Presence" section 
                on the About page to see if your country is included.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
