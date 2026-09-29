
import React from 'react';
import { NEWS_ITEMS, METADATA } from '../constants';
import NewsCard from '../components/NewsCard';
import MetaSEO from '../components/MetaSEO';
import IndustriesSection from '../components/IndustriesSection';

const Blogs: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <MetaSEO 
        title={METADATA.blogs.title} 
        description={METADATA.blogs.description} 
        keywords={METADATA.blogs.keywords} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-tight mb-8">
            Blogs & <br />
            <span className="text-red-600">Updates</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Stay ahead of the curve with our latest insights, case studies, and expert guides on digital growth, web technologies, and marketing strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {NEWS_ITEMS.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>

        <IndustriesSection />

        <div className="mt-24 bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-black mb-6 uppercase tracking-widest">Never Miss an Update</h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Get the latest digital growth strategies delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-500/50"
            />
            <button className="bg-red-600 text-white px-8 py-4 rounded-2xl font-black hover:bg-red-700 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
