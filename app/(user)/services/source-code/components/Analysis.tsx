"use client";

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

export default function Analysis() {
  return (
    <div>
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
    </div>
  )
}
