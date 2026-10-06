
import React from 'react';
import { 
  Globe, 
  Server, 
  BarChart3, 
  Search, 
  Palette, 
  ShieldCheck, 
  Clock, 
  Users, 
  BadgeIndianRupee, 
  Zap,
  Share2,
  Building2,
  Stethoscope,
  GraduationCap,
  ShoppingCart,
  Plane,
  Briefcase,
  Rocket,
  Factory,
  Store
} from 'lucide-react';
import { ServiceInfo } from './types';

export const AGENCY_DETAILS = {
  name: 'Viewads',
  phone: '+91 9010190919',
  email: 'support@viewads.in',
  locations: ['India', 'USA', 'UK'],
  address: 'Serving India, USA & UK'
};

export const METADATA = {
  home: {
    title: "Viewads | Best Digital Marketing & Web Development Agency 2025",
    description: "Viewads is a top-rated results-driven digital agency. We specialize in high-conversion web development, SEO, and creative digital marketing solutions for businesses in India, USA, and UK. Scale your ROI today.",
    keywords: "best digital marketing agency, web development company 2025, professional SEO services, website design company India, digital solutions for small business, Viewads digital marketing, responsive web design agency, high ROI marketing, lead generation agency USA, UK digital transformation, custom software development"
  },
  about: {
    title: "About Viewads | Leading Digital Growth & Strategy Partner",
    description: "Discover Viewads - your global partner for digital excellence. With over 5 years of experience, we help startups and enterprises thrive in the digital landscape through innovation and data-driven strategies.",
    keywords: "about viewads, digital marketing company profile, expert web developers, digital growth partner, company mission and vision, professional digital solutions, digital agency India, USA marketing experts, UK web services team"
  },
  services: {
    title: "Professional Digital Services | Web Design, SEO & SMM - Viewads",
    description: "Comprehensive digital solutions tailored to your business: Custom Web Design, Google Search Optimization, Social Media Growth, and Secure Hosting. Explore our results-oriented service catalog.",
    keywords: "web design services, digital marketing catalog, professional SEO strategy, social media management, enterprise website hosting, graphic design solutions, PPC advertising, ecommerce web development, website maintenance plans"
  },
  smm: {
    title: "Social Media Marketing Services | Viral Growth Strategies - Viewads",
    description: "Master social media with Viewads. Professional SMM services for Facebook, Instagram, LinkedIn, and Twitter. Drive engagement, build brand loyalty, and skyrocket your sales through targeted ads.",
    keywords: "social media marketing SMM, Facebook ads agency, Instagram growth services, LinkedIn B2B marketing, social media content strategy, paid social advertising, brand engagement agency, social media ROI"
  },
  industries: {
    title: "Industries We Serve | Industry-Specific Digital Growth - Viewads",
    description: "Customized digital marketing and web solutions for Real Estate, Healthcare, Education, E-commerce, and more. See how we drive success in your specific business niche.",
    keywords: "real estate digital marketing, healthcare SEO services, ecommerce growth solutions, education marketing agency, digital marketing for startups, travel agency web design, manufacturing SEO, retail marketing strategies"
  },
  locations: {
    title: "Global Reach | Digital Marketing & Web Design Locations - Viewads",
    description: "Viewads serves premium digital solutions globally. Explore our localized marketing services across major cities in India, the United States, and the United Kingdom.",
    keywords: "digital marketing Hyderabad, web design Bangalore, SEO services London, digital agency New York, Texas marketing company, California web development, international digital solutions, global SEO experts"
  },
  blogs: {
    title: "Digital Marketing Blog | SEO, Web Design & AI Trends - Viewads",
    description: "Stay ahead with the latest digital marketing insights. Expert tips on SEO 2025, AI in marketing, web design trends, and business growth strategies from the Viewads team.",
    keywords: "digital marketing blog, SEO tips 2025, web design trends, AI marketing insights, Viewads news, digital business updates, marketing strategy articles"
  },
  contact: {
    title: "Get a Free Quote | Contact Viewads Digital Experts",
    description: "Ready to scale your business? Contact Viewads for a free digital audit and consultation. Professional support for web development, SEO, and SMM just a click away.",
    keywords: "contact viewads, hire digital agency, free SEO audit, website development quote, digital marketing consultation, business growth inquiry, hire web developers India, contact marketing experts"
  }
};

export const SERVICES: ServiceInfo[] = [
  {
    id: 'web-design',
    title: 'Website Design & Development',
    description: 'Modern, responsive, and high-performing websites built to convert.',
    icon: <Globe className="w-6 h-6" />,
    features: ['Business Websites', 'WordPress Development', 'Landing Pages', 'Website Redesign', 'Mobile-Friendly Design'],
    fullDescription: 'We design and develop modern, responsive, and high-performing websites that reflect your brand identity and convert visitors into customers. Our websites are fast, secure, SEO-friendly, and built to scale as your business grows.',
    faqs: [
      { question: "How long does it take to design a business website?", answer: "A typical business website takes 2-4 weeks from initial concept to launch, depending on the number of pages and features required." },
      { question: "Will my website be mobile-friendly?", answer: "Yes, every website we build is fully responsive, ensuring it looks and works perfectly on desktops, tablets, and smartphones." },
      { question: "Can you redesign my existing website?", answer: "Absolutely. We specialize in modernizing outdated websites to improve user experience, performance, and conversion rates." }
    ]
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Rank higher on Google and attract sustainable organic traffic.',
    icon: <Search className="w-6 h-6" />,
    features: ['Keyword Research', 'On-Page SEO', 'Off-Page SEO', 'Local SEO', 'SEO Audits'],
    fullDescription: 'Rank higher on Google and attract organic traffic with our ethical and effective SEO strategies. We help your business get discovered by customers who are actively searching for your services.',
    faqs: [
      { question: "How long does it take to see SEO results?", answer: "SEO is a long-term strategy. While some improvements can be seen within 2-3 months, significant ranking growth usually takes 6-12 months of consistent effort." },
      { question: "Do you guarantee #1 rankings?", answer: "No ethical agency can guarantee a specific spot on Google due to algorithm changes, but we have a proven track record of getting clients to the first page for competitive keywords." },
      { question: "What is Local SEO?", answer: "Local SEO focuses on optimizing your presence for location-based searches, which is critical for businesses that serve specific geographical areas like cities or neighborhoods." }
    ]
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing (SMM)',
    description: 'Grow your brand and engage your audience on major social platforms.',
    icon: <Share2 className="w-6 h-6" />,
    features: ['Facebook Marketing', 'Instagram Marketing', 'LinkedIn Marketing', 'Content Creation & Scheduling', 'Paid Social Media Ads'],
    fullDescription: 'Viewads offers professional Social Media Marketing services designed to help businesses build brand awareness, engage customers, and generate leads across major social platforms. We create data-driven strategies that turn followers into customers and social engagement into business growth.',
    faqs: [
      { question: "Which social platforms should my business be on?", answer: "This depends on your target audience. We generally recommend Facebook and Instagram for B2C businesses, while LinkedIn is essential for B2B brands." },
      { question: "Do you handle social media advertising?", answer: "Yes, we manage end-to-end paid social campaigns including audience targeting, creative design, and performance tracking to ensure maximum ROI." },
      { question: "How often will you post on our accounts?", answer: "Our posting frequency is customized based on your goals, typically ranging from 3 to 5 high-quality posts per week per platform." }
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing & Paid Advertising',
    description: 'ROI-driven strategies to reach the right audience at the right time.',
    icon: <BarChart3 className="w-6 h-6" />,
    features: ['Google Ads (PPC)', 'Lead Generation Funnels', 'Performance Marketing', 'Email Marketing', 'Conversion Optimization'],
    fullDescription: 'Our digital marketing strategies help your brand reach the right audience at the right time. We focus on ROI-driven strategies, including paid advertising and lead generation campaigns that deliver measurable business growth.',
    faqs: [
      { question: "What is PPC advertising?", answer: "PPC (Pay-Per-Click) is a model where you pay for each click on your ad. It's the fastest way to get your business in front of customers on search engines like Google." },
      { question: "What budget do I need for Google Ads?", answer: "Budgets vary based on industry and competition. We recommend starting with a minimum daily budget that allows for enough data collection to optimize the campaign effectively." },
      { question: "How do you track leads?", answer: "We implement advanced tracking using Google Tag Manager and GA4 to monitor calls, form submissions, and other critical conversions." }
    ]
  },
  {
    id: 'hosting',
    title: 'Website Hosting & Maintenance',
    description: 'Ensure your website runs smoothly 24/7 with reliable infrastructure.',
    icon: <Server className="w-6 h-6" />,
    features: ['Secure Hosting', 'Regular Backups', 'Performance Optimization', 'Security Updates', 'Technical Support'],
    fullDescription: 'Reliable hosting and continuous maintenance are essential for a successful website. Viewads ensures your website runs smoothly 24/7. We take care of your website so you can focus on your business.',
    faqs: [
      { question: "Why do I need a maintenance plan?", answer: "Websites need regular security updates and backups to prevent hacking and data loss. Our maintenance plan ensures your site stays fast and secure." },
      { question: "Is your hosting secure?", answer: "Yes, we use high-performance servers with SSL encryption, firewalls, and 24/7 monitoring to protect your digital assets." },
      { question: "What happens if my site goes down?", answer: "Our team is notified immediately by our monitoring systems and works to restore service as quickly as possible, though our uptime is over 99.9%." }
    ]
  },
  {
    id: 'graphic-design',
    title: 'Graphic & Creative Designing',
    description: 'Creative visuals that communicate your brand message clearly.',
    icon: <Palette className="w-6 h-6" />,
    features: ['Social Media Creatives', 'Business Posters', 'Promotional Banners', 'Branding Materials', 'Logo Design'],
    fullDescription: 'Creative visuals play a key role in building brand identity. Our designs communicate your message clearly and professionally. Every design is crafted to align with your brand and marketing goals.',
    faqs: [
      { question: "Do you offer logo design services?", answer: "Yes, we create unique, memorable logos that reflect your brand identity and work across all digital and print mediums." },
      { question: "What files will I receive for my designs?", answer: "You will receive high-resolution files in multiple formats (PNG, JPG, PDF) and source files if requested for branding projects." },
      { question: "Can you design social media templates?", answer: "Yes, we can provide customized Canva or Photoshop templates that allow your team to maintain a consistent brand look easily." }
    ]
  }
];

export const INDUSTRIES = [
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'We help real estate developers, agents, and consultants generate high-quality property leads through strategic digital marketing.',
    icon: <Building2 className="w-6 h-6" />,
    covered: ['Real Estate Developers', 'Agents', 'Property Consultants'],
    details: ['Real Estate Website Development', 'SEO for Property Projects', 'Lead Generation Landing Pages', 'Social Media Marketing']
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Our healthcare digital solutions focus on trust-building, visibility, and patient engagement.',
    icon: <Stethoscope className="w-6 h-6" />,
    covered: ['Hospitals', 'Clinics', 'Diagnostic Centers', 'Dental & Wellness Clinics'],
    details: ['Healthcare Websites', 'Local SEO', 'Appointment Lead Generation', 'Social Media Marketing']
  },
  {
    id: 'education',
    title: 'Education & Coaching',
    description: 'Supporting educational institutions and coaching centers with digital strategies that attract students and build credibility.',
    icon: <GraduationCap className="w-6 h-6" />,
    covered: ['Coaching Institutes', 'Online Training Platforms', 'Schools & Colleges'],
    details: ['Educational Websites', 'SEO & Lead Generation', 'Social Media Promotions']
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'We help e-commerce brands improve traffic, increase conversions, and scale sales with robust digital storefronts.',
    icon: <ShoppingCart className="w-6 h-6" />,
    details: ['E-Commerce Website Development', 'SEO for Online Stores', 'Social Media Advertising', 'Product Promotions']
  },
  {
    id: 'travel',
    title: 'Travel & Tourism',
    description: 'Our digital marketing solutions help travel businesses improve online visibility and bookings across the globe.',
    icon: <Plane className="w-6 h-6" />,
    covered: ['Travel Agencies', 'Tour Operators', 'Cab & Travel Services'],
    details: ['Travel Websites', 'SEO & Paid Campaigns', 'Social Media Marketing']
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: 'We help service-based businesses build authority and generate quality leads in competitive professional landscapes.',
    icon: <Briefcase className="w-6 h-6" />,
    covered: ['IT Services', 'Consultants', 'Financial & Legal Firms'],
    details: ['Corporate Websites', 'SEO & Lead Generation', 'Branding & Online Presence']
  },
  {
    id: 'startups',
    title: 'Startups & Small Businesses',
    description: 'We help startups and small businesses establish a strong digital foundation and grow efficiently from day one.',
    icon: <Rocket className="w-6 h-6" />,
    details: ['Business Websites', 'Digital Branding', 'SEO & Social Media Marketing', 'Lead Generation']
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrial',
    description: 'We provide digital solutions for manufacturing and industrial businesses focused on B2B growth and market expansion.',
    icon: <Factory className="w-6 h-6" />,
    details: ['Corporate Websites', 'SEO for Industrial Markets', 'Lead Generation Campaigns']
  },
  {
    id: 'retail',
    title: 'Retail & Local Businesses',
    description: 'Our local-focused digital strategies help retail and service businesses attract nearby customers through hyper-local targeting.',
    icon: <Store className="w-6 h-6" />,
    covered: ['Retail Stores', 'Restaurants', 'Salons & Service Businesses'],
    details: ['Local SEO', 'Google Business Optimization', 'Social Media Marketing']
  }
];

