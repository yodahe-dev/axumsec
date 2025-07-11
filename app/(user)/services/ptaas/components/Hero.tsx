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

export default function Hero() {
  return (
    <div>
            <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4 py-1.5 px-4 bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700">
              <Zap className="w-4 h-4 mr-2 text-red-600" />
              <span className="text-red-600 font-medium">Penetration Testing as a Service</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600">
              On-Demand Penetration Testing for Continuous Security
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              Simulate real-world cyber attacks to identify vulnerabilities in your systems, networks, and applications with actionable insights for remediation.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-6 px-8 text-lg font-bold transition-all">
                Request a Penetration Test
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
