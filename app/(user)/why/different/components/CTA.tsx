"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";

type CTAData = {
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  ctaButtonUrl?: string;
};

export default function CTA() {
  const [data, setData] = useState<CTAData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/differents?populate=*`)
      .then((res) => {
        const item = res.data?.data?.[0];
        if (item) {
          setData({
            ctaTitle: item.ctaTitle,
            ctaSubtitle: item.ctaSubtitle,
            ctaButtonText: item.ctaButtonText,
            ctaButtonUrl: item.ctaButtonUrl,
          });
        }
      })
      .catch((err) => {
        console.error("Failed to fetch CTA data:", err);
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

  return (
    <section className="py-20 bg-gradient-to-r from-red-900/10 to-red-800/20 dark:from-red-900/30 dark:to-red-800/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {data?.ctaTitle}
          </h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            {data?.ctaSubtitle }
          </p>

          {data?.ctaButtonText && (
            <div className="mt-10">
              <a href={data.ctaButtonUrl} className="inline-block">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg"
                >
                  {data.ctaButtonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
