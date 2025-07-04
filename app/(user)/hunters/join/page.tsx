"use client";

import { motion } from "framer-motion";
import { 
  Shield, Key, Gift, Users, Trophy, UserPlus, 
  Search, Award, DollarSign, BarChart, 
  MessageCircle, BookOpen, ArrowRight, Bug 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const JoinCrowdPage = () => {
  const reasonsToJoin = [
    {
      icon: <Key className="w-10 h-10 text-red-500" />,
      title: "Access to Exclusive Programs",
      description: "Gain access to a wide range of bug bounty programs from leading organizations to test your skills and uncover vulnerabilities."
    },
    {
      icon: <Gift className="w-10 h-10 text-red-500" />,
      title: "Earn Rewards for Your Work",
      description: "Competitive rewards for valid vulnerability reports based on severity and impact."
    },
    {
      icon: <Users className="w-10 h-10 text-red-500" />,
      title: "Collaborative Community",
      description: "Join ethical hackers who share knowledge, exchange ideas, and collaborate on security projects."
    },
    {
      icon: <Trophy className="w-10 h-10 text-red-500" />,
      title: "Recognition and Growth",
      description: "Gain recognition for your contributions, with top performers highlighted for new opportunities."
    }
  ];

  const joinSteps = [
    {
      icon: <UserPlus className="w-8 h-8 text-red-500" />,
      step: "1",
      title: "Registration",
      description: "Sign up on AXUM SEC to create your profile and explore bug bounty programs."
    },
    {
      icon: <Search className="w-8 h-8 text-red-500" />,
      step: "2",
      title: "Participation",
      description: "Browse active programs, select those matching your skills, and start testing."
    },
    {
      icon: <Award className="w-8 h-8 text-red-500" />,
      step: "3",
      title: "Reward & Recognition",
      description: "Submit findings through our platform. Valid reports earn rewards and community recognition."
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-red-500" />,
      title: "Monetary Rewards",
      description: "Earn competitive rewards for discovering and reporting vulnerabilities."
    },
    {
      icon: <BarChart className="w-6 h-6 text-red-500" />,
      title: "Professional Growth",
      description: "Develop skills, gain experience, and build your cybersecurity reputation."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-red-500" />,
      title: "Community Engagement",
      description: "Connect with ethical hackers, share knowledge, and collaborate on challenges."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-red-500" />,
      title: "Access to Resources",
      description: "Exclusive resources, tools, and training materials to enhance your hacking skills."
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
            Ethical Hacking Community
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Become a Part of the AXUM Crowd and Make a Difference
          </h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Join our vibrant community of ethical hackers who contribute to securing organizations by identifying and reporting vulnerabilities.
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
              <Shield className="mr-2 w-5 h-5" />
              Join AXUM Crowd Today
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              <Bug className="mr-2 w-5 h-5" />
              Explore AXUM Crowd Programs
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Why Join AXUM Crowd?
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {reasonsToJoin.map((reason, index) => (
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

      {/* How to Join Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {joinSteps.map((step, index) => (
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
                
                <Card className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg pt-10">
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
          
          <motion.div 
            className="mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Start Your Ethical Hacking Journey?
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Join AXUM Crowd today and become part of a community that's making the digital world safer while rewarding your skills.
              </p>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white py-6 px-10 text-lg transition-transform hover:scale-105 shadow-lg"
                size="lg"
              >
                Get Started Now
                <ArrowRight className="ml-3 w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Benefits of Joining AXUM Crowd
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Discover how joining our community can accelerate your cybersecurity career
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
                <Card className="h-full bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
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
            Ready to Make a Difference in Cybersecurity?
          </h2>
          
          <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
            Join thousands of ethical hackers securing organizations worldwide while earning rewards and recognition.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 py-6 px-8 text-lg transition-transform hover:scale-105 shadow-lg"
              size="lg"
            >
              Join AXUM Crowd Today
            </Button>
            
            <Button 
              variant="outline"
              className="text-white border-white hover:bg-red-700 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              View Current Programs
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default JoinCrowdPage;