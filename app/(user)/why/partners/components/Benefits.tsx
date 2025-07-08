"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

type Benefit = {
  id: number;
  title: string;
  icon: null | string;
  description: string;
};

type BenefitsData = {
  badgeText?: string;
  title?: string;
  subtitle?: string;
  BenefitsTitle?: string;
  BenefitSubtitle?: string;
  Benefits?: Benefit[];
};

// Neural network loading animation
const NeuralLoader = () => (
  <div className="min-h-[50vh] flex flex-col items-center justify-center p-8">
    <div className="relative w-64 h-64">
      {/* Neural connections */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-red-500 rounded-full"
          style={{
            top: `${Math.sin(i * 0.5) * 30 + 50}%`,
            left: `${Math.cos(i * 0.5) * 30 + 50}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Pulsating nodes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-br from-red-500 to-red-700 rounded-full"
          style={{
            top: `${20 + i * 15}%`,
            left: `${20 + (i % 2) * 60}%`,
            width: `${15 + i * 5}px`,
            height: `${15 + i * 5}px`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            boxShadow: [
              "0 0 0 0 rgba(239, 68, 68, 0.7)",
              "0 0 0 10px rgba(239, 68, 68, 0)",
              "0 0 0 0 rgba(239, 68, 68, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Central neuron */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="absolute w-4 h-4 bg-white rounded-full animate-pulse" />
      </motion.div>
    </div>
    
    <motion.p 
      className="mt-8 text-lg font-medium text-gray-700 dark:text-gray-300"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      Activating partnership benefits...
    </motion.p>
  </div>
);

export default function Benefits() {
  const [data, setData] = useState<BenefitsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await axios.get(`${apiUrl}/api/partner?populate[Benefits][populate]=*`);
        
        if (response.data?.data) {
          setData(response.data.data);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching benefits data:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <NeuralLoader />;
  
  if (error || !data) {
    return (
      <div className="text-center py-24">
        <div className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300 p-6 rounded-xl max-w-md mx-auto">
          <h3 className="text-xl font-bold mb-2">Connection Error</h3>
          <p>Failed to load partnership benefits. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center mb-16">
              <span className="inline-block bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-medium px-4 py-1 rounded-full mb-4">
                {data.badgeText || "Our Partnerships"}
              </span>
              
              <motion.h2 
                className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {data.BenefitsTitle || "Partnership Benefits"}
              </motion.h2>
              
              <motion.p
                className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {data.BenefitSubtitle || "Our alliances deliver tangible advantages that strengthen your security posture"}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatePresence>
            {data.Benefits?.map((benefit, index) => (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="h-full border-0 bg-white dark:bg-gray-900 shadow-xl overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/30 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <NeuronIcon />
                    </div>
                    <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Custom neuron icon component
const NeuronIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24"
    className="w-6 h-6 text-red-600 dark:text-red-400"
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
      <circle cx="12" cy="5" r="1" />
      <circle cx="5" cy="19" r="1" />
      <circle cx="19" cy="19" r="1" />
      <circle cx="12" cy="14" r="2" />
      <path d="M12 5v9m0 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4Zm-7 0l5 5m7-5l-5 5" />
    </g>
  </svg>
);