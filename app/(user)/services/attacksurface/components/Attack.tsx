'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import * as LucideIcons from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/attacksurface?populate[attackFeatures][populate]=*`;

export default function Attack() {
  const [attackBadge, setAttackBadge] = useState('');
  const [attackTitle, setAttackTitle] = useState('');
  const [attackDesc, setAttackDesc] = useState('');
  const [howItWorksTitle, setHowItWorksTitle] = useState('');
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      const data = res.data?.data;
      setAttackBadge(data?.attackBadge || '');
      setAttackTitle(data?.attackTitle || '');
      setAttackDesc(data?.attackDescription?.[0]?.children?.[0]?.text || '');
      setHowItWorksTitle(data?.howItWorksTitle || '');
      setFeatures(data?.attackFeatures || []);
    });
  }, []);

  const getIcon = (name: string) => {
    const IconComponent = LucideIcons[name?.charAt(0).toUpperCase() + name?.slice(1)];
    return IconComponent ? <IconComponent className="w-6 h-6 text-red-500" /> : null;
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-4">
            {attackBadge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {attackTitle}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mt-4">
            {attackDesc}
          </p>
        </div>

        {/* Key Features from API */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {howItWorksTitle}
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      {getIcon(feature.icon)}
                    </div>
                    <CardTitle className="text-lg text-center text-gray-900 dark:text-white">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
