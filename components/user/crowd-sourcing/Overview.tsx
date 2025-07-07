'use client';

import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import axios from 'axios';

export default function Overview() {
  const [overviewTitle, setOverviewTitle] = useState('Overview');
  const [overviewDescription, setOverviewDescription] = useState('');
  const [traditionalSecurityPoints, setTraditionalSecurityPoints] = useState<string[]>([]);
  const [crowdSourcingPoints, setCrowdSourcingPoints] = useState<string[]>([]);

  const defaultDescription =
    "AXUM SEC's crowd-sourcing model harnesses the collective power of ethical hackers from around the world to identify and mitigate vulnerabilities in your digital infrastructure. By connecting businesses with skilled cybersecurity professionals, AXUM SEC offers a dynamic, flexible, and scalable approach to security that adapts to the ever-evolving threat landscape.";

  useEffect(() => {
    async function fetchOverviewData() {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL;

        const res = await axios.get(
          `${API_URL}/api/crowd-sourcing?populate[overviewTraditionalSecurity][populate]=*&populate[overviewCrowdSourcing][populate]=*`
        );
        const data = res?.data?.data;

        if (data) {
          setOverviewTitle(data.overviewTitle || 'Overview');

          if (Array.isArray(data.overviewDescription) && data.overviewDescription.length > 0) {
            const plainText = data.overviewDescription
              .map((block: any) =>
                block.children?.map((child: any) => child.text).join('') || ''
              )
              .join('\n');
            setOverviewDescription(plainText || defaultDescription);
          } else {
            setOverviewDescription(defaultDescription);
          }

          if (Array.isArray(data.overviewTraditionalSecurity)) {
            setTraditionalSecurityPoints(
              data.overviewTraditionalSecurity.map((item: any) => item.description)
            );
          } else {
            setTraditionalSecurityPoints([]);
          }

          if (Array.isArray(data.overviewCrowdSourcing)) {
            setCrowdSourcingPoints(
              data.overviewCrowdSourcing.map((item: any) => item.description)
            );
          } else {
            setCrowdSourcingPoints([]);
          }
        } else {
          setOverviewDescription(defaultDescription);
          setTraditionalSecurityPoints([]);
          setCrowdSourcingPoints([]);
        }
      } catch (error) {
        console.error('Failed to fetch overview data:', error);
        setOverviewDescription(defaultDescription);
        setTraditionalSecurityPoints([]);
        setCrowdSourcingPoints([]);
      }
    }

    fetchOverviewData();
  }, []);

  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-8">
                <div className="bg-red-100 dark:bg-red-900/30 p-3 rounded-full">
                  <Shield className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {overviewTitle}
                  </h2>
                  <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {overviewDescription}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                    Traditional Security
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                    {traditionalSecurityPoints.length > 0 ? (
                      traditionalSecurityPoints.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                          <span>{point}</span>
                        </li>
                      ))
                    ) : (
                      <li>No traditional security points available.</li>
                    )}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/30 p-6 rounded-2xl border border-red-200 dark:border-red-700/50">
                  <h3 className="font-bold text-red-800 dark:text-red-400 text-lg">
                    AXUM Crowd-Sourcing
                  </h3>
                  <ul className="mt-4 space-y-3 text-gray-700 dark:text-gray-300">
                    {crowdSourcingPoints.length > 0 ? (
                      crowdSourcingPoints.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <span>{point}</span>
                        </li>
                      ))
                    ) : (
                      <li>No crowd-sourcing points available.</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
