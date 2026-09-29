
import React from 'react';
import { motion } from 'motion/react';
import { 
  Search, 
  CheckCircle2, 
  Rocket, 
  Target, 
  Zap, 
  BarChart3, 
  TrendingUp, 
  Globe, 
  ArrowRight,
  Mail,
  Phone,
  FileSearch,
  Smartphone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../components/MetaSEO';
import FAQItem from '../components/FAQItem';

const SEOServices: React.FC = () => {
  const services = [
    {
      title: "Keyword Research Services",
      path: "/services/seo/keyword-research",
      icon: <Target className="w-8 h-8 text-red-600" />,
      description: "Find high-intent keywords that drive traffic and conversions.",
      features: ["High-volume keyword research", "Long-tail keyword targeting", "Competitor keyword analysis", "Search intent optimization"]
    },
    {
      title: "On-Page SEO Optimization",
      path: "/services/seo/on-page-seo",
      icon: <FileSearch className="w-8 h-8 text-red-600" />,
      description: "Optimize your website content and structure for better rankings.",
      features: ["Title & Meta optimization", "Heading structure (H1-H3)", "Keyword placement & density", "Internal linking strategy"]
    },
    {
      title: "Off-Page SEO Services",
      path: "/services/seo/off-page-seo",
      icon: <Globe className="w-8 h-8 text-red-600" />,
      description: "Build authority and high-quality backlinks to boost your domain trust.",
      features: ["High-quality link building", "Guest posting", "Business listings & citations", "Brand mentions"]
    },
    {
      title: "Local SEO Services",
      path: "/services/seo/local-seo",
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      description: "Rank your business in local searches and Google Maps.",
      features: ["Google Business Profile optimization", "Local citations", "Location-based keywords", "Reviews optimization"]
    },
    {
      title: "SEO Audit & Analysis",
      path: "/services/seo/seo-audit",
      icon: <BarChart3 className="w-8 h-8 text-red-600" />,
      description: "Identify and fix technical issues affecting your search performance.",
      features: ["Technical SEO analysis", "Website speed audit", "Broken links & errors fix", "Mobile usability check"]
    }
  ];

  const faqs = [
    { question: "How long does SEO take to show results?", answer: "SEO typically takes 3 to 6 months to show significant results depending on competition and industry." },
    { question: "Is SEO better than paid ads?", answer: "SEO provides long-term organic traffic and better ROI over time, while ads give immediate results. Both work best together." },
    { question: "Do you guarantee #1 ranking?", answer: "We follow best practices and proven strategies, but Google rankings depend on multiple factors including algorithm updates and competition." },
    { question: "What is the cost of SEO services?", answer: "SEO pricing depends on your business goals, competition, and the number of keywords targeted." }
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="SEO Services in India | Best SEO Company | Viewads" 
        description="Looking for the best SEO services in India? Viewads offers keyword research, on-page SEO, off-page SEO, and local SEO to rank your website on Google. Contact us today!" 
      />

      {/* Hero Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-red-600/10 blur-3xl rounded-full -translate-y-1/2 -translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Search Engine <span className="text-red-600">Optimization</span> (SEO)
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Rank Higher on Google & Grow Your Business Organically. We bring qualified leads that convert.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
            >
              Boost Your Google Rankings Today <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
                Dominate Search Results with <span className="text-red-600">Proven Strategies</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Looking for a reliable SEO company in India to improve your Google rankings? At Viewads, we offer result-driven Search Engine Optimization (SEO) services designed to increase your website visibility, drive organic traffic, and generate high-quality leads.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                SEO is not just about ranking — it’s about attracting the right audience and converting them into customers.
              </p>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Rocket className="w-6 h-6 text-red-600 mr-2" /> Why SEO Matters for Your Business
                </h3>
                <ul className="space-y-3">
                  {[
                    "Rank on the first page of Google",
                    "Increase organic (free) traffic",
                    "Generate consistent leads",
                    "Build brand authority and trust",
                    "Achieve long-term growth"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&q=80&w=800" 
                alt="SEO Services" 
                className="rounded-[2rem] shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-red-100 p-3 rounded-2xl">
                    <TrendingUp className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">300%</div>
                    <div className="text-slate-500 font-medium">Traffic Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Our SEO Solutions</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Comprehensive SEO services tailored to help you rank #1 on Google.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100"
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

      {/* Advanced Strategies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-red-600 p-8 rounded-[2rem] text-white text-center">
                    <Zap className="w-10 h-10 mx-auto mb-4" />
                    <div className="text-2xl font-black">Fast</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Loading Speed</div>
                  </div>
                  <div className="bg-slate-900 p-8 rounded-[2rem] text-white text-center">
                    <Smartphone className="w-10 h-10 mx-auto mb-4" />
                    <div className="text-2xl font-black">Mobile</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">First Indexing</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-slate-100 p-8 rounded-[2rem] text-slate-900 text-center border border-slate-200">
                    <Globe className="w-10 h-10 mx-auto mb-4 text-red-600" />
                    <div className="text-2xl font-black">Global</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-60 text-slate-500">Authority</div>
                  </div>
                  <div className="bg-red-50 p-8 rounded-[2rem] text-red-600 text-center border border-red-100">
                    <BarChart3 className="w-10 h-10 mx-auto mb-4" />
                    <div className="text-2xl font-black">ROI</div>
                    <div className="text-xs font-bold uppercase tracking-widest opacity-80">Focused</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8">
                Advanced SEO <span className="text-red-600">Strategies</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                At Viewads, we use advanced SEO techniques to get your website to the top of Google search results. Our goal is simple: dominate your niche.
              </p>
              <div className="space-y-4">
                {[
                  "Keyword-optimized content strategy",
                  "Core Web Vitals optimization",
                  "Schema markup implementation",
                  "Content clustering (topic authority)",
                  "High-quality backlink building"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="bg-red-600 w-2 h-2 rounded-full"></div>
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">SEO FAQ</h2>
            <p className="text-slate-600">Common questions about our search engine optimization services.</p>
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to Rank Your Website on Google?</h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Partner with Viewads for result-driven SEO services. Let’s take your website to the top of search results.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6" />
              <span className="text-xl font-bold">Support@viewads.in</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6" />
              <span className="text-xl font-bold">+91-9010190919</span>
            </div>
          </div>
          <Link 
            to="/contact" 
            className="bg-white text-red-600 px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-slate-100 transition-all transform hover:scale-105 inline-block"
          >
            Boost Your Google Rankings Today →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SEOServices;
