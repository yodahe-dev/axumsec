'use client'

import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-900/10 to-red-800/20 dark:from-red-900/30 dark:to-red-800/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Ready to Transform Your Cybersecurity?
          </h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of businesses that trust AXUM SEC to protect their digital assets
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
              Start Your Program Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-gray-800 text-gray-900 dark:text-gray-100 px-8 py-6 text-lg">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
