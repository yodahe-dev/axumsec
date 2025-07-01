"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUp, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Bug, 
  FileText, 
  Globe, 
  BookOpen,
  User,
  Layers,
  Home,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 relative overflow-hidden">
      {/* Floating elements */}
      <motion.div 
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-red-900/10 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div 
        className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full bg-blue-900/10 blur-3xl"
        animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"
        >
          {/* Company Info */}
          <motion.div variants={item} className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-red-600 to-red-800 p-2 rounded-xl mr-3">
                <Shield className="text-white w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                <span>AXUM</span> <span className="text-red-500">SEC</span>
              </h2>
            </div>
            
            <p className="mb-6 text-gray-400 italic">
              &ldquo;Securing the Digital World, One Byte at a Time&rdquo;
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 mr-3" />
                <span>1234 Cyber Street, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-red-500 mr-3" />
                <span>+123-456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-red-500 mr-3" />
                <span>support@axumsec.com</span>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '/home', icon: <Home className="w-4 h-4 mr-2" /> },
                { label: 'Why AXUM SEC', href: '/why', icon: <Shield className="w-4 h-4 mr-2" /> },
                { label: 'Product & Services', href: '/services', icon: <Layers className="w-4 h-4 mr-2" /> },
                { label: 'AXNESS', href: '/axness', icon: <BookOpen className="w-4 h-4 mr-2" /> },
                { label: 'Solutions', href: '/solutions', icon: <Globe className="w-4 h-4 mr-2" /> },
                { label: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4 mr-2" /> },
                { label: 'Contact Us', href: '/contact', icon: <Phone className="w-4 h-4 mr-2" /> },
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                    onMouseEnter={() => setHoveredItem(`link-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800">Services</h3>
            <ul className="space-y-3">
              {[
                'Penetration Testing',
                'Bug Bounty Program',
                'Vulnerability Disclosure',
                'Cybersecurity Awareness Training',
                'Attack Surface Management',
                '24/7 Support',
                'Vulnerability Analysis'
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                    onMouseEnter={() => setHoveredItem(`service-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-red-500" />
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* For Hunters */}
          <motion.div variants={item}>
            <h3 className="text-xl font-bold text-white mb-6 pb-2 border-b border-gray-800">For Hunters</h3>
            <ul className="space-y-3">
              {[
                { label: 'Join AXUM Crowd', href: '/join', icon: <User className="w-4 h-4 mr-2" /> },
                { label: 'Careers', href: '/careers', icon: <User className="w-4 h-4 mr-2" /> },
                { label: 'Request Pen-testers', href: '/request', icon: <Bug className="w-4 h-4 mr-2" /> },
                { label: 'Hunter Programs', href: '/programs', icon: <Globe className="w-4 h-4 mr-2" /> },
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={item.href} 
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                    onMouseEnter={() => setHoveredItem(`hunter-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h3 className="text-lg font-bold text-white mb-4">Stay Updated</h3>
              <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 pr-12"
                    required
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                {submitted && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-green-400 text-sm"
                  >
                    Subscribed successfully!
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-800 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-500 text-sm">
                © 2025 AXUM SEC. All Rights Reserved.
              </p>
              <div className="flex space-x-4 mt-2">
                {['Privacy Policy', 'Terms of Service', 'Cookies Policy'].map((item, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex space-x-4">
                {[
                  { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: '#' },
                  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: '#' },
                  { icon: <Facebook className="w-5 h-5" />, label: 'Facebook', href: '#' },
                  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: '#' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-gray-500 hover:text-white"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
              
              <motion.button
                onClick={scrollToTop}
                className="ml-4 p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;