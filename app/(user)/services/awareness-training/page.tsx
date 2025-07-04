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

const AwarenessTrainingPage = () => {
  const onlineCourses = [
    {
      icon: <Mail className="w-8 h-8 text-red-500" />,
      title: "Phishing Awareness",
      description: "Recognize and avoid phishing attacks used to steal sensitive information."
    },
    {
      icon: <Key className="w-8 h-8 text-red-500" />,
      title: "Secure Password Practices",
      description: "Create and manage strong passwords with best practices."
    },
    {
      icon: <Lock className="w-8 h-8 text-red-500" />,
      title: "Data Protection and Privacy",
      description: "Handle sensitive information securely with proper protocols."
    },
    {
      icon: <UserCog className="w-8 h-8 text-red-500" />,
      title: "Social Engineering Defense",
      description: "Defend against human-based attacks and manipulation tactics."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-500" />,
      title: "Incident Response Basics",
      description: "Recognize, report, and respond to potential security incidents."
    }
  ];

  const onsiteTrainings = [
    {
      icon: <ClipboardCheck className="w-8 h-8 text-red-500" />,
      title: "Customized Workshops",
      description: "Tailored sessions addressing your organization's unique security challenges."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-red-500" />,
      title: "Executive Briefings",
      description: "Strategic sessions for leadership on cybersecurity and culture building."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Incident Response Drills",
      description: "Simulated exercises preparing teams for real-world security incidents."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-red-500" />,
      title: "Role-Specific Training",
      description: "Targeted training for IT, HR, customer service, and other departments."
    }
  ];

  const certifications = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-red-500" />,
      title: "CCAP",
      name: "Certified Cybersecurity Awareness Professional",
      description: "Fundamental cybersecurity knowledge for all employees."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "CIRS",
      name: "Certified Incident Response Specialist",
      description: "Managing and responding to cybersecurity incidents effectively."
    },
    {
      icon: <Code className="w-8 h-8 text-red-500" />,
      title: "CSDP",
      name: "Certified Secure Development Practitioner",
      description: "Secure coding practices and integrating security in development."
    },
    {
      icon: <UserCog className="w-8 h-8 text-red-500" />,
      title: "CSEDS",
      name: "Certified Social Engineering Defense Specialist",
      description: "Recognizing and mitigating human-based security threats."
    }
  ];

  const onlineFeatures = [
    "Flexible Learning: Learn at your own pace and schedule",
    "Interactive Modules: Engaging content for better retention",
    "Regular Updates: Always current with the latest threats",
    "Progress Tracking: Monitor employee training completion"
  ];

  const onsiteFeatures = [
    "Tailored Content: Customized to your organization's needs",
    "Interactive Learning: Hands-on exercises and scenarios",
    "Expert Trainers: Practical knowledge from cybersecurity professionals",
    "Team Building: Fosters collaboration and security culture"
  ];

  const certificationFeatures = [
    "Industry-Recognized Credentials: Respected in cybersecurity",
    "Comprehensive Assessments: Rigorous testing of skills",
    "Continuous Learning: Ongoing development requirements",
    "Flexible Paths: From foundational to advanced levels"
  ];

  const benefits = [
    {
      title: "Scalable Training",
      description: "Suitable for organizations of all sizes",
      icon: <BarChart className="w-6 h-6 text-red-500" />
    },
    {
      title: "Cost-Effective",
      description: "Affordable cybersecurity education",
      icon: <DollarSign className="w-6 h-6 text-red-500" />
    },
    {
      title: "Convenient Access",
      description: "Available anytime, anywhere",
      icon: <Monitor className="w-6 h-6 text-red-500" />
    },
    {
      title: "Enhanced Security",
      description: "Reduced risk of breaches",
      icon: <Shield className="w-6 h-6 text-red-500" />
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
            AXNESS Cybersecurity Training
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
            Empowering Organizations with Cybersecurity Knowledge
          </h1>
          
          <motion.p 
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Build a culture of security through comprehensive awareness and training programs designed to protect your organization.
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
              <BookOpen className="mr-2 w-5 h-5" />
              Start Online Training
            </Button>
            
            <Button 
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 py-6 px-8 text-lg transition-transform hover:scale-105"
              size="lg"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Onsite Training
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Training Options Tabs */}
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
                      Learn Anytime, Anywhere with AXNESS Online Training
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      Continuous learning is critical in today's digital environment. Our online courses educate employees on the latest cybersecurity best practices with flexible, accessible programs tailored to your organization's needs.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {onlineFeatures.map((feature, index) => (
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
                      {onlineCourses.map((course, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                        >
                          <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                            {course.icon}
                          </div>
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
                      Personalized In-Person Cybersecurity Training
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      Our immersive onsite sessions are tailored to your organization's needs, helping employees understand and apply cybersecurity best practices in their daily work through interactive learning experiences.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {onsiteFeatures.map((feature, index) => (
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
                      {onsiteTrainings.map((training, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm"
                        >
                          <div className="bg-red-100 dark:bg-red-900/20 p-2 rounded-lg">
                            {training.icon}
                          </div>
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
                      Validate Your Cybersecurity Skills
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                      AXNESS certifications demonstrate a commitment to cybersecurity excellence and are recognized as a mark of competence in the field. Advance your career or validate your team's skills with our certification programs.
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {certificationFeatures.map((feature, index) => (
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
                      {certifications.map((cert, index) => (
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
                                {cert.title}
                              </Badge>
                              <h4 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
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

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-950/30">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Benefits of AXNESS Training
          </motion.h2>
          
          <motion.p 
            className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Transform your organization's security posture with our comprehensive training programs
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
  );
};

export default AwarenessTrainingPage;