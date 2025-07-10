"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import * as LucideIcons from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type BenefitCard = {
  id: number;
  title: string;
  description: string;
  icon: string;
};
type BenefitsData = {
  benefitsTitle: string;
  benefitsDescription: string;
  benefitCards: BenefitCard[];
};


const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/attacksurface?populate[benefitCards][populate]=*`;

export default function Benefits() {
  const [benefits, setBenefits] = useState<BenefitCard[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get(API_URL).then((res) => {
      const data = res.data?.data;
      setBenefits(data?.benefitCards || []);
      setTitle(data?.benefitsTitle || "");
      setDescription(data?.benefitsDescription || "");
    });
  }, []);

  const getIcon = (name: string) => {
    if (!name) return null;
    const iconName = name.charAt(0).toUpperCase() + name.slice(1);
    const IconComponent = LucideIcons[iconName];
    return IconComponent ? <IconComponent className="w-6 h-6 text-red-500" /> : null;
  };

  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {description}
        </motion.p>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    {getIcon(benefit.icon)}
                  </div>
                  <CardTitle className="text-xl text-center text-gray-900 dark:text-white">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
