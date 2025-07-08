"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const SupportPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    issueType: '',
    urgency: 'medium',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Support request submitted! Our team will contact you shortly at ${formData.email}`);
    setFormData({
      name: '',
      email: '',
      company: '',
      issueType: '',
      urgency: 'medium',
      message: ''
    });
  };

  return (
    <div>
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
                  <Select 
                    value={formData.urgency} 
                    onValueChange={(value) => handleSelectChange('urgency', value)}
                  >
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
                <Label htmlFor="issueType" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                  Issue Type *
                </Label>
                <Select 
                  value={formData.issueType} 
                  onValueChange={(value) => handleSelectChange('issueType', value)}
                >
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
    </div>
  );
};

const Label = ({ 
  htmlFor, 
  children, 
  className 
}: { 
  htmlFor: string; 
  children: React.ReactNode; 
  className?: string 
}) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium mb-2 ${className}`}>
    {children}
  </label>
);

export default SupportPage;