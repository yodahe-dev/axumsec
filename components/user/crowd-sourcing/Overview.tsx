"use client";
import { Shield } from "lucide-react";

export default function Overview() {
  return (
    <div>
            <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Overview</h2>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    AXUM SEC's crowd-sourcing model harnesses the collective power of ethical hackers from around the world to identify and mitigate vulnerabilities in your digital infrastructure. By connecting businesses with skilled cybersecurity professionals, AXUM SEC offers a dynamic, flexible, and scalable approach to security that adapts to the ever-evolving threat landscape.
                  </p>
                </div>
              </div>
              
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">Traditional Security</h3>
                  <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Limited security team</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Fixed schedules</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>High fixed costs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span>Delayed vulnerability detection</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 p-6 rounded-2xl border border-red-200 dark:border-red-700/50">
                  <h3 className="font-bold text-red-800 dark:text-red-400 text-lg">AXUM Crowd-Sourcing</h3>
                  <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Global security experts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>24/7 continuous protection</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Pay for results only</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>Real-time vulnerability detection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
