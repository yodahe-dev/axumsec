'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Badge } from '@/components/ui/badge';
import {
  Globe,
  Users,
  DollarSign,
  RefreshCw,
  BarChart,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Users,
  DollarSign,
  RefreshCw,
  Globe,
  BarChart,
};

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
}

export default function Crowd() {
  const [modelTitle, setModelTitle] = useState('Loading...');
  const [modelSubtitle, setModelSubtitle] = useState('');
  const [modelDescription, setModelDescription] = useState('');
  const [modelBenefits, setModelBenefits] = useState<Benefit[]>([]);

  useEffect(() => {
    async function fetchCrowdModel() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        const res = await axios.get(
          `${API_URL}/api/crowd-sourcing?populate[modelBenefits][populate]=*`
        );
        const data = res?.data?.data;

        if (data) {
          setModelTitle(data.modelTitle || 'Our Model');
          setModelSubtitle(data.modelSubtitle || '');

          if (Array.isArray(data.modelDescription)) {
            const text = data.modelDescription
              .map((b: any) =>
                b.children?.map((c: any) => c.text).join('') || ''
              )
              .join('\n');
            setModelDescription(text || '');
          }

          if (Array.isArray(data.modelBenefits)) {
            setModelBenefits(data.modelBenefits);
          }
        }
      } catch (err) {
        console.error('Failed to fetch model:', err);
      }
    }

    fetchCrowdModel();
  }, []);

  return (
    <div>
      <section className="py-20 bg-gray-100 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
              >
                Our Model
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
                {modelTitle}
              </h2>
              <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                {modelSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                    <Globe className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    The AXUM Approach
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                  {modelDescription}
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 rounded-3xl shadow-xl p-8 border border-red-200 dark:border-red-700/50">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-full">
                    <BarChart className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-800 dark:text-red-400">
                    Key Benefits
                  </h3>
                </div>

                <div className="space-y-4">
                  {modelBenefits.map((benefit) => {
                    const Icon = iconMap[benefit.icon] || Globe;
                    return (
                      <div key={benefit.id} className="flex items-start gap-3">
                        <div className="bg-red-100 dark:bg-red-900/30 rounded-full h-6 w-6 flex items-center justify-center mt-1">
                          <Icon className="h-4 w-4 text-red-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-700 dark:text-gray-300">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
