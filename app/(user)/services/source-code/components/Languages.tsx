"use client";

import { motion } from 'framer-motion';
import { 
  Code, 
  ShieldCheck, 
  Search, 
  FileText, 
  Lightbulb,
  ArrowRight,
  Clock,
  BarChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


  const languages = [
    {
      name: "JavaScript/TypeScript",
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.103-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.337-.404-.482-.586-.621-.378-.27-1.888-.657-3.12-.657-1.2 0-2.4.345-3.225 1.005-.45.39-.81.9-1.035 1.53-.24.69-.285 1.755-.285 2.805 0 1.065.045 1.98.285 2.895.225.645.585 1.215 1.035 1.605.825.66 2.025 1.005 3.225 1.005 1.275 0 2.385-.405 3.12-.75.36-.165.69-.405.96-.705.27-.315.45-.705.57-1.125.12-.42.165-.885.165-1.38 0-.48-.045-.915-.165-1.32zm-8.955-3.21c-.18 1.17-.72 1.965-1.605 2.25-.465.18-1.035.225-1.59.225H8.098V7.5h1.305c1.17 0 1.965.18 2.43.57.465.39.705.975.705 1.755 0 .69-.21 1.23-.63 1.59-.42.36-1.02.555-1.755.555h-.57v3.15z"/>
      </svg>,
      description: "Node.js, React, Angular, Vue, and other JS frameworks"
    },
    {
      name: "Python",
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.329 0 .656.329.656.778v1.969c0 .449-.328.778-.656.778h-1.969c-.328 0-.656-.329-.656-.778V6.111c0-.449.328-.778.656-.778h1.97zm-2.047 6.822c-.328 0-.656.328-.656.777v1.969c0 .45.328.778.656.778h1.97c.328 0 .656-.329.656-.778v-1.97c0-.448-.328-.777-.657-.777h-1.97zM12 6.232a5.54 5.54 0 0 0-5.539 5.539c0 3.085 2.468 5.539 5.539 5.539 3.07 0 5.538-2.454 5.538-5.539 0-3.07-2.468-5.54-5.538-5.54z"/>
      </svg>,
      description: "Django, Flask, FastAPI, and other Python frameworks"
    },
    {
      name: "Java/Kotlin",
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.37 17.51c-.18.36-.36.69-.54 1.02-.36.36-.75.69-1.14.96-.36.24-.75.48-1.2.6-.54.18-1.08.24-1.68.24H0v-1.5h4.29c.42 0 .81-.06 1.17-.18.36-.12.69-.3.99-.54.3-.24.57-.51.81-.84.24-.33.45-.69.63-1.08v-8.5h1.5v8.84zm8.76-1.74c-.24.36-.51.69-.81.99-.3.3-.63.57-.99.81-.36.24-.75.45-1.17.63-.42.18-.87.27-1.35.27-.48 0-.93-.09-1.35-.27-.42-.18-.81-.39-1.17-.63-.36-.24-.69-.51-.99-.81-.3-.3-.57-.63-.81-.99-.24-.36-.45-.75-.63-1.17-.18-.42-.27-.87-.27-1.35 0-.48.09-.93.27-1.35.18-.42.39-.81.63-1.17.24-.36.51-.69.81-.99.3-.3.63-.57.99-.81.36-.24.75-.45 1.17-.63.42-.18.87-.27 1.35-.27.48 0 .93.09 1.35.27.42.18.81.39 1.17.63.36.24.69.51.99.81.3.3.57.63.81.99.24.36.45.75.63 1.17.18.42.27.87.27 1.35 0 .48-.09.93-.27 1.35-.18.42-.39.81-.63 1.17zm-1.5-3.96c0-.36-.06-.69-.18-1.02-.12-.33-.3-.63-.54-.87-.24-.24-.51-.42-.84-.54-.33-.12-.69-.18-1.08-.18-.39 0-.75.06-1.08.18-.33.12-.63.3-.87.54-.24.24-.42.54-.54.87-.12.33-.18.66-.18 1.02 0 .36.06.69.18 1.02.12.33.3.63.54.87.24.24.54.42.87.54.33.12.69.18 1.08.18.39 0 .75-.06 1.08-.18.33-.12.63-.3.87-.54.24-.24.42-.54.54-.87.12-.33.18-.66.18-1.02z"/>
      </svg>,
      description: "Spring Boot, Micronaut, and other JVM-based applications"
    },
    {
      name: "C#/.NET",
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm-1.5 4.5h3v3h-3v-3zm3 12h-3v-9h3v9zm-6-9h3v9h-3v-9z"/>
      </svg>,
      description: ".NET Core, ASP.NET, and other Microsoft technologies"
    }
  ];

export default function Languages() {
  return (
    <div>
            <section className="py-16 bg-gray-50 dark:bg-gray-800/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            >
              Supported Languages & Frameworks
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              We analyze code across all major programming languages
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-200 dark:border-gray-800 hover:border-red-500 dark:hover:border-red-600 transition-colors">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/30 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                      {lang.icon}
                    </div>
                    <CardTitle className="text-center">{lang.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 dark:text-gray-400">{lang.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
