"use client";
import Image from 'next/image';
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
          <motion.div variants={item} className="">
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
                <span>Cyber Street, Addis Ababa, Ethiopia</span>
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
                { label: 'Home', href: '/', icon: <Home className="w-4 h-4 mr-2" /> },
                { label: 'Why AXUM SEC', href: '/why-axum-sec', icon: <Shield className="w-4 h-4 mr-2" /> },
                { label: 'Product & Services', href: '/products-services', icon: <Layers className="w-4 h-4 mr-2" /> },
                { label: 'AXNESS', href: '/axness', icon: <BookOpen className="w-4 h-4 mr-2" /> },
                { label: 'Solutions for Industries', href: '/solutions', icon: <Globe className="w-4 h-4 mr-2" /> },
                { label: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4 mr-2" /> },
                { label: 'Contact Us', href: '/contact', icon: <Phone className="w-4 h-4 mr-2" /> },
                { label: 'Get Started', href: '/get-started', icon: <ArrowRight className="w-4 h-4 mr-2" /> },
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href} 
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
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
                { label: 'Penetration Testing', href: '/services/penetration-testing' },
                { label: 'Bug Bounty Program', href: '/services/bug-bounty' },
                { label: 'Vulnerability Disclosure', href: '/services/vulnerability-disclosure' },
                { label: 'Cybersecurity Awareness Training', href: '/axness' },
                { label: 'Attack Surface Management', href: '/services/attack-surface-management' },
                { label: '24/7 Support', href: '/services/24-7-support' },
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={service.href} 
                    className="text-gray-400 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-red-500" />
                    {service.label}
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
                { label: 'Join AXUM Crowd', href: '/join-axum-crowd', icon: <User className="w-4 h-4 mr-2" /> },
                { label: 'Be AXUM SEC Team', href: '/careers', icon: <User className="w-4 h-4 mr-2" /> },
                { label: 'Request Pen-Testers', href: '/request-pen-testers', icon: <Bug className="w-4 h-4 mr-2" /> },
                { label: 'Hunter Programs', href: '/hunter-programs', icon: <Globe className="w-4 h-4 mr-2" /> },
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={item.href} 
                    className="flex items-center text-gray-400 hover:text-white transition-colors"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Legal & Newsletter */}
          <motion.div variants={item}>
            {/* Legal Section */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-800">Legal</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Privacy Policy', href: '/privacy-policy' },
                  { label: 'Terms of Service', href: '/terms' },
                  { label: 'Cookies Policy', href: '/cookies' },
                ].map((legal, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      href={legal.href} 
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <ArrowRight className="w-4 h-4 mr-2 text-red-500" />
                      {legal.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <div className="border-t border-gray-800 pt-8 mt-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-500 text-sm">
                © 2025 AXUM SEC. All Rights Reserved.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Website design and development by [Design Company Name], powered by [Technology/Platform].
              </p>
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