export const NEWS_ITEMS = [
  {
    id: 'how-ai-is-transforming-digital-marketing-2025',
    title: 'How AI is Transforming Digital Marketing in 2025',
    excerpt: 'Explore the latest trends in artificial intelligence and how they are reshaping the way businesses connect with customers globally.',
    date: 'May 15, 2025',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    category: 'Digital Trends',
    content: [
      "Artificial Intelligence (AI) has moved beyond a buzzword into a fundamental component of the digital marketing landscape. As we approach 2025, the integration of AI tools is no longer optional for businesses aiming to maintain a competitive edge.",
      "One of the most significant shifts is in personalized customer experiences. AI-driven data analysis allows brands to predict consumer behavior with unprecedented accuracy, enabling hyper-targeted ad campaigns that resonate on a personal level.",
      "Generative AI is also revolutionizing content creation. From automated blog posts to dynamic video ads, the speed at which high-quality content can be produced has increased tenfold. However, the human element remains crucial for strategic oversight and brand authenticity.",
      "Search Engine Optimization is another area seeing massive changes. With AI-led search engines like SGE, marketers must focus more on user intent and conversational queries rather than just keyword density.",
      "At Viewads, we are already helping our clients integrate these cutting-edge technologies into their marketing funnels to drive better ROI and sustainable growth."
    ]
  },
  {
    id: '10-essential-seo-tips-small-businesses',
    title: '10 Essential SEO Tips for Small Businesses',
    excerpt: 'Boost your local search rankings and attract more customers with these easy-to-implement SEO strategies for sustainable organic growth.',
    date: 'May 10, 2025',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    category: 'SEO',
    content: [
      "For small businesses, appearing on the first page of Google can be the difference between thriving and barely surviving. But with the complex world of SEO constantly changing, where should you start?",
      "1. Focus on Local SEO: Ensure your Google Business Profile is fully optimized and your NAP (Name, Address, Phone) details are consistent across the web.",
      "2. Mobile Optimization: More than 60% of searches happen on mobile. If your site isn't fast and responsive, you're losing customers.",
      "3. Long-tail Keywords: Don't just target 'Plumber'. Target 'emergency plumber in Hyderabad'. These are easier to rank for and attract more qualified leads.",
      "4. Content is King: Regularly updating your site with helpful, industry-relevant blogs tells Google that your site is active and authoritative.",
      "5. Backlink Building: Focus on getting quality links from local business directories and industry partners.",
      "Conclusion: SEO is a marathon, not a sprint. Consistency and adherence to best practices will eventually yield the organic traffic your business needs."
    ]
  },
  {
    id: 'importance-of-mobile-first-website-design',
    title: 'The Importance of Mobile-First Website Design',
    excerpt: 'Why having a responsive website is no longer optional in today’s mobile-driven world and how it impacts your conversion rates.',
    date: 'May 05, 2025',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    category: 'Web Design',
    content: [
      "In the modern era, the first point of contact between a brand and a consumer is often a smartphone screen. If that experience is frustrating, slow, or difficult to navigate, that customer is gone forever.",
      "Mobile-first design is a strategy where you start the design process from the smallest screen and work your way up. This ensures that the most essential elements of your site are prioritized and perform perfectly on mobile devices.",
      "Google now uses mobile-first indexing, meaning it primarily uses the mobile version of your content for indexing and ranking. A site that looks great on desktop but fails on mobile will likely suffer in search results.",
      "Key elements of mobile-first design include large, tappable buttons, legible font sizes without zooming, and lightning-fast load times. At Viewads, every website we build is developed with a mobile-first philosophy to ensure our clients never miss a mobile opportunity."
    ]
  }
];

