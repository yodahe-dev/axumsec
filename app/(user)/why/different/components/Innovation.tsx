"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Shield } from "lucide-react";

type InnovationPoint = {
  id: number;
  pointTitles: string;
  pointDescription: string;
};

type InnovationDescriptionBlock = {
  children: { text: string }[];
};

type InnovationData = {
  innovationTitle?: string;
  innovationSubheading?: string;
  innovationDescription?: InnovationDescriptionBlock[];
  innovationPoints?: InnovationPoint[];
};

export default function Innovation() {
  const [data, setData] = useState<InnovationData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/differents?populate[innovationPoints][populate]=*`;

    axios
      .get(apiUrl)
      .then((res) => {
        if (res.data.data.length > 0) {
          setData(res.data.data[0]);
        }
      })
      .catch((err) => {
        console.error("Error fetching innovation data:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!data) {
    return <p className="text-center py-20">No innovation data found.</p>;
  }

  return (
    <section className="py-20 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/10 dark:to-red-800/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-gradient-to-br from-red-600 to-red-800 text-white rounded-2xl p-6 h-full flex flex-col justify-center">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                    <Shield className="h-12 w-12 mx-auto" />
                    <h3 className="text-xl font-bold text-center mt-4">
                      {data.innovationTitle}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {data.innovationSubheading}
                </h2>
                <div className="mt-4 text-gray-700 dark:text-gray-300">
                  {data.innovationDescription?.map((block, i) => (
                    <p key={i} className="mb-2">
                      {block.children.map((child) => child.text).join(" ")}
                    </p>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {data.innovationPoints?.map((point) => (
                    <div
                      key={point.id}
                      className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 rounded-xl border border-gray-200 dark:border-gray-700"
                    >
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {point.pointTitles}
                      </h4>
                      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                        {point.pointDescription}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
