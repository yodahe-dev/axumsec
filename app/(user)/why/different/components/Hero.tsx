'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

interface RichTextNode {
  type: string;
  children: { text: string }[];
}

interface DifferentData {
  differentHeroTitle: string;
  differentHeroSubtitle: string;
  differentHeroGradient: boolean;
  herobadgeText: string;
  herotitle: RichTextNode[];
  herosubtitle: RichTextNode[];
  herodescription: RichTextNode[];
}

export default function Hero() {
  const [data, setData] = useState<DifferentData | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const res = await fetch(`${API_URL}/api/differents`);
        const json = await res.json();
        const first = json.data[0];
        if (first) {
          setData(first);
        }
      } catch (error) {
        console.error('Failed to fetch Hero data', error);
      }
    }
    fetchData();
  }, []);

  function renderRichText(nodes: RichTextNode[]) {
    return nodes.map((node, idx) => {
      if (node.type === 'paragraph') {
        const text = node.children.map((c) => c.text).join('');
        return (
          <p key={idx} className="mb-4">
            {text}
          </p>
        );
      }
      return null;
    });
  }

  if (!data) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  return (
    <section
      className={`relative py-20 md:py-32 overflow-hidden ${
        data.differentHeroGradient
          ? 'bg-gradient-to-r from-red-900/10 to-red-800/20 dark:from-red-900/30 dark:to-red-800/40'
          : 'bg-white dark:bg-gray-900'
      }`}
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 dark:opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent dark:from-gray-900/80"></div>
      <div className="container mx-auto px-4 relative z-10 max-w-4xl mx-auto text-center">
        <Badge
          variant="secondary"
          className="mb-4 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
        >
          {data.herobadgeText || 'Why AXUM SEC'}
        </Badge>

        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 to-red-700 bg-clip-text text-transparent dark:from-white dark:to-red-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {renderRichText(data.herotitle)}
        </motion.h1>

        <motion.div
          className="mt-6 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {renderRichText(data.herosubtitle)}
        </motion.div>

        <motion.div
          className="mt-10 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {renderRichText(data.herodescription)}
        </motion.div>
      </div>
    </section>
  );
}
