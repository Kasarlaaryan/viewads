
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, CheckCircle2, Star, ArrowRight, Briefcase, HelpCircle } from 'lucide-react';
import { SERVICES, AGENCY_DETAILS, CITY_MARKETING_CONTENT, INDUSTRIES_SERVED_MAP, CITY_FAQS } from '../constants';
import MetaSEO from '../components/MetaSEO';
import IndustriesSection from '../components/IndustriesSection';
import FAQItem from '../components/FAQItem';

const LocationServices: React.FC = () => {
  const { city = 'hyderabad' } = useParams<{ city?: string }>();
  const cityKey = city.toLowerCase();
  
  // Format city name for display
  const cityName = cityKey === 'usa' ? 'USA' : 
                   cityKey === 'uk' ? 'UK' : 
                   cityKey === 'vizag' ? 'Visakhapatnam (Vizag)' :
                   city.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  const cityDescription = CITY_MARKETING_CONTENT[cityKey] || 
    `Viewads is a top digital marketing company in ${cityName}. We specialize in result-driven web development, SEO, and performance marketing to help local businesses scale in the digital era.`;
  
  const isUSA = cityKey === 'usa' || ['new-york', 'texas', 'california', 'florida', 'chicago', 'los-angeles'].includes(cityKey);
  const isUK = cityKey === 'uk' || ['london', 'manchester', 'birmingham', 'leeds', 'bristol', 'nottingham'].includes(cityKey);
  const isInternational = isUSA || isUK;

  // Get localized FAQs
  const faqs = isUSA ? CITY_FAQS.usa : (isUK ? CITY_FAQS.uk : CITY_FAQS.default);

  // Dynamic Metadata - Optimized for "Best [Service] in [Location]"
  const seoTitle = `Best Digital Marketing Agency in ${cityName} | #1 Web Design & SEO - Viewads`;
  const seoDesc = cityDescription.substring(0, 160);
  const seoKeywords = `digital marketing agency ${cityName}, best SEO services ${cityName}, web development company ${cityName}, social media marketing ${cityName}, hire digital agency ${cityName}, professional website design ${cityName}, local SEO ${cityName}, marketing solutions ${cityName}, Viewads ${cityName}, business growth ${cityName}, ${cityName} tech solutions`;

  // Region specific service wording
  const getServiceWording = (service: typeof SERVICES[0]) => {
    if (isUSA) {
      if (service.id === 'web-design') return 'Website Design & WordPress Development';
      if (service.id === 'social-media-marketing') return 'Social Media Marketing & Paid Ads';
      if (service.id === 'digital-marketing') return 'Digital Marketing & Lead Generation';
      if (service.id === 'graphic-design') return 'Creative & Branding Design';
    }
    if (isUK) {
      if (service.id === 'web-design') return 'Business Website Development';
      if (service.id === 'seo') return 'SEO & Local SEO (UK-focused)';
      if (service.id === 'social-media-marketing') return 'Social Media Marketing (Facebook, Instagram, LinkedIn)';
      if (service.id === 'digital-marketing') return 'Digital Advertising Campaigns';
      if (service.id === 'hosting') return 'Website Maintenance & Support';
      if (service.id === 'graphic-design') return 'Graphic & Creative Design';
    }
    return service.title;
  };

  return (
    <div className="pt-32 pb-24">
      <MetaSEO title={seoTitle} description={seoDesc} keywords={seoKeywords} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 p-12 lg:p-20 rounded-[3.5rem] text-white relative overflow-hidden mb-24">
           <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none">
             <MapPin className="w-full h-full text-red-500" />
           </div>
           
           <div className="relative z-10 max-w-4xl">
             <div className="inline-flex items-center space-x-2 text-red-400 font-bold mb-6 bg-red-500/10 px-4 py-1.5 rounded-full border border-red-500/20">
                <MapPin className="w-4 h-4" />
                <span className="text-sm uppercase tracking-widest">
                  {isInternational ? `Serving the ${cityName}` : `Serving ${cityName} & Surrounding Areas`}
                </span>
             </div>
             <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
               {isInternational ? (
                 <>Digital Marketing & <br />Web Services in <span className="text-red-500">{cityName}</span></>
               ) : (
                 <>Digital Marketing Company in <span className="text-red-500">{cityName}</span></>
               )}
             </h1>
             <p className="text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl">
               {cityDescription}
             </p>
             <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-red-600 px-10 py-5 rounded-2xl font-black hover:bg-red-700 transition-all shadow-xl shadow-red-600/20">
                  {isInternational ? 'Book a Free Consultation' : 'Get a Free Consultation'}
                </Link>
                <a href={`tel:${AGENCY_DETAILS.phone}`} className="flex items-center space-x-3 bg-white text-slate-900 px-8 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all shadow-lg">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>{AGENCY_DETAILS.phone}</span>
                </a>
             </div>
           </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Our Services in {cityName}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide complete digital solutions including strategic marketing and professional web development tailored for {cityName}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
               <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                 {service.icon}
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">{getServiceWording(service)}</h3>
               <p className="text-slate-600 mb-6">{service.description}</p>
               <Link 
                 to={service.id === 'social-media-marketing' ? '/services/social-media-marketing' : `/services/${service.id}`} 
                 className="text-red-600 font-bold inline-flex items-center hover:translate-x-1 transition-transform"
               >
                 Learn More <ArrowRight className="w-4 h-4 ml-2" />
               </Link>
            </div>
          ))}
        </div>

        <IndustriesSection />

        {/* Local FAQs Section */}
        <section className="max-w-4xl mx-auto mt-24 mb-24">
          <div className="flex items-center space-x-3 mb-8 justify-center">
            <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 uppercase">FAQs for {cityName}</h2>
          </div>
          <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 md:p-12">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </section>

        <div className="bg-red-50 p-12 lg:p-20 rounded-[3.5rem] text-center border border-red-100">
          <div className="flex justify-center space-x-1 mb-6">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />)}
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-red-900 mb-8 max-w-2xl mx-auto uppercase">
             Trusted by Businesses in {cityName}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-12">
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-red-100">
              <p className="text-slate-600 italic mb-6">"Highly professional team and timely delivery. Their maintenance services are top-notch for our operations."</p>
              <div className="font-bold text-red-900">- Global Client</div>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-red-100">
              <p className="text-slate-600 italic mb-6">"Our sales have increased by 40% since we started our digital growth campaign with Viewads."</p>
              <div className="font-bold text-red-900">- E-commerce Partner</div>
            </div>
            <div className="p-8 bg-white rounded-3xl shadow-sm border border-red-100 sm:col-span-2 lg:col-span-1">
              <p className="text-slate-600 italic mb-6">"Best digital partner we've worked with. They really understand the {cityName} market behavior."</p>
              <div className="font-bold text-red-900">- Tech Startup Founder</div>
            </div>
          </div>
          <Link to="/contact" className="inline-block bg-red-600 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-red-700 transition-all">
            Start Your Project Today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LocationServices;
