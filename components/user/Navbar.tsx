"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Shield, 
  Bug, 
  FileText, 
  MessageSquare, 
  Globe, 
  BookOpen,
  User,
  ArrowRight,
  Layers,
  Moon,
  Sun,
  Home
} from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Initialize theme
  useEffect(() => {
    const storedTheme = localStorage.getItem('axum-theme') as 'light' | 'dark' || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(storedTheme);
    
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('axum-theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (activeDropdown && !(e.target as Element).closest(`[data-dropdown="${activeDropdown}"]`)) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

  // Navigation items
  const navItems = [
    {
      label: 'Why Axum SEC',
      href: '#',
      icon: <Shield className="w-4 h-4 mr-2" />,
      dropdown: [
        { label: 'Axum Crowd Sourcing', href: '/why/crowd-sourcing' },
        { label: 'How Axum SEC is Different', href: '/why/different' },
        { label: 'Our Partners', href: '/why/partners' },
      ]
    },
    {
      label: 'Product & Services',
      href: '#',
      icon: <Layers className="w-4 h-4 mr-2" />,
      dropdown: [
        { label: 'PTaaS (Penetration Testing)', href: '/services/ptaas' },
        { label: 'Web Application Pentesting', href: '/services/web-pentesting' },
        { label: 'Mobile Application Pentesting', href: '/services/mobile-pentesting' },
        { label: 'Network Security Pentesting', href: '/services/network-pentesting' },
        { label: 'API Security Pentesting', href: '/services/api-pentesting' },
        { label: 'Source Code Analysis', href: '/services/source-code' },
      ]
    },
    {
      label: 'Solutions',
      href: '#',
      icon: <BookOpen className="w-4 h-4 mr-2" />,
      dropdown: [
        { label: 'Security Companies', href: '/industries/security' },
        { label: 'Financial Services', href: '/industries/financial' },
        { label: 'Healthcare', href: '/industries/healthcare' },
      ]
    },
    {
      label: 'For Companies',
      href: '#',
      icon: <Globe className="w-4 h-4 mr-2" />,
      dropdown: [
        { label: 'Get Penetration Testing', href: '/companies/penetration-testing' },
        { label: 'Start Bug Bounty Program', href: '/companies/bug-bounty' },
        { label: 'Vulnerability Disclosure', href: '/companies/vdp' },
      ]
    },
    {
      label: 'For Hunters',
      href: '#',
      icon: <Bug className="w-4 h-4 mr-2" />,
      dropdown: [
        { label: 'Join Axum Crowd', href: '/hunters/join' },
        { label: 'Careers', href: '/hunters/careers' },
        { label: 'Request Pen-testers', href: '/hunters/request' },
      ]
    },
  ];

  // Top navigation items
  const topNavItems = [
    { label: 'Home', href: '/home', icon: <Home className="w-4 h-4" /> },
    { label: 'Blog', href: '/blog', icon: <FileText className="w-4 h-4" /> },
    { label: 'Contact', href: '/contact', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) setActiveDropdown(null);
  };

  // Toggle dropdowns
  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  // Render dropdown items with animations
  const renderDropdown = (items: { label: string; href: string }[]) => (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      className="absolute left-1/2 transform -translate-x-1/2 mt-3 rounded-xl bg-white dark:bg-gray-900 shadow-2xl border border-gray-200 dark:border-gray-800 z-50 overflow-hidden min-w-[200px]"
      style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="py-2">
        {items.map((item, idx) => (
          <Link 
            key={idx} 
            href={item.href}
            className="flex items-center px-6 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:text-red-500 dark:hover:text-red-400 transition-all duration-200 group"
            onClick={() => setIsOpen(false)}
          >
            <span className="transition-colors">
              {item.label}
            </span>
            <ArrowRight className="ml-auto w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 transition-all duration-300 text-gray-400" />
          </Link>
        ))}
      </div>
    </motion.div>
  );

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-500",
        scrolled ? "bg-white/90 dark:bg-gray-900/95 backdrop-blur-md py-0 border-b border-gray-200 dark:border-gray-800" : "bg-transparent py-0"
      )}
    >
      <div className="">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mr-3">
              <Image 
                src="/logo.png" 
                alt="Axum SEC Logo" 
                width={40} 
                height={40} 
                className="rounded-lg"
              />
              
            </div>
            <span className="font-bold text-2xl tracking-tight">
              <span className="text-gray-900 dark:text-white">AXUM</span> <span className="text-red-600">SEC yodahe</span>
            </span>
          </div>

          {/* Top Nav Items */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              {topNavItems.map((item, index) => (
                <Link key={index} href={item.href}>
                  <button className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 flex items-center h-10 px-3 rounded-lg text-sm group transition-colors">
                    <span className="mr-2 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                </Link>
              ))}
            </div>
            
            {/* Theme Toggle */}
            <button 
              className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 p-2 rounded-full transition-colors"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            
            {/* Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <button className="text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 h-9 px-4 rounded-xl text-sm transition-colors">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Login
                </span>
              </button>
              <button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 h-9 px-4 rounded-xl text-sm text-white group transition-all">
                <span className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 z-50 p-2"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Main Navigation Bar with Centered Items */}
      <div className={cn(
        "transition-all duration-300",
        scrolled ? "py-2" : "py-3"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center space-x-1 justify-center">
              {navItems.map((item, index) => (
                <div 
                  key={index} 
                  className="relative flex justify-center"
                  data-dropdown={item.label}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                >
                  {item.dropdown ? (
                    <div className="relative">
                      {/* Dropdown Button */}
                      <button
                        className={cn(
                          "text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 group flex items-center h-12 px-4 rounded-xl transition-colors",
                          activeDropdown === item.label ? "text-red-500 dark:text-red-400" : ""
                        )}
                        onClick={() => toggleDropdown(item.label)}
                      >
                        {item.icon}
                        {item.label}
                        <ChevronDown className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200 text-gray-400 group-hover:text-red-500 dark:group-hover:text-red-400",
                          activeDropdown === item.label ? "rotate-180 text-red-500 dark:text-red-400" : ""
                        )} />
                      </button>
                      
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          renderDropdown(item.dropdown)
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <button className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 flex items-center h-12 px-4 rounded-xl transition-colors">
                        {item.icon}
                        {item.label}
                      </button>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-1">
                {/* Top Nav Items in Mobile Menu */}
                <div className="flex justify-around border-b border-gray-200 dark:border-gray-800/50 pb-2">
                  {topNavItems.map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.href}
                      className="block py-3 px-2 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                
                {/* Main Nav Items */}
                {navItems.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-800/50 last:border-0 pb-1">
                    <div 
                      className="flex justify-between items-center py-3 px-2 text-gray-700 dark:text-gray-300 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50"
                      onClick={() => item.dropdown && toggleDropdown(item.label)}
                    >
                      <div className="flex items-center">
                        {item.icon}
                        <span className={cn("ml-2", activeDropdown === item.label ? 'text-red-500 dark:text-red-400' : '')}>
                          {item.label}
                        </span>
                      </div>
                      {item.dropdown && (
                        <ChevronDown className={cn(
                          "h-4 w-4 transition-transform duration-200 text-gray-400",
                          activeDropdown === item.label ? "rotate-180 text-red-500 dark:text-red-400" : ""
                        )} />
                      )}
                    </div>
                    
                    {item.dropdown && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-8 mt-1 space-y-1"
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link 
                            key={subIndex} 
                            href={subItem.href}
                            className="block py-2 px-4 text-sm text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-800/50 rounded-lg transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
                
                {/* Auth buttons in mobile menu */}
                <div className="pt-4 flex flex-col space-y-3">
                  <button className="w-full text-gray-700 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 h-12 rounded-xl transition-colors">
                    <span className="flex items-center justify-center">
                      <User className="w-4 h-4 mr-2" />
                      Login
                    </span>
                  </button>
                  <button className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 h-12 rounded-xl text-white transition-all">
                    <span className="flex items-center justify-center">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Utility function to concatenate class names
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default Navbar;