"use client";

import { motion } from "framer-motion";
import { 
  Shield, Stethoscope, ClipboardCheck, Activity, 
  Lock, HeartPulse, FileText, BadgeCheck 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const HealthcarePage = () => {
  const services = [
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "Patient Data Protection",
      description: "Robust measures to secure EHRs and sensitive patient information from unauthorized access."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-red-500" />,
      title: "HIPAA Compliance",
      description: "Comprehensive security solutions ensuring compliance with HIPAA regulations."
    },
    {
      icon: <Activity className="w-8 h-8 text-red-500" />,
      title: "Medical Device Security",
      description: "Protection for connected medical devices ensuring safety and reliability."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Incident Response Planning",
      description: "Tailored incident response plans for healthcare environments."
    }
  ];

  const features = [
    {
      icon: <FileText className="w-5 h-5 text-red-500" />,
      text: "Comprehensive Data Security"
    },
    {
      icon: <BadgeCheck className="w-5 h-5 text-red-500" />,
      text: "Regulatory Compliance"
    },
    {
      icon: <HeartPulse className="w-5 h-5 text-red-500" />,
      text: "Patient Privacy Focus"
    }
  ];

  const benefits = [
    "Patient Data Protection",
    "Compliance Readiness",
    "Enhanced Patient Trust"
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
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-white dark:bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-200 dark:bg-red-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-red-300 dark:bg-red-800/30 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full inline-flex items-center mb-6">
            <Stethoscope className="w-5 h-5 mr-2" />
            Healthcare Cybersecurity
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Protecting Patient Data and Medical Records with Advanced Cybersecurity Solutions
          </h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The healthcare sector faces unique cybersecurity challenges. AXUM SEC offers specialized solutions that help healthcare organizations secure sensitive data, protect patient privacy, and maintain compliance.
          </motion.p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tailored Services for Healthcare
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="cursor-pointer"
              >
                <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="bg-red-50 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {service.title}
                    </CardTitle>
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

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-4 py-1 rounded-full inline-block mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Key Features for Healthcare Security
              </h2>
              
              <motion.ul 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {features.map((feature, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-4"
                    variants={itemVariants}
                  >
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mt-0.5">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                        {feature.text}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        {index === 0 && "Protect all aspects of patient data, from EHRs to medical billing information."}
                        {index === 1 && "Regular assessments to ensure compliance with HIPAA and healthcare regulations."}
                        {index === 2 && "Privacy-focused measures that protect patient information and maintain trust."}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-gray-800 p-8 rounded-2xl shadow-xl">
              <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl w-full h-96" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Benefits for Healthcare Organizations
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <BadgeCheck className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {benefit}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {index === 0 && "Safeguard sensitive patient information from breaches and unauthorized access."}
                    {index === 1 && "Ensure your organization meets all regulatory requirements and avoids penalties."}
                    {index === 2 && "Build trust with patients by demonstrating commitment to protecting their privacy."}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full inline-flex items-center mb-6">
            <Shield className="w-5 h-5 mr-2" />
            Secure Your Healthcare Institution
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Ready to Protect Patient Data?
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              Protect Your Patient Data
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              Schedule a HIPAA Audit
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HealthcarePage;