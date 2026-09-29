
import React from 'react';
import { INDUSTRIES } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const IndustriesSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Industries We Serve</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Empowering Businesses Across Diverse Industries. At Viewads, we create customized digital strategies that align with specific business goals and market dynamics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES.map((industry) => (
            <div key={industry.id} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-white text-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {industry.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{industry.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {industry.description}
              </p>
              <div className="space-y-3">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Services Include:</p>
                {industry.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-red-600 rounded-[3rem] text-center text-white">
          <h3 className="text-3xl font-black mb-6">Why Industry-Focused Digital Solutions Matter</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Better targeting & higher conversions",
              "Customized messaging for each industry",
              "Improved ROI on marketing spend",
              "Long-term digital growth"
            ].map((text, i) => (
              <div key={i} className="flex items-center justify-center space-x-3 bg-white/10 p-4 rounded-2xl">
                <CheckCircle2 className="w-5 h-5 text-white" />
                <span className="font-bold">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
