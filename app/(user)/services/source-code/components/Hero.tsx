"use client";

import { motion } from 'framer-motion';
import { 
  Code, 
  ShieldCheck, 
  Search, 
  FileText, 
  Lightbulb,
  ArrowRight,
  Clock,
  BarChart
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
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-15 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4 py-1.5 px-4 bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700">
              <Code className="w-4 h-4 mr-2 text-red-600" />
              <span className="text-red-600 font-medium">Code Security</span>
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600">
              Secure Your Software Development with Source Code Analysis
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
              The security of your software begins with the source code. Our analysis provides a thorough review of your application's codebase to identify and mitigate vulnerabilities before they reach production.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white py-6 px-8 text-lg font-bold transition-all">
                Analyze Your Source Code
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="py-6 px-8 text-lg border-gray-800 text-gray-800 hover:bg-gray-50 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 transition-all"
              >
                View Sample Report
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
