
import React from 'react';
import { motion } from 'motion/react';
import { 
  Globe, 
  CheckCircle2, 
  Rocket, 
  Search, 
  Target, 
  Zap, 
  Smartphone, 
  RefreshCw, 
  Layout, 
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import MetaSEO from '../components/MetaSEO';
import FAQItem from '../components/FAQItem';

const WebsiteDesignDevelopment: React.FC = () => {
  const services = [
    {
      title: "Business Website Design",
      path: "/services/website-design-development/business-website",
      icon: <Layout className="w-8 h-8 text-red-600" />,
      description: "We create professional, brand-focused business websites tailored to your goals.",
      features: ["Clean & modern UI/UX design", "SEO-friendly structure", "Fast loading speed", "Lead generation focused layouts"]
    },
    {
      title: "WordPress Development",
      path: "/services/website-design-development/wordpress-development",
      icon: <Globe className="w-8 h-8 text-red-600" />,
      description: "We specialize in custom WordPress website development that is scalable, flexible, and easy to manage.",
      features: ["Custom themes (WP Bakery / Divi)", "Plugin integration", "SEO-ready setup", "Easy content management"]
    },
    {
      title: "Landing Page Design",
      path: "/services/website-design-development/landing-page",
      icon: <Target className="w-8 h-8 text-red-600" />,
      description: "Need more leads? Our high-converting landing pages are designed for maximum ROI.",
      features: ["Conversion-focused design", "Strong CTA placements", "A/B testing ready", "Optimized for ads & campaigns"]
    },
    {
      title: "Website Redesign Services",
      path: "/services/website-design-development/website-redesign",
      icon: <RefreshCw className="w-8 h-8 text-red-600" />,
      description: "Already have a website but not getting results? We redesign it for better performance and conversions.",
      features: ["UI/UX improvement", "Speed optimization", "SEO restructuring", "Mobile optimization"]
    },
    {
      title: "Mobile-Friendly Design",
      path: "/services/website-design-development/mobile-friendly",
      icon: <Smartphone className="w-8 h-8 text-red-600" />,
      description: "Over 70% of users visit websites on mobile. We ensure your website performs perfectly on all devices.",
      features: ["Fully responsive design", "Cross-browser compatibility", "Optimized mobile UX", "Faster mobile loading"]
    }
  ];

  const processSteps = [
    { title: "Requirement Analysis", desc: "Understanding your business goals" },
    { title: "Planning & Strategy", desc: "Wireframes & SEO structure" },
    { title: "Design & Development", desc: "UI/UX + coding" },
    { title: "Testing & Optimization", desc: "Speed, responsiveness, SEO" },
    { title: "Launch & Support", desc: "Going live + ongoing support" }
  ];

  const faqs = [
    { question: "What is the cost of a business website in India?", answer: "The cost depends on features, pages, and customization. We offer affordable and scalable packages for all business types." },
    { question: "How long does it take to build a website?", answer: "Typically 5–15 days depending on project complexity." },
    { question: "Is WordPress good for SEO?", answer: "Yes, WordPress is one of the best platforms for SEO when optimized correctly." },
    { question: "Do you provide maintenance?", answer: "Yes, we offer ongoing website maintenance and support." }
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="Website Design & Development Services | Viewads India" 
        description="Looking for professional website design & development services? Viewads builds responsive, SEO-friendly, high-converting websites for businesses. Contact us today!" 
      />

      {/* Hero Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              Website Design & <span className="text-red-600">Development</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
              Modern, Responsive & High-Converting Websites for Business Growth. We build digital assets that generate revenue.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
            >
              Get Your Website Designed Today <ArrowRight className="ml-2 w-5 h-5" />
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
                Build a Website That <span className="text-red-600">Drives Results</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                At Viewads, we design and develop powerful websites that don’t just look great — they drive results, generate leads, and grow your business online.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Whether you’re a startup, local business, or established brand, our custom website design & development services are built to deliver performance, speed, and conversions.
              </p>
              <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                  <Rocket className="w-6 h-6 text-red-600 mr-2" /> Why Your Business Needs a Professional Website
                </h3>
                <ul className="space-y-3">
                  {[
                    "Increase your online visibility on Google",
                    "Generate high-quality leads",
                    "Build trust and credibility",
                    "Improve conversion rates",
                    "Deliver a seamless mobile experience"
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="Website Development" 
                className="rounded-[2rem] shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl hidden md:block border border-slate-100">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-2xl">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">100%</div>
                    <div className="text-slate-500 font-medium">Responsive Design</div>
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Our Web Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Comprehensive website solutions tailored to your business needs.
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Our Development Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We follow a proven strategy to build high-performing websites.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-lg shadow-red-600/20">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
                {i < 4 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-slate-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8">
                SEO-Optimized Websites That <span className="text-red-600">Rank on Google</span>
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                We don’t just build websites — we build SEO-friendly websites designed to rank. Our websites include proper on-page SEO structure, fast loading speed, and mobile-first design.
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Proper on-page SEO",
                  "Fast loading speed",
                  "Mobile-first design",
                  "Keyword-optimized layout",
                  "Clean code",
                  "Schema readiness"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Search className="w-5 h-5 text-red-600" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p className="text-sm text-slate-400 mb-4 font-bold uppercase tracking-wider">Target Keywords:</p>
                <div className="flex flex-wrap gap-2">
                  {["Website Design Company", "Website Development Services", "WordPress Development Agency", "Business Website Design", "Responsive Website Design"].map((kw, i) => (
                    <span key={i} className="bg-white/10 px-3 py-1 rounded-full text-xs text-slate-300">{kw}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-red-600 p-8 rounded-[2rem] text-center">
                  <div className="text-4xl font-black mb-2">#1</div>
                  <div className="text-sm font-bold uppercase tracking-widest">Google Ranking</div>
                </div>
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 text-center">
                  <div className="text-4xl font-black mb-2">99%</div>
                  <div className="text-sm font-bold uppercase tracking-widest">Page Speed</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 text-center">
                  <div className="text-4xl font-black mb-2">24/7</div>
                  <div className="text-sm font-bold uppercase tracking-widest">Support</div>
                </div>
                <div className="bg-red-600 p-8 rounded-[2rem] text-center">
                  <div className="text-4xl font-black mb-2">500+</div>
                  <div className="text-sm font-bold uppercase tracking-widest">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-12">Industries We Serve</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["Real Estate", "Education & Coaching", "Healthcare", "Local Businesses", "E-commerce", "Startups & Entrepreneurs"].map((industry, i) => (
              <div key={i} className="bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100 font-bold text-slate-700 hover:bg-red-50 hover:text-red-600 hover:border-red-100 transition-all cursor-default">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">FAQs</h2>
            <p className="text-slate-600">Common questions about our web development services.</p>
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Let’s Build Your Website Today</h2>
          <p className="text-xl text-red-100 mb-12 max-w-2xl mx-auto">
            Ready to grow your business with a powerful website? Contact Viewads today and get a high-performing website that drives results.
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
            Get Your Website Designed Today →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDesignDevelopment;
