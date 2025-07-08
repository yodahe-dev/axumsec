"use client";

import { motion } from "framer-motion";
import { 
  Shield, BookOpen, Monitor, Users, DollarSign, BarChart, CheckCircle,
  Lock, Key, Mail, UserCog, 
  AlertCircle, Code, Award, BadgeCheck,
  Calendar, ArrowRight, FileText, 
  GraduationCap, Briefcase, ClipboardCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

  const benefits = [
    {
      title: "Scalable Training",
      description: "Suitable for organizations of all sizes",
      icon: <BarChart className="w-6 h-6 text-red-500" />
    },
    {
      title: "Cost-Effective",
      description: "Affordable cybersecurity education",
      icon: <DollarSign className="w-6 h-6 text-red-500" />
    },
    {
      title: "Convenient Access",
      description: "Available anytime, anywhere",
      icon: <Monitor className="w-6 h-6 text-red-500" />
    },
    {
      title: "Enhanced Security",
      description: "Reduced risk of breaches",
      icon: <Shield className="w-6 h-6 text-red-500" />
    }
  ];

export default function Benefits() {
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
            Benefits of AXNESS Training
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Transform your organization's security posture with our comprehensive training programs
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
                <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
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
