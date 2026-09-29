
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, HelpCircle } from 'lucide-react';
import { AGENCY_DETAILS, METADATA } from '../constants';
import MetaSEO from '../components/MetaSEO';
import IndustriesSection from '../components/IndustriesSection';
import FAQItem from '../components/FAQItem';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Web Development',
    message: ''
  });

  const faqs = [
    {
      question: "What digital services does Viewads offer?",
      answer: "We provide comprehensive digital solutions including custom Website Design & Development, Digital Marketing, Search Engine Optimization (SEO), Social Media Marketing (SMM), Reliable Hosting & Maintenance, and Creative Graphic Designing."
    },
    {
      question: "How long does a typical web project take?",
      answer: "The timeline depends on the project's complexity. A standard business website usually takes 2-4 weeks, while larger e-commerce platforms or custom applications may take 6-10 weeks from concept to launch."
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer: "Yes! We believe in long-term partnerships. We offer dedicated website maintenance packages that include security updates, regular backups, and technical support to ensure your site runs smoothly 24/7."
    },
    {
      question: "How does your pricing work?",
      answer: "We offer transparent and affordable pricing. After an initial consultation to understand your requirements, we provide a detailed custom quote based on the specific services and features your business needs to grow."
    },
    {
      question: "Can you work with businesses outside of India?",
      answer: "Absolutely. We serve a global clientele, including businesses in the USA and UK. Our remote-friendly process ensures seamless communication and project delivery regardless of your location."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const recipientEmail = "Viewads.in@gmail.com";
    const whatsappNumber = "919010190919";
    const subject = `New Inquiry from ${formData.name} - Viewads Website`;
    
    // Constructing the message body
    const messageBody = `
Viewads Website Inquiry:
---------------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}
Message: ${formData.message}
---------------------------
    `.trim();

    // 1. Send via Email (mailto)
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;
    
    // 2. Send via WhatsApp (Click-to-chat)
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageBody)}`;

    // User feedback
    alert(`Thank you ${formData.name}! We are now opening WhatsApp and your email client to send your inquiry directly to our team.`);

    // Triggering both actions
    window.open(whatsappLink, '_blank');
    window.location.href = mailtoLink;
  };

  return (
    <div className="pt-32 pb-24">
      <MetaSEO 
        title={METADATA.contact.title} 
        description={METADATA.contact.description} 
        keywords={METADATA.contact.keywords} 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6">Contact Viewads</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Ready to grow your business? Let's discuss your project today. No matter your industry, Viewads has the expertise to deliver digital solutions that drive results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-24">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Call Us</div>
                  <a href={`tel:${AGENCY_DETAILS.phone}`} className="text-xl font-bold text-slate-900">{AGENCY_DETAILS.phone}</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-600">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Us</div>
                  <a href={`mailto:${AGENCY_DETAILS.email}`} className="text-xl font-bold text-slate-900">{AGENCY_DETAILS.email}</a>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-8 rounded-3xl border border-green-100">
              <div className="flex items-center space-x-3 text-green-700 font-bold mb-4">
                <MessageCircle className="w-6 h-6" />
                <span>WhatsApp Support</span>
              </div>
              <a 
                href={`https://wa.me/919010190919`} 
                target="_blank" 
                className="block text-center bg-green-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-700 transition-all"
              >
                Chat with Experts
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl">
              <h2 className="text-3xl font-black text-slate-900 mb-8">Tell us about your project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <input 
                      required
                      type="text" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <input 
                      required
                      type="email" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                    <input 
                      required
                      type="tel" 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Service Interested In</label>
                    <select 
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option>Web Development</option>
                      <option>Digital Marketing</option>
                      <option>Social Media Marketing (SMM)</option>
                      <option>SEO Services</option>
                      <option>Graphic Design</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Project Details</label>
                  <textarea 
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
                    placeholder="Tell us a bit about your business goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-red-600 text-white px-8 py-5 rounded-2xl text-lg font-black shadow-xl shadow-red-200 hover:bg-red-700 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <IndustriesSection />

        {/* FAQ Section */}
        <section className="mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-8 justify-center">
              <div className="w-10 h-10 bg-red-50 text-red-600 rounded-xl flex items-center justify-center">
                <HelpCircle className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-black text-slate-900 uppercase">General FAQs</h2>
            </div>
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm p-8 md:p-12">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
