
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Layout, Search, ArrowRight, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../../components/MetaSEO';
import FAQItem from '../../components/FAQItem';

const BusinessWebsiteDesign: React.FC = () => {
  const features = [
    "Custom UI/UX design aligned with your brand identity",
    "SEO-optimized website structure",
    "Fast-loading pages (Core Web Vitals optimized)",
    "Conversion-focused layouts",
    "Secure and scalable development"
  ];

  const benefits = [
    { title: "Increase Online Visibility", desc: "Rank higher on Google and get found by potential customers." },
    { title: "Generate Quality Leads", desc: "Turn visitors into customers with high-converting layouts." },
    { title: "Improve Brand Credibility", desc: "A professional website builds trust and authority." },
    { title: "Higher Conversion Rates", desc: "Optimized user experience leads to more sales." },
    { title: "Better Google Rankings", desc: "Built-in SEO ensures long-term organic growth." }
  ];

  const faqs = [
    { question: "What is the cost of a business website in India?", answer: "The cost depends on features, pages, and customization. We offer affordable and scalable packages for all business types." },
    { question: "How long does it take to build a website?", answer: "Typically 5–15 days depending on project complexity." }
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="Business Website Design Services in India | Viewads" 
        description="Looking for professional business website design services in India? Viewads builds responsive, SEO-friendly, high-converting websites for businesses. Grow your business online today!" 
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
                <Layout className="w-4 h-4" />
                <span>Professional Business Solutions</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Business Website <span className="text-red-600">Design Services</span> in India
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Looking for a professional business website design company in India? At Viewads, we create high-quality, conversion-focused websites that help businesses establish a strong digital presence and generate consistent leads.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
                  Get Started Today
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
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800" 
                alt="Business Website Design" 
                className="rounded-[2rem] shadow-2xl"
              />
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 p-2 rounded-lg text-white">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-slate-900">Secure</div>
                    <div className="text-xs text-slate-500 font-medium">Enterprise Grade</div>
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
                Your Online <span className="text-red-600">Sales Machine</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A business website is more than just design — it’s your online sales machine. Our expert team ensures your website is SEO-friendly, mobile-responsive, and optimized for performance.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Custom Business Website Design Solutions</h3>
              <p className="text-slate-600 mb-8">We design websites tailored to your industry, audience, and business goals.</p>
              <div className="space-y-4">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 blur-3xl rounded-full"></div>
              <h2 className="text-3xl font-black mb-8 flex items-center">
                <Search className="w-8 h-8 text-red-600 mr-4" /> SEO-Friendly Website Design
              </h2>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Our business websites are built with advanced on-page SEO techniques, helping you rank for competitive keywords like:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {["Business website design services", "Company website design India", "Professional website development", "Website design company near me"].map((kw, i) => (
                  <div key={i} className="flex items-center space-x-2 text-sm font-medium text-slate-300">
                    <div className="w-1.5 h-1.5 bg-red-600 rounded-full"></div>
                    <span>{kw}</span>
                  </div>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-4">We Optimize:</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Heading structure (H1, H2, H3)", "Internal linking", "Image alt tags", "Page speed & performance", "Mobile-first indexing"].map((item, i) => (
                  <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/10 text-xs font-medium text-slate-400">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Benefits of Choosing Viewads</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We help you establish a strong digital presence and generate consistent leads.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-8">Build Your Professional Business Website</h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Ready to grow your business online? Contact Viewads today and get a high-performing website that drives results.
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

export default BusinessWebsiteDesign;
