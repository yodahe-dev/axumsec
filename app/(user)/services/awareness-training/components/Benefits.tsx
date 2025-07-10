"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  Shield, Monitor, DollarSign, BarChart
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, JSX.Element> = {
  Shield: <Shield className="w-6 h-6 text-red-500" />,
  Monitor: <Monitor className="w-6 h-6 text-red-500" />,
  DollarSign: <DollarSign className="w-6 h-6 text-red-500" />,
  BarChart: <BarChart className="w-6 h-6 text-red-500" />
};

export default function Benefits() {
  const [benefits, setBenefits] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/cybersecurity-awareness-training?populate[benefitsList][populate]=*`)
      .then(res => {
        const data = res.data.data;
        setTitle(data.BenefitsTitle);
        setSubtitle(data.BenefitSubtitle);
        setBenefits(data.benefitsList);
      })
      .catch(err => {
        console.error("Failed to load benefits:", err);
      });
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
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
          {subtitle}
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
              <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {iconMap[benefit.icon] ?? <Shield className="w-6 h-6 text-red-500" />}
                  </div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
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
