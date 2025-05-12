
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Search, User, Globe, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-estate-600 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-gray-800">GlobetrFind</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-600 hover:text-estate-600 transition-colors">Home</Link>
          <Link to="/properties" className="text-gray-600 hover:text-estate-600 transition-colors">Properties</Link>
          <Link to="/compare" className="text-gray-600 hover:text-estate-600 transition-colors">Compare</Link>
          <Link to="/about" className="text-gray-600 hover:text-estate-600 transition-colors">About</Link>
          <Link to="/contact" className="text-gray-600 hover:text-estate-600 transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Globe className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
          <Button className="bg-estate-600 hover:bg-estate-700 text-white">
            List Property
          </Button>
        </div>

        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link to="/" className="text-gray-600 hover:text-estate-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/properties" className="text-gray-600 hover:text-estate-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Properties</Link>
            <Link to="/compare" className="text-gray-600 hover:text-estate-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Compare</Link>
            <Link to="/about" className="text-gray-600 hover:text-estate-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-estate-600 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <div className="flex space-x-4 py-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>
            <Button className="w-full bg-estate-600 hover:bg-estate-700 text-white">
              List Property
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
