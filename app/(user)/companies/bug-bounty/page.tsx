// app/companies/bug-bounty/page.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  Target, Globe, Shield, Zap, BarChart, 
  Gauge, Award, Coins, Eye, BadgeCheck,
  TestTube2, DollarSign, CalendarCheck, Users
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const BugBountyPage = () => {
  const steps = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Define Your Program",
      description: "Outline systems, applications, and vulnerability types to be tested."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Launch the Bounty",
      description: "Activate your program for ethical hackers worldwide to start testing."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Vulnerability Discovery",
      description: "Hackers report findings through our platform for expert validation."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Reward and Recognition",
      description: "Compensate hackers based on severity with flexible reward structures."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Remediation Support",
      description: "Get expert assistance in fixing vulnerabilities and strengthening security."
    }
  ];

  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Hacker Community",
      description: "Access diverse ethical hackers with unique perspectives"
    },
    {
      icon: <TestTube2 className="w-8 h-8" />,
      title: "Flexible Program Design",
      description: "Private or public programs tailored to your needs"
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Real-Time Reporting",
      description: "Instant updates on discovered vulnerabilities"
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Compliance & Transparency",
      description: "Ethical testing with strict compliance standards"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "Dual Currency Rewards",
      description: "ETB or USD compensation for hackers"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Proactive Security",
      description: "Identify vulnerabilities before exploitation"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Cost-Effective",
      description: "Pay only for validated results"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Scalable",
      description: "Solutions for startups to enterprises"
    }
  ];

  const testimonials = [
    {
      quote: "AXUM Bounty has revolutionized our approach to security. The insights provided by the ethical hackers have been invaluable in protecting our systems.",
      author: "Daniel Teklehaimanot",
      role: "CTO, Safaricom Ethiopia",
      avatar: "/avatar-daniel.png"
    },
    {
      quote: "The transparency and efficiency of AXUM Bounty make it an indispensable part of our cybersecurity strategy.",
      author: "Meron Yemane",
      role: "Security Director, Commercial Bank of Ethiopia",
      avatar: "/avatar-meron.png"
    }
  ];

  const stats = [
    { value: "4,500+", label: "Ethical Hackers" },
    { value: "98%", label: "Valid Reports" },
    { value: "24h", label: "Avg. Response Time" },
    { value: "$2M+", label: "Rewards Distributed" }
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-red-500/[0.03] dark:bg-grid-red-900/[0.05] bg-[size:30px_30px] z-0" />
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center justify-center px-6 py-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
            <Zap className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" />
            <span className="text-red-600 dark:text-red-400 font-medium">AXUM Bounty Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600 mb-4">
            Engage Ethical Hackers to Fortify Your Security
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            AXUM Bounty connects organizations with global ethical hackers to proactively identify and resolve security vulnerabilities before exploitation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400 text-white px-8 py-6 text-lg shadow-lg shadow-red-500/20 dark:shadow-red-900/30">
                Start Your Bug Bounty Program
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="px-8 py-6 text-lg border-red-600 text-red-600 dark:text-red-400 dark:border-red-400">
                Request a Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600 mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            How AXUM Bounty Works
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-red-100 dark:bg-red-900/30 hidden md:block"></div>
            
            <motion.div 
              className="grid md:grid-cols-5 gap-8 relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {steps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 ${
                    index % 2 === 0 ? 'md:mb-16' : 'md:mt-16'
                  } hover:shadow-xl transition-shadow`}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4">
                      <span className="text-red-600 dark:text-red-400">{step.icon}</span>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="font-bold text-gray-800 dark:text-gray-200">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/10 dark:to-red-900/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            Platform Key Features
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
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-all"
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
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-red-100 dark:border-red-900/30">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Benefits of AXUM Bounty</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-red-600 dark:text-red-400">{benefit.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            Trusted by Security Leaders
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <Avatar className="mr-4">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback className="bg-red-100 dark:bg-red-900/30">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg italic">"{testimonial.quote}"</p>
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
          <div className="bg-gradient-to-r from-red-600 to-red-800 dark:from-red-700 dark:to-red-900 rounded-3xl p-10 md:p-14 text-white">
            <CalendarCheck className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Launch Your Bug Bounty?
            </h2>
            <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
              Join organizations securing their systems with the power of ethical hacking.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-white text-red-600 hover:bg-gray-100 dark:hover:bg-gray-200 px-8 py-6 text-lg font-bold">
                  Start Your Program
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="px-8 py-6 text-lg text-white border-white hover:bg-white/10">
                  Schedule Consultation
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BugBountyPage;