'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';

export default function Hero() {
  const [heroTitle, setHeroTitle] = useState('');
  const [heroSubtitle, setHeroSubtitle] = useState('');
  const [heroBadge, setHeroBadge] = useState('');
  const [overviewPoints, setOverviewPoints] = useState<string[]>([]);

  useEffect(() => {
    async function fetchHeroData() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        const contentRes = await axios.get(
          `${API_URL}/api/crowd-sourcing?populate[overviewTraditionalSecurity][populate]=*`
        );
        const contentData = contentRes?.data?.data;

        if (contentData) {
          if (contentData.heroTitle) setHeroTitle(contentData.heroTitle);
          if (contentData.heroSubtitle) setHeroSubtitle(contentData.heroSubtitle);
          if (contentData.heroBadge) setHeroBadge(contentData.heroBadge);

          const points = contentData.overviewTraditionalSecurity?.map(
            (item: any) => item.description
          );
          if (points?.length) setOverviewPoints(points);
        }

        if (!contentData.heroTitle || !contentData.heroSubtitle || !contentData.heroBadge) {
          const schemaRes = await axios.get(
            `${API_URL}/api/content-type-builder/content-types`
          );
          const heroSchema = schemaRes?.data?.data?.find((item: any) =>
            item?.schema?.attributes?.heroTitle
          )?.schema?.attributes;

          if (heroSchema) {
            if (!contentData.heroTitle && heroSchema.heroTitle?.default) {
              setHeroTitle(heroSchema.heroTitle.default);
            }
            if (!contentData.heroSubtitle && heroSchema.heroSubtitle?.default) {
              setHeroSubtitle(heroSchema.heroSubtitle.default);
            }
            if (!contentData.heroBadge && heroSchema.heroBadge?.default) {
              setHeroBadge(heroSchema.heroBadge.default);
            }
          }
        }
      } catch (error) {
        console.error('Error loading hero data:', error);
      }
    }

    fetchHeroData();
  }, []);

  return (
    <div>
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-red-900/10 to-red-800/20 dark:from-red-900/30 dark:to-red-800/40 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 dark:opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {heroBadge && (
              <Badge
                variant="secondary"
                className="mb-4 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
              >
                {heroBadge}
              </Badge>
            )}
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-red-700 bg-clip-text text-transparent dark:from-white dark:to-red-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {heroTitle}
            </motion.h1>
            <motion.p
              className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {heroSubtitle}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                Start Your Program Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-800 text-gray-900 dark:text-gray-100 px-8 py-6 text-lg"
              >
                Request a Demo
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
