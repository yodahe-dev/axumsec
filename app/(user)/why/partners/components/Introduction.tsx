"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Network } from "lucide-react";
import axios from "axios";

// Axon-inspired loading component
const AxonLoader = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="relative w-48 h-48">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute inset-0 rounded-full border-2 border-red-500 opacity-70"
          animate={{
            scale: [1, 1.5, 2, 2.5, 1],
            opacity: [0.2, 0.5, 0.8, 0.5, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut"
          }}
        />
      ))}
      
      <motion.div
        className="absolute inset-10 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "anticipate"
        }}
      >
        <div className="absolute w-4 h-4 bg-white rounded-full" />
      </motion.div>
    </div>
  </div>
);

export default function IntroductionStrategy() {
  const [introductionData, setIntroductionData] = useState<any>(null);
  const [strategyData, setStrategyData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const [introRes, strategyRes] = await Promise.all([
          axios.get(`${apiUrl}/api/partner?populate[Introduction][populate]=*`),
          axios.get(`${apiUrl}/api/partner?populate[Strategy][populate]=*`)
        ]);

        setIntroductionData(introRes.data.data.Introduction[0]);
        setStrategyData(strategyRes.data.data.Strategy[0]);
      } catch (err) {
        console.error("Data fetch error:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <AxonLoader />;
  if (error) return <div className="text-center py-24 text-red-500">Data connection failed</div>;
  if (!introductionData || !strategyData) return null;

  return (
    <div>
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-2xl h-full p-8 text-white">
              <ShieldCheck className="w-12 h-12 mb-6" />
              <h2 className="text-3xl font-bold mb-4">{introductionData.title}</h2>
              {introductionData.description.map((block: any, i: number) => (
                <p key={i} className="text-lg mb-2">
                  {block.children.map((child: any) => child.text).join(" ")}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {strategyData.title}
              </h3>
              {strategyData.Strategylist.map((item: any) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: item.id * 0.1 }}
                  className="flex items-start"
                >
                  <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4">
                    <Network className="w-6 h-6 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}