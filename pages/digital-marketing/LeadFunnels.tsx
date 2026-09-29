
import React from 'react';
import { motion } from 'motion/react';
import { Filter, CheckCircle2, Target, ArrowRight, Zap, BarChart3, Users, Rocket, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../../components/MetaSEO';

const LeadFunnels: React.FC = () => {
  const services = [
    "Landing page creation",
    "Ad campaign integration",
    "Lead capture forms",
    "Email automation",
    "Retargeting strategies",
    "Conversion tracking"
  ];

  const benefits = [
    { title: "Higher Conversions", desc: "Guide users from awareness to conversion with a structured funnel." },
    { title: "Better Lead Quality", desc: "Filter and qualify leads before they reach your sales team." },
    { title: "Increased ROI", desc: "Maximize the value of every visitor with optimized funnel steps." }
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="Lead Generation Funnel Services | Viewads" 
        description="We build high-converting lead generation funnels that turn visitors into customers. Build your lead funnel with Viewads lead funnel agency today!" 
      />

      {/* Hero Section */}
      <section className="bg-blue-600 py-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/10">
                <Filter className="w-4 h-4" />
                <span>Turn Visitors into Customers</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Lead Generation <span className="text-slate-900">Funnel</span> Services
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                We build high-converting lead generation funnels that turn visitors into customers. Turn visitors into qualified leads with Viewads.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">
                  Build Your Funnel Today
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800" 
                alt="Lead Generation Funnels" 
                className="rounded-[2rem] shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-900 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-600 p-2 rounded-lg text-white">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white">Conversion</div>
                    <div className="text-xs text-slate-400 font-medium">Focused Funnels</div>
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
                Turn Visitors into <span className="text-blue-600">Qualified Leads</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We design powerful lead generation funnels that guide users from awareness to conversion. Our funnel strategy includes landing pages, ad campaigns, and automated follow-ups.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Funnel Services Include:</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {services.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="w-6 h-6 text-blue-600" />
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Build Your Lead Funnel?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Partner with Viewads for high-converting sales funnels and lead generation.
          </p>
          <Link 
            to="/contact" 
            className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-blue-700 transition-all transform hover:scale-105 inline-block"
          >
            Get Started Now <ArrowRight className="ml-2 w-6 h-6 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LeadFunnels;
