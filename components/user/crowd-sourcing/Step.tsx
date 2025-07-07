'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Layout, Smartphone, Search, Check, RefreshCw } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function Step() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 1,
      title: 'Define Your Security Needs',
      description: 'Outline your security requirements for specific applications, networks, or systems.',
      icon: <Layout className="h-6 w-6" />
    },
    {
      id: 2,
      title: 'Launch Your Program',
      description: 'Invite ethical hackers worldwide to analyze your systems for potential vulnerabilities.',
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      id: 3,
      title: 'Ethical Hackers Get to Work',
      description: 'Experts perform in-depth testing and provide validated vulnerability reports.',
      icon: <Search className="h-6 w-6" />
    },
    {
      id: 4,
      title: 'Review & Implement Solutions',
      description: 'Get support implementing fixes and improvements to your security infrastructure.',
      icon: <Check className="h-6 w-6" />
    },
    {
      id: 5,
      title: 'Continuous Monitoring',
      description: 'Ongoing testing keeps your systems secure as new threats emerge.',
      icon: <RefreshCw className="h-6 w-6" />
    }
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
            Our Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            How AXUM Crowd Sourcing Works
          </h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A streamlined, secure process for identifying and addressing vulnerabilities
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="relative flex flex-col md:flex-row items-center gap-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Step Circle Icon */}
                <div className="md:absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-4 cursor-pointer ${
                      activeStep === index
                        ? 'bg-red-600 border-white dark:border-gray-900 scale-110'
                        : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700'
                    } transition-all duration-300`}
                    onClick={() => setActiveStep(index)}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Step Content Card */}
                <div
                  className={`md:w-[45%] rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                    index % 2 === 0
                      ? 'md:mr-auto md:ml-0 md:pl-12'
                      : 'md:ml-auto md:mr-0 md:pr-12'
                  } ${
                    activeStep === index
                      ? 'bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 border-red-200 dark:border-red-700/50 shadow-lg'
                      : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full px-3 py-1 text-sm font-bold">
                      Step {step.id}
                    </div>
                    <h3
                      className={`font-bold text-lg ${
                        activeStep === index
                          ? 'text-red-800 dark:text-red-400'
                          : 'text-gray-900 dark:text-white'
                      }`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
