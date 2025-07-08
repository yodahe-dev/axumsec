"use client";

import { motion } from "framer-motion";
import { 
  Shield, BookOpen, Monitor, Users, DollarSign, BarChart, CheckCircle,
  Lock, Key, Mail, UserCog, 
  AlertCircle, Code, Award, BadgeCheck,
  Calendar, ArrowRight, FileText, 
  GraduationCap, Briefcase, ClipboardCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
          className="max-w-4xl mx-auto bg-gradient-to-r from-red-600 to-red-800 text-white rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build a Security-Conscious Culture?
          </h2>
          
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Empower your team with the knowledge and skills to defend against cyber threats.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              <BookOpen className="mr-2 w-5 h-5" />
              Start Your Training Journey
            </Button>
            
            <Button 
              variant="outline"
              className="text-white border-white hover:bg-red-700 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              <FileText className="mr-2 w-5 h-5" />
              Download Program Catalog
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
