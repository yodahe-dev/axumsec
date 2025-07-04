"use client";

import { motion } from "framer-motion";
import { 
  Shield, Eye, Layout, Network, Search, 
  AlertCircle, BarChart, Lock, Server, 
  Cpu, Key, UserCheck, ClipboardCheck, 
  ArrowRight, CheckCircle, Zap, Activity,
  FileText, Calendar, BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AttackSurfacePage = () => {
  const asmSteps = [
    {
      icon: <Search className="w-8 h-8 text-red-500" />,
      step: "1",
      title: "Discovery & Inventory",
      description: "Identify all digital assets including known and unknown endpoints, systems, and applications."
    },
    {
      icon: <Activity className="w-8 h-8 text-red-500" />,
      step: "2",
      title: "Continuous Monitoring",
      description: "Real-time tracking of your digital environment to detect changes and new vulnerabilities."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      step: "3",
      title: "Risk Assessment",
      description: "Prioritize vulnerabilities based on exploitability, impact, and asset criticality."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      step: "4",
      title: "Mitigation & Remediation",
      description: "Implement security controls and decommission unnecessary assets."
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-red-500" />,
      step: "5",
      title: "Reporting & Compliance",
      description: "Detailed reports to ensure continuous improvement and regulatory compliance."
    }
  ];

  const controlSteps = [
    {
      icon: <FileText className="w-8 h-8 text-red-500" />,
      step: "1",
      title: "Assessment & Planning",
      description: "Evaluate your security posture and develop a customized implementation plan."
    },
    {
      icon: <Server className="w-8 h-8 text-red-500" />,
      step: "2",
      title: "Control Installation",
      description: "Deploy firewalls, IDS/IPS, encryption, MFA, and other security controls."
    },
    {
      icon: <Cpu className="w-8 h-8 text-red-500" />,
      step: "3",
      title: "Configuration & Integration",
      description: "Properly configure controls and integrate with existing systems."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-500" />,
      step: "4",
      title: "Testing & Validation",
      description: "Rigorous testing to ensure controls function as intended."
    },
    {
      icon: <BarChart className="w-8 h-8 text-red-500" />,
      step: "5",
      title: "Ongoing Management",
      description: "Continuous updates, patching, and performance tuning."
    }
  ];

  const asmFeatures = [
    {
      icon: <Search className="w-6 h-6 text-red-500" />,
      title: "Comprehensive Asset Discovery",
      description: "Identify all assets including those that may have been overlooked."
    },
    {
      icon: <Activity className="w-6 h-6 text-red-500" />,
      title: "Real-Time Monitoring",
      description: "Continuous detection of vulnerabilities as they emerge."
    },
    {
      icon: <AlertCircle className="w-6 h-6 text-red-500" />,
      title: "Risk Prioritization",
      description: "Focus on the most critical risks for efficient remediation."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Actionable Insights",
      description: "Clear recommendations to strengthen your security posture."
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-red-500" />,
      title: "Compliance Support",
      description: "Ensure continuous alignment with industry standards."
    }
  ];

  const controlFeatures = [
    {
      icon: <Layout className="w-6 h-6 text-red-500" />,
      title: "Custom Implementation",
      description: "Controls tailored to your environment and business needs."
    },
    {
      icon: <Cpu className="w-6 h-6 text-red-500" />,
      title: "Comprehensive Integration",
      description: "Seamless integration with existing security infrastructure."
    },
    {
      icon: <Activity className="w-6 h-6 text-red-500" />,
      title: "Automated Monitoring",
      description: "Continuous detection and response to security incidents."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-red-500" />,
      title: "Rigorous Testing",
      description: "Thorough validation of control effectiveness."
    },
    {
      icon: <BarChart className="w-6 h-6 text-red-500" />,
      title: "Ongoing Support",
      description: "Continuous management for long-term protection."
    }
  ];

  const benefits = [
    {
      title: "Reduced Risk",
      description: "Minimize potential entry points and breach possibilities",
      icon: <Shield className="w-6 h-6 text-red-500" />
    },
    {
      title: "Proactive Security",
      description: "Stay ahead of threats with continuous monitoring",
      icon: <Zap className="w-6 h-6 text-red-500" />
    },
    {
      title: "Improved Visibility",
      description: "Real-time understanding of your digital environment",
      icon: <Eye className="w-6 h-6 text-red-500" />
    },
    {
      title: "Compliance Assurance",
      description: "Meet regulatory requirements effectively",
      icon: <BadgeCheck className="w-6 h-6 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-300 dark:bg-red-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-6 hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 mr-2" />
            Proactive Cyber Defense
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Minimize Your Exposure to Cyber Threats
          </h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Comprehensive solutions to identify, monitor, and reduce your attack surface while implementing robust security controls.
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
              <Eye className="mr-2 w-5 h-5" />
              Manage Your Attack Surface
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Request Free Assessment
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Attack Surface Management Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-4">
              Service 1
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Attack Surface Management
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
              Gain continuous visibility and control over your digital assets to minimize cyber threats.
            </p>
          </div>
          
          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              How Attack Surface Management Works
            </h3>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-200 dark:bg-red-900/30 hidden md:block"></div>
              
              <div className="grid md:grid-cols-5 gap-8">
                {asmSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 md:left-0 md:transform-none bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">
                      {step.step}
                    </div>
                    
                    <Card className="h-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg pt-10">
                      <CardHeader>
                        <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                          {step.icon}
                        </div>
                        <CardTitle className="text-xl text-center text-gray-900 dark:text-white">
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-400 text-center">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Key Features
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {asmFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg text-center text-gray-900 dark:text-white">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 text-center">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Control Installation Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-4">
              Service 2
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Cyber Security Control Installation
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
              Implement robust security controls to protect your digital assets against evolving threats.
            </p>
          </div>
          
          {/* How It Works */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              How Security Control Installation Works
            </h3>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-200 dark:bg-red-900/30 hidden md:block"></div>
              
              <div className="grid md:grid-cols-5 gap-8">
                {controlSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 md:left-0 md:transform-none bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">
                      {step.step}
                    </div>
                    
                    <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg pt-10">
                      <CardHeader>
                        <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                          {step.icon}
                        </div>
                        <CardTitle className="text-xl text-center text-gray-900 dark:text-white">
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-400 text-center">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Key Features */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
              Key Features
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {controlFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                    <CardHeader>
                      <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg text-center text-gray-900 dark:text-white">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 text-center">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Benefits of Our Security Solutions
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Transform your security posture with comprehensive protection and proactive defense
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl text-center text-gray-900 dark:text-white">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Strengthen Your Cyber Defenses?
          </h2>
          
          <p className="text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take the first step toward comprehensive security with AXUM SEC's expert solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              <Shield className="mr-2 w-5 h-5" />
              Secure Your Digital Assets
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Request Security Assessment
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AttackSurfacePage;