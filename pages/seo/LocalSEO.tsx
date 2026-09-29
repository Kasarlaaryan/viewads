
import React from 'react';
import { motion } from 'motion/react';
import { MapPin, CheckCircle2, Search, ArrowRight, Zap, Smartphone, BarChart3, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../../components/MetaSEO';

const LocalSEO: React.FC = () => {
  const services = [
    "Google Business Profile optimization",
    "Local keyword targeting",
    "Citation building",
    "Review management",
    "Map ranking optimization"
  ];

  const industries = [
    "Real Estate",
    "Clinics & Hospitals",
    "Coaching Institutes",
    "Restaurants",
    "Service providers"
  ];

  const benefits = [
    { title: "More Local Leads", desc: "Get more local leads and calls with our local SEO strategies." },
    { title: "Increased Calls", desc: "Optimize for mobile users searching for services on the go." },
    { title: "Google Maps Visibility", desc: "Appear in the top results of local map searches." },
    { title: "Higher Conversions", desc: "Local searches have higher intent and conversion rates." }
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="Local SEO Services in India | Local SEO Company | Viewads" 
        description="Want your business to appear in “near me” searches? Viewads offers expert local SEO services to help your business rank in your target location. Get more local leads today!" 
      />

      {/* Hero Section */}
      <section className="bg-red-600 py-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/10">
                <MapPin className="w-4 h-4" />
                <span>Dominate Local Search</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Local SEO <span className="text-slate-900">Services</span> in India
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Want your business to appear in “near me” searches? Viewads offers expert local SEO services to help your business rank in your target location.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">
                  Get More Local Leads
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800" 
                alt="Local SEO" 
                className="rounded-[2rem] shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-900 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 p-2 rounded-lg text-white">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white">Top 3</div>
                    <div className="text-xs text-slate-400 font-medium">Map Ranking</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
                Dominate <span className="text-red-600">Local Search Results</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We optimize your business for local visibility and lead generation. Our local SEO services help you dominate local search results and attract more customers in your area.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Local SEO Services Include:</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {services.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Perfect for Local Businesses:</h3>
                <div className="flex flex-wrap gap-3">
                  {industries.map((industry, i) => (
                    <div key={i} className="bg-white px-6 py-3 rounded-xl border border-slate-200 font-bold text-slate-700 text-sm">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-sm text-slate-500">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Get More Local Customers with Viewads</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Ready to dominate your local market? Let’s optimize your business for local search results.
          </p>
          <Link 
            to="/contact" 
            className="bg-red-600 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-red-700 transition-all transform hover:scale-105 inline-block"
          >
            Get Started Now <ArrowRight className="ml-2 w-6 h-6 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LocalSEO;
