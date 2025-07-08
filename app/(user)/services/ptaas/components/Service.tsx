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


  const serviceTiers = [
    {
      tier: "Essential",
      price: "$5,999",
      description: "Perfect for small businesses starting their security journey",
      features: [
        "Annual network penetration test",
        "Web application testing (1 app)",
        "Basic vulnerability reporting",
        "48-hour report delivery"
      ]
    },
    {
      tier: "Professional",
      price: "$12,999",
      description: "Comprehensive protection for growing businesses",
      features: [
        "Quarterly penetration tests",
        "Web application testing (3 apps)",
        "API security testing",
        "Real-time dashboard access",
        "24-hour report delivery",
        "Remediation guidance"
      ],
      popular: true
    },
    {
      tier: "Enterprise",
      price: "Custom",
      description: "Complete security solution for large organizations",
      features: [
        "Continuous penetration testing",
        "Unlimited applications and APIs",
        "Cloud infrastructure testing",
        "Dedicated security team",
        "Executive reporting",
        "24/7 support",
        "Compliance assistance"
      ]
    }
  ];


export default function Service() {
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
              Flexible Service Tiers
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Choose the plan that fits your security needs and budget
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {serviceTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`${tier.popular ? 'scale-105' : ''}`}
              >
                <Card className={`h-full border-2 ${tier.popular ? 'border-red-500 dark:border-red-600' : 'border-gray-200 dark:border-gray-800'} relative overflow-hidden`}>
                  {tier.popular && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </div>
                  )}
                  <CardHeader className="pb-0">
                    <CardTitle className="text-2xl">{tier.tier}</CardTitle>
                    <div className="flex items-baseline mt-2">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">{tier.price}</span>
                      {tier.price !== "Custom" && <span className="text-gray-600 dark:text-gray-400 ml-2">/ year</span>}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="mt-6">
                    <ul className="space-y-3">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-8 ${tier.popular ? 'bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900' : 'bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700'}`}
                    >
                      Get Started
                    </Button>
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
