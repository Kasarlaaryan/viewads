
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AGENCY_DETAILS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries-we-serve' },
    { name: 'Locations', path: '/locations' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-black tracking-tighter transition-colors ${scrolled ? 'text-red-700' : 'text-red-600'}`}>
              VIEWADS
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-sm font-bold transition-all hover:text-red-600 relative py-1 ${location.pathname === link.path ? 'text-red-600 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-red-600' : 'text-slate-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={`tel:${AGENCY_DETAILS.phone}`}
              className="bg-red-600 text-white px-6 py-3 rounded-full text-sm font-black flex items-center space-x-2 hover:bg-red-700 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-red-200"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 overflow-hidden border-t border-slate-100 ${isOpen ? 'max-h-[40rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`block text-xl font-bold transition-colors ${location.pathname === link.path ? 'text-red-600' : 'text-slate-800'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4">
            <a 
              href={`tel:${AGENCY_DETAILS.phone}`}
              className="w-full bg-red-600 text-white px-6 py-4 rounded-2xl font-black flex items-center justify-center space-x-3 shadow-xl shadow-red-200 active:scale-95 transition-transform"
            >
              <Phone className="w-5 h-5" />
              <span>{AGENCY_DETAILS.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
