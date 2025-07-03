// app/industries/security/page.tsx
'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Code, 
  Users, 
  GitMerge, 
  LayoutTemplate, 
  BookOpen,
  ArrowRight,
  BarChart,
  Zap,
  Lock,
  FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SecureDevelopmentPage = () => {
  const features = [
    {
      icon: <LayoutTemplate className="w-8 h-8" />,
      title: "Security by Design",
      description: "Integrate security into the design phase to prevent vulnerabilities"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Developer Training",
      description: "Educate your team on secure coding practices and standards"
    },
    {
      icon: <GitMerge className="w-8 h-8" />,
      title: "Continuous Integration",
      description: "Automate security testing in your CI/CD pipeline"
    }
  ];

  const sdlcStages = [
    {
      stage: "Planning",
      description: "Security requirements gathering and threat modeling",
      icon: <FileText className="w-6 h-6" />
    },
    {
      stage: "Design",
      description: "Secure architecture design and security controls implementation",
      icon: <LayoutTemplate className="w-6 h-6" />
    },
    {
      stage: "Development",
      description: "Secure coding practices and peer code reviews",
      icon: <Code className="w-6 h-6" />
    },
    {
      stage: "Testing",
      description: "Automated security scans and manual penetration testing",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      stage: "Deployment",
      description: "Secure configuration management and infrastructure hardening",
      icon: <Zap className="w-6 h-6" />
    },
    {
      stage: "Maintenance",
      description: "Vulnerability management and security patching",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "Vulnerability Reduction",
      description: "Teams using secure SDLC reduce vulnerabilities by up to 80%",
      value: "80%"
    },
    {
      title: "Cost Savings",
      description: "Fixing issues early is 30x cheaper than post-deployment",
      value: "30x"
    },
    {
      title: "Faster Releases",
      description: "Automated security enables 50% faster release cycles",
      value: "50%"
    }
  ];

  const trainingModules = [
    {
      title: "Secure Coding Fundamentals",
      topics: ["Input validation", "Authentication", "Session management", "Error handling"]
    },
    {
      title: "Threat Modeling Workshop",
      topics: ["STRIDE methodology", "Attack surface analysis", "Risk prioritization", "Mitigation strategies"]
    },
    {
      title: "Cloud Security Essentials",
      topics: ["IAM best practices", "Secure configuration", "Secrets management", "Container security"]
    },
    {
      title: "DevSecOps Implementation",
      topics: ["CI/CD security", "Infrastructure as Code", "SAST/DAST integration", "Policy as Code"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4 py-1.5 px-4 bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700">
              <ShieldCheck className="w-4 h-4 mr-2 text-red-600" />
              <span className="text-red-600 font-medium">Secure Development</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600">
              Build Security into Every Stage of Development
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Secure development practices are essential for creating robust, resilient software. 
              We provide guidance and support throughout the software development lifecycle, helping your team 
              incorporate security best practices from start to finish.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-6 px-8 text-lg font-bold transition-all">
                Enhance Your Development Process
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="py-6 px-8 text-lg border-gray-800 text-gray-800 hover:bg-gray-50 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 transition-all"
              >
                View Case Studies
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
              Secure Development Lifecycle
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Embed security at every phase of your development process
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

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Benefits of Secure Development
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white h-full">
                  <div className="text-4xl font-bold mb-4">{benefit.value}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SDLC Stages */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Security Throughout the Development Lifecycle
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Our approach integrates security at every phase of software development
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdlcStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-600 transition-colors">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 dark:bg-red-900/20 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                        {stage.icon}
                      </div>
                      <CardTitle>{stage.stage}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{stage.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-white dark:from-red-900/10 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Developer Security Training
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Empower your team with secure coding knowledge and practices
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingModules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800">
                  <CardHeader>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {module.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                className="py-6 px-8 text-lg border-red-600 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900/20"
              >
                View Full Curriculum
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DevSecOps Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white">
                <GitMerge className="w-12 h-12 mb-6" />
                <h2 className="text-3xl font-bold mb-4">DevSecOps Implementation</h2>
                <p className="text-lg mb-6">
                  Integrate security seamlessly into your CI/CD pipeline with our DevSecOps solutions.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Automated security testing in CI/CD workflows</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Infrastructure as Code security scanning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Container and Kubernetes security</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Policy as Code enforcement</span>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our DevSecOps Approach</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We help you shift security left in your development process, implementing automated security 
                checks that run with every code commit, without slowing down your development teams.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4">
                    <Code className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">SAST/DAST Integration</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Static and Dynamic Application Security Testing built into your pipeline
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4">
                    <Lock className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Secrets Detection</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Prevent accidental exposure of credentials and API keys
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4">
                    <BarChart className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Compliance as Code</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Automatically enforce security policies and compliance requirements
                    </p>
                  </div>
                </div>
              </div>
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
            <div className="bg-red-100 dark:bg-red-900/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShieldCheck className="w-10 h-10 text-red-600" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Development Process</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Build security into your software from the ground up with our secure development solutions.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-6 px-8 text-lg font-bold shadow-lg">
                Enhance Your Development Process
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SecureDevelopmentPage;