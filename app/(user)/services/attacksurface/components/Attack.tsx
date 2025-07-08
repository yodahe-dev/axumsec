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

export default function Attack() {
  return (
    <div>
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
    </div>
  )
}
