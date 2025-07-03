"use client";

import { motion } from "framer-motion";
import { 
  Lock, CreditCard, FileText, Activity, 
  ShieldCheck, BarChart2, Server, BadgeCheck 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FinancialServices = () => {
  const services = [
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "Data Encryption and Protection",
      description: "Advanced encryption technologies to protect sensitive financial data at rest and in transit, ensuring regulatory compliance."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-red-500" />,
      title: "Secure Transaction Processing",
      description: "Secure processing systems preventing unauthorized access and fraud in financial transactions."
    },
    {
      icon: <FileText className="w-8 h-8 text-red-500" />,
      title: "Regulatory Compliance",
      description: "Tailored solutions ensuring compliance with PCI DSS, GDPR, and other financial regulations."
    },
    {
      icon: <Activity className="w-8 h-8 text-red-500" />,
      title: "Fraud Detection and Prevention",
      description: "AI-powered tools detecting and preventing fraudulent activities in real-time."
    }
  ];

  const features = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-red-500" />,
      text: "End-to-End Security"
    },
    {
      icon: <BarChart2 className="w-5 h-5 text-red-500" />,
      text: "Compliance Assurance"
    },
    {
      icon: <Server className="w-5 h-5 text-red-500" />,
      text: "Real-Time Monitoring"
    }
  ];

  const benefits = [
    "Reduced Risk",
    "Regulatory Compliance",
    "Customer Trust"
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
      <section className="py-20 px-4 text-center bg-white dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Securing Financial Data and Transactions with Tailored Cybersecurity Solutions
          </h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            The financial services sector is a prime target for cybercriminals. AXUM SEC offers specialized solutions designed to protect financial institutions from cyber threats, ensuring security of financial data and integrity of transactions.
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
            Tailored Services for the Financial Sector
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Key Features
          </motion.h2>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-6 mt-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-center gap-3 bg-white dark:bg-gray-800 px-6 py-4 rounded-lg shadow-md"
                variants={itemVariants}
              >
                {feature.icon}
                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  {feature.text}
                </span>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Benefits for Financial Services
            </h2>
            
            <motion.ul 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start gap-3"
                  variants={itemVariants}
                >
                  <BadgeCheck className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-xl text-gray-700 dark:text-gray-300">
                    {benefit}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Ready to Secure Your Financial Operations?
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              Secure Your Financial Operations
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              Request a Compliance Audit
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default FinancialServices;