"use client";

import { Quote } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

  const testimonials = [
    {
      id: 1,
      quote: "AXUM SEC's proactive strategies and cutting-edge technology have significantly improved our security posture. Their customized solutions perfectly align with our business needs.",
      author: "Sarah Johnson",
      position: "CTO, TechSecure Inc."
    },
    {
      id: 2,
      quote: "We've never worked with a cybersecurity firm that is so committed to our success. AXUM SEC's dedication to excellence is unmatched in the industry.",
      author: "Michael Rodriguez",
      position: "Director of IT, Global Finance Corp"
    }
  ];

export default function Testimonials() {
  return (
    <div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 h-full">
                  <CardContent className="p-8">
                    <Quote className="h-12 w-12 text-red-400 opacity-20 mb-4" />
                    <p className="text-gray-700 dark:text-gray-300 italic text-lg">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                    </div>
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
