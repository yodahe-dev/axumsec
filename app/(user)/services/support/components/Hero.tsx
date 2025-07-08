"use client";

import { motion } from "framer-motion";
import { 
  Headphones, 
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Support stats data
const supportStats = [
  { value: "24/7", label: "Support Availability" },
  { value: "15 min", label: "Avg Response Time" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "100+", label: "Security Experts" }
];

export default function Hero() {
  return (
    <div>
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
          <div 
            className="absolute bottom-20 right-10 w-80 h-80 bg-red-300 dark:bg-red-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-6 hover:scale-105 transition-transform">
            <Headphones className="w-5 h-5 mr-2" />
            Always-On Protection
          </Badge>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
              24/7 Cyber Security Support
            </span> for Continuous Protection
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Expert monitoring, incident response, and threat management around the clock. Sleep soundly knowing your digital assets are protected 24 hours a day, 365 days a year.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              <Headphones className="mr-2 w-5 h-5" />
              Request Immediate Support
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Consultation
            </Button>
          </motion.div>

          {/* Animated Support Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {supportStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">{stat.value}</div>
                <div className="text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}