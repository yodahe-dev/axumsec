// app/why/crowd-sourcing/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Shield, 
  Users, 
  BarChart, 
  DollarSign, 
  RefreshCw,
  Search,
  Check,
  ArrowRight,
  MessageSquare,
  Layout,
  Smartphone,
  Cpu,
  Lock
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CrowdSourcingPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "AXUM Crowd Sourcing connected us with top-notch ethical hackers who uncovered vulnerabilities we never would have found on our own. It was a game-changer for our security.",
      author: "Sarah Johnson",
      position: "CTO, TechSecure Inc.",
      avatar: "/avatar1.png"
    },
    {
      id: 2,
      quote: "The diversity of the crowd really shone through in the breadth and depth of vulnerabilities identified. AXUM SEC's crowd-sourcing model is a must for any company serious about security.",
      author: "Michael Rodriguez",
      position: "Director of IT, Global Finance Corp",
      avatar: "/avatar2.png"
    }
  ];

  // Case study data
  const caseStudies = [
    {
      id: 1,
      title: "Financial Services Provider",
      challenge: "A leading financial institution faced increasing sophisticated cyber threats targeting their online banking platform.",
      solution: "Implemented AXUM Crowd Sourcing with 150+ ethical hackers conducting continuous security testing.",
      result: "Identified 42 critical vulnerabilities in first month, reduced security incidents by 78%",
      metrics: [
        { label: "Vulnerabilities Found", value: "42" },
        { label: "Response Time", value: "<24h" },
        { label: "Cost Savings", value: "64%" }
      ]
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      challenge: "A fast-growing e-commerce company needed scalable security as they expanded internationally.",
      solution: "Leveraged AXUM Crowd Sourcing for continuous security monitoring across web and mobile platforms.",
      result: "Achieved 99.9% security uptime, prevented major data breach during peak season",
      metrics: [
        { label: "Vulnerabilities Fixed", value: "87" },
        { label: "Platform Coverage", value: "100%" },
        { label: "Incidents Prevented", value: "12" }
      ]
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What is AXUM Crowd Sourcing?",
      answer: "AXUM Crowd Sourcing is a platform that connects organizations with a global network of ethical hackers to crowdsource cybersecurity testing and vulnerability discovery."
    },
    {
      question: "How does AXUM SEC ensure the security of my data?",
      answer: "All testing is conducted in a secure, isolated environment, with strict confidentiality agreements and secure data handling protocols."
    },
    {
      question: "What types of vulnerabilities can be discovered?",
      answer: "The platform can uncover a wide range of vulnerabilities, including those related to web applications, mobile apps, networks, APIs, and more."
    },
    {
      question: "How are ethical hackers compensated?",
      answer: "Ethical hackers are compensated based on the vulnerabilities they discover and the value of their findings, with options for payment in multiple currencies."
    }
  ];

  // How it works steps
  const steps = [
    {
      id: 1,
      title: "Define Your Security Needs",
      description: "Outline your security requirements for specific applications, networks, or systems.",
      icon: <Layout className="h-8 w-8" />
    },
    {
      id: 2,
      title: "Launch Your Program",
      description: "Invite ethical hackers worldwide to analyze your systems for potential vulnerabilities.",
      icon: <Smartphone className="h-8 w-8" />
    },
    {
      id: 3,
      title: "Ethical Hackers Get to Work",
      description: "Experts perform in-depth testing and provide validated vulnerability reports.",
      icon: <Search className="h-8 w-8" />
    },
    {
      id: 4,
      title: "Review & Implement Solutions",
      description: "Get support implementing fixes and improvements to your security infrastructure.",
      icon: <Check className="h-8 w-8" />
    },
    {
      id: 5,
      title: "Continuous Monitoring",
      description: "Ongoing testing keeps your systems secure as new threats emerge.",
      icon: <RefreshCw className="h-8 w-8" />
    }
  ];

  // Benefits of choosing AXUM
  const benefits = [
    {
      id: 1,
      title: "Access to Top Talent",
      description: "Connect with the world's best ethical hackers bringing unique skills to your security challenges.",
      icon: <Users className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Diverse Perspectives",
      description: "Global network ensures comprehensive coverage from multiple angles.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Speed and Efficiency",
      description: "Accelerated vulnerability discovery enables rapid threat response.",
      icon: <BarChart className="h-6 w-6" />
    },
    {
      id: 4,
      title: "Secure and Confidential",
      description: "Strict confidentiality agreements protect your sensitive data.",
      icon: <Lock className="h-6 w-6" />
    },
    {
      id: 5,
      title: "Flexible and Scalable",
      description: "Tailored solutions that grow with your organization.",
      icon: <Cpu className="h-6 w-6" />
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-red-900/10 to-red-800/20 dark:from-red-900/30 dark:to-red-800/40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 dark:opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
              Why AXUM SEC
            </Badge>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-red-700 bg-clip-text text-transparent dark:from-white dark:to-red-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Unleashing the Power of Crowd-Sourced Cybersecurity
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Leverage the Expertise of a Global Network of Ethical Hackers to Fortify Your Digital Defenses
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                Start Your Program Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-800 text-gray-900 dark:text-gray-100 px-8 py-6 text-lg">
                Request a Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Overview</h2>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    AXUM SEC's crowd-sourcing model harnesses the collective power of ethical hackers from around the world to identify and mitigate vulnerabilities in your digital infrastructure. By connecting businesses with skilled cybersecurity professionals, AXUM SEC offers a dynamic, flexible, and scalable approach to security that adapts to the ever-evolving threat landscape.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Traditional Security</h3>
                  <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Limited security team</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Fixed schedules</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>High fixed costs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Delayed vulnerability detection</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 p-6 rounded-2xl border border-red-200 dark:border-red-700/50">
                  <h3 className="font-bold text-red-800 dark:text-red-400 text-lg">AXUM Crowd-Sourcing</h3>
                  <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Global security experts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>24/7 continuous protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Pay for results only</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Real-time vulnerability detection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AXUM Crowd Sourcing */}
      <section className="py-20 bg-gray-100 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
                Our Model
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
                What is AXUM Crowd Sourcing?
              </h2>
              <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                A revolutionary platform connecting organizations with a global network of ethical hackers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                    <Globe className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">The AXUM Approach</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  AXUM Crowd Sourcing is a revolutionary platform that connects organizations with a global network of ethical hackers and cybersecurity experts. Through this platform, companies can crowdsource their security needs, allowing a diverse and experienced community to find vulnerabilities before malicious actors do.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 rounded-3xl shadow-xl p-8 border border-red-200 dark:border-red-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full">
                    <BarChart className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-800 dark:text-red-400">Key Benefits</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 dark:bg-red-900/30 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                      <Users className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Global Expertise</h4>
                      <p className="text-gray-700 dark:text-gray-300">Tap into the collective knowledge of cybersecurity professionals worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 dark:bg-red-900/30 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                      <DollarSign className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Cost-Effectiveness</h4>
                      <p className="text-gray-700 dark:text-gray-300">Pay only for results, making it budget-friendly for businesses of all sizes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 dark:bg-red-900/30 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                      <RefreshCw className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Continuous Improvement</h4>
                      <p className="text-gray-700 dark:text-gray-300">Benefit from ongoing security assessments, not just one-time audits</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
              Our Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
              How AXUM Crowd Sourcing Works
            </h2>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              A streamlined, secure process for identifying and addressing vulnerabilities
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
            
            <div className="space-y-12 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  className="relative flex flex-col md:flex-row items-center gap-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="md:absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center border-4 ${
                        activeStep === index 
                          ? "bg-red-600 border-white dark:border-gray-900 scale-110" 
                          : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                      } transition-all duration-300`}
                      onClick={() => setActiveStep(index)}
                    >
                      {step.icon}
                    </div>
                  </div>
                  
                  <div 
                    className={`md:w-[45%] rounded-2xl p-6 border transition-all duration-300 ${
                      index % 2 === 0 
                        ? "md:mr-auto md:ml-0 md:pl-12" 
                        : "md:ml-auto md:mr-0 md:pr-12"
                    } ${
                      activeStep === index
                        ? "bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 border-red-200 dark:border-red-700/50 shadow-lg"
                        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full px-3 py-1 text-sm font-bold">
                        Step {step.id}
                      </div>
                      <h3 className={`font-bold text-lg ${
                        activeStep === index 
                          ? "text-red-800 dark:text-red-400" 
                          : "text-gray-900 dark:text-white"
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AXUM Crowd Sourcing */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/10 dark:to-red-800/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
              Advantages
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
              Why Choose AXUM Crowd Sourcing?
            </h2>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              More than just security - a partnership with the global cybersecurity community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit) => (
              <motion.div
                key={benefit.id}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                      {benefit.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
              Proven Results with AXUM Crowd Sourcing
            </h2>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              See how organizations have transformed their security posture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((caseStudy) => (
              <motion.div
                key={caseStudy.id}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{caseStudy.title}</h3>
                  
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {caseStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-red-600 dark:text-red-400">{metric.value}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 space-y-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Challenge</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Solution</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Result</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-2">{caseStudy.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900/50 dark:to-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
              Client Voices
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Discover why businesses choose AXUM SEC for their cybersecurity needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
                Common Questions
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about AXUM Crowd Sourcing
              </p>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 dark:border-gray-700">
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/10 to-red-800/20 dark:from-red-900/30 dark:to-red-800/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Ready to Transform Your Cybersecurity?
            </h2>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Join thousands of businesses that trust AXUM SEC to protect their digital assets
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                Start Your Program Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-gray-800 text-gray-900 dark:text-gray-100 px-8 py-6 text-lg">
                Request a Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CrowdSourcingPage;