"use client";
import { Globe, BarChart, Users, DollarSign, RefreshCw } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Crowd() {
  return (
    <div>
      <section className="py-20 bg-gray-100 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
                Our Model
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
                What is AXUM Crowd Sourcing?
              </h2>
              <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                A revolutionary platform connecting organizations with a global network of ethical hackers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                    <Globe className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">The AXUM Approach</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  AXUM Crowd Sourcing is a revolutionary platform that connects organizations with a global network of ethical hackers and cybersecurity experts. Through this platform, companies can crowdsource their security needs, allowing a diverse and experienced community to find vulnerabilities before malicious actors do.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 rounded-3xl shadow-xl p-8 border border-red-200 dark:border-red-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full">
                    <BarChart className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-800 dark:text-red-400">Key Benefits</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 dark:bg-red-900/30 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                      <Users className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Global Expertise</h4>
                      <p className="text-gray-700 dark:text-gray-300">Tap into the collective knowledge of cybersecurity professionals worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 dark:bg-red-900/30 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                      <DollarSign className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Cost-Effectiveness</h4>
                      <p className="text-gray-700 dark:text-gray-300">Pay only for results, making it budget-friendly for businesses of all sizes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 dark:bg-red-900/30 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                      <RefreshCw className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">Continuous Improvement</h4>
                      <p className="text-gray-700 dark:text-gray-300">Benefit from ongoing security assessments, not just one-time audits</p>
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
