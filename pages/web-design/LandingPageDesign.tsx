
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Target, Search, ArrowRight, Zap, BarChart3, MousePointer2, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../../components/MetaSEO';

const LandingPageDesign: React.FC = () => {
  const features = [
    "Strong call-to-action (CTA)",
    "Minimal distractions",
    "Fast loading speed",
    "Mobile-first design",
    "Lead capture forms"
  ];

  const industries = [
    "Real Estate",
    "Education (School Admissions)",
    "Healthcare",
    "Coaching Institutes",
    "Local Businesses"
  ];

  const keywords = [
    "landing page design services",
    "lead generation landing page",
    "high converting landing page design",
    "landing page for ads"
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="Landing Page Design Services for Lead Generation | Viewads" 
        description="Looking for high-converting landing page design services? Viewads creates landing pages optimized for maximum conversions and ROI. Perfect for Google & Meta Ads!" 
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
                <Target className="w-4 h-4" />
                <span>High-Converting Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Landing Page <span className="text-slate-900">Design Services</span> for Lead Generation
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                Looking for high-converting landing page design services? At Viewads, we create landing pages that are optimized for maximum conversions and ROI. Whether you're running Google Ads or Meta Ads, your landing page plays a crucial role in campaign success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">
                  Get a Quote Today
                </Link>
                <a href="#details" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-2xl font-bold hover:bg-white/20 transition-all">
                  Learn More
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="Landing Page Design" 
                className="rounded-[2rem] shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-900 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 p-2 rounded-lg text-white">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white">ROI</div>
                    <div className="text-xs text-slate-400 font-medium">Focused Design</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="details" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
                High-Converting Landing Pages That <span className="text-red-600">Drive Results</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our landing pages are designed using proven conversion strategies. We focus on creating a seamless user journey that leads directly to your goal.
              </p>
              <div className="space-y-4 mb-10">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Rocket className="w-6 h-6 text-red-600 mr-2" /> SEO + PPC Optimized
                </h3>
                <p className="text-slate-600 mb-6">We design landing pages that rank organically and perform well in paid campaigns.</p>
                <div className="flex flex-wrap gap-2">
                  {keywords.map((kw, i) => (
                    <span key={i} className="bg-white px-3 py-1 rounded-full text-xs font-bold text-red-600 border border-red-100">{kw}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <MousePointer2 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">Strong CTA</h3>
                <p className="text-sm text-slate-500">Strategic placement of call-to-action buttons for maximum engagement.</p>
              </div>
              <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
                <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black mb-4">Fast Loading</h3>
                <p className="text-sm text-slate-400">Optimized for speed to reduce bounce rates and improve user experience.</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 sm:col-span-2">
                <h3 className="text-xl font-black text-slate-900 mb-6">Industries We Serve</h3>
                <div className="flex flex-wrap gap-3">
                  {industries.map((industry, i) => (
                    <div key={i} className="bg-white px-6 py-3 rounded-xl border border-slate-200 font-bold text-slate-700 text-sm">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Why Choose Viewads?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We combine design expertise with marketing strategy to deliver results.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Conversion-Focused", desc: "Every element is designed to drive actions." },
              { title: "Ad Campaign Experience", desc: "We know what works for Google & Meta ads." },
              { title: "SEO + PPC Optimized", desc: "Get the best of both organic and paid reach." },
              { title: "Fast Delivery", desc: "Get your landing page live in record time." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Get a High-Converting Landing Page Today</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Ready to maximize your ROI? Let’s create a landing page that turns your ad spend into revenue.
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

export default LandingPageDesign;
