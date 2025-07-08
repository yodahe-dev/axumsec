"use client";
import { motion } from "framer-motion";
import { 
  Shield, Eye, Layout, Network, Search, 
  AlertCircle, BarChart, Lock, Server, 
  Cpu, Key, UserCheck, ClipboardCheck, 
  ArrowRight, CheckCircle, Zap, Activity,
  FileText, Calendar, BadgeCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


export default function CTA() {
  return (
    <div>
            <section className="py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Strengthen Your Cyber Defenses?
          </h2>
          
          <p className="text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Take the first step toward comprehensive security with AXUM SEC's expert solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              <Shield className="mr-2 w-5 h-5" />
              Secure Your Digital Assets
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Request Security Assessment
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
