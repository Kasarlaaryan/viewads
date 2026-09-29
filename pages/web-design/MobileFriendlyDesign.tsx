
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Smartphone, Search, ArrowRight, Zap, Layout, Tablet, Laptop, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../../components/MetaSEO';

const MobileFriendlyDesign: React.FC = () => {
  const devices = [
    { title: "Mobile devices", icon: <Smartphone className="w-6 h-6" /> },
    { title: "Tablets", icon: <Tablet className="w-6 h-6" /> },
    { title: "Laptops", icon: <Laptop className="w-6 h-6" /> },
    { title: "Desktops", icon: <Monitor className="w-6 h-6" /> }
  ];

  const seoFeatures = [
    "Fast mobile loading speed",
    "Optimized images",
    "Touch-friendly design",
    "Clean UI/UX"
  ];

  const benefits = [
    { title: "Higher Google Rankings", desc: "Google uses mobile-first indexing, so a responsive site is essential for SEO." },
    { title: "Better User Experience", desc: "A seamless experience across all devices keeps users happy and engaged." },
    { title: "Increased Conversions", desc: "A mobile-ready site makes it easy for users to take action on the go." },
    { title: "Lower Bounce Rate", desc: "Fast loading and clean design keep mobile users from leaving your site." }
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="Mobile-Friendly Website Design Services | Viewads" 
        description="In today’s mobile-first world, having a responsive website design is essential for ranking on Google. Viewads builds websites that deliver a seamless experience across all devices." 
      />

      {/* Hero Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/10">
                <Smartphone className="w-4 h-4" />
                <span>Mobile-First Approach</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Mobile-Friendly <span className="text-red-600">Website Design</span> Services
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                In today’s mobile-first world, having a responsive website design is essential for ranking on Google. At Viewads, we build websites that deliver a seamless experience across all devices.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
                  Make Your Site Mobile-Ready
                </Link>
                <a href="#details" className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
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
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" 
                alt="Mobile Friendly Design" 
                className="rounded-[2rem] shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white">Fast</div>
                    <div className="text-xs text-red-100 font-medium">Mobile Loading</div>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
                Responsive Web Design <span className="text-red-600">That Performs</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We ensure your website looks and works perfectly on all devices. Our responsive design approach ensures that your content is always presented in the best possible way, regardless of the screen size.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {devices.map((device, i) => (
                  <div key={i} className="flex items-center space-x-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="bg-red-100 p-2 rounded-lg text-red-600">
                      {device.icon}
                    </div>
                    <span className="font-bold text-slate-700 text-sm">{device.title}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Search className="w-6 h-6 text-red-600 mr-2" /> Mobile Optimization for SEO
                </h3>
                <p className="text-slate-600 mb-6">Google uses mobile-first indexing, meaning your mobile site determines your ranking.</p>
                <div className="grid grid-cols-2 gap-4">
                  {seoFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2 text-sm font-medium text-slate-700">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">{benefit.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keywords Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-widest">Target Keywords</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["mobile friendly website design", "responsive web design services", "mobile optimized website", "responsive website company"].map((kw, i) => (
              <div key={i} className="bg-white px-6 py-3 rounded-xl border border-slate-200 font-bold text-slate-700 text-sm">
                {kw}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Make Your Website Mobile-Ready with Viewads</h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Don't lose customers due to a poor mobile experience. Let’s build a responsive site that ranks and converts.
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

export default MobileFriendlyDesign;
