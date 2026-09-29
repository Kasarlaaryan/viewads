
import React from 'react';
import { Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AGENCY_DETAILS, METADATA, INDUSTRIES } from '../constants';
import MetaSEO from '../components/MetaSEO';

const IndustriesWeServe: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <MetaSEO 
        title={METADATA.industries.title} 
        description={METADATA.industries.description} 
        keywords={METADATA.industries.keywords} 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-8">
            Industries <br />
            <span className="text-red-600">We Serve</span>
          </h1>
          <p className="text-2xl font-bold text-slate-700 mb-6">
            Industry-Focused Digital Solutions That Drive Growth
          </p>
          <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto mb-10">
            At Viewads, we deliver customized digital solutions for businesses across diverse industries. 
            Our industry-specific approach ensures every strategy is aligned with your market, 
            audience behavior, and business goals. We help brands build visibility, generate 
            quality leads, and achieve long-term digital growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
             <a href={`tel:${AGENCY_DETAILS.phone}`} className="flex items-center space-x-3 text-slate-900 font-bold bg-white px-8 py-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
                   <Phone className="w-5 h-5" />
                </div>
                <span>{AGENCY_DETAILS.phone}</span>
             </a>
             <a href={`mailto:${AGENCY_DETAILS.email}`} className="flex items-center space-x-3 text-slate-900 font-bold bg-white px-8 py-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-red-50 text-red-600 rounded-full flex items-center justify-center">
                   <Mail className="w-5 h-5" />
                </div>
                <span>{AGENCY_DETAILS.email}</span>
             </a>
          </div>
        </div>

        {/* Detailed Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {INDUSTRIES.map((industry) => (
            <div key={industry.id} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
              <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-8">
                {industry.icon}
              </div>
              <h2 className="text-2xl font-black text-slate-900 mb-4">{industry.title}</h2>
              <p className="text-slate-600 mb-8 leading-relaxed flex-grow">
                {industry.description}
              </p>
              
              {industry.covered && (
                <div className="mb-6">
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Industries Covered:</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.covered.map((c, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-xs font-bold border border-slate-100">{c}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Services Include:</p>
                {industry.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-bold">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Section */}
        <section className="mb-24 bg-slate-900 rounded-[4rem] p-12 lg:p-20 text-white text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-8">Why Choose Viewads for <br />Industry-Specific Solutions?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              "Industry-driven strategies",
              "Customized digital planning",
              "Transparent communication",
              "Measurable results",
              "Dedicated support"
            ].map((benefit, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <span className="font-bold">{benefit}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-xl text-slate-400 max-w-2xl mx-auto italic">
            We don’t use generic templates—every solution is designed specifically for your industry.
          </p>
        </section>

        {/* Final CTA */}
        <div className="bg-red-600 rounded-[3.5rem] p-12 text-center text-white shadow-2xl shadow-red-600/20">
          <h2 className="text-4xl font-black mb-6">Let’s Work Together</h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            No matter your industry, Viewads has the expertise to deliver digital solutions that produce results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link to="/contact" className="bg-white text-red-600 px-10 py-5 rounded-2xl text-xl font-black shadow-lg hover:bg-slate-50 transition-all">
              Contact Us Today
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-8 text-red-100 font-bold">
            <span>Call: {AGENCY_DETAILS.phone}</span>
            <span>Email: {AGENCY_DETAILS.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
