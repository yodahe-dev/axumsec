"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  Clock,
  Server,
  BrainCircuit,
  Shield,
  Globe,
  Settings,
  Activity,
  AlertTriangle,
} from "lucide-react";

type TechnologyItem = {
  id: number;
  techItemIconName: string;
  techItemColor: string;
  techItemIconTitle: string;
  techItemdescription: string;
};

export default function Technology() {
  const [items, setItems] = useState<TechnologyItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTech = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/differents?populate[technologyItems][populate]=*`
        );

        const techData = res.data?.data?.[0]?.technologyItems || [];
        setItems(techData);
      } catch (err) {
        console.error("Error fetching technology items:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTech();
  }, []);

  const getIcon = (name: string) => {
    switch (name) {
      case "Cpu":
        return <Cpu className="h-8 w-8" />;
      case "Clock":
        return <Clock className="h-8 w-8" />;
      case "Server":
        return <Server className="h-8 w-8" />;
      case "BrainCircuit":
        return <BrainCircuit className="h-8 w-8" />;
      case "Shield":
        return <Shield className="h-8 w-8" />;
      case "Settings":
        return <Settings className="h-8 w-8" />;
      case "Globe":
        return <Globe className="h-8 w-8" />;
      case "Activity":
        return <Activity className="h-8 w-8" />;
      case "AlertTriangle":
        return <AlertTriangle className="h-8 w-8" />;
      default:
        return <Cpu className="h-8 w-8" />;
    }
  };

  const getGradient = (color: string) => {
    switch (color.toLowerCase()) {
      case "blue":
        return "from-blue-600 to-blue-800";
      case "green":
        return "from-green-600 to-green-800";
      case "red":
        return "from-red-600 to-red-800";
      case "purple":
        return "from-purple-600 to-purple-800";
      case "yellow":
        return "from-yellow-600 to-yellow-800";
      case "orange":
        return "from-orange-600 to-orange-800";
      case "gray":
        return "from-gray-600 to-gray-800";
      default:
        return "from-gray-600 to-gray-800";
    }
  };

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
            Our Technology
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            Cutting-Edge Security Technology
          </h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Leveraging advanced tools for unparalleled protection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700"
            >
              <div
                className={`bg-gradient-to-br ${getGradient(
                  item.techItemColor
                )} text-white p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6`}
              >
                {getIcon(item.techItemIconName)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {item.techItemIconTitle}
              </h3>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {item.techItemdescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
