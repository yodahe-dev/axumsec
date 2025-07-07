"use client";

import { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";

type Testimonial = {
  id: number;
  quoteText: string;
  authorName: string;
  authorPosition: string;
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_API_URL}/api/differents?populate[testimonialsList][populate]=*`
      )
      .then((res) => {
        const testimonialList = res.data?.data?.[0]?.testimonialsList || [];
        setTestimonials(testimonialList);
      })
      .catch((err) => {
        console.error("Failed to fetch testimonials:", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-900/50 dark:to-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <Badge
            variant="secondary"
            className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-200"
          >
            Client Voices
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Discover why businesses choose AXUM SEC for their cybersecurity needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 h-full">
                <CardContent className="p-8">
                  <Quote className="h-12 w-12 text-red-400 opacity-20 mb-4" />
                  <p className="text-gray-700 dark:text-gray-300 italic text-lg">
                    "{testimonial.quoteText || 'No quote provided'}"
                  </p>
                  <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonial.authorName || 'Anonymous'}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonial.authorPosition || 'Client'}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
