'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

interface Testimonial {
  id: number
  quote: string
  author: string
  position: string
  avatarUrl: string
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/crowd-sourcing?populate[testimonials][populate]=*`
        )
        const data = res?.data?.data?.testimonials || []

        const parsed = data.map((item: any) => ({
          id: item.id,
          quote: item.quote?.replace(/^"+|"+$/g, '') || '',
          author: item.author || '',
          position: item.position || '',
          avatarUrl: `${process.env.NEXT_PUBLIC_API_URL}${item.avatar?.formats?.small?.url || item.avatar?.url || ''}`
        }))

        setTestimonials(parsed)
      } catch (err) {
        console.error('Failed to fetch testimonials:', err)
      }
    }

    fetchTestimonials()
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900/50 dark:to-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
            Client Voices
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover why businesses choose AXUM SEC for their cybersecurity needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 overflow-hidden">
                    <img
                      src={testimonial.avatarUrl}
                      alt={testimonial.author}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
