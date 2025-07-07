"use client";

import { Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';


export default function Technology() {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
              Our Technology
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
              Cutting-Edge Security Technology
            </h2>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Leveraging advanced tools for unparalleled protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">AI-Powered Threat Detection</h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Our tools are equipped with AI and machine learning capabilities, allowing for real-time threat detection and response.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-green-600 to-green-800 text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">24/7 Continuous Monitoring</h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                We provide round-the-clock monitoring services, ensuring that your systems are protected at all times.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Innovative Security Platforms</h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                From AXUM Bounty to AXUM PTaaS, our platforms offer scalable, efficient solutions tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
