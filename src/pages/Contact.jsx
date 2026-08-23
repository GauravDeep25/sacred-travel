import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Mail, Globe } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import EnquiryForm from '../components/home/EnquiryForm';

export default function Contact() {
  return (
    <div className="bg-base min-h-screen">
      <section className="relative h-[55vh] flex items-end overflow-hidden">
        <img 
          src="./src/assets/hero-temple-south.jpg" 
          className="absolute inset-0 w-full h-full object-cover" 
          alt="Contact" 
        />
        <div className="absolute inset-0 bg-dark/40" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-16">
          <span className="eyebrow text-accent!">Contact</span>
          <h1 className="mt-4 text-white text-5xl md:text-7xl font-serif">
            Let's plan your <br />
            <span className="italic text-accent">crossing</span>
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-[1fr_380px] gap-20">
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
        >
          <EnquiryForm />
        </motion.div>

        <div className="lg:pt-14">
          <aside className="bg-white p-10 border border-dark/5 rounded-sm">
            <h3 className="font-serif text-2xl text-dark mb-6">Reach us directly</h3>
            <div className="space-y-6 text-sm">
              <a href={`tel:${siteConfig.company.whatsapp}`} className="flex items-center gap-4 hover:text-primary transition-colors">
                <Phone size={16} className="text-primary" /> {siteConfig.company.whatsapp}
              </a>
              <a href={`https://wa.me/${siteConfig.company.whatsapp}`} className="flex items-center gap-4 hover:text-primary transition-colors">
                <MessageCircle size={16} className="text-primary" /> WhatsApp
              </a>
              <a href={`mailto:${siteConfig.company.email}`} className="flex items-center gap-4 hover:text-primary transition-colors">
                <Mail size={16} className="text-primary" /> {siteConfig.company.email}
              </a>
              <div className="flex items-center gap-4 text-charcoal/50">
                <Globe size={16} className="text-primary" /> {siteConfig.company.address}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}