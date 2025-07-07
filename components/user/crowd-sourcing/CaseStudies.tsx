'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'

const caseStudies = [
  {
    id: 1,
    title: 'Financial Services Provider',
    challenge: 'A leading financial institution faced increasing sophisticated cyber threats targeting their online banking platform.',
    solution: 'Implemented AXUM Crowd Sourcing with 150+ ethical hackers conducting continuous security testing.',
    result: 'Identified 42 critical vulnerabilities in first month, reduced security incidents by 78%',
    metrics: [
      { label: 'Vulnerabilities Found', value: '42' },
      { label: 'Response Time', value: '<24h' },
      { label: 'Cost Savings', value: '64%' }
    ]
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    challenge: 'A fast-growing e-commerce company needed scalable security as they expanded internationally.',
    solution: 'Leveraged AXUM Crowd Sourcing for continuous security monitoring across web and mobile platforms.',
    result: 'Achieved 99.9% security uptime, prevented major data breach during peak season',
    metrics: [
      { label: 'Vulnerabilities Fixed', value: '87' },
      { label: 'Platform Coverage', value: '100%' },
      { label: 'Incidents Prevented', value: '12' }
    ]
  }
]

export default function CaseStudies() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
            Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            Proven Results with AXUM Crowd Sourcing
          </h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            See how organizations have transformed their security posture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((caseStudy) => (
            <motion.div
              key={caseStudy.id}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
            >
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{caseStudy.title}</h3>

                <div className="mt-6 grid grid-cols-3 gap-4">
                  {caseStudy.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400">{metric.value}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Challenge</h4>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">{caseStudy.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Solution</h4>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">{caseStudy.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">Result</h4>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">{caseStudy.result}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
