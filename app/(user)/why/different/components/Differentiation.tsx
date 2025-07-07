"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Target, Cpu, Settings, Star, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

type Differentiator = {
  id: number;
  title: string;
  icon: React.ReactNode;
  points: string[];
};

export default function Differentiation() {
  const [differentiators, setDifferentiators] = useState<Differentiator[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/differents?populate[Differentiator][populate]=*`;

    axios
      .get(apiUrl)
      .then((res) => {
        const diffData = res.data.data[0]?.Differentiator || [];

        interface DifferentiatorPointAPI {
          differentiatorPointsText: string;
        }

        interface DifferentiatorAPI {
          id: number;
          differentiatorTitle: string;
          differentiatorIconName: string;
          differentiatorPoint: DifferentiatorPointAPI[];
        }

        const mappedData: Differentiator[] = (diffData as DifferentiatorAPI[]).map(
          (item) => ({
            id: item.id,
            title: item.differentiatorTitle,
            icon: getIconComponent(item.differentiatorIconName),
            points: item.differentiatorPoint.map((p) => p.differentiatorPointsText),
          })
        );

        setDifferentiators(mappedData);
      })
      .catch((err) => {
        console.error("Error fetching differentiators:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  function getIconComponent(name: string): React.ReactNode {
    switch (name) {
      case "Target":
        return <Target className="h-8 w-8" />;
      case "Cpu":
        return <Cpu className="h-8 w-8" />;
      case "Settings":
        return <Settings className="h-8 w-8" />;
      case "Star":
        return <Star className="h-8 w-8" />;
      default:
        return <Target className="h-8 w-8" />;
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
          >
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
  );
}
