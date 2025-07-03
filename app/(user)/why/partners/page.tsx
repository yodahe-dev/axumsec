"use client";

import { motion } from "framer-motion";
import { Handshake, ShieldCheck, Network, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PartnersPage = () => {
  const partners = [
    {
      name: "CyberShield Inc.",
      about: "Global leader in threat intelligence and endpoint security",
      contribution: "Provides real-time threat data and AI-powered detection"
    },
    {
      name: "Nexus Tech",
      about: "Cloud infrastructure and zero-trust network specialists",
      contribution: "Enables secure cloud migrations and hybrid environments"
    },
    {
      name: "Sentinel Labs",
      about: "Innovators in behavioral analytics and deception technology",
      contribution: "Enhances our threat hunting and incident response capabilities"
    }
  ];

  const testimonials = [
    {
      quote: "Our partnership with AXUM SEC has been incredibly successful. Their expertise combined with our technology creates a powerful force in cybersecurity.",
      author: "Sarah Johnson, CEO CyberShield Inc."
    },
    {
      quote: "Working with AXUM SEC has allowed us to expand our reach and deliver more comprehensive solutions to our clients.",
      author: "Michael Chen, CTO Nexus Tech"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center justify-center px-4 py-1 bg-red-50 dark:bg-red-900/20 rounded-full mb-4">
            <Handshake className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-600 font-medium">Our Partnerships</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600">
            Strategic Partnerships for Enhanced Cybersecurity
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Collaborating with Industry Leaders to Deliver Unparalleled Protection
          </p>
        </motion.div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl h-full p-8 text-white">
              <ShieldCheck className="w-12 h-12 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Why Partner With AXUM SEC?</h2>
              <p className="text-lg">
                AXUM SEC has established strategic partnerships with leading cybersecurity firms, 
                technology providers, and industry experts. These collaborations enhance our ability 
                to offer comprehensive, cutting-edge solutions that protect your business from evolving threats.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Our Strategic Approach</h3>
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4">
                  <Network className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Cybersecurity Firms</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We collaborate with top-tier cybersecurity firms to deliver the most advanced and reliable security solutions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-600 dark:text-red-400">
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Technology Providers</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our partnerships enable integration of the latest tools and platforms into our services.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-600 dark:text-red-400">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Industry Experts</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    We work with recognized experts who bring valuable insights to stay ahead of emerging threats.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Partnership Benefits</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our alliances deliver tangible advantages that strengthen your security posture
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-0 shadow-lg dark:bg-gray-900">
                <CardHeader>
                  <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-600 dark:text-red-400">
                      <path d="m7 11 2-2-2-2"/>
                      <path d="M11 13h4"/>
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                    </svg>
                  </div>
                  <CardTitle>Advanced Technology Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Early access to cutting-edge security tools and innovations through our partner network
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-0 shadow-lg dark:bg-gray-900">
                <CardHeader>
                  <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-600 dark:text-red-400">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                    </svg>
                  </div>
                  <CardTitle>Enhanced Expertise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Specialized knowledge and skills from industry leaders integrated into our solutions
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full border-0 shadow-lg dark:bg-gray-900">
                <CardHeader>
                  <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-red-600 dark:text-red-400">
                      <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                    </svg>
                  </div>
                  <CardTitle>Collaborative Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Jointly-developed innovations addressing your unique security challenges
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Partners */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Key Partners</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Strategic alliances that amplify our cybersecurity capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800">
                <CardHeader>
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <CardTitle className="mt-4">{partner.name}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">{partner.about}</p>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-red-600 dark:text-red-400">Contribution:</p>
                  <p>{partner.contribution}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-white dark:from-red-900/10 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted By Our Partners</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="border-0 shadow-lg dark:bg-gray-900">
                  <CardContent className="p-6">
                    <div className="text-yellow-400 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Become an AXUM SEC Partner</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Join our network of cybersecurity innovators and expand your reach
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white py-6 px-8 text-lg transition-all transform hover:-translate-y-1">
                Join Our Network <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="py-6 px-8 text-lg border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 dark:text-red-400 dark:border-red-400 transition-all transform hover:-translate-y-1"
              >
                Learn More About Partnerships
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;