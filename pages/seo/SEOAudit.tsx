
import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, CheckCircle2, Search, ArrowRight, Zap, FileSearch, Smartphone, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../../components/MetaSEO';

const SEOAudit: React.FC = () => {
  const auditFeatures = [
    "Technical SEO analysis",
    "Website speed audit",
    "On-page SEO review",
    "Backlink analysis",
    "Competitor analysis"
  ];

  const outcomes = [
    { title: "SEO Error Report", desc: "Identify and fix issues affecting your rankings." },
    { title: "Optimization Plan", desc: "Get actionable insights to improve performance." },
    { title: "Keyword Gap Analysis", desc: "Find keywords your competitors are ranking for." },
    { title: "Performance Roadmap", desc: "A clear plan to improve your search visibility." }
  ];

  const benefits = [
    "Improve website rankings",
    "Fix technical issues",
    "Increase organic traffic",
    "Enhance user experience"
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="SEO Audit & Website Analysis Services | Technical SEO Audit | Viewads" 
        description="At Viewads, we offer complete SEO audit services to identify issues affecting your website performance and rankings. Get a detailed report with actionable insights today!" 
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
                <BarChart3 className="w-4 h-4" />
                <span>Website Analysis</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                SEO Audit & <span className="text-red-600">Website Analysis</span> Services
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                At Viewads, we offer complete SEO audit services to identify issues affecting your website performance and rankings.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
                  Get Your SEO Audit
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
                alt="SEO Audit" 
                className="rounded-[2rem] shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 p-2 rounded-lg text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900">Identify</div>
                    <div className="text-xs text-slate-500 font-medium">& Fix Issues</div>
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
                Comprehensive <span className="text-red-600">SEO Audit</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We analyze your website from all aspects. We conduct a complete SEO audit to identify problems that affect your rankings and provide a clear roadmap to improve performance.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our SEO Audit Includes:</h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {auditFeatures.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {outcomes.map((outcome, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <FileSearch className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">{outcome.title}</h3>
                  <p className="text-sm text-slate-500">{outcome.desc}</p>
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Benefits of SEO Audit</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Improve your website rankings and performance with actionable insights.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center">
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Rocket className="w-6 h-6 text-red-600" />
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Get Your SEO Audit from Viewads Today</h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Ready to identify and fix issues affecting your search performance? Let’s analyze your website today.
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

export default SEOAudit;
