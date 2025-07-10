'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import * as LucideIcons from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


type Step = {  
  id: number;
  title: string;
  description: string;
  icon: string;
};
type AttackSurfaceData = {
  stepNumber: Step[];
  controlTitle: string;
  controlDescription: { children: { text: string }[] }[];
  howItWorksTitle2: string;
};

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/attacksurface?populate[stepNumber][populate]=*`;

export default function Security() {
  const [steps, setSteps] = useState<Step[]>([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [howItWorksTitle2, setHowItWorksTitle2] = useState('');

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      const data = res.data?.data;
      setSteps(data?.stepNumber || []);
      setTitle(data?.controlTitle || '');
      setDesc(data?.controlDescription?.[0]?.children?.[0]?.text || '');
      setHowItWorksTitle2(data?.howItWorksTitle2 || '');
    });
  }, []);

  const getIcon = (name: string) => {
    const iconName = name?.charAt(0).toUpperCase() + name?.slice(1);
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="w-8 h-8 text-red-500" /> : null;
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-4">
            Service 2
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            {desc}
          </p>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {howItWorksTitle2}
          </h3>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-red-200 dark:bg-red-900/30 hidden md:block"></div>

            <div className="grid md:grid-cols-5 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 md:left-0 md:transform-none bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">
                    {index + 1}
                  </div>

                  <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg pt-10">
                    <CardHeader>
                      <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto">
                        {getIcon(step.icon)}
                      </div>
                      <CardTitle className="text-xl text-center text-gray-900 dark:text-white">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 text-center">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
