"use client";

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';


export default function Hero() {
  return (
    <div>
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-red-900/10 to-red-800/20 dark:from-red-900/30 dark:to-red-800/40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 dark:opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent dark:from-gray-900/80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
              Why AXUM SEC
            </Badge>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-red-700 bg-clip-text text-transparent dark:from-white dark:to-red-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Why Choose AXUM SEC? Discover What Sets Us Apart
            </motion.h1>
            <motion.p 
              className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Revolutionizing Cybersecurity with Innovation, Expertise, and Customized Solutions
            </motion.p>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                In an increasingly complex digital world, choosing the right cybersecurity partner is crucial. AXUM SEC stands out by combining innovative approaches, advanced technology, and tailored solutions that address the unique security challenges faced by businesses today.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
