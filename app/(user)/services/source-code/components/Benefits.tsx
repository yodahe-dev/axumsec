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


  const benefits = [
    {
      title: "Cost Reduction",
      description: "Fixing vulnerabilities early is 30x cheaper than post-deployment",
      value: "30x"
    },
    {
      title: "Risk Mitigation",
      description: "Reduce security breaches by identifying flaws before production",
      value: "75%"
    },
    {
      title: "Compliance",
      description: "Meet regulatory requirements with verifiable code security",
      value: "100%"
    }
  ];


export default function Benefits() {
  return (
    <div>
            <section className="py-16 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Why Source Code Analysis?
            </motion.h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white h-full">
                  <div className="text-4xl font-bold mb-4">{benefit.value}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
