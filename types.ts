// Fix: Added React import to resolve 'Cannot find namespace React' error for React.ReactNode
import React from 'react';

export interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  fullDescription: string;
  faqs?: { question: string; answer: string }[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface LocationData {
  city: string;
  description: string;
}