
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { AGENCY_DETAILS, SERVICES, CITY_MARKETING_CONTENT } from '../constants';

const Footer: React.FC = () => {
  const cities = Object.keys(CITY_MARKETING_CONTENT).sort();

  return (
    <footer className="bg-slate-900 text-slate-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="text-3xl font-black text-white tracking-tighter">
              VIEWADS
            </Link>
            <p className="leading-relaxed">
              Professional Digital Solutions for Growing Businesses. We build impactful online presences through creativity and strategy.
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
            </div> */}
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Our Expertise</h4>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={service.id === 'social-media-marketing' ? '/services/social-media-marketing' : `/services/${service.id}`} 
                    className="hover:text-red-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 text-red-600" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-red-500 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-red-600" />About Viewads</Link></li>
              <li><Link to="/services" className="hover:text-red-500 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-red-600" />Our Services</Link></li>
              <li><Link to="/blogs" className="hover:text-red-500 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-red-600" />Blogs & Updates</Link></li>
              <li><Link to="/contact" className="hover:text-red-500 transition-colors flex items-center"><ChevronRight className="w-3 h-3 mr-2 text-red-600" />Free Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Get in Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-red-500 mt-1" />
                <a href={`tel:${AGENCY_DETAILS.phone}`} className="text-white font-bold hover:text-red-500 transition-colors">
                  {AGENCY_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-red-500 mt-1" />
                <a href={`mailto:${AGENCY_DETAILS.email}`} className="text-white font-bold hover:text-red-500 transition-colors">
                  {AGENCY_DETAILS.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-500 mt-1" />
                <span className="leading-relaxed">
                  {AGENCY_DETAILS.address} <br />
                  India, USA & UK
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* City Directory Section */}
        <div className="border-t border-white/5 py-12">
          <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs text-center">Digital Marketing Presence Across Markets</h4>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs">
            {cities.map((city) => (
              <Link 
                key={city} 
                to={`/location/${city}`} 
                className="hover:text-red-500 transition-colors bg-white/5 px-3 py-1.5 rounded-md border border-white/10 hover:border-red-500/50"
              >
                {city === 'usa' ? 'Marketing in USA' : (city === 'uk' ? 'Marketing in UK' : `Marketing in ${city.charAt(0).toUpperCase() + city.slice(1)}`)}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} Viewads. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
