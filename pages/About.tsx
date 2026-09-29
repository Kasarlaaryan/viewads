
import React from 'react';
import { Target, Eye, ShieldCheck, Heart, Award, Users, Zap, BarChart3, Globe, ThumbsUp, BadgeIndianRupee } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';
import IndustriesSection from '../components/IndustriesSection';
import { METADATA } from '../constants';

const About: React.FC = () => {
  const differentiators = [
    {
      title: 'Expertise & Experience',
      description: 'Our team consists of seasoned professionals with years of experience in the digital landscape.',
      icon: <Users className="w-6 h-6" />
    },
    {
      title: 'Customized Strategies',
      description: 'We don’t believe in generic solutions. Every strategy is tailored to your unique business goals.',
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: 'Data-Driven Results',
      description: 'We rely on real-time data and analytics to optimize campaigns and ensure maximum ROI.',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: 'Affordable Excellence',
      description: 'High-quality digital solutions at competitive prices that provide the best value for your investment.',
      icon: <BadgeIndianRupee className="w-6 h-6" />
    },
    {
      title: 'Global Perspective',
      description: 'Serving clients in India, USA, and UK, we bring international quality standards to every project.',
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: 'Dedicated Support',
      description: 'We are your partners, not just service providers. Our support team is always here for you.',
      icon: <ThumbsUp className="w-6 h-6" />
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <MetaSEO 
        title={METADATA.about.title} 
        description={METADATA.about.description} 
        keywords={METADATA.about.keywords} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-black text-slate-900 mb-6">About Viewads</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Viewads is a digital solutions company dedicated to helping businesses grow online through powerful websites, branding, and digital marketing strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-slate-900">Our Partner Approach</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We partner with businesses to understand their vision, identify growth opportunities, and deliver digital solutions that create real value.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="text-red-600 font-bold text-3xl mb-1">5+</div>
                <div className="text-slate-500 text-sm">Years Experience</div>
              </div>
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="text-red-600 font-bold text-3xl mb-1">200+</div>
                <div className="text-slate-500 text-sm">Happy Clients</div>
              </div>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Office" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-32">
          <div className="bg-red-600 p-12 rounded-[3rem] text-white">
            <Target className="w-12 h-12 mb-6" />
            <h3 className="text-3xl font-black mb-6">Our Mission</h3>
            <p className="text-xl text-red-50 leading-relaxed">
              To empower businesses with innovative, affordable, and result-oriented digital solutions that drive sustainable growth in the digital era.
            </p>
          </div>
          <div className="bg-slate-900 p-12 rounded-[3rem] text-white">
            <Eye className="w-12 h-12 mb-6" />
            <h3 className="text-3xl font-black mb-6">Our Vision</h3>
            <p className="text-xl text-slate-300 leading-relaxed">
              To become a trusted global digital partner, known for our commitment to quality and for delivering exceptional value to businesses worldwide.
            </p>
          </div>
        </div>

        <IndustriesSection />

        {/* Why Choose Viewads Section */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Why Choose Viewads</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Discover what makes us the preferred digital partner for growing businesses globally.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4">Our Values</h2>
          <p className="text-slate-600">The foundation of every project we undertake.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Integrity', desc: 'Honesty and transparency in everything we do.', icon: <ShieldCheck className="w-8 h-8" /> },
            { title: 'Quality', desc: 'Uncompromising standards for digital excellence.', icon: <Award className="w-8 h-8" /> },
            { title: 'Accountability', desc: 'We take full responsibility for our results.', icon: <Users className="w-8 h-8" /> },
            { title: 'Client Success', desc: 'Your growth is our ultimate metric of success.', icon: <Heart className="w-8 h-8" /> }
          ].map((val, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 text-red-600 rounded-2xl mb-6">
                {val.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h4>
              <p className="text-slate-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
