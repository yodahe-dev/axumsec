'use client';

import { motion } from 'framer-motion';
import { 
  ClipboardList, Send, ClipboardCheck, Bell, CheckCircle, 
  ShieldCheck, SearchCheck, MessageCircle, FileText, Award, Check
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const VDPPage = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-6 h-6" />,
      title: "Establish the Program",
      description: "Set up a tailored VDP outlining scope, rules, and processes for reporting vulnerabilities."
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: "Report Submission",
      description: "Submit findings through our secure portal with all relevant information."
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Triage and Validation",
      description: "Security experts validate vulnerabilities and assess severity."
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Notification and Response",
      description: "Facilitate communication between reporter and organization."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Remediation and Closure",
      description: "Remediate vulnerability and close disclosure process."
    }
  ];

  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Secure Submission Portal",
      description: "User-friendly platform protecting sensitive information"
    },
    {
      icon: <SearchCheck className="w-8 h-8" />,
      title: "Comprehensive Triage",
      description: "Expert analysis of vulnerability severity and impact"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Transparent Communication",
      description: "Open dialog between reporters and organizations"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Compliance Support",
      description: "Adherence to industry standards and legal requirements"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Recognition for Reporters",
      description: "Acknowledgement for security contributions"
    }
  ];

  const benefits = [
    "Improved Security Posture: Reduces exploitation risks",
    "Ethical Management: Responsible risk handling",
    "Increased Trust: Demonstrates security commitment"
  ];

  const caseStudies = [
    {
      title: "Critical Infrastructure Protection",
      description: "Prevented potential zero-day exploit in energy sector systems through responsible disclosure"
    },
    {
      title: "E-commerce Security Enhancement",
      description: "Addressed payment processing vulnerability before exploitation"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600 mb-4">
            Streamlined Vulnerability Reporting
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            AXUM SEC's Vulnerability Disclosure Program provides a structured process for secure and ethical reporting of security vulnerabilities.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400 text-white px-8 py-6 text-lg">
                Implement a VDP Program
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="px-8 py-6 text-lg border-red-600 text-red-600 dark:text-red-400 dark:border-red-400">
                Learn More About Disclosure
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            How Our Vulnerability Disclosure Works
          </motion.h2>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-5 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center text-center"
              >
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full mb-4">
                  <span className="text-red-600 dark:text-red-400">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            Program Key Features
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-all"
              >
                <div className="text-red-600 dark:text-red-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Benefits of Vulnerability Disclosure</h2>
            
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <Check className="w-6 h-6 text-red-600 dark:text-red-400 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-xl text-gray-700 dark:text-gray-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">Success Stories</h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border border-gray-200 dark:border-gray-700 h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-red-600 dark:text-red-400">{caseStudy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">{caseStudy.description}</p>
                    <Button variant="link" className="text-red-600 dark:text-red-400 p-0 mt-4">
                      Read Full Case Study →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Secure Your Organization?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Implement a structured vulnerability disclosure program today and build trust with your stakeholders.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400 text-white px-8 py-6 text-lg">
                Start Your VDP Program
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="px-8 py-6 text-lg border-gray-900 text-gray-900 dark:text-white dark:border-white">
                Contact Our Experts
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VDPPage;