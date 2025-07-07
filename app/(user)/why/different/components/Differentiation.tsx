"use client";

import { 
  Shield, 
  Target, 
  Cpu, 
  Settings, 
  Star, 
  ArrowRight,
  Check,
  Quote
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';


  const differentiators = [
    {
      id: 1,
      title: "Innovative Approach",
      icon: <Target className="h-8 w-8" />,
      points: [
        "Proactive Security: Shift from reactive to proactive security measures",
        "Adaptive Strategies: Methods evolve with the changing threat landscape",
        "Client-Centered Innovation: Tailored services for specific security concerns"
      ]
    },
    {
      id: 2,
      title: "Cutting-Edge Technology",
      icon: <Cpu className="h-8 w-8" />,
      points: [
        "Advanced Threat Detection: AI and machine learning capabilities",
        "Continuous Monitoring: 24/7 protection for your systems",
        "Innovative Platforms: Scalable, efficient, user-friendly solutions"
      ]
    },
    {
      id: 3,
      title: "Customized Solutions",
      icon: <Settings className="h-8 w-8" />,
      points: [
        "Tailored Strategies: Bespoke cybersecurity aligned with business goals",
        "Scalable Solutions: Services grow with your business",
        "Dedicated Support: Personalized implementation and optimization"
      ]
    },
    {
      id: 4,
      title: "Commitment to Excellence",
      icon: <Star className="h-8 w-8" />,
      points: [
        "Expert Team: Seasoned cybersecurity professionals",
        "Quality Assurance: Highest standards of protection",
        "Client Satisfaction: Long-standing trusted relationships"
      ]
    }
  ];


export default function Differentiation() {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200">
              Our Differentiation
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
              The AXUM SEC Difference
            </h2>
            <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Four pillars that make our cybersecurity approach unmatched
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                        {item.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {item.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="bg-red-100 dark:bg-red-900/30 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                            <Check className="h-4 w-4 text-red-600 dark:text-red-400" />
                          </div>
                          <p className="text-gray-700 dark:text-gray-300">{point}</p>
                        </li>
                      ))}
                    </ul>
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
