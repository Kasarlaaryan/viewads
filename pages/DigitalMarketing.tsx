
import React from 'react';
import { motion } from 'motion/react';
import { 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  BarChart3, 
  TrendingUp, 
  Zap, 
  MousePointer2, 
  Filter, 
  MailSearch, 
  RefreshCcw,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AGENCY_DETAILS } from '../constants';
import MetaSEO from '../components/MetaSEO';
import IndustriesSection from '../components/IndustriesSection';
import FAQItem from '../components/FAQItem';

const DigitalMarketing: React.FC = () => {
  const dmServices = [
    {
      title: "Google Ads (PPC) Services",
      path: "/services/digital-marketing/google-ads",
      icon: <Target className="w-8 h-8 text-red-600" />,
      description: "Run High-Performance Google Ads Campaigns for instant traffic and leads.",
      features: ["Search & Display Ads", "YouTube Ads", "Remarketing", "Keyword targeting"]
    },
    {
      title: "Lead Generation Funnels",
      path: "/services/digital-marketing/lead-generation-funnels",
      icon: <Filter className="w-8 h-8 text-blue-600" />,
      description: "Turn Visitors into Qualified Leads with high-converting sales funnels.",
      features: ["Landing page creation", "Lead capture forms", "Email follow-ups", "Retargeting"]
    },
    {
      title: "Performance Marketing",
      path: "/services/digital-marketing/performance-marketing",
      icon: <BarChart3 className="w-8 h-8 text-green-600" />,
      description: "Data-Driven Marketing for Maximum ROI and measurable growth.",
      features: ["Campaign optimization", "Conversion tracking", "A/B testing", "ROI tracking"]
    },
    {
      title: "Email Marketing Services",
      path: "/services/digital-marketing/email-marketing",
      icon: <MailSearch className="w-8 h-8 text-purple-600" />,
      description: "Nurture Leads & Increase Conversions with automated email sequences.",
      features: ["Campaign design", "Automation setup", "Lead nurturing", "Promotional emails"]
    },
    {
      title: "Conversion Rate Optimization",
      path: "/services/digital-marketing/cro",
      icon: <RefreshCcw className="w-8 h-8 text-orange-600" />,
      description: "Turn Traffic into Customers by optimizing your website and funnels.",
      features: ["Landing page optimization", "CTA improvement", "User behavior analysis", "Funnel optimization"]
    }
  ];

  const faqs = [
    { question: "How quickly can I see results from paid ads?", answer: "You can start seeing results within 24–48 hours of campaign launch as your ads start appearing to your target audience immediately." },
    { question: "What is the minimum budget for Google Ads?", answer: "It depends on your industry and competition, but we help you optimize your budget for maximum ROI, starting with what makes sense for your business." },
    { question: "Is digital marketing better than traditional marketing?", answer: "Yes, digital marketing is more targeted, measurable, and cost-effective, allowing you to track every rupee spent and its return." }
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="Digital Marketing Services in India | PPC & Lead Generation | Viewads" 
        description="Looking for digital marketing services? Viewads offers Google Ads, lead generation funnels, performance marketing, and CRO services to grow your business. Contact us today!" 
      />
      
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-8 border border-white/10">
                <Rocket className="w-4 h-4" />
                <span>Drive Targeted Traffic & Maximize ROI</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
                Digital Marketing <br />
                <span className="text-red-600">& Paid Advertising</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10">
                Looking for a performance-focused digital marketing agency in India? At Viewads, we provide result-driven digital marketing and paid advertising services designed to help your business reach the right audience, generate high-quality leads, and increase revenue.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-xl shadow-red-600/20 hover:bg-red-700 transition-all">
                  Start Generating Leads Today
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-800 shadow-2xl relative border border-white/10">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="Digital Marketing" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
                 <div className="flex items-center space-x-3">
                   <div className="bg-green-100 p-2 rounded-lg"><TrendingUp className="w-5 h-5 text-green-600" /></div>
                   <div>
                     <div className="text-xl font-black text-slate-900">300%</div>
                     <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">ROI Increase</div>
                   </div>
                 </div>
              </div>
              <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
                 <div className="flex items-center space-x-3">
                   <div className="bg-blue-100 p-2 rounded-lg"><MousePointer2 className="w-5 h-5 text-blue-600" /></div>
                   <div>
                     <div className="text-xl font-black text-slate-900">50k+</div>
                     <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Leads Generated</div>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Essential Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
                Why Digital Marketing is <span className="text-red-600">Essential</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Digital marketing helps businesses grow faster by targeting the right audience at the right time. We combine data, creativity, and performance marketing strategies to deliver measurable growth.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Instant visibility on Google",
                  "High-quality lead generation",
                  "Measurable ROI",
                  "Scalable growth",
                  "Cost-effective marketing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 p-10 rounded-[3rem] text-white border border-slate-800">
              <h3 className="text-2xl font-black mb-6 flex items-center">
                <Zap className="w-8 h-8 text-red-600 mr-3" /> Performance-Driven
              </h3>
              <p className="text-slate-400 text-lg mb-8">
                We focus on performance-driven marketing strategies that deliver real results. We ensure every rupee you spend delivers value.
              </p>
              <div className="space-y-4">
                {[
                  "ROI-focused campaigns",
                  "Experienced marketing experts",
                  "Data-driven strategies",
                  "Transparent reporting",
                  "Affordable pricing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="bg-red-600 w-2 h-2 rounded-full"></div>
                    <span className="font-bold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Our Digital Marketing Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We don't just run ads — we build profitable marketing systems.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dmServices.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-8">
                  {service.features.map((f, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-500">
                      <CheckCircle2 className="w-4 h-4 text-red-600 mr-2" /> {f}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={service.path} 
                  className="inline-flex items-center text-red-600 font-bold hover:translate-x-2 transition-transform"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase">Digital Marketing FAQs</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Grow Your Business with Viewads</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Ready to drive targeted traffic and generate high-quality leads? Let's build your profitable marketing system.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-red-600" />
              <span className="text-xl font-bold">{AGENCY_DETAILS.email}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-red-600" />
              <span className="text-xl font-bold">{AGENCY_DETAILS.phone}</span>
            </div>
          </div>
          <Link 
            to="/contact" 
            className="bg-red-600 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-red-700 transition-all transform hover:scale-105 inline-block"
          >
            Start Generating Leads Today <ArrowRight className="ml-2 w-6 h-6 inline" />
          </Link>
        </div>
      </section>

      <IndustriesSection />
    </div>
  );
};

export default DigitalMarketing;
