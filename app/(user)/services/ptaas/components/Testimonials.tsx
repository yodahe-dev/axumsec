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





export default function Testimonials() {
  return (
    <div>
            <section className="py-16 bg-gradient-to-r from-red-50 to-white dark:from-red-900/10 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Trusted by Security Teams
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border-0 shadow-lg dark:bg-gray-900">
                <CardContent className="p-6">
                  <div className="text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                    "AXUM SEC's PTaaS has transformed our security posture. The continuous testing model caught vulnerabilities our internal scans missed."
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">Michael Chen</p>
                  <p className="text-gray-600 dark:text-gray-400">CTO at NexTech Solutions</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="border-0 shadow-lg dark:bg-gray-900">
                <CardContent className="p-6">
                  <div className="text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                    "The real-time reporting and actionable insights have saved us countless hours. Our remediation process is now faster and more effective."
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</p>
                  <p className="text-gray-600 dark:text-gray-400">Security Director at FinSecure</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
