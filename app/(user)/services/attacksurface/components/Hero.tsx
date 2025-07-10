'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import * as LucideIcons from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { LucideIcon } from 'lucide-react';

// --- Types ---
type StrapiTextNode = {
  type: string;
  text: string;
};

type StrapiRichText = {
  type: string;
  children: StrapiTextNode[];
};

type ButtonData = {
  id: number;
  label: string;
  url: string;
  icon: string;
};

type HeroData = {
  heroBadge: string;
  heroTitle: string;
  heroDescription: StrapiRichText[];
  primaryButton: ButtonData;
  secondaryButton: ButtonData;
};

// --- Component ---
const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/attacksurface?populate[primaryButton][populate]=*&populate[secondaryButton][populate]=*`;

export default function Hero() {
  const [badge, setBadge] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [primaryButton, setPrimaryButton] = useState<ButtonData | null>(null);
  const [secondaryButton, setSecondaryButton] = useState<ButtonData | null>(null);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const data: HeroData = res.data?.data;
        setBadge(data?.heroBadge || '');
        setTitle(data?.heroTitle || '');
        const richText = data?.heroDescription?.[0]?.children?.[0]?.text || '';
        setDescription(richText);
        setPrimaryButton(data?.primaryButton || null);
        setSecondaryButton(data?.secondaryButton || null);
      })
      .catch(() => {
        setBadge('Proactive Cyber Defense');
        setTitle('Minimize Your Exposure to Cyber Threats');
        setDescription(
          'Comprehensive solutions to identify, monitor, and reduce your attack surface while implementing robust security controls.'
        );
      });
  }, []);

  const getIcon = (iconName: string): JSX.Element | null => {
    if (!iconName) return null;
    const formattedIconName =
      iconName.charAt(0).toUpperCase() + iconName.slice(1);
    const IconComponent = LucideIcons[formattedIconName as keyof typeof LucideIcons] as LucideIcon;
    return IconComponent ? <IconComponent className="mr-2 w-5 h-5" /> : null;
  };

  return (
    <section className="py-20 px-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-300 dark:bg-red-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {badge && (
          <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-6 hover:scale-105 transition-transform inline-flex items-center gap-2">
            <LucideIcons.Shield className="w-5 h-5" />
            {badge}
          </Badge>
        )}

        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
          {title}
        </h1>

        <motion.p
          className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {description}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {primaryButton && (
            <Button
              className="bg-red-600 hover:bg-red-700 text-white py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
              asChild
            >
              <a href={primaryButton.url}>
                {getIcon(primaryButton.icon)}
                {primaryButton.label}
              </a>
            </Button>
          )}

          {secondaryButton && (
            <Button
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
              asChild
            >
              <a href={secondaryButton.url}>
                {getIcon(secondaryButton.icon)}
                {secondaryButton.label}
              </a>
            </Button>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
