
import React from 'react';
import { motion } from 'motion/react';
import { FileSearch, CheckCircle2, Search, ArrowRight, Zap, Layout, Smartphone, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../../components/MetaSEO';

const OnPageSEO: React.FC = () => {
  const features = [
    "Meta title & description optimization",
    "Header tags (H1, H2, H3)",
    "Keyword optimization",
    "URL structure improvement",
    "Internal linking strategy",
    "Image optimization (alt tags)"
  ];

  const focusAreas = [
    { title: "Page Speed", desc: "Optimizing loading times for better user experience." },
    { title: "Mobile Friendly", desc: "Ensuring your site works perfectly on all devices." },
    { title: "Content Quality", desc: "Improving content relevance and value for users." },
    { title: "User Experience", desc: "Enhancing site navigation and engagement." }
  ];

  const benefits = [
    "Higher search engine rankings",
    "Better user experience",
    "Increased organic traffic",
    "Improved engagement"
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="On-Page SEO Optimization Services | Website SEO Optimization | Viewads" 
        description="Looking to improve your website rankings? Viewads offers professional on-page SEO services to optimize your website for search engines and users. Optimize your site today!" 
      />

      {/* Hero Section */}
      <section className="bg-slate-50 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-6">
                <FileSearch className="w-4 h-4" />
                <span>Website Optimization</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                On-Page SEO <span className="text-red-600">Optimization</span> Services
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Looking to improve your website rankings? Viewads offers professional on-page SEO services to optimize your website for search engines and users.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
                  Optimize Your Website
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800" 
                alt="On-Page SEO" 
                className="rounded-[2rem] shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 p-2 rounded-lg text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900">Boost</div>
                    <div className="text-xs text-slate-500 font-medium">Rankings & UX</div>
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
                Complete On-Page <span className="text-red-600">Optimization</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We optimize every element of your website to improve visibility and rankings. We combine technical SEO with content optimization for better results.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our On-Page SEO Includes:</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {features.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {focusAreas.map((area, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Search className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">{area.title}</h3>
                  <p className="text-sm text-slate-500">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Benefits of On-Page SEO</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Better rankings, improved user experience, and higher engagement.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Optimize Your Website with Viewads</h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Ready to improve your search engine rankings? Let’s optimize your website for better results.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-red-600 px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-slate-100 transition-all transform hover:scale-105 inline-block"
          >
            Get Started Today <ArrowRight className="ml-2 w-6 h-6 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default OnPageSEO;
