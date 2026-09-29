
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowLeft, Phone, HelpCircle } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import FAQItem from '../components/FAQItem';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = SERVICES.find(s => s.id === id);

  if (!service) return <Navigate to="/services" />;

  // Dynamic Metadata - Action Oriented
  const seoTitle = `Top-Rated ${service.title} Services | Boost Your ROI - Viewads`;
  const seoDesc = `Expert ${service.title} solutions designed for modern businesses. ${service.description} Scale your online presence with Viewads' proven strategies.`;
  const seoKeywords = `${service.id}, ${service.title.toLowerCase()} company, hire ${service.title.toLowerCase()}, professional digital solutions, Viewads expertise, custom ${service.id}, business growth ${service.id}, high-performance ${service.id}, ${service.features.map(f => f.toLowerCase()).join(', ')}`;

  return (
    <div className="pt-32 pb-24">
      <MetaSEO title={seoTitle} description={seoDesc} keywords={seoKeywords} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/services" className="inline-flex items-center text-slate-500 hover:text-red-600 font-medium mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div>
            <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-red-200">
              {service.icon}
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-slate-900 mb-8 leading-tight">
              {service.title}
            </h1>
            <div className="prose prose-lg text-slate-600 max-w-none mb-12">
              <p className="text-xl leading-relaxed mb-6">
                {service.fullDescription}
              </p>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-6">What We Offer:</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center space-x-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 p-8 rounded-[2rem] text-white">
              <h4 className="text-xl font-bold mb-4 text-red-400">Ready to Get Started?</h4>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Contact Viewads today to discuss how we can implement these solutions for your specific business goals.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all text-center"
              >
                Contact Us Now
              </Link>
            </div>
          </div>

          <div className="sticky top-32 space-y-8">
             <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
               <img 
                 src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800`} 
                 alt={service.title} 
                 className="w-full h-full object-cover"
               />
             </div>
             <div className="bg-red-50 p-8 rounded-[2rem] border border-red-100 flex items-center justify-between">
                <div>
                  <div className="text-red-900 font-bold text-lg">Have Questions?</div>
                  <div className="text-red-600 font-medium">Talk to our experts.</div>
                </div>
                <a href="tel:+919010190919" className="bg-red-600 p-4 rounded-2xl text-white hover:bg-red-700 transition-all shadow-lg shadow-red-200">
                  <Phone className="w-6 h-6" />
                </a>
             </div>
          </div>
        </div>

        {/* FAQs Section */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-8 justify-center">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase">Service FAQs</h2>
            </div>
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 md:p-12">
              {service.faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
