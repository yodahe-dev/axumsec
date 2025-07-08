"use client";

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

export default function How() {
  return (
    <div>
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
    </div>
  )
}
