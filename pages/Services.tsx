
import React from 'react';
import { SERVICES, METADATA } from '../constants';
import ServiceCard from '../components/ServiceCard';
import MetaSEO from '../components/MetaSEO';
import IndustriesSection from '../components/IndustriesSection';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <MetaSEO 
        title={METADATA.services.title} 
        description={METADATA.services.description} 
        keywords={METADATA.services.keywords} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-slate-900 mb-6">Our Digital Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            At Viewads, we offer complete digital solutions under one roof. Whether you’re starting from scratch or scaling your business, our services are designed to support your growth at every stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service) => {
            let link = `/services/${service.id}`;
            if (service.id === 'social-media-marketing') link = '/services/social-media-marketing';
            if (service.id === 'web-design') link = '/services/website-design-development';
            if (service.id === 'seo') link = '/services/seo';
            if (service.id === 'digital-marketing') link = '/services/digital-marketing';
            
            return (
              <ServiceCard 
                key={service.id} 
                service={service} 
                variant="full" 
                link={link}
              />
            );
          })}
        </div>

        <IndustriesSection />

        <div className="mt-24 p-12 bg-red-50 rounded-[3rem] text-center border border-red-100">
          <h2 className="text-3xl font-black text-red-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-red-700 mb-10 max-w-2xl mx-auto">
            Our experts can tailor a package that fits your specific business objectives and budget perfectly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-red-200 hover:bg-red-700 transition-all">
              Request Custom Quote
            </button>
            <a href="tel:+919010190919" className="text-red-600 font-bold p-4">
              Talk to Specialist
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
