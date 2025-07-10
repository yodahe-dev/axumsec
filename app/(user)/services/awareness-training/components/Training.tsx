"use client";

import { motion } from "framer-motion";
import { 
  Shield, Monitor, Users, CheckCircle,
  Lock, Key, Mail, UserCog, 
  AlertCircle, Code, Award, BadgeCheck,
  GraduationCap, Briefcase, ClipboardCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";

// Type definitions
type RichText = {
  type: string;
  children: { type: string; text: string }[];
};

type CourseOffering = {
  id: number;
  title: string;
  description: RichText[];
  icon: string | null;
};

type FeatureItem = {
  id: number;
  list: string;
};

type TrainingTab = {
  id: number;
  title: string;
  description: string;
  TabsNumber: string;
  CourseOfferings: CourseOffering[];
  featuretab1: FeatureItem[];
};

type TrainingData = {
  tabs: {
    Tabs: TrainingTab[];
  };
};

// Icon mapping
const iconMap = {
  Mail: Mail,
  Key: Key,
  Lock: Lock,
  UserCog: UserCog,
  AlertCircle: AlertCircle,
  ClipboardCheck: ClipboardCheck,
  Briefcase: Briefcase,
  Shield: Shield,
  GraduationCap: GraduationCap,
  BadgeCheck: BadgeCheck,
  Code: Code,
  Award: Award
};

// Helper to extract text from rich text
const getPlainText = (richText: RichText[]): string => {
  if (!richText || !Array.isArray(richText)) return '';
  return richText.map(item => {
    if (item.children) {
      return item.children.map(child => child.text).join('');
    }
    return '';
  }).join(' ');
};

export default function Training() {
  const [data, setData] = useState<TrainingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/cybersecurity-awareness-training?populate[tabs][populate][Tabs][populate][0]=CourseOfferings&populate[tabs][populate][Tabs][populate][1]=featuretab1`;
        const response = await axios.get(apiUrl);
        setData(response.data.data);
      } catch (err) {
        setError('Failed to fetch training data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Memoized transformed data
  const transformedData = useMemo(() => {
    if (!data) return null;
    
    const tabs = data.tabs?.Tabs || [];
    
    const onlineTab = tabs.find(tab => tab.TabsNumber === "1");
    const onsiteTab = tabs.find(tab => tab.TabsNumber === "2");
    const certificationTab = tabs.find(tab => tab.TabsNumber === "3");
    
    return {
      online: {
        title: onlineTab?.title || "Learn Anytime, Anywhere with AXNESS Online Training",
        description: onlineTab?.description || "Continuous learning is critical in today's digital environment...",
        courses: onlineTab?.CourseOfferings?.map(course => ({
          icon: course.icon ? iconMap[course.icon as keyof typeof iconMap] || null : null,
          title: course.title,
          description: getPlainText(course.description)
        })) || [],
        features: onlineTab?.featuretab1?.map(item => item.list) || []
      },
      onsite: {
        title: onsiteTab?.title || "Personalized In-Person Cybersecurity Training",
        description: onsiteTab?.description || "Our immersive onsite sessions are tailored to your organization's needs...",
        courses: onsiteTab?.CourseOfferings?.map(course => ({
          icon: course.icon ? iconMap[course.icon as keyof typeof iconMap] || null : null,
          title: course.title,
          description: getPlainText(course.description)
        })) || [],
        features: onsiteTab?.featuretab1?.map(item => item.list) || []
      },
      certification: {
        title: certificationTab?.title || "Validate Your Cybersecurity Skills",
        description: certificationTab?.description || "AXNESS certifications demonstrate a commitment to cybersecurity excellence...",
        courses: certificationTab?.CourseOfferings?.map(course => ({
          title: course.title,
          description: getPlainText(course.description)
        })) || [],
        features: certificationTab?.featuretab1?.map(item => item.list) || []
      }
    };
  }, [data]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">{error}</div>
          <Button onClick={() => window.location.reload()}>Retry</Button>
        </div>
      </div>
    );
  }

  if (!transformedData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-500 text-xl">No training data available</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="online" className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <TabsList className="grid w-full md:grid-cols-3 bg-gray-100 dark:bg-gray-800 p-2 h-auto">
                <TabsTrigger 
                  value="online" 
                  className="py-6 data-[state=active]:bg-white data-[state=active]:dark:bg-gray-900 data-[state=active]:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Monitor className="w-6 h-6" />
                    <span className="text-lg">Online Training</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="onsite" 
                  className="py-6 data-[state=active]:bg-white data-[state=active]:dark:bg-gray-900 data-[state=active]:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Users className="w-6 h-6" />
                    <span className="text-lg">Onsite Training</span>
                  </div>
                </TabsTrigger>
                <TabsTrigger 
                  value="certification" 
                  className="py-6 data-[state=active]:bg-white data-[state=active]:dark:bg-gray-900 data-[state=active]:shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <Award className="w-6 h-6" />
                    <span className="text-lg">Certification</span>
                  </div>
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Online Training Content */}
            <TabsContent value="online">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                      {transformedData.online.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      {transformedData.online.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {transformedData.online.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-full mt-0.5">
                            <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-red-600 hover:bg-red-700 py-6 px-8">
                        Start Online Training
                      </Button>
                      <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8">
                        Request a Demo
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-gray-800 p-8 rounded-2xl shadow-xl">
                    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                      Course Offerings
                    </h3>
                    <div className="space-y-6">
                      {transformedData.online.courses.map((course, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                        >
                          {course.icon && (
                            <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                              <course.icon className="w-8 h-8 text-red-500" />
                            </div>
                          )}
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{course.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">{course.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Onsite Training Content */}
            <TabsContent value="onsite">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                      {transformedData.onsite.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      {transformedData.onsite.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {transformedData.onsite.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-full mt-0.5">
                            <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-red-600 hover:bg-red-700 py-6 px-8">
                        Schedule Onsite Training
                      </Button>
                      <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8">
                        Learn More
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-gray-800 p-8 rounded-2xl shadow-xl order-1 md:order-2">
                    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                      Training Offerings
                    </h3>
                    <div className="space-y-6">
                      {transformedData.onsite.courses.map((training, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                        >
                          {training.icon && (
                            <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                              <training.icon className="w-8 h-8 text-red-500" />
                            </div>
                          )}
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">{training.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 mt-1">{training.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>

            {/* Certification Content */}
            <TabsContent value="certification">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                      {transformedData.certification.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      {transformedData.certification.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {transformedData.certification.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-full mt-0.5">
                            <CheckCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button className="bg-red-600 hover:bg-red-700 py-6 px-8">
                        Get Certified
                      </Button>
                      <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8">
                        Request Details
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-gray-800 p-8 rounded-2xl shadow-xl">
                    <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                      Certification Programs
                    </h3>
                    <div className="space-y-6">
                      {transformedData.certification.courses.map((cert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm border-l-4 border-red-500"
                        >
                          <div className="flex items-start gap-4">
                            <div>
                              <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 mb-2">
                                Certification
                              </Badge>
                              <h4 className="font-semibold text-gray-900 dark:text-white">{cert.title}</h4>
                              <p className="text-gray-600 dark:text-gray-400 mt-1">{cert.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}