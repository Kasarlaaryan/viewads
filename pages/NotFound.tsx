
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle, ArrowLeft, Search } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-slate-50 px-4">
      <MetaSEO 
        title="404 - Page Not Found | Viewads" 
        description="The page you are looking for doesn't exist. Return to Viewads home for professional digital solutions." 
        keywords="404, page not found, Viewads" 
      />
      <div className="max-w-2xl w-full text-center">
        <div className="relative mb-12">
          <div className="text-[10rem] md:text-[18rem] font-black text-slate-200 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-red-600 rounded-[2rem] rotate-12 flex items-center justify-center text-white shadow-2xl shadow-red-600/30 animate-pulse">
              <Search className="w-12 h-12 md:w-16 md:h-16" />
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-lg mx-auto">
          It looks like the link you followed is broken or the page has been moved. 
          Let's get you back on track to growing your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto bg-red-600 text-white px-10 py-5 rounded-2xl text-lg font-black shadow-xl shadow-red-600/20 hover:bg-red-700 hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Return Home</span>
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-slate-50 hover:-translate-y-1 transition-all flex items-center justify-center space-x-2 shadow-sm"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>

        <div className="mt-20 pt-12 border-t border-slate-200">
          <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-4">Quick Destinations</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/services" className="text-red-600 font-bold hover:underline">Our Services</Link>
            <Link to="/about" className="text-red-600 font-bold hover:underline">About Us</Link>
            <Link to="/contact" className="text-red-600 font-bold hover:underline">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
