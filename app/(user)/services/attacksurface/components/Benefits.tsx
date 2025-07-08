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

export default function Benefits() {
  return (
    <div>
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
    </div>
  )
}
