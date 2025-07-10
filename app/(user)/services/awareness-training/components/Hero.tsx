'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import * as LucideIcons from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Types
type HeroButton = {
  id: number;
  title: string;
  Url: string;
  icon: string;
};

type HeroData = {
  heroBadge: string;
  heroTitle: string;
  heroDescription: string;
  HeroButton: HeroButton[];
};

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/cybersecurity-awareness-training?populate[HeroButton][populate]=*`;

export default function Hero() {
  const [badge, setBadge] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [buttons, setButtons] = useState<HeroButton[]>([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        const data: HeroData = res.data?.data;
        setBadge(data?.heroBadge || '');
        setTitle(data?.heroTitle || '');
        setDescription(data?.heroDescription || '');
        setButtons(data?.HeroButton || []);
      })
      .catch(() => {
        setBadge('AXNESS Cybersecurity Training');
        setTitle('Empowering Organizations with Cybersecurity Knowledge');
        setDescription(
          'Build a culture of security through comprehensive awareness and training programs designed to protect your organization.'
        );
        setButtons([]);
      });
  }, []);

  const getIcon = (iconName: string): JSX.Element | null => {
    const formatted = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    const Icon = LucideIcons[formatted as keyof typeof LucideIcons] as LucideIcon;
    return Icon ? <Icon className="mr-2 w-5 h-5" /> : null;
  };

  return (
    <section className="py-20 px-4 text-center relative overflow-hidden">
      {/* background blobs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-300 dark:bg-red-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
      </div>

      {/* hero content */}
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

        {buttons.length > 0 && (
          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {buttons.map((btn) => (
              <Button
                key={btn.id}
                asChild
                className={`${
                  btn.id % 2 === 1
                    ? 'bg-red-600 hover:bg-red-700 text-white'
                    : 'text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20'
                } py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg`}
                variant={btn.id % 2 === 1 ? 'default' : 'outline'}
                size="lg"
              >
                <a href={btn.Url}>
                  {getIcon(btn.icon)}
                  {btn.title}
                </a>
              </Button>
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
