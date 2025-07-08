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

  const steps = [
    {
      icon: <FileText className="w-8 h-8 text-red-500" />,
      title: "Initial Assessment",
      description: "We evaluate your security posture and identify critical assets."
    },
    {
      icon: <Activity className="w-8 h-8 text-red-500" />,
      title: "Continuous Monitoring",
      description: "Our systems keep watch over your infrastructure 24/7."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: "Threat Detection",
      description: "AI-powered analysis identifies suspicious activities."
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: "Rapid Response",
      description: "Our team takes immediate action to contain threats."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-500" />,
      title: "Recovery & Reporting",
      description: "We restore systems and provide detailed incident reports."
    }
  ];

export default function How() {
  return (
    <div>
           <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How Our 24/7 Security Support Works
          </motion.h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-200 dark:bg-red-900/30 hidden md:block"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 md:left-0 md:transform-none bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">
                    {index + 1}
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
      </section>
    </div>
  )
}
