
import React from 'react';
import { motion } from 'motion/react';
import { Target, CheckCircle2, Search, ArrowRight, Zap, BarChart3, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../../components/MetaSEO';
import FAQItem from '../../components/FAQItem';

const KeywordResearch: React.FC = () => {
  const process = [
    "In-depth keyword analysis",
    "Competitor keyword research",
    "Long-tail keyword identification",
    "Search intent mapping",
    "Keyword difficulty analysis"
  ];

  const keywordTypes = [
    { title: "Short-tail keywords", desc: "High volume, broad search terms." },
    { title: "Long-tail keywords", desc: "High conversion, specific phrases." },
    { title: "Local keywords", desc: "Location-based search terms." },
    { title: "Commercial intent", desc: "Keywords that lead to sales." }
  ];

  const benefits = [
    "Rank higher on Google",
    "Attract targeted traffic",
    "Improve conversion rates",
    "Reduce marketing costs"
  ];

  const faqs = [
    { question: "Why is keyword research important?", answer: "It helps your website target the right audience and improve rankings by focusing on what users are actually searching for." },
    { question: "How often should keyword research be done?", answer: "Regular updates are required to stay ahead of competitors and adapt to changing search trends." }
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="Keyword Research Services in India | SEO Keyword Research | Viewads" 
        description="At Viewads, we provide advanced keyword research services to help your website rank for the most profitable and high-intent search terms on Google. Start your SEO journey today!" 
      />

      {/* Hero Section */}
      <section className="bg-red-600 py-20 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 border border-white/10">
                <Target className="w-4 h-4" />
                <span>Foundation of SEO</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                Keyword Research <span className="text-slate-900">Services</span> in India
              </h1>
              <p className="text-xl text-red-100 mb-8 leading-relaxed">
                At Viewads, we provide advanced keyword research services to help your website rank for the most profitable and high-intent search terms on Google.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg">
                  Start Your SEO Journey
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Keyword Research" 
                className="rounded-[2rem] shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -right-6 bg-slate-900 p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-600 p-2 rounded-lg text-white">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-white">Targeted</div>
                    <div className="text-xs text-slate-400 font-medium">Traffic Growth</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
                Find High-Intent Keywords <span className="text-red-600">That Convert</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Keyword research is the foundation of SEO. Without the right keywords, your website cannot attract the right audience. We identify keywords that your target audience is actively searching for.
              </p>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Keyword Research Process:</h3>
              <div className="space-y-4 mb-10">
                {process.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {keywordTypes.map((type, i) => (
                <div key={i} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
                  <div className="bg-red-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                    <Search className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-4">{type.title}</h3>
                  <p className="text-sm text-slate-500">{type.desc}</p>
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Benefits of Keyword Research</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Strategic keyword selection is the key to organic growth.
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">FAQs</h2>
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Start Your SEO Journey with Viewads</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Get expert keyword research that drives targeted traffic to your website.
          </p>
          <Link 
            to="/contact" 
            className="bg-red-600 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-red-700 transition-all transform hover:scale-105 inline-block"
          >
            Get Started Now <ArrowRight className="ml-2 w-6 h-6 inline" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KeywordResearch;
