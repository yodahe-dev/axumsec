'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Badge } from '@/components/ui/badge'

interface Metric {
  id: number
  label: string
  value?: string
}

interface CaseStudy {
  id: number
  title: string
  challenge: string
  solution: string
  result: string
  metrics: Metric[]
}

export default function CaseStudies() {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])

  useEffect(() => {
    async function fetchCaseStudies() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/crowd-sourcing?populate[caseStudies][populate]=*`
        )
        const data = res?.data?.data?.caseStudies || []
        const updatedData = data.map((item: any) => ({
          id: item.id,
          title: item.title,
          challenge: item.challenge,
          solution: item.solution,
          result: item.result,
          metrics: item.metrics.map((m: any, i: number) => ({
            id: m.id,
            label: m.label,
            value:
              i === 0
                ? '42'
                : i === 1
                ? '<24h'
                : i === 2
                ? '64%'
                : ''
          }))
        }))
        setCaseStudies(updatedData)
      } catch (error) {
        console.error('Failed to fetch case studies:', error)
      }
    }

    fetchCaseStudies()
  }, [])

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
                  {caseStudy.metrics.map((metric) => (
                    <div key={metric.id} className="text-center">
                      <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                        {metric.value || '-'}
                      </div>
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
