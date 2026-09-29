
import React from 'react';
import { motion } from 'motion/react';
import { 
  Share2, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Linkedin, 
  TrendingUp, 
  Users, 
  MessageSquare, 
  HelpCircle,
  Zap,
  Target,
  BarChart3,
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AGENCY_DETAILS, METADATA } from '../constants';
import MetaSEO from '../components/MetaSEO';
import IndustriesSection from '../components/IndustriesSection';
import FAQItem from '../components/FAQItem';

const SocialMediaMarketing: React.FC = () => {
  const smmServices = [
    {
      title: "Facebook Marketing Services",
      path: "/services/social-media-marketing/facebook-marketing",
      icon: <Facebook className="w-8 h-8 text-blue-600" />,
      description: "Reach & Convert Your Target Audience on Facebook with powerful ad campaigns.",
      features: ["Page setup & optimization", "Content creation & posting", "Audience targeting", "Lead generation campaigns"]
    },
    {
      title: "Instagram Marketing Services",
      path: "/services/social-media-marketing/instagram-marketing",
      icon: <Instagram className="w-8 h-8 text-pink-600" />,
      description: "Build Your Brand on Instagram through engaging reels and strategic content.",
      features: ["Reels & post creation", "Hashtag strategy", "Profile optimization", "Audience engagement"]
    },
    {
      title: "LinkedIn Marketing Services",
      path: "/services/social-media-marketing/linkedin-marketing",
      icon: <Linkedin className="w-8 h-8 text-blue-700" />,
      description: "Generate B2B Leads with LinkedIn professional branding and targeting.",
      features: ["Profile & page optimization", "Content strategy", "Lead generation campaigns", "B2B targeting"]
    },
    {
      title: "Content Creation & Scheduling",
      path: "/services/social-media-marketing/content-creation",
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      description: "Consistent Content That Drives Engagement across all your social platforms.",
      features: ["Creative post designs", "Caption writing with CTAs", "Monthly content calendar", "Scheduled posting"]
    },
    {
      title: "Paid Social Media Advertising",
      path: "/services/social-media-marketing/paid-ads",
      icon: <Target className="w-8 h-8 text-red-600" />,
      description: "High-ROI Paid Ads Campaigns on Facebook and Instagram for leads and sales.",
      features: ["Campaign setup & management", "A/B testing", "Budget optimization", "Performance tracking"]
    }
  ];

  const faqs = [
    { question: "How long does social media marketing take to show results?", answer: "You can start seeing engagement within weeks, but consistent growth and significant lead generation typically take 2–3 months." },
    { question: "Which platform is best for my business?", answer: "It depends on your target audience. B2B businesses often thrive on LinkedIn, while lifestyle and retail brands perform exceptionally well on Instagram and Facebook. We help you choose the right platform." }
  ];

  return (
    <div className="pt-20">
      <MetaSEO 
        title="Social Media Marketing Services in India | SMM Agency | Viewads" 
        description="Looking for social media marketing services? Viewads offers Facebook, Instagram, LinkedIn marketing and paid ads to grow your business. Contact us today!" 
      />
      
      {/* Hero Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-600/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-8 border border-white/10">
                <Share2 className="w-4 h-4" />
                <span>Grow Your Brand Organically & Paid</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
                Social Media <br />
                <span className="text-red-600">Marketing Services</span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed mb-10">
                Looking for a results-driven Social Media Marketing agency in India? At Viewads, we help businesses build a strong presence on platforms like Facebook, Instagram, and LinkedIn to increase brand awareness, generate leads, and drive sales.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-xl shadow-red-600/20 hover:bg-red-700 transition-all">
                  Boost Your Presence Today
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-800 shadow-2xl relative border border-white/10">
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" alt="Social Media Marketing" className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
              </div>
              {/* Floating Stats */}
              <div className="absolute -top-6 -right-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
                 <div className="flex items-center space-x-3">
                   <div className="bg-green-100 p-2 rounded-lg"><TrendingUp className="w-5 h-5 text-green-600" /></div>
                   <div>
                     <div className="text-xl font-black text-slate-900">450%</div>
                     <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Growth</div>
                   </div>
                 </div>
              </div>
              <div className="absolute bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
                 <div className="flex items-center space-x-3">
                   <div className="bg-red-100 p-2 rounded-lg"><Users className="w-5 h-5 text-red-600" /></div>
                   <div>
                     <div className="text-xl font-black text-slate-900">10k+</div>
                     <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Followers</div>
                   </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">
                Why Social Media <span className="text-red-600">Marketing Matters</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                With billions of active users, social media platforms offer unmatched opportunities to connect with your audience and grow your business online.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Build brand awareness",
                  "Engage with your audience",
                  "Generate high-quality leads",
                  "Drive website traffic",
                  "Increase conversions and sales"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-50 p-10 rounded-[3rem] border border-red-100">
              <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center">
                <Rocket className="w-8 h-8 text-red-600 mr-3" /> Data-Driven Strategies
              </h3>
              <p className="text-slate-600 text-lg mb-8">
                At Viewads, we create data-driven SMM strategies that deliver real results. We combine SEO and social media marketing to maximize your online visibility.
              </p>
              <div className="space-y-4">
                {[
                  "Keyword-based content strategy",
                  "Hashtag optimization",
                  "Engagement-driven posts",
                  "Conversion-focused campaigns"
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

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Our SMM Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Comprehensive social media solutions to build your brand and drive sales.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smmServices.map((service, i) => (
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
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 uppercase">SMM FAQs</h2>
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
          <h2 className="text-4xl md:text-5xl font-black mb-8">Boost Your Social Media Presence Today</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Ready to grow your brand with Viewads? Let's take your social media to the next level.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-12">
            <div className="flex items-center space-x-3">
              <Mail className="w-6 h-6 text-red-600" />
              <span className="text-xl font-bold">Support@viewads.in</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-6 h-6 text-red-600" />
              <span className="text-xl font-bold">+91-9010190919</span>
            </div>
          </div>
          <Link 
            to="/contact" 
            className="bg-red-600 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-red-700 transition-all transform hover:scale-105 inline-block"
          >
            Get Started Now <ArrowRight className="ml-2 w-6 h-6 inline" />
          </Link>
        </div>
      </section>

      <IndustriesSection />
    </div>
  );
};

export default SocialMediaMarketing;
