'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Activity, 
  Settings, 
  Zap, 
  BarChart, 
  ArrowRight,
  Crosshair,
  SearchCheck,
  Bug
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PTaaSPage = () => {
  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customizable Testing",
      description: "Tailored testing strategies to meet your unique security requirements"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-Time Reporting",
      description: "Detailed reports with prioritized recommendations for remediation"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Continuous Security",
      description: "Ongoing penetration testing to keep your security posture strong"
    }
  ];

  const serviceTiers = [
    {
      tier: "Essential",
      price: "$5,999",
      description: "Perfect for small businesses starting their security journey",
      features: [
        "Annual network penetration test",
        "Web application testing (1 app)",
        "Basic vulnerability reporting",
        "48-hour report delivery"
      ]
    },
    {
      tier: "Professional",
      price: "$12,999",
      description: "Comprehensive protection for growing businesses",
      features: [
        "Quarterly penetration tests",
        "Web application testing (3 apps)",
        "API security testing",
        "Real-time dashboard access",
        "24-hour report delivery",
        "Remediation guidance"
      ],
      popular: true
    },
    {
      tier: "Enterprise",
      price: "Custom",
      description: "Complete security solution for large organizations",
      features: [
        "Continuous penetration testing",
        "Unlimited applications and APIs",
        "Cloud infrastructure testing",
        "Dedicated security team",
        "Executive reporting",
        "24/7 support",
        "Compliance assistance"
      ]
    }
  ];

  const testingProcess = [
    {
      step: "1",
      title: "Discovery & Scoping",
      icon: <SearchCheck className="w-6 h-6" />,
      description: "We define the scope of your penetration test based on your infrastructure and business needs"
    },
    {
      step: "2",
      title: "Reconnaissance",
      icon: <Crosshair className="w-6 h-6" />,
      description: "Our experts gather intelligence on your systems to identify potential entry points"
    },
    {
      step: "3",
      title: "Vulnerability Analysis",
      icon: <Bug className="w-6 h-6" />,
      description: "We identify and validate security weaknesses using advanced techniques"
    },
    {
      step: "4",
      title: "Exploitation",
      icon: <Zap className="w-6 h-6" />,
      description: "Ethical hackers attempt to exploit vulnerabilities to assess real-world impact"
    },
    {
      step: "5",
      title: "Reporting & Remediation",
      icon: <BarChart className="w-6 h-6" />,
      description: "Detailed reports with actionable insights and remediation guidance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4 py-1.5 px-4 bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700">
              <Zap className="w-4 h-4 mr-2 text-red-600" />
              <span className="text-red-600 font-medium">Penetration Testing as a Service</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600">
              On-Demand Penetration Testing for Continuous Security
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Simulate real-world cyber attacks to identify vulnerabilities in your systems, networks, and applications with actionable insights for remediation.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-6 px-8 text-lg font-bold transition-all">
                Request a Penetration Test
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Proactive Security Testing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Our PTaaS solution provides continuous security assessment to protect your digital assets
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Our Penetration Testing Process
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Comprehensive security assessment following industry best practices
            </motion.p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-red-800 -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {testingProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative z-10"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-red-800 flex items-center justify-center mb-4">
                      <span className="text-white text-xl font-bold">{step.step}</span>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-lg w-full">
                      <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                        {step.icon}
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Flexible Service Tiers
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Choose the plan that fits your security needs and budget
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`${tier.popular ? 'scale-105' : ''}`}
              >
                <Card className={`h-full border-2 ${tier.popular ? 'border-red-500 dark:border-red-600' : 'border-gray-200 dark:border-gray-800'} relative overflow-hidden`}>
                  {tier.popular && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <CardHeader className="pb-0">
                    <CardTitle className="text-2xl">{tier.tier}</CardTitle>
                    <div className="flex items-baseline mt-2">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                      {tier.price !== "Custom" && <span className="text-gray-600 dark:text-gray-400 ml-2">/ year</span>}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="mt-6">
                    <ul className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-8 ${tier.popular ? 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900' : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700'}`}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-white dark:from-red-900/10 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Trusted by Security Teams
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
                    "AXUM SEC's PTaaS has transformed our security posture. The continuous testing model caught vulnerabilities our internal scans missed."
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">Michael Chen</p>
                  <p className="text-gray-600 dark:text-gray-400">CTO at NexTech Solutions</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
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
                    "The real-time reporting and actionable insights have saved us countless hours. Our remediation process is now faster and more effective."
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</p>
                  <p className="text-gray-600 dark:text-gray-400">Security Director at FinSecure</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/30 dark:to-red-900/10 rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Strengthen Your Security?</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Join hundreds of companies who trust AXUM SEC for continuous security testing
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-6 px-8 text-lg font-bold shadow-lg">
                Request a Penetration Test
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PTaaSPage;