export const CITY_MARKETING_CONTENT: Record<string, string> = {
  hyderabad: "Looking for the best digital marketing company in Hyderabad? Viewads offers premium SEO, web development, and social media marketing in Hyderabad to help local businesses dominate search results and increase leads.",
  bangalore: "Viewads is a top-tier digital marketing agency in Bangalore. We specialize in high-tech web solutions and innovative digital marketing strategies for Bangalore's thriving startup ecosystem.",
  chennai: "Scale your brand with the leading digital marketing company in Chennai. Our Chennai-based digital team provides expert SEO and lead generation services for local and global businesses.",
  mumbai: "Viewads provides world-class digital marketing in Mumbai. From finance to real estate, we are the go-to agency in Mumbai for results-oriented web design and performance marketing.",
  delhi: "Get expert digital marketing services in Delhi from Viewads. We help businesses in Delhi and NCR improve their online presence through strategic SEO and custom website development.",
  pune: "Maximize your online reach with the best digital marketing company in Pune. Viewads offers specialized SEO and social media solutions for Pune's corporate and retail sectors.",
  kolkata: "Viewads is a premier digital marketing agency in Kolkata. We help traditional and modern businesses in Kolkata transition to digital dominance with expert web solutions.",
  ahmedabad: "Dominant digital marketing services in Ahmedabad. Viewads helps businesses in Gujarat reach international markets through superior SEO and localized marketing strategies.",
  jaipur: "Build a strong online brand with Viewads - the leading digital marketing company in Jaipur. We offer custom web design and lead generation for Jaipur's growing businesses.",
  kochi: "Viewads provides specialized digital marketing in Kochi. We help Kochi-based enterprises and tourism brands improve their global visibility through expert digital strategies.",
  coimbatore: "Professional digital marketing in Coimbatore. Viewads helps industrial and service businesses in Coimbatore achieve consistent growth through smart web solutions.",
  trivandrum: "Leading digital marketing company in Trivandrum. We provide end-to-end digital services, from web development to SEO, for Trivandrum's business community.",
  vijayawada: "Viewads offers top-rated digital marketing in Vijayawada. Grow your local business with our expert SEO and website design services tailored for Vijayawada.",
  guntur: "Get a professional edge with digital marketing in Guntur. Viewads helps Guntur businesses reach more customers through targeted digital advertising.",
  warangal: "Viewads is the go-to digital marketing agency in Warangal. We provide affordable web development and SEO services for Warangal's entrepreneurs.",
  karimnagar: "Grow your online presence with expert digital marketing in Karimnagar. Viewads offers results-driven marketing for businesses in Karimnagar.",
  nizamabad: "Viewads provides professional digital services in Nizamabad. We specialize in building responsive websites and driving traffic for local businesses.",
  khammam: "Scale your business with the best digital marketing in Khammam. Viewads offers custom digital strategies for Khammam-based businesses.",
  vizag: "Viewads provides strategic digital marketing in Visakhapatnam (Vizag). We help Vizag brands grow faster through expert SEO and lead generation.",
  tirupati: "Professional web and digital solutions in Tirupati. Viewads helps Tirupati businesses establish a strong online identity.",
  nellore: "Viewads offers affordable digital marketing in Nellore. We build high-converting websites and manage social media for Nellore businesses.",
  kurnool: "Scale your online reach with the best digital marketing in Kurnool. Viewads delivers specialized web and SEO solutions for Kurnool.",
  // USA Cities
  usa: "Viewads is a premier digital marketing company in USA. We provide elite web development and SEO services to help American businesses compete on a global scale.",
  "new-york": "Dominant digital marketing in New York. Viewads helps NY-based brands stand out in the world's most competitive market with high-impact digital strategies.",
  texas: "Viewads offers professional digital marketing in Texas. From Austin to Dallas, we help Texas businesses grow with custom web design and SEO.",
  california: "Viewads is a top digital marketing agency in California. We provide cutting-edge technology and marketing solutions for California's tech and creative industries.",
  florida: "Scale your business with digital marketing in Florida. Viewads provides expert lead generation and web development for Florida enterprises.",
  chicago: "Leading digital marketing services in Chicago. Viewads helps Chicago businesses improve visibility and drive sales through performance marketing.",
  "los-angeles": "Viewads provides creative digital marketing in Los Angeles. We help LA brands build fame and fortune through expert social media and web design.",
  // UK Cities
  uk: "Viewads is a leading digital marketing company in UK. We provide high-quality web design and SEO services across the United Kingdom for sustainable business growth.",
  london: "Elite digital marketing in London. Viewads helps London-based companies achieve international success through strategic digital solutions.",
  manchester: "Viewads offers professional digital marketing in Manchester. We help Northern Powerhouse businesses grow with expert web and SEO services.",
  birmingham: "Leading digital marketing services in Birmingham. Viewads provides results-driven marketing solutions for Birmingham's diverse business landscape.",
  leeds: "Viewads provides expert digital marketing in Leeds. We help Leeds-based brands dominate their niche with superior digital strategies.",
  bristol: "Professional digital solutions in Bristol. Viewads helps Bristol businesses reach more customers with modern web design and SEO.",
  nottingham: "Viewads offers effective digital marketing in Nottingham. Grow your brand with our expert social media and search optimization services."
};

export const CITY_FAQS: Record<string, { question: string; answer: string }[]> = {
  default: [
    { question: "Why should I hire a local digital marketing agency?", answer: "A local agency understands the specific market dynamics, customer behavior, and local competition in your city, allowing for more effective and targeted strategies." },
    { question: "Do you offer physical meetings?", answer: "While we handle most communications digitally for efficiency, we are available for physical meetings in major cities upon prior appointment." },
    { question: "How do you handle project communication?", answer: "We use a combination of WhatsApp, Email, and Zoom calls to keep you updated on project progress and campaign performance." }
  ],
  usa: [
    { question: "Do you understand the US market behavior?", answer: "Yes, we have extensive experience serving US-based clients and understand the cultural and market nuances required for successful campaigns in the USA." },
    { question: "How do you handle time zone differences?", answer: "Our team operates with flexible hours to ensure we overlap with US business hours for smooth communication and meetings." },
    { question: "What payment methods do you accept?", answer: "We accept international transfers and major credit cards via secure payment gateways for our US clients." }
  ],
  uk: [
    { question: "Are your SEO strategies UK-focused?", answer: "Absolutely. We focus on UK search behavior, local terminology, and regional search patterns to ensure your business ranks where it matters most in the UK." },
    { question: "Do you provide support during UK business hours?", answer: "Yes, our support team is available during UK standard business hours to assist with any technical or marketing needs." },
    { question: "Can you help with GDPR compliance for my website?", answer: "Yes, we ensure that all websites we build for our UK clients adhere to GDPR standards for data privacy and security." }
  ]
};

