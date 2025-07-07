'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Globe, Shield, Users, BarChart, Cpu, Lock } from 'lucide-react'

const benefits = [
  {
    id: 1,
    title: 'Access to Top Talent',
    description: 'Connect with the world\'s best ethical hackers bringing unique skills to your security challenges.',
    icon: <Users className="h-6 w-6" />
  },
  {
    id: 2,
    title: 'Diverse Perspectives',
    description: 'Global network ensures comprehensive coverage from multiple angles.',
    icon: <Globe className="h-6 w-6" />
  },
  {
    id: 3,
    title: 'Speed and Efficiency',
    description: 'Accelerated vulnerability discovery enables rapid threat response.',
    icon: <BarChart className="h-6 w-6" />
  },
  {
    id: 4,
    title: 'Secure and Confidential',
    description: 'Strict confidentiality agreements protect your sensitive data.',
    icon: <Lock className="h-6 w-6" />
  },
  {
    id: 5,
    title: 'Flexible and Scalable',
    description: 'Tailored solutions that grow with your organization.',
    icon: <Cpu className="h-6 w-6" />
  },
  {
    id: 6,
    title: 'Proven Results',
    description: 'Organizations trust AXUM to deliver measurable security improvements.',
    icon: <Shield className="h-6 w-6" />
  }
]

export default function Benefits() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/10 dark:to-red-800/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
            Advantages
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            Why Choose AXUM Crowd Sourcing?
          </h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            More than just security - a partnership with the global cybersecurity community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.id}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                    {benefit.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
