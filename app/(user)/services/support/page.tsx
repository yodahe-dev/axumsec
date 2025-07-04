"use client"

import { motion } from "framer-motion";
import { 
  Shield, Headphones, Clock, Zap, 
  Activity, Lock, AlertCircle, BarChart,
  Server, Users, MessageCircle, ArrowRight,
  BadgeCheck, Globe, Cpu, FileText,
  Calendar, CheckCircle, User
} from "lucide-react";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SupportPage = () => {
  const [activeTab, setActiveTab] = useState('monitoring');
  const [isHovered, setIsHovered] = useState(false);
  const [urgency, setUrgency] = useState('medium');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    issue: '',
    message: ''
  });

  const features = [
    {
      icon: <Activity className="w-8 h-8 text-red-500" />,
      title: "Real-Time Monitoring",
      description: "Continuous surveillance of your systems to detect threats as they emerge."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: "Incident Response",
      description: "Immediate action on security alerts to minimize impact and damage."
    },
    {
      icon: <BarChart className="w-8 h-8 text-red-500" />,
      title: "Threat Intelligence",
      description: "Proactive identification of emerging threats targeting your industry."
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "Vulnerability Management",
      description: "Continuous scanning and patching of security weaknesses."
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Security Consultation",
      description: "Expert guidance on security best practices and architecture."
    },
    {
      icon: <Server className="w-8 h-8 text-red-500" />,
      title: "Infrastructure Protection",
      description: "24/7 defense of networks, servers, and cloud environments."
    }
  ];

  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-red-500" />,
      title: "Initial Assessment",
      description: "We evaluate your security posture and identify critical assets."
    },
    {
      icon: <Activity className="w-8 h-8 text-red-500" />,
      title: "Continuous Monitoring",
      description: "Our systems keep watch over your infrastructure 24/7."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: "Threat Detection",
      description: "AI-powered analysis identifies suspicious activities."
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: "Rapid Response",
      description: "Our team takes immediate action to contain threats."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-500" />,
      title: "Recovery & Reporting",
      description: "We restore systems and provide detailed incident reports."
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Peace of Mind",
      description: "Know your systems are protected at all times"
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: "Reduced Downtime",
      description: "Minimize business disruption with rapid response"
    },
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: "Proactive Defense",
      description: "Prevent attacks before they cause damage"
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-red-500" />,
      title: "Compliance Support",
      description: "Meet regulatory requirements with expert guidance"
    },
    {
      icon: <BarChart className="w-6 h-6 text-red-500" />,
      title: "Cost Efficiency",
      description: "Avoid expensive breaches and recovery costs"
    },
    {
      icon: <Globe className="w-6 h-6 text-red-500" />,
      title: "Global Coverage",
      description: "Protection across all timezones and regions"
    }
  ];

  const supportStats = [
    { value: "24/7", label: "Availability" },
    { value: "<15min", label: "Response Time" },
    { value: "99.9%", label: "Uptime Guarantee" },
    { value: "365", label: "Days Coverage" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    alert(`Support request submitted! Our team will contact you shortly at ${formData.email}`);
    setFormData({ name: '', email: '', company: '', issue: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-300 dark:bg-red-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-6 hover:scale-105 transition-transform">
            <Headphones className="w-5 h-5 mr-2" />
            Always-On Protection
          </Badge>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              24/7 Cyber Security Support
            </span> for Continuous Protection
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Expert monitoring, incident response, and threat management around the clock. Sleep soundly knowing your digital assets are protected 24 hours a day, 365 days a year.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              <Headphones className="mr-2 w-5 h-5" />
              Request Immediate Support
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Consultation
            </Button>
          </motion.div>

          {/* Animated Support Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {supportStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Comprehensive Security Support Services
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our expert team provides round-the-clock protection for your digital assets
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all group">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How Our 24/7 Security Support Works
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-200 dark:bg-red-900/30 hidden md:block"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 md:left-0 md:transform-none bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">
                    {index + 1}
                  </div>
                  
                  <Card className="h-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg pt-10">
                    <CardHeader>
                      <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                        {step.icon}
                      </div>
                      <CardTitle className="text-xl text-center text-gray-900 dark:text-white">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 text-center">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Support Console */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Real-Time Support Dashboard
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-400 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Access our security operations center dashboard to monitor your protection status in real-time.
              </motion.p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                  <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">System Status: Operational</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">All systems secure and monitored</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                  <div className="bg-yellow-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Recent Activity: 3 alerts handled</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">In the last 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                  <div className="bg-blue-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Active Threats: Low</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">No critical threats detected</p>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Button className="bg-red-600 hover:bg-red-700 py-6 px-8 text-lg">
                  <Headphones className="mr-2 w-5 h-5" />
                  Access Your Dashboard
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="bg-gradient-to-br from-red-100 to-white dark:from-red-900/20 dark:to-gray-800 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Security Operations Center</h3>
                <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300">
                  Live
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-green-400 text-sm">Network Traffic</span>
                    <span className="text-gray-400 text-sm">Normal</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-4/5"></div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-yellow-400 text-sm">Threat Detection</span>
                    <span className="text-gray-400 text-sm">2 Active</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-1/4"></div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-400 text-sm">System Health</span>
                    <span className="text-gray-400 text-sm">98%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-11/12"></div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Security Analyst: Online</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Threat Intelligence: Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Benefits of 24/7 Security Support
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Protect your business with continuous security coverage
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Support Request Form */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-10">
              <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-4">
                <Headphones className="w-5 h-5 mr-2" />
                Immediate Support
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Request 24/7 Security Support
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                Our security team is standing by to assist you. Submit your request and we'll respond immediately.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="py-6 px-4 dark:bg-gray-800 dark:border-gray-700"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="py-6 px-4 dark:bg-gray-800 dark:border-gray-700"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="company" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your organization"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="py-6 px-4 dark:bg-gray-800 dark:border-gray-700"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="urgency" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                    Urgency Level *
                  </Label>
                  <Select value={urgency} onValueChange={setUrgency}>
                    <SelectTrigger className="py-6 px-4 text-gray-500 dark:bg-gray-800 dark:border-gray-700">
                      <SelectValue placeholder="Select urgency" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800">
                      <SelectItem value="low">Low - General inquiry</SelectItem>
                      <SelectItem value="medium">Medium - Important issue</SelectItem>
                      <SelectItem value="high">High - System impacted</SelectItem>
                      <SelectItem value="critical">Critical - Business disruption</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="issue" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                  Issue Type *
                </Label>
                <Select>
                  <SelectTrigger className="py-6 px-4 text-gray-500 dark:bg-gray-800 dark:border-gray-700">
                    <SelectValue placeholder="Select issue type" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-gray-800">
                    <SelectItem value="security">Security Incident</SelectItem>
                    <SelectItem value="vulnerability">Vulnerability Management</SelectItem>
                    <SelectItem value="monitoring">Monitoring Assistance</SelectItem>
                    <SelectItem value="consultation">Security Consultation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                  Description *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Describe your security issue in detail"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="min-h-[150px] py-4 px-4 dark:bg-gray-800 dark:border-gray-700"
                  required
                />
              </div>
              
              <div className="pt-4">
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 py-7 text-lg font-medium"
                  size="lg"
                  type="submit"
                >
                  <Headphones className="mr-2 w-5 h-5" />
                  Submit Support Request
                </Button>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
                  Our average response time is under 15 minutes for critical issues.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-red-400/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-300/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't Wait for a Breach to Secure Your Systems
            </h2>
            
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Our security experts are ready to protect your business 24 hours a day, 365 days a year.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-white text-red-600 hover:bg-gray-100 py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
                size="lg"
              >
                <Headphones className="mr-2 w-5 h-5" />
                Get 24/7 Support Now
              </Button>
              
              <Button 
                variant="outline"
                className="text-white border-white hover:bg-red-700 py-6 px-8 text-lg transition-transform hover:scale-105"
                size="lg"
              >
                <User className="mr-2 w-5 h-5" />
                Speak to Security Expert
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// Label component for form
const Label = ({ htmlFor, children, className }: { htmlFor: string; children: React.ReactNode; className?: string }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium mb-2 ${className}`}>
    {children}
  </label>
);

export default SupportPage;