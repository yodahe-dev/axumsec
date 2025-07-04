"use client";

import { motion } from "framer-motion";
import { 
  Shield, Lock, Network, Layout, Smartphone, 
  Code, Users, Eye, CheckCircle, Zap, 
  BarChart, Heart, ClipboardCheck, ArrowRight, 
  Search, MessageCircle, Calendar, BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const RequestPage = () => {
  const whyChoose = [
    {
      icon: <BadgeCheck className="w-10 h-10 text-red-500" />,
      title: "Certified Expertise",
      description: "Our testers hold OSCP, CEH, CISSP certifications with extensive experience across industries."
    },
    {
      icon: <Search className="w-10 h-10 text-red-500" />,
      title: "Comprehensive Approach",
      description: "Thorough testing covering networks, web/mobile apps, APIs using both automated tools and manual techniques."
    },
    {
      icon: <Layout className="w-10 h-10 text-red-500" />,
      title: "Customized Testing",
      description: "Services tailored to your specific security needs and business requirements."
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-red-500" />,
      title: "Detailed Reporting",
      description: "Actionable reports with vulnerability details, impact assessment, and remediation guidance."
    }
  ];

  const services = [
    {
      icon: <Network className="w-8 h-8 text-red-500" />,
      title: "Network Penetration Testing",
      description: "Assess security of firewalls, routers, switches to identify potential entry points."
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: "Web Application Testing",
      description: "Identify SQL injection, XSS, and other threats in your web applications."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: "Mobile Application Testing",
      description: "Secure iOS/Android apps against data leaks and authentication vulnerabilities."
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "API Penetration Testing",
      description: "Protect API endpoints against unauthorized access and data leaks."
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Social Engineering Testing",
      description: "Simulate phishing and baiting attacks to test human vulnerabilities."
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: "Proactive Security",
      description: "Identify vulnerabilities before attackers can exploit them."
    },
    {
      icon: <Layout className="w-6 h-6 text-red-500" />,
      title: "Tailored Solutions",
      description: "Services aligned with your specific security goals."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Peace of Mind",
      description: "Confidence that your systems are thoroughly assessed."
    },
    {
      icon: <BarChart className="w-6 h-6 text-red-500" />,
      title: "Compliance Assurance",
      description: "Meet industry standards and regulatory requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-300 dark:bg-red-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-6 hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 mr-2" />
            Professional Security Testing
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Leverage Certified AXUM SEC Penetration Testers
          </h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Stay ahead of evolving threats with our expert team that identifies vulnerabilities before attackers do, strengthening your security posture.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              <Eye className="mr-2 w-5 h-5" />
              Request a Penetration Test
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Speak with a Security Expert
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Choose AXUM SEC Penetration Testers?
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {whyChoose.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="cursor-pointer"
              >
                <Card className="h-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      {reason.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Services Offered by AXUM SEC Pen-Testers
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Comprehensive security testing solutions tailored to your specific needs
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mt-1">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            Benefits of Hiring AXUM SEC Pen-Testers
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Strengthen your security posture with our expert penetration testing services
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
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

      {/* Request Form Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-12">
              <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-4">
                <Shield className="w-5 h-5 mr-2" />
                Request Penetration Testing
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Get Started with Our Security Experts
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
                Complete the form below and our team will contact you within 24 hours to discuss your security testing needs.
              </p>
            </div>
            
            <form className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
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
                    type="email"
                    placeholder="your.email@company.com"
                    className="py-6 px-4 dark:bg-gray-800 dark:border-gray-700"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="py-6 px-4 dark:bg-gray-800 dark:border-gray-700"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="company" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                    Company Name *
                  </Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your organization"
                    className="py-6 px-4 dark:bg-gray-800 dark:border-gray-700"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                    Service Interest *
                  </Label>
                  <Select required>
                    <SelectTrigger className="py-6 px-4 text-gray-500 dark:bg-gray-800 dark:border-gray-700">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800">
                      <SelectItem value="network">Network Penetration Testing</SelectItem>
                      <SelectItem value="web">Web Application Testing</SelectItem>
                      <SelectItem value="mobile">Mobile Application Testing</SelectItem>
                      <SelectItem value="api">API Penetration Testing</SelectItem>
                      <SelectItem value="social">Social Engineering Testing</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                      <SelectItem value="custom">Custom Request</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="employees" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                    Company Size
                  </Label>
                  <Select>
                    <SelectTrigger className="py-6 px-4 text-gray-500 dark:bg-gray-800 dark:border-gray-700">
                      <SelectValue placeholder="Number of employees" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800">
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501-1000">501-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="message" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                  Project Details *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Describe your security needs, systems to test, compliance requirements, and timeline"
                  className="min-h-[150px] py-4 px-4 dark:bg-gray-800 dark:border-gray-700"
                  required
                />
              </div>
              
              <div className="md:col-span-2 pt-4">
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 py-7 text-lg font-medium"
                  size="lg"
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Request a Penetration Test
                </Button>
                <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
                  By submitting this form, you agree to our Privacy Policy. We'll contact you within 24 hours.
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
          className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Strengthen Your Security?
          </h2>
          
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Identify vulnerabilities before attackers do with our certified penetration testing team.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              Request a Test Now
            </Button>
            
            <Button 
              variant="outline"
              className="text-white border-white hover:bg-red-700 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default RequestPage;