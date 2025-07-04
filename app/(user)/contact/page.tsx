"use client";

import { motion } from "framer-motion";
import { 
  Mail, Phone, MapPin, Clock, Send, ArrowRight, 
  Shield, MessageSquare, HelpCircle 
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ContactPage = () => {
  const services = [
    "Penetration Testing Services",
    "Bug Bounty Program",
    "Vulnerability Disclosure",
    "Attack Surface Management",
    "Cyber Security Control Installation",
    "Cyber Security 24/7 Support",
    "Vulnerability Analysis",
    "AXNESS Awareness Training (Online/Onsite)",
    "AXUM Crowd Program",
    "AXUM Certification Program",
    "Staff Programs",
    "Custom Request/Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-300 dark:bg-red-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Get in Touch with AXUM SEC
          </h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We're Here to Help - Reach out for inquiries, support, or consultations tailored to your cybersecurity needs
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
              <Shield className="mr-2 w-5 h-5" />
              Request a Consultation
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              <MessageSquare className="mr-2 w-5 h-5" />
              Send Us a Message
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <HelpCircle className="w-8 h-8 text-red-500" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Contact Form
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Whether you need a consultation, are interested in a particular service, or have general inquiries, 
                  fill out the form and our team will get back to you promptly.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                        Name *
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
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="py-6 px-4 dark:bg-gray-800 dark:border-gray-700"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+123-456-7890"
                        className="py-6 px-4 dark:bg-gray-800 dark:border-gray-700"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your company"
                        className="py-6 px-4 dark:bg-gray-800 dark:border-gray-700"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                      Service of Interest *
                    </Label>
                    <Select required>
                      <SelectTrigger className="py-6 px-4 text-gray-500 dark:bg-gray-800 dark:border-gray-700">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="dark:bg-gray-800">
                        {services.map((service, index) => (
                          <SelectItem 
                            key={index} 
                            value={service}
                            className="py-3 hover:bg-red-50 dark:hover:bg-red-900/20"
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="mb-2 block font-medium text-gray-700 dark:text-gray-300">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Provide details about your request, challenges, or questions"
                      className="min-h-[150px] py-4 px-4 dark:bg-gray-800 dark:border-gray-700"
                      required
                    />
                  </div>
                  
                  <div className="pt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                      After submitting, a member of our team will respond within 24 hours.
                    </p>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 py-7 text-lg font-medium"
                      size="lg"
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Submit Message
                    </Button>
                  </div>
                </form>
              </div>
            </motion.div>
            
            {/* Contact Info & Map */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-10">
                <div className="flex items-center gap-3 mb-8">
                  <Shield className="w-8 h-8 text-red-500" />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Contact Information
                  </h2>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Prefer to contact us directly? Use the information below:
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-lg">
                      <Mail className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Email</h3>
                      <a 
                        href="mailto:support@axumsec.com" 
                        className="text-red-600 dark:text-red-400 hover:underline"
                      >
                        support@axumsec.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-lg">
                      <Phone className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Phone</h3>
                      <a 
                        href="tel:+1234567890" 
                        className="text-red-600 dark:text-red-400 hover:underline"
                      >
                        +123-456-7890
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-lg">
                      <MapPin className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Office Address</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        1234 Cyber Street, Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-red-100 dark:bg-red-900/20 p-3 rounded-lg">
                      <Clock className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Business Hours</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Monday to Friday, 9:00 AM – 6:00 PM (Local Time)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Visit Our Headquarters
                    </h2>
                    <Button 
                      variant="outline" 
                      className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <MapPin className="mr-2 w-4 h-4" />
                      Get Directions
                    </Button>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Our headquarters is located in the heart of Addis Ababa, easily accessible by public transportation and car.
                  </p>
                  
                  <div className="bg-gray-200 dark:bg-gray-800 border-2 border-dashed rounded-xl w-full h-64" />
                </div>
              </div>
            </motion.div>
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
          className="max-w-4xl mx-auto bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            We're Committed to Securing Your Digital Environment
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
            Have questions, need a consultation, or ready to engage with our services? 
            Contact us today for expert cybersecurity solutions.
          </p>
          
          <Button 
            className="bg-red-600 hover:bg-red-700 text-white py-6 px-10 text-lg transition-transform hover:scale-105 shadow-lg"
            size="lg"
          >
            Get Started Now
            <ArrowRight className="ml-3 w-5 h-5" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactPage;