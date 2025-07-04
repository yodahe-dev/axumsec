"use client";

import { motion } from "framer-motion";
import { 
  Shield, Users, Rocket, BarChart, Briefcase, 
  BookOpen, Heart, Clock, Search, FileText,
  UserCheck, Home, Award, ArrowRight, Zap,
  Target, Lock, Headphones, ClipboardList
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CareersPage = () => {
  const whyWorkHere = [
    {
      icon: <Zap className="w-10 h-10 text-red-500" />,
      title: "Challenging Projects",
      description: "Work on diverse projects that push cybersecurity boundaries - from penetration testing to incident response."
    },
    {
      icon: <BarChart className="w-10 h-10 text-red-500" />,
      title: "Professional Development",
      description: "Continuous learning through training, certifications, and conferences to keep you at the industry forefront."
    },
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      title: "Collaborative Environment",
      description: "Join experts who share your passion for cybersecurity in an innovative, knowledge-sharing culture."
    },
    {
      icon: <Award className="w-10 h-10 text-red-500" />,
      title: "Competitive Compensation",
      description: "Attractive salaries, performance bonuses, health insurance, retirement plans, and flexible work arrangements."
    }
  ];

  const roles = [
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: "Ethical Hacker / Penetration Tester",
      description: "Conduct in-depth security assessments, simulate attacks, and provide actionable insights to strengthen client security."
    },
    {
      icon: <Search className="w-8 h-8 text-red-500" />,
      title: "Security Researcher",
      description: "Identify emerging threats, develop new security tools, and contribute to cybersecurity knowledge."
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "Incident Response Specialist",
      description: "Lead investigations, contain threats, and help clients recover from cyber-attacks quickly and effectively."
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-red-500" />,
      title: "Security Consultant",
      description: "Assess client security needs, develop strategies, and implement protective solutions for digital environments."
    }
  ];

  const benefits = [
    {
      icon: <Rocket className="w-6 h-6 text-red-500" />,
      title: "Career Advancement",
      description: "Opportunities for growth within a leading cybersecurity company."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Impactful Work",
      description: "Contribute to projects that make a real difference in protecting organizations."
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: "Collaborative Team",
      description: "Supportive environment that values innovation and excellence."
    },
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: "Work-Life Balance",
      description: "Flexible arrangements that support your well-being."
    }
  ];

  const processSteps = [
    {
      icon: <FileText className="w-8 h-8 text-red-500" />,
      step: "1",
      title: "Application",
      description: "Browse openings and submit your application with resume and cover letter."
    },
    {
      icon: <UserCheck className="w-8 h-8 text-red-500" />,
      step: "2",
      title: "Interview & Assessment",
      description: "Technical assessments and problem-solving exercises to evaluate your skills."
    },
    {
      icon: <Home className="w-8 h-8 text-red-500" />,
      step: "3",
      title: "Onboarding",
      description: "Introduction to AXUM SEC's culture, values, and methodologies."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-red-200 dark:bg-red-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-300 dark:bg-red-800/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <Badge className="bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-300 px-6 py-2 rounded-full mb-6 hover:scale-105 transition-transform">
            <Shield className="w-5 h-5 mr-2" />
            Cybersecurity Careers
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Join the AXUM SEC Team and Lead the Future of Cybersecurity
          </h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            We're looking for talented cybersecurity professionals to contribute to meaningful projects, grow your expertise, and help shape the future of security.
          </motion.p>
          
          <motion.div 
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              <Briefcase className="mr-2 w-5 h-5" />
              Apply to Join AXUM SEC
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              <Users className="mr-2 w-5 h-5" />
              Learn About Our Culture
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Work Here Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Work at AXUM SEC?
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {whyWorkHere.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="cursor-pointer"
              >
                <Card className="h-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      {reason.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {reason.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Available Roles Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Available Roles at AXUM SEC
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Explore rewarding career opportunities where you can make a real impact
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mt-1">
                        {role.icon}
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">
                        {role.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {role.description}
                    </p>
                    <div className="mt-6">
                      <Button 
                        variant="outline" 
                        className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                      >
                        View Role Details
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            How to Apply
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -top-4 left-0 bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold z-10">
                  {step.step}
                </div>
                
                <Card className="h-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg pt-10">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      {step.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Benefits of Joining AXUM SEC
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Discover how joining our team can accelerate your cybersecurity career
          </motion.p>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 text-center bg-gradient-to-r from-red-600 to-red-800 text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Lead the Future of Cybersecurity?
          </h2>
          
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Join our team of experts working on the frontlines of digital security.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              Apply Now
            </Button>
            
            <Button 
              variant="outline"
              className="text-white border-white hover:bg-red-700 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              View All Open Positions
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default CareersPage;