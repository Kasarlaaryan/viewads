
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Globe, Navigation, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { AGENCY_DETAILS, SERVICES, METADATA } from '../constants';
import MetaSEO from '../components/MetaSEO';
import IndustriesSection from '../components/IndustriesSection';

const Locations: React.FC = () => {
  const regionalData = [
    {
      region: "Telangana",
      cities: [
        { name: "Hyderabad", slug: "hyderabad" },
        { name: "Warangal", slug: "warangal" },
        { name: "Karimnagar", slug: "karimnagar" },
        { name: "Nizamabad", slug: "nizamabad" },
        { name: "Khammam", slug: "khammam" }
      ]
    },
    {
      region: "Andhra Pradesh",
      cities: [
        { name: "Vijayawada", slug: "vijayawada" },
        { name: "Guntur", slug: "guntur" },
        { name: "Visakhapatnam (Vizag)", slug: "vizag" },
        { name: "Tirupati", slug: "tirupati" },
        { name: "Nellore", slug: "nellore" },
        { name: "Kurnool", slug: "kurnool" }
      ]
    },
    {
      region: "South India",
      cities: [
        { name: "Bangalore", slug: "bangalore" },
        { name: "Chennai", slug: "chennai" },
        { name: "Coimbatore", slug: "coimbatore" },
        { name: "Kochi", slug: "kochi" },
        { name: "Trivandrum", slug: "trivandrum" }
      ]
    },
    {
      region: "Rest of India",
      cities: [
        { name: "Mumbai", slug: "mumbai" },
        { name: "Pune", slug: "pune" },
        { name: "Delhi", slug: "delhi" },
        { name: "Jaipur", slug: "jaipur" },
        { name: "Ahmedabad", slug: "ahmedabad" },
        { name: "Kolkata", slug: "kolkata" }
      ]
    }
  ];

  const internationalData = [
    {
      region: "United States",
      slug: "usa",
      cities: [
        { name: "New York", slug: "new-york" },
        { name: "Texas", slug: "texas" },
        { name: "California", slug: "california" },
        { name: "Florida", slug: "florida" },
        { name: "Chicago", slug: "chicago" },
        { name: "Los Angeles", slug: "los-angeles" }
      ]
    },
    {
      region: "United Kingdom",
      slug: "uk",
      cities: [
        { name: "London", slug: "london" },
        { name: "Manchester", slug: "manchester" },
        { name: "Birmingham", slug: "birmingham" },
        { name: "Leeds", slug: "leeds" },
        { name: "Bristol", slug: "bristol" },
        { name: "Nottingham", slug: "nottingham" }
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <MetaSEO 
        title={METADATA.locations.title} 
        description={METADATA.locations.description} 
        keywords={METADATA.locations.keywords} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            <Globe className="w-4 h-4" />
            <span>Serving Global Clients</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">Locations We Serve</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Helping Businesses Grow Across India & Beyond. Viewads proudly serves businesses across multiple cities in India and internationally with professional digital services.
          </p>
        </div>

        {/* Global/International Section */}
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white mb-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <Navigation className="w-full h-full text-blue-500" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-8 text-center uppercase tracking-widest">International Service Hubs</h2>
            <div className="grid lg:grid-cols-2 gap-12">
              {internationalData.map((region, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-3xl font-black text-red-500">{region.region}</h3>
                    <Link to={`/location/${region.slug}`} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">View All Services</Link>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {region.cities.map((city, cIdx) => (
                      <Link 
                        key={cIdx} 
                        to={`/location/${city.slug}`} 
                        className="group flex items-center space-x-3 p-3 bg-white/5 rounded-xl hover:bg-red-600/20 transition-all border border-transparent hover:border-red-600/30"
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{city.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <IndustriesSection />

        <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 mb-24 mt-24">
          <h2 className="text-4xl font-black text-slate-900 mb-8 text-center">Our Digital Services</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">We provide complete digital solutions including:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {SERVICES.map(s => (
               <div key={s.id} className="flex items-center space-x-4 bg-white p-6 rounded-2xl shadow-sm group hover:border-red-500 border border-transparent transition-all">
                  <div className="bg-red-50 text-red-600 p-3 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-colors">{s.icon}</div>
                  <span className="font-bold text-slate-800">{s.title}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-red-600 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-black mb-6">Looking for Digital Services in Your City?</h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            If your city is not listed above, don’t worry. Viewads serves businesses across India and globally.
          </p>
          <Link to="/contact" className="inline-block bg-white text-red-600 px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-slate-50 transition-all">
            Get in Touch Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Locations;
