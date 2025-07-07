'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Globe,
  Shield,
  Users,
  BarChart,
  Cpu,
  Lock,
  type LucideIcon,
} from 'lucide-react';
import axios from 'axios';

const iconMap: Record<string, LucideIcon> = {
  Users,
  Globe,
  BarChart,
  Cpu,
  Lock,
  Shield,
};

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: string;
  highlight: boolean;
  image: {
    url?: string;
    formats?: {
      small?: { url: string };
      thumbnail?: { url: string };
    };
  } | null;
}

export default function Benefits() {
  const [benefits, setBenefits] = useState<Benefit[]>([]);

  useEffect(() => {
    async function fetchBenefits() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const res = await axios.get(
          `${API_URL}/api/crowd-sourcing?populate[benefits][populate]=*`
        );
        const fetched = res?.data?.data?.benefits;
        setBenefits(fetched || []);
      } catch (err) {
        console.error('Failed to fetch benefits:', err);
      }
    }

    fetchBenefits();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/10 dark:to-red-800/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
          >
            Advantages
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            Why Choose AXUM Crowd Sourcing?
          </h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            More than just security - a partnership with the global cybersecurity community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon] || Shield;
            const baseURL = process.env.NEXT_PUBLIC_API_URL || '';
            const imageUrl =
              benefit.image?.formats?.small?.url ||
              benefit.image?.formats?.thumbnail?.url ||
              benefit.image?.url;

            return (
              <motion.div key={benefit.id} whileHover={{ y: -10 }} className="h-full">
                <Card
                  className={`h-full bg-white dark:bg-gray-800 border transition-all duration-300 ${
                    benefit.highlight
                      ? 'border-red-300 dark:border-red-700 shadow-lg'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <CardHeader className="flex flex-row items-start gap-4">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-full">
                      {imageUrl ? (
                        <img
                          src={`${baseURL}${imageUrl}`}
                          alt={benefit.title}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      ) : (
                        <Icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
