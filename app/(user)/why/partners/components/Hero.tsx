"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

type PartnerHeroData = {
  badgeText?: string;
  title?: string;
  subtitle?: string;
};

export default function Hero() {
  const [data, setData] = useState<PartnerHeroData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/partner?populate[Introduction][populate]=*`)
      .then((res) => {
        const item = res.data?.data;
        setData({
          badgeText: item?.badgeText,
          title: item?.title,
          subtitle: item?.subtitle,
        });
      })
      .catch((err) => {
        console.error("Error fetching partner hero:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <section className="py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center justify-center px-4 py-1 bg-red-50 dark:bg-red-900/20 rounded-full mb-4">
          <Handshake className="w-5 h-5 text-red-600 mr-2" />
          <span className="text-red-600 font-medium">
            {data?.badgeText || "Our Partnerships"}
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600">
          {data?.title || "Strategic Partnerships for Enhanced Cybersecurity"}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {data?.subtitle ||
            "Collaborating with Industry Leaders to Deliver Unparalleled Protection"}
        </p>
      </motion.div>
    </section>
  );
}
