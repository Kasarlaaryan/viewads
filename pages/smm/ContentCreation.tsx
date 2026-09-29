
import React from 'react';
import { motion } from 'motion/react';
import { Zap, CheckCircle2, Target, ArrowRight, BarChart3, Users, Rocket, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../../components/MetaSEO';

const ContentCreation: React.FC = () => {
  const services = [
    "Creative post designs",
    "Caption writing with CTAs",
    "Monthly content calendar",
    "Scheduled posting",
    "Video/Reels content planning"
  ];

  const benefits = [
    { title: "Consistent Presence", desc: "Stay active and top-of-mind for your audience." },
    { title: "High Engagement", desc: "Content that resonates and drives interactions." },
    { title: "Professional Brand Image", desc: "High-quality designs that build trust." }
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="Social Media Content Creation Services | Viewads" 
        description="We create engaging and consistent content to keep your audience active. Stay consistent with Viewads social media management and content creation services today!" 
      />

      {/* Hero Section */}
      <section className="bg-yellow-500 py-20 relative overflow-hidden text-slate-900">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/30 text-slate-900 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/20">
                <Zap className="w-4 h-4" />
                <span>Creative & Consistent Content</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Social Media <span className="text-white">Content Creation</span> Services
              </h1>
              <p className="text-xl text-slate-800 mb-8 leading-relaxed">
                We create engaging and consistent content to keep your audience active. Stay consistent with Viewads content services.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">
                  Get Content Strategy
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1493119508027-2b584f234d6c?auto=format&fit=crop&q=80&w=800" 
                alt="Content Creation" 
                className="rounded-[2rem] shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-900 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-yellow-500 p-2 rounded-lg text-slate-900">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white">Consistency</div>
                    <div className="text-xs text-slate-400 font-medium">Monthly Calendar</div>
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
                Consistent Content That <span className="text-yellow-500">Drives Engagement</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Content is the backbone of social media success. We create high-quality content that resonates with your audience and builds your brand's authority.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What We Provide:</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {services.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <div className="bg-yellow-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Rocket className="w-6 h-6 text-yellow-600" />
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Stay Consistent?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Partner with Viewads for creative social media content that keeps your audience engaged.
          </p>
          <Link 
            to="/contact" 
            className="bg-yellow-500 text-slate-900 px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-yellow-400 transition-all transform hover:scale-105 inline-block"
          >
            Get Started Now <ArrowRight className="ml-2 w-6 h-6 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContentCreation;
