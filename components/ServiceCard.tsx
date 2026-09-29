
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceInfo } from '../types';

interface Props {
  service: ServiceInfo;
  variant?: 'compact' | 'full';
  link?: string;
}

const ServiceCard: React.FC<Props> = ({ service, variant = 'compact', link }) => {
  const targetLink = link || `/services/${service.id}`;
  
  return (
    <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 hover:scale-[1.02] flex flex-col h-full">
      <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-red-600 transition-colors">
        {service.title}
      </h3>
      <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
        {service.description}
      </p>
      
      {variant === 'full' && (
        <ul className="mb-8 space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center text-sm text-slate-500">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}

      <Link 
        to={targetLink}
        className="inline-flex items-center text-sm font-bold text-red-600 group-hover:translate-x-1 transition-transform"
      >
        Learn More <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
};

export default ServiceCard;
