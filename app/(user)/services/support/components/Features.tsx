"use client";

import { motion } from "framer-motion";
import { 
  Shield, Headphones, Clock, Zap, 
  Activity, Lock, AlertCircle, BarChart,
  Server, Users, MessageCircle, ArrowRight,
  BadgeCheck, Globe, Cpu, FileText,
  Calendar, CheckCircle, User
} from "lucide-react";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

  const features = [
    {
      icon: <Activity className="w-8 h-8 text-red-500" />,
      title: "Real-Time Monitoring",
      description: "Continuous surveillance of your systems to detect threats as they emerge."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: "Incident Response",
      description: "Immediate action on security alerts to minimize impact and damage."
    },
    {
      icon: <BarChart className="w-8 h-8 text-red-500" />,
      title: "Threat Intelligence",
      description: "Proactive identification of emerging threats targeting your industry."
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "Vulnerability Management",
      description: "Continuous scanning and patching of security weaknesses."
    },
    {
      icon: <Users className="w-8 h-8 text-red-500" />,
      title: "Security Consultation",
      description: "Expert guidance on security best practices and architecture."
    },
    {
      icon: <Server className="w-8 h-8 text-red-500" />,
      title: "Infrastructure Protection",
      description: "24/7 defense of networks, servers, and cloud environments."
    }
  ];

export default function Features() {
  return (
    <div>
            <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Comprehensive Security Support Services
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our expert team provides round-the-clock protection for your digital assets
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all group">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
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
