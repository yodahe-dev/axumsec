"use client";
import { Shield } from 'lucide-react';

export default function Innovation() {
  return (
    <div>
            <section className="py-20 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/10 dark:to-red-800/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-6 h-full flex flex-col justify-center">
                    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                      <Shield className="h-12 w-12 mx-auto" />
                      <h3 className="text-xl font-bold text-center mt-4">Innovation at Our Core</h3>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Our Innovation Philosophy</h2>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    At AXUM SEC, we believe in staying ahead of the curve by continually innovating our cybersecurity practices. Our approach is proactive, focusing on identifying and mitigating potential threats before they can impact your business.
                  </p>
                  
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white">Proactive Security</h4>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Shift from reactive to proactive security measures
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white">Adaptive Strategies</h4>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Methods evolve with the changing threat landscape
                      </p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                      <h4 className="font-bold text-gray-900 dark:text-white">Client Innovation</h4>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        Tailored services for specific security concerns
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
