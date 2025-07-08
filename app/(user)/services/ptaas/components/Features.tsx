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

  const features = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Customizable Testing",
      description: "Tailored testing strategies to meet your unique security requirements"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-Time Reporting",
      description: "Detailed reports with prioritized recommendations for remediation"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Continuous Security",
      description: "Ongoing penetration testing to keep your security posture strong"
    }
  ];

export default function Features() {
  return (
    <div>
            <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Proactive Security Testing
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Our PTaaS solution provides continuous security assessment to protect your digital assets
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
