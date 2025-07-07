'use client'

import React, { useEffect, useState } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import axios from 'axios'

interface FaqItem {
  id: number
  question: string
  answer: string
}

export default function Faq() {
  const [faqs, setFaqs] = useState<FaqItem[]>([])

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL
        const res = await axios.get(
          `${API_URL}/api/crowd-sourcing?populate[faqs][populate]=*`
        )
        const fetchedFaqs = res?.data?.data?.faqs || []
        setFaqs(fetchedFaqs)
      } catch (error) {
        console.error('Failed to fetch FAQs:', error)
      }
    }

    fetchFaqs()
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
            >
              Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need to know about AXUM Crowd Sourcing
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.length > 0 ? (
              faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`item-${faq.id}`}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 dark:text-gray-300 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400">Loading FAQs...</p>
            )}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
