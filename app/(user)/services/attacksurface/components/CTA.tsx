"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Button } from "@/components/ui/button";

type CTAButton = {
  id: number;
  label: string;
  url: string;
  icon: string;
};

type CTAData = {
  ctaTitle: string;
  ctaDescription: string;
  ctaButtons: CTAButton[];
};

export default function CTA() {
  const [ctaData, setCtaData] = useState<CTAData | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/attacksurface?populate[ctaButtons][populate]=*`)
      .then((res) => res.json())
      .then((res) => {
        const data = res.data;
        setCtaData({
          ctaTitle: data?.ctaTitle || "",
          ctaDescription: data?.ctaDescription || "",
          ctaButtons: data?.ctaButtons || [],
        });
      });
  }, []);

  const getIcon = (iconName: string) => {
    const Icon = LucideIcons[iconName.charAt(0).toUpperCase() + iconName.slice(1) as keyof typeof LucideIcons];
    return Icon ? <Icon className="mr-2 w-5 h-5" /> : null;
  };

  if (!ctaData) return null;

  return (
    <section className="py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          {ctaData.ctaTitle}
        </h2>

        <p className="text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {ctaData.ctaDescription}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {ctaData.ctaButtons.map((button, index) => (
            <Button
              key={button.id}
              asChild
              className={`py-6 px-8 text-lg transition-transform hover:scale-105 ${
                index === 0
                  ? "bg-red-600 hover:bg-red-700 text-white shadow-lg"
                  : "variant-outline text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
              }`}
              size="lg"
            >
              <a href={button.url}>
                {getIcon(button.icon)}
                {button.label}
              </a>
            </Button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
