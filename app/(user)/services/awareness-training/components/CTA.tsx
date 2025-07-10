"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  BookOpen, FileText, Shield, Monitor, Users, DollarSign, BarChart
} from "lucide-react";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, JSX.Element> = {
  BookOpen: <BookOpen className="mr-2 w-5 h-5" />,
  FileText: <FileText className="mr-2 w-5 h-5" />,
  Shield: <Shield className="mr-2 w-5 h-5" />,
  Monitor: <Monitor className="mr-2 w-5 h-5" />,
  Users: <Users className="mr-2 w-5 h-5" />,
  DollarSign: <DollarSign className="mr-2 w-5 h-5" />,
  BarChart: <BarChart className="mr-2 w-5 h-5" />,
};

export default function CTA() {
  const [ctaTitle, setCtaTitle] = useState("");
  const [ctaSubtitle, setCtaSubtitle] = useState("");
  const [ctaButtons, setCtaButtons] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/cybersecurity-awareness-training?populate[ctaButtons][populate]=*`)
      .then((res) => {
        const data = res.data.data;
        setCtaTitle(data.ctaTitle);
        setCtaSubtitle(data.ctaSubtitle);
        setCtaButtons(data.ctaButtons || []);
      })
      .catch((err) => {
        console.error("Failed to load CTA:", err);
      });
  }, []);

  return (
    <section className="py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {ctaTitle}
        </h2>

        <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
          {ctaSubtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {ctaButtons.map((button, index) => (
            <Button
              key={index}
              className={`py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg ${
                index === 0
                  ? "bg-white text-red-600 hover:bg-gray-100"
                  : "text-white border-white hover:bg-red-700"
              }`}
              variant={index === 0 ? "default" : "outline"}
              size="lg"
              onClick={() => window.location.href = button.Url}
            >
              {iconMap[button.icon] || <Shield className="mr-2 w-5 h-5" />}
              {button.text}
            </Button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