export const INDUSTRIES_SERVED_MAP: Record<string, string[]> = {
  usa: ['Real Estate', 'Healthcare', 'E-Commerce', 'Education & Coaching', 'Professional Services', 'Local & Small Businesses'],
  uk: ['Real Estate', 'Healthcare', 'Education & Training', 'E-Commerce', 'Service-Based Businesses', 'Startups & SMEs'],
  "new-york": ['Real Estate', 'Finance', 'E-Commerce', 'Healthcare'],
  texas: ['Local Services', 'Energy', 'Real Estate', 'Tech Startups'],
  california: ['Technology', 'Entertainment', 'Healthcare', 'Real Estate'],
  london: ['Professional Services', 'Finance', 'Tech Startups', 'E-Commerce']
};

export const WHY_CHOOSE_US = [
  {
    title: 'Experienced Digital Professionals',
    icon: <Users className="w-6 h-6 text-red-600" />
  },
  {
    title: 'Transparent & Affordable Pricing',
    icon: <BadgeIndianRupee className="w-6 h-6 text-red-600" />
  },
  {
    title: 'Customized Solutions',
    icon: <Zap className="w-6 h-6 text-red-600" />
  },
  {
    title: 'Timely Project Delivery',
    icon: <Clock className="w-6 h-6 text-red-600" />
  },
  {
    title: 'Dedicated Support Team',
    icon: <ShieldCheck className="w-6 h-6 text-red-600" />
  }
];
