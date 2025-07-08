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

export default function CTA() {
  return (
    <div>
            <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute top-10 left-10 w-64 h-64 bg-red-400/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-300/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't Wait for a Breach to Secure Your Systems
            </h2>
            
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              Our security experts are ready to protect your business 24 hours a day, 365 days a year.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-white text-red-600 hover:bg-gray-100 py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
                size="lg"
              >
                <Headphones className="mr-2 w-5 h-5" />
                Get 24/7 Support Now
              </Button>
              
              <Button 
                variant="outline"
                className="text-white border-white hover:bg-red-700 py-6 px-8 text-lg transition-transform hover:scale-105"
                size="lg"
              >
                <User className="mr-2 w-5 h-5" />
                Speak to Security Expert
              </Button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
