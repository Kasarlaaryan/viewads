
import React from 'react';
import { ArrowRight, CheckCircle2, Rocket, Sparkles, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { SERVICES, WHY_CHOOSE_US, METADATA, NEWS_ITEMS } from '../constants';
import ServiceCard from '../components/ServiceCard';
import NewsCard from '../components/NewsCard';
import MetaSEO from '../components/MetaSEO';
import IndustriesSection from '../components/IndustriesSection';

const Home: React.FC = () => {
  return (
    <div className="pt-20 overflow-x-hidden">
      <MetaSEO 
        title={METADATA.home.title} 
        description={METADATA.home.description} 
        keywords={METADATA.home.keywords} 
      />
      
      {/* Interactive Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-red-100/40 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, -45, 0],
              x: [0, -40, 0],
              y: [0, 60, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-rose-100/30 rounded-full blur-[100px]"
          />
          
          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 hidden lg:block text-red-200"
          >
            <Sparkles size={48} />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-10 hidden lg:block text-rose-200"
          >
            <Target size={56} />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/3 right-20 hidden lg:block text-slate-200"
          >
            <Zap size={40} />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-white border border-red-100 text-red-600 px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-sm"
            >
              <Rocket className="w-4 h-4" />
              <span>Scale Your Digital Presence with Viewads</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="text-6xl lg:text-8xl font-black text-slate-900 leading-[1.05] mb-8 tracking-tight"
            >
              Build Your Brand. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-600 to-red-700">
                Grow Your Business.
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="max-w-3xl mx-auto text-xl text-slate-600 mb-12 leading-relaxed"
            >
              We combine creative design, high-performance development, and strategic marketing to help your business dominate the digital landscape.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto bg-red-600 text-white px-10 py-5 rounded-2xl text-xl font-black shadow-2xl shadow-red-600/30 hover:bg-red-700 transition-all flex items-center group"
                >
                  Get a Free Consultation
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/services" 
                  className="w-full sm:w-auto bg-white text-slate-900 border-2 border-slate-200 px-10 py-5 rounded-2xl text-xl font-black hover:border-red-600 hover:text-red-600 transition-all"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-20 flex flex-wrap justify-center gap-10 text-slate-500 font-bold"
            >
              {[
                { text: "Custom Websites", color: "text-green-500" },
                { text: "Strategic Marketing", color: "text-blue-500" },
                { text: "Reliable Support", color: "text-purple-500" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group cursor-default">
                  <CheckCircle2 className={`w-6 h-6 ${item.color} group-hover:scale-125 transition-transform`} />
                  <span className="text-lg group-hover:text-slate-900 transition-colors">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-2 bg-red-600 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">Our Services</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              We provide professional digital solutions to businesses & organizations. Each service is customized to align with your business goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Industries Section Integration */}
      <IndustriesSection />

      {/* Latest News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">Latest News & Insights</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Stay updated with the latest trends in digital marketing, web development, and industry news to keep your business ahead of the competition.
              </p>
            </div>
            <Link to="/services" className="inline-flex items-center text-red-600 font-bold hover:translate-x-2 transition-transform">
              View All Articles <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ITEMS.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
               <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                 <circle cx="100" cy="0" r="80" stroke="white" strokeWidth="0.5" />
                 <circle cx="100" cy="0" r="60" stroke="white" strokeWidth="0.5" />
                 <circle cx="100" cy="0" r="40" stroke="white" strokeWidth="0.5" />
               </svg>
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-black text-white mb-8">Why Choose Viewads?</h2>
                <div className="space-y-6">
                  {WHY_CHOOSE_US.map((item, i) => (
                    <div key={i} className="flex items-center space-x-4 bg-white/5 p-4 rounded-2xl hover:bg-white/10 transition-colors">
                      <div className="bg-red-600 p-3 rounded-xl text-white">
                        {item.icon}
                      </div>
                      <span className="text-lg font-bold text-white">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="bg-red-600/10 border border-red-600/20 p-8 rounded-3xl">
                  <p className="text-red-100 text-xl font-medium leading-relaxed italic mb-8">
                    "We don’t believe in one-size-fits-all solutions—we build what your business truly needs."
                  </p>
                  <div className="flex items-center space-x-4">
                    <img 
                      src="https://picsum.photos/seed/ceo/100/100" 
                      alt="Leadership" 
                      className="w-12 h-12 rounded-full border-2 border-red-500" 
                    />
                    <div>
                      <div className="text-white font-bold">Project Leadership</div>
                      <div className="text-red-400 text-sm">Viewads Digital Team</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            Ready to Take Your Business Online?
          </h2>
          <p className="text-red-100 text-xl mb-12 max-w-2xl mx-auto">
            Let’s build something impactful together. We provide professional digital solutions for businesses and organizations.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-red-600 px-10 py-5 rounded-2xl text-xl font-black shadow-2xl hover:bg-slate-100 transition-all transform hover:scale-105"
          >
            Contact Viewads Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
