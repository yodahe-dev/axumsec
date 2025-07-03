// app/why/different/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Target, 
  Cpu, 
  Settings, 
  Star, 
  ArrowRight,
  Check,
  Quote
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HowWeAreDifferent = () => {
  // Testimonial data
  const testimonials = [
    {
      id: 1,
      quote: "AXUM SEC's proactive strategies and cutting-edge technology have significantly improved our security posture. Their customized solutions perfectly align with our business needs.",
      author: "Sarah Johnson",
      position: "CTO, TechSecure Inc."
    },
    {
      id: 2,
      quote: "We've never worked with a cybersecurity firm that is so committed to our success. AXUM SEC's dedication to excellence is unmatched in the industry.",
      author: "Michael Rodriguez",
      position: "Director of IT, Global Finance Corp"
    }
  ];

  // Differentiators data
  const differentiators = [
    {
      id: 1,
      title: "Innovative Approach",
      icon: <Target className="h-8 w-8" />,
      points: [
        "Proactive Security: Shift from reactive to proactive security measures",
        "Adaptive Strategies: Methods evolve with the changing threat landscape",
        "Client-Centered Innovation: Tailored services for specific security concerns"
      ]
    },
    {
      id: 2,
      title: "Cutting-Edge Technology",
      icon: <Cpu className="h-8 w-8" />,
      points: [
        "Advanced Threat Detection: AI and machine learning capabilities",
        "Continuous Monitoring: 24/7 protection for your systems",
        "Innovative Platforms: Scalable, efficient, user-friendly solutions"
      ]
    },
    {
      id: 3,
      title: "Customized Solutions",
      icon: <Settings className="h-8 w-8" />,
      points: [
        "Tailored Strategies: Bespoke cybersecurity aligned with business goals",
        "Scalable Solutions: Services grow with your business",
        "Dedicated Support: Personalized implementation and optimization"
      ]
    },
    {
      id: 4,
      title: "Commitment to Excellence",
      icon: <Star className="h-8 w-8" />,
      points: [
        "Expert Team: Seasoned cybersecurity professionals",
        "Quality Assurance: Highest standards of protection",
        "Client Satisfaction: Long-standing trusted relationships"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-red-900/10 to-red-800/20 dark:from-red-900/30 dark:to-red-800/40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 dark:opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent dark:from-gray-900/80"></div>
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
              Why Choose AXUM SEC? Discover What Sets Us Apart
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Revolutionizing Cybersecurity with Innovation, Expertise, and Customized Solutions
            </motion.p>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                In an increasingly complex digital world, choosing the right cybersecurity partner is crucial. AXUM SEC stands out by combining innovative approaches, advanced technology, and tailored solutions that address the unique security challenges faced by businesses today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
              Our Differentiation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
              The AXUM SEC Difference
            </h2>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Four pillars that make our cybersecurity approach unmatched
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                        {item.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="bg-red-100 dark:bg-red-900/30 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                            <Check className="h-4 w-4 text-red-600 dark:text-red-400" />
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">{point}</p>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Spotlight */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/10 dark:to-red-800/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-6 h-full flex flex-col justify-center">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                      <Shield className="h-12 w-12 mx-auto" />
                      <h3 className="text-xl font-bold text-center mt-4">Innovation at Our Core</h3>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Innovation Philosophy</h2>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    At AXUM SEC, we believe in staying ahead of the curve by continually innovating our cybersecurity practices. Our approach is proactive, focusing on identifying and mitigating potential threats before they can impact your business.
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white">Proactive Security</h4>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Shift from reactive to proactive security measures
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white">Adaptive Strategies</h4>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Methods evolve with the changing threat landscape
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white">Client Innovation</h4>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Tailored services for specific security concerns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
              Our Technology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
              Cutting-Edge Security Technology
            </h2>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Leveraging advanced tools for unparalleled protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI-Powered Threat Detection</h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Our tools are equipped with AI and machine learning capabilities, allowing for real-time threat detection and response.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">24/7 Continuous Monitoring</h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                We provide round-the-clock monitoring services, ensuring that your systems are protected at all times.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Innovative Security Platforms</h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                From AXUM Bounty to AXUM PTaaS, our platforms offer scalable, efficient solutions tailored to your needs.
              </p>
            </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 h-full">
                  <CardContent className="p-8">
                    <Quote className="h-12 w-12 text-red-400 opacity-20 mb-4" />
                    <p className="text-gray-700 dark:text-gray-300 italic text-lg">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/10 to-red-800/20 dark:from-red-900/30 dark:to-red-800/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Experience the AXUM SEC Difference
            </h2>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              Join forward-thinking businesses that trust our innovative approach to cybersecurity
            </p>
            
            <div className="mt-10">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowWeAreDifferent;