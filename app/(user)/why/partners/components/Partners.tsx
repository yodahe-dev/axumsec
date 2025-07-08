"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import axios from "axios";

type ImageData = {
  url: string;
  formats?: {
    thumbnail?: { url: string };
  };
};

type PartnerCard = {
  id: number;
  PartnersCardTitle: string;
  PartnersCardsubtitle: string;
  Contribution: string;
  Profileimage: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
    };
  };
};

type PartnerData = {
  PartnersTitle?: string;
  Partnersubtitle?: string;
  PartnersCard?: PartnerCard[];
};

export default function Partners() {
  const [data, setData] = useState<PartnerData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/partner?populate[PartnersCard][populate]=*`)
      .then((res) => {
        setData(res.data?.data);
      })
      .catch((err) => console.error("Error fetching partner data:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!data || !data.PartnersCard?.length) {
    return (
      <p className="text-center py-20 text-gray-500">No partner data available.</p>
    );
  }

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">
          {data.PartnersTitle || "Our Key Partners"}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {data.Partnersubtitle ||
            "Strategic alliances that amplify our cybersecurity capabilities"}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {data.PartnersCard.map((partner, index) => {
          const imageUrl =
            partner.Profileimage?.formats?.thumbnail?.url ||
            partner.Profileimage?.url;
          const fullImageUrl = imageUrl?.startsWith("/")
            ? `${process.env.NEXT_PUBLIC_API_URL}${imageUrl}`
            : imageUrl;

          return (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full border border-gray-200 dark:border-gray-800">
                <CardHeader>
                  {fullImageUrl ? (
                    <img
                      src={fullImageUrl}
                      alt={partner.PartnersCardTitle}
                      className="w-16 h-16 object-cover rounded-xl mb-4"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded-xl mb-4" />
                  )}
                  <CardTitle className="mt-2">
                    {partner.PartnersCardTitle}
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400">
                    {partner.PartnersCardsubtitle}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-red-600 dark:text-red-400">
                    Contribution:
                  </p>
                  <p>{partner.Contribution}</p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
