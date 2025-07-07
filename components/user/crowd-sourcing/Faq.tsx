'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    question: 'What is AXUM Crowd Sourcing?',
    answer:
      'AXUM Crowd Sourcing is a platform that connects organizations with a global network of ethical hackers to crowdsource cybersecurity testing and vulnerability discovery.',
  },
  {
    question: 'How does AXUM SEC ensure the security of my data?',
    answer:
      'All testing is conducted in a secure, isolated environment, with strict confidentiality agreements and secure data handling protocols.',
  },
  {
    question: 'What types of vulnerabilities can be discovered?',
    answer:
      'The platform can uncover a wide range of vulnerabilities, including those related to web applications, mobile apps, networks, APIs, and more.',
  },
  {
    question: 'How are ethical hackers compensated?',
    answer:
      'Ethical hackers are compensated based on the vulnerabilities they discover and the value of their findings, with options for payment in multiple currencies.',
  },
]

export default function Faq() {
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
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
