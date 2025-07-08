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


export default function Hero() {
  return (
    <div>
            <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-300 dark:bg-red-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-6 hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 mr-2" />
            Proactive Cyber Defense
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Minimize Your Exposure to Cyber Threats
          </h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Comprehensive solutions to identify, monitor, and reduce your attack surface while implementing robust security controls.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              <Eye className="mr-2 w-5 h-5" />
              Manage Your Attack Surface
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Request Free Assessment
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
