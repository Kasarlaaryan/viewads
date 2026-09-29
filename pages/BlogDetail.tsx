
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { NEWS_ITEMS, AGENCY_DETAILS } from '../constants';
import { ArrowLeft, Calendar, User, Share2, Phone, Mail, ArrowRight } from 'lucide-react';
import MetaSEO from '../components/MetaSEO';

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = NEWS_ITEMS.find(item => item.id === slug);

  if (!blog) return <Navigate to="/blogs" />;

  const seoTitle = `${blog.title} | Blog - Viewads`;
  const seoDesc = blog.excerpt;
  const seoKeywords = `${blog.category.toLowerCase()}, digital marketing insights, Viewads blog, ${blog.title.toLowerCase()}`;

  return (
    <div className="pt-32 pb-24">
      <MetaSEO title={seoTitle} description={seoDesc} keywords={seoKeywords} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blogs" className="inline-flex items-center text-slate-500 hover:text-red-600 font-medium mb-12 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </Link>

        <article className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <span className="bg-red-50 text-red-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
                {blog.category}
              </span>
              <h1 className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight mb-8">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-slate-400 font-bold uppercase tracking-widest text-xs">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {blog.date}
                </div>
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Viewads Editorial Team
                </div>
              </div>
            </div>

            <div className="aspect-[16/9] rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg text-slate-600 max-w-none space-y-8">
              {blog.content?.map((paragraph, index) => (
                <p key={index} className="text-xl leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="font-bold text-slate-900">Share this article:</span>
                <div className="flex space-x-2">
                   <button className="w-10 h-10 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                     <Share2 className="w-4 h-4" />
                   </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-12">
            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white sticky top-32">
              <h3 className="text-2xl font-black mb-6">Need Growth Like This?</h3>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Our strategies aren't just for reading—we implement these results-driven solutions for businesses globally.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-red-500">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-bold">{AGENCY_DETAILS.phone}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-red-500">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-bold">{AGENCY_DETAILS.email}</span>
                </div>
              </div>
              <Link 
                to="/contact" 
                className="block w-full text-center bg-red-600 py-4 rounded-xl font-black hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
              >
                Let's Talk Project
              </Link>
            </div>

            <div className="bg-red-50 p-10 rounded-[2.5rem] border border-red-100">
              <h3 className="text-xl font-black text-red-900 mb-6">Explore Services</h3>
              <div className="space-y-4">
                <Link to="/services/web-design" className="flex items-center justify-between text-red-700 font-bold hover:translate-x-1 transition-transform group">
                   Web Development
                   <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link to="/services/seo" className="flex items-center justify-between text-red-700 font-bold hover:translate-x-1 transition-transform group">
                   SEO Services
                   <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link to="/services/social-media-marketing" className="flex items-center justify-between text-red-700 font-bold hover:translate-x-1 transition-transform group">
                   Social Media Marketing
                   <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetail;
