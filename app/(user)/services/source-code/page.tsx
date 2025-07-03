'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  ShieldCheck, 
  Search, 
  FileText, 
  Lightbulb,
  ArrowRight,
  Clock,
  BarChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SourceCodeAnalysisPage = () => {
  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Static & Dynamic Analysis",
      description: "Comprehensive code review with static analysis and runtime behavior assessment"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Early Detection",
      description: "Identify vulnerabilities early to reduce costs and improve security"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Security Best Practices",
      description: "Actionable recommendations for secure coding standards"
    }
  ];

  const analysisProcess = [
    {
      step: "1",
      title: "Code Acquisition",
      description: "Secure transfer of your codebase to our analysis environment",
      icon: <Code className="w-6 h-6" />
    },
    {
      step: "2",
      title: "Static Analysis",
      description: "Automated scanning for common vulnerabilities and code smells",
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: "3",
      title: "Manual Code Review",
      description: "Expert analysis of critical components and business logic",
      icon: <Search className="w-6 h-6" />
    },
    {
      step: "4",
      title: "Dynamic Analysis",
      description: "Runtime behavior assessment and vulnerability validation",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      step: "5",
      title: "Reporting & Remediation",
      description: "Detailed findings with prioritized fixes and best practices",
      icon: <ShieldCheck className="w-6 h-6" />
    }
  ];

  const vulnerabilityTypes = [
    {
      name: "Injection Vulnerabilities",
      description: "SQLi, Command Injection, LDAP Injection",
      risk: "Critical"
    },
    {
      name: "Authentication Flaws",
      description: "Weak password handling, session management issues",
      risk: "High"
    },
    {
      name: "Sensitive Data Exposure",
      description: "Hardcoded credentials, improper data handling",
      risk: "High"
    },
    {
      name: "Broken Access Control",
      description: "Privilege escalation, insecure direct object references",
      risk: "Critical"
    },
    {
      name: "Security Misconfigurations",
      description: "Default configurations, unnecessary features enabled",
      risk: "Medium"
    },
    {
      name: "Insecure Dependencies",
      description: "Vulnerable libraries and outdated components",
      risk: "High"
    }
  ];

  const languages = [
    {
      name: "JavaScript/TypeScript",
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.103-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.337-.404-.482-.586-.621-.378-.27-1.888-.657-3.12-.657-1.2 0-2.4.345-3.225 1.005-.45.39-.81.9-1.035 1.53-.24.69-.285 1.755-.285 2.805 0 1.065.045 1.98.285 2.895.225.645.585 1.215 1.035 1.605.825.66 2.025 1.005 3.225 1.005 1.275 0 2.385-.405 3.12-.75.36-.165.69-.405.96-.705.27-.315.45-.705.57-1.125.12-.42.165-.885.165-1.38 0-.48-.045-.915-.165-1.32zm-8.955-3.21c-.18 1.17-.72 1.965-1.605 2.25-.465.18-1.035.225-1.59.225H8.098V7.5h1.305c1.17 0 1.965.18 2.43.57.465.39.705.975.705 1.755 0 .69-.21 1.23-.63 1.59-.42.36-1.02.555-1.755.555h-.57v3.15z"/>
      </svg>,
      description: "Node.js, React, Angular, Vue, and other JS frameworks"
    },
    {
      name: "Python",
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.329 0 .656.329.656.778v1.969c0 .449-.328.778-.656.778h-1.969c-.328 0-.656-.329-.656-.778V6.111c0-.449.328-.778.656-.778h1.97zm-2.047 6.822c-.328 0-.656.328-.656.777v1.969c0 .45.328.778.656.778h1.97c.328 0 .656-.329.656-.778v-1.97c0-.448-.328-.777-.657-.777h-1.97zM12 6.232a5.54 5.54 0 0 0-5.539 5.539c0 3.085 2.468 5.539 5.539 5.539 3.07 0 5.538-2.454 5.538-5.539 0-3.07-2.468-5.54-5.538-5.54z"/>
      </svg>,
      description: "Django, Flask, FastAPI, and other Python frameworks"
    },
    {
      name: "Java/Kotlin",
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.37 17.51c-.18.36-.36.69-.54 1.02-.36.36-.75.69-1.14.96-.36.24-.75.48-1.2.6-.54.18-1.08.24-1.68.24H0v-1.5h4.29c.42 0 .81-.06 1.17-.18.36-.12.69-.3.99-.54.3-.24.57-.51.81-.84.24-.33.45-.69.63-1.08v-8.5h1.5v8.84zm8.76-1.74c-.24.36-.51.69-.81.99-.3.3-.63.57-.99.81-.36.24-.75.45-1.17.63-.42.18-.87.27-1.35.27-.48 0-.93-.09-1.35-.27-.42-.18-.81-.39-1.17-.63-.36-.24-.69-.51-.99-.81-.3-.3-.57-.63-.81-.99-.24-.36-.45-.75-.63-1.17-.18-.42-.27-.87-.27-1.35 0-.48.09-.93.27-1.35.18-.42.39-.81.63-1.17.24-.36.51-.69.81-.99.3-.3.63-.57.99-.81.36-.24.75-.45 1.17-.63.42-.18.87-.27 1.35-.27.48 0 .93.09 1.35.27.42.18.81.39 1.17.63.36.24.69.51.99.81.3.3.57.63.81.99.24.36.45.75.63 1.17.18.42.27.87.27 1.35 0 .48-.09.93-.27 1.35-.18.42-.39.81-.63 1.17zm-1.5-3.96c0-.36-.06-.69-.18-1.02-.12-.33-.3-.63-.54-.87-.24-.24-.51-.42-.84-.54-.33-.12-.69-.18-1.08-.18-.39 0-.75.06-1.08.18-.33.12-.63.3-.87.54-.24.24-.42.54-.54.87-.12.33-.18.66-.18 1.02 0 .36.06.69.18 1.02.12.33.3.63.54.87.24.24.54.42.87.54.33.12.69.18 1.08.18.39 0 .75-.06 1.08-.18.33-.12.63-.3.87-.54.24-.24.42-.54.54-.87.12-.33.18-.66.18-1.02z"/>
      </svg>,
      description: "Spring Boot, Micronaut, and other JVM-based applications"
    },
    {
      name: "C#/.NET",
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm-1.5 4.5h3v3h-3v-3zm3 12h-3v-9h3v9zm-6-9h3v9h-3v-9z"/>
      </svg>,
      description: ".NET Core, ASP.NET, and other Microsoft technologies"
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Fixing vulnerabilities early is 30x cheaper than post-deployment",
      value: "30x"
    },
    {
      title: "Risk Mitigation",
      description: "Reduce security breaches by identifying flaws before production",
      value: "75%"
    },
    {
      title: "Compliance",
      description: "Meet regulatory requirements with verifiable code security",
      value: "100%"
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
              <Code className="w-4 h-4 mr-2 text-red-600" />
              <span className="text-red-600 font-medium">Code Security</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600">
              Secure Your Software Development with Source Code Analysis
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              The security of your software begins with the source code. Our analysis provides a thorough review of your application's codebase to identify and mitigate vulnerabilities before they reach production.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-6 px-8 text-lg font-bold transition-all">
                Analyze Your Source Code
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="py-6 px-8 text-lg border-gray-800 text-gray-800 hover:bg-gray-50 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 transition-all"
              >
                View Sample Report
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
              Comprehensive Code Security
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Identify and eliminate vulnerabilities at the source
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
              Why Source Code Analysis?
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

      {/* Analysis Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Our Source Code Analysis Process
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
              {analysisProcess.map((step, index) => (
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

      {/* Languages Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Supported Languages & Frameworks
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              We analyze code across all major programming languages
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-600 transition-colors">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {lang.icon}
                    </div>
                    <CardTitle className="text-center">{lang.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 dark:text-gray-400">{lang.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vulnerability Types */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Common Code Vulnerabilities We Detect
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Identifying security flaws before they become exploits
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vulnerabilityTypes.map((vuln, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-600 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{vuln.name}</CardTitle>
                      <Badge 
                        variant="outline" 
                        className={
                          vuln.risk === "Critical" ? "text-red-700 dark:text-red-400 border-red-700 dark:border-red-400" :
                          vuln.risk === "High" ? "text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400" :
                          "text-yellow-600 dark:text-yellow-400 border-yellow-600 dark:border-yellow-400"
                        }
                      >
                        {vuln.risk} Risk
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{vuln.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your Codebase Today</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Don't risk security breaches from vulnerable code. Our experts will identify and help you fix security weaknesses at the source.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-6 px-8 text-lg font-bold shadow-lg">
                Analyze Your Source Code
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SourceCodeAnalysisPage;