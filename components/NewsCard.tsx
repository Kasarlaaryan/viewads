
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  item: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    image: string;
    category: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] flex flex-col h-full">
      {/* Image Container with inner zoom */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-6 left-6">
          <span className="bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg shadow-red-600/20">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center text-slate-400 text-xs font-bold uppercase tracking-widest mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          {item.date}
        </div>
        <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-red-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
          {item.excerpt}
        </p>
        <Link 
          to={`/blogs/${item.id}`}
          className="inline-flex items-center text-red-600 font-bold text-sm group-hover:translate-x-2 transition-transform cursor-pointer"
        >
          Read Article <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
