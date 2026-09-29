
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, RefreshCw, Search, ArrowRight, Zap, Layout, Smartphone, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../../components/MetaSEO';

const WebsiteRedesign: React.FC = () => {
  const improvements = [
    "UI/UX design",
    "Website speed",
    "SEO structure",
    "Mobile responsiveness",
    "Content optimization"
  ];

  const signs = [
    "Low traffic from Google",
    "High bounce rate",
    "Slow loading speed",
    "Poor mobile experience",
    "Outdated design"
  ];

  const benefits = [
    { title: "Better Google Rankings", desc: "Modernize your SEO structure to climb search results." },
    { title: "Increased Conversions", desc: "Turn more visitors into customers with better UX." },
    { title: "Improved User Experience", desc: "Make your website easy and enjoyable to use." },
    { title: "Higher Engagement", desc: "Keep users on your site longer with fresh content." }
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="Website Redesign Services in India | Viewads" 
        description="Is your website outdated or not generating leads? Viewads offers professional website redesign services to improve performance, design, and SEO. Revamp your site today!" 
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
                <RefreshCw className="w-4 h-4" />
                <span>Modernize Your Digital Asset</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Website Redesign <span className="text-red-600">Services</span> in India
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Is your website outdated or not generating leads? Viewads offers professional website redesign services to improve performance, design, and SEO. A redesign can significantly boost your search rankings and conversion rates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
                  Upgrade Your Website
                </Link>
                <a href="#details" className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
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
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800" 
                alt="Website Redesign" 
                className="rounded-[2rem] shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 p-2 rounded-lg text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900">Revamp</div>
                    <div className="text-xs text-slate-500 font-medium">Performance Boost</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="details" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
                Complete Website <span className="text-red-600">Revamp Solutions</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We transform your old website into a modern, high-performing digital asset. Our team focuses on every aspect of your site to ensure it meets current standards and exceeds your expectations.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What We Improve:</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {improvements.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Search className="w-6 h-6 text-red-600 mr-2" /> SEO-Focused Redesign Strategy
                </h3>
                <p className="text-slate-600 mb-6">We rebuild your website with advanced SEO optimization techniques:</p>
                <div className="grid grid-cols-2 gap-4">
                  {["Keyword-optimized content", "Improved internal linking", "Technical SEO fixes", "Better site architecture"].map((item, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl rounded-full"></div>
              <h2 className="text-3xl font-black mb-8">Signs Your Website Needs Redesign</h2>
              <div className="space-y-6 mb-10">
                {signs.map((sign, i) => (
                  <div key={i} className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                    <div className="bg-red-600 w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="font-black text-lg">{i + 1}</span>
                    </div>
                    <span className="font-bold text-slate-300">{sign}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-600 p-8 rounded-3xl text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-black mb-2">Boost Your ROI</h3>
                <p className="text-red-100 text-sm">Don't let an outdated site cost you customers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Benefits of Redesign</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              A fresh look and better performance for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Upgrade Your Website with Viewads Today</h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Ready to transform your outdated site into a lead-generating machine? Let’s get started.
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

export default WebsiteRedesign;
