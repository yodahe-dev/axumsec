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

export default function Interactive() {
  return (
    <div>
            <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-6 text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                Real-Time Support Dashboard
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-400 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Access our security operations center dashboard to monitor your protection status in real-time.
              </motion.p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                  <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">System Status: Operational</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">All systems secure and monitored</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                  <div className="bg-yellow-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Recent Activity: 3 alerts handled</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">In the last 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                  <div className="bg-blue-500 w-3 h-3 rounded-full animate-pulse"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Active Threats: Low</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">No critical threats detected</p>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Button className="bg-red-600 hover:bg-red-700 py-6 px-8 text-lg">
                  <Headphones className="mr-2 w-5 h-5" />
                  Access Your Dashboard
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              className="bg-gradient-to-br from-red-100 to-white dark:from-red-900/20 dark:to-gray-800 p-8 rounded-2xl shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Security Operations Center</h3>
                <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300">
                  Live
                </Badge>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-green-400 text-sm">Network Traffic</span>
                    <span className="text-gray-400 text-sm">Normal</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 w-4/5"></div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-yellow-400 text-sm">Threat Detection</span>
                    <span className="text-gray-400 text-sm">2 Active</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 w-1/4"></div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-blue-400 text-sm">System Health</span>
                    <span className="text-gray-400 text-sm">98%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-11/12"></div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Security Analyst: Online</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Threat Intelligence: Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
