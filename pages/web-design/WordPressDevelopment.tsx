
import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Globe, Search, ArrowRight, Zap, Layout, Code, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../../components/MetaSEO';
import FAQItem from '../../components/FAQItem';

const WordPressDevelopment: React.FC = () => {
  const services = [
    "Custom WordPress theme development",
    "Divi & WP Bakery page builder development",
    "Plugin integration & customization",
    "WooCommerce setup (if needed)",
    "Website speed optimization"
  ];

  const seoFeatures = [
    "Clean and optimized code",
    "SEO-friendly URL structure",
    "Schema-ready setup",
    "Fast loading speed",
    "Mobile-first design"
  ];

  const benefits = [
    { title: "Easy Content Management", desc: "Update your website content easily without any technical knowledge." },
    { title: "SEO-Friendly Platform", desc: "WordPress is built with SEO in mind, helping you rank faster." },
    { title: "Highly Customizable", desc: "Thousands of themes and plugins to add any functionality you need." },
    { title: "Cost-Effective", desc: "Save on development costs with a scalable and flexible platform." },
    { title: "Scalable Growth", desc: "Add new features and pages as your business expands." }
  ];

  const faqs = [
    { question: "Is WordPress good for SEO?", answer: "Yes, WordPress is one of the best platforms for SEO when optimized correctly." },
    { question: "Do you provide maintenance?", answer: "Yes, we offer ongoing website maintenance and support." }
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="WordPress Development Services in India | Viewads" 
        description="Looking for expert WordPress development services in India? Viewads builds scalable, SEO-friendly, and easy-to-manage WordPress websites for businesses. Start today!" 
      />

      {/* Hero Section */}
      <section className="bg-slate-900 py-20 relative overflow-hidden text-white">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-red-600/10 blur-3xl rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/10">
                <Globe className="w-4 h-4" />
                <span>Expert WordPress Developers</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                WordPress Development <span className="text-red-600">Services</span> in India
              </h1>
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                At Viewads, we offer expert WordPress website development services for businesses looking for scalable, SEO-friendly, and easy-to-manage websites. WordPress powers over 40% of websites globally, making it the best platform for business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-600/20">
                  Start Your Project
                </Link>
                <a href="#details" className="bg-white/5 text-white border border-white/10 px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all">
                  Explore Services
                </a>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800" 
                alt="WordPress Development" 
                className="rounded-[2rem] shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-white/20 p-2 rounded-lg text-white">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white">Fast</div>
                    <div className="text-xs text-red-100 font-medium">Speed Optimized</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="details" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
                Custom WordPress <span className="text-red-600">Solutions</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We build fully customized WordPress websites tailored to your needs. Our team specializes in everything from theme development to complex plugin integrations.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {services.map((service, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Search className="w-6 h-6 text-red-600 mr-2" /> SEO-Optimized WordPress Websites
                </h3>
                <p className="text-slate-600 mb-6">We ensure your website is optimized for search engines from day one.</p>
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
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Code className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-black text-slate-900 mb-2">Clean Code</h4>
                  <p className="text-xs text-slate-500">Optimized for performance and security.</p>
                </div>
                <div className="bg-slate-900 p-8 rounded-[2rem] text-center text-white">
                  <div className="bg-red-600 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-black mb-2">Easy Setup</h4>
                  <p className="text-xs text-slate-400">Manage your content with ease.</p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Layout className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-black text-slate-900 mb-2">Custom Themes</h4>
                  <p className="text-xs text-slate-500">Unique designs for your brand.</p>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-6 h-6 text-red-600" />
                  </div>
                  <h4 className="font-black text-slate-900 mb-2">Global Reach</h4>
                  <p className="text-xs text-slate-500">Scale your business worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Why Choose WordPress?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              The best platform for business growth, powering over 40% of the web.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-6 h-6 text-red-600" />
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Start Your WordPress Website Today</h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Viewads stands out as a trusted WordPress development agency in India, delivering high-performance websites that drive traffic and conversions.
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

export default WordPressDevelopment;
