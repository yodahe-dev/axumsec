'use client';

import { motion } from 'framer-motion';
import { 
  Shield, Search, Target, BarChart, Lock, 
  FileText, Server, Network, CheckCircle, 
  Bug, Award, User, Zap, Calendar
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const PenetrationTestingPage = () => {
  const processSteps = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Scoping & Planning",
      description: "Define objectives, rules of engagement, and testing boundaries"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Reconnaissance",
      description: "Gather intelligence on target systems and identify potential entry points"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Vulnerability Analysis",
      description: "Systematically identify and classify security weaknesses"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Exploitation",
      description: "Attempt to breach systems using discovered vulnerabilities"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Reporting & Remediation",
      description: "Document findings and provide actionable remediation guidance"
    }
  ];

  const serviceTypes = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Network Penetration Testing",
      description: "Identify vulnerabilities in network infrastructure, firewalls, and routers"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Web Application Testing",
      description: "Assess web apps for OWASP Top 10 vulnerabilities and business logic flaws"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "API Security Testing",
      description: "Evaluate API endpoints for authentication and authorization weaknesses"
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Social Engineering",
      description: "Test human vulnerabilities through phishing and physical security tests"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cloud Security Assessment",
      description: "Audit AWS, Azure, or GCP configurations for misconfigurations"
    },
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Wireless Network Testing",
      description: "Evaluate Wi-Fi security and identify rogue access points"
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Identify Security Gaps",
      description: "Discover vulnerabilities before attackers exploit them"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Meet Compliance",
      description: "Fulfill PCI DSS, HIPAA, GDPR and other regulatory requirements"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Protect Reputation",
      description: "Prevent data breaches that damage customer trust"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Reduce Financial Risk",
      description: "Avoid costly breaches averaging $4.35 million per incident"
    }
  ];

  const features = [
    "Comprehensive Testing Coverage: All systems, applications, and networks",
    "Expert-Led Manual Testing: Beyond automated scans",
    "Actionable Reporting: Prioritized findings with remediation steps",
    "Compliance Alignment: Meets industry standards and regulations",
    "Remediation Support: Guidance through the entire fixing process"
  ];

  const testimonials = [
    {
      quote: "AXUM SEC's penetration test uncovered critical vulnerabilities that our internal team missed. Their detailed report helped us prioritize fixes and significantly improve our security posture.",
      author: "Tewodros Abebe",
      role: "CTO, EthioPay",
      avatar: "/avatar-tewodros.png"
    },
    {
      quote: "The ethical hackers from AXUM SEC think exactly like real attackers. Their findings were eye-opening and helped us prevent what could have been a devastating breach.",
      author: "Sara Mohammed",
      role: "Security Director, Nile Insurance",
      avatar: "/avatar-sara.png"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] dark:bg-[url('/grid-pattern-dark.svg')] bg-[size:100px_100px] opacity-10 z-0" />
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <div className="inline-flex items-center justify-center px-6 py-2 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
            <Shield className="w-5 h-5 text-red-600 dark:text-red-400 mr-2" />
            <span className="text-red-600 dark:text-red-400 font-medium">AXUM SECURITY</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600 mb-4">
            Uncover Hidden Vulnerabilities with Professional Pen Testing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            AXUM SEC's penetration testing simulates real-world attacks to expose critical security weaknesses before attackers exploit them.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400 text-white px-8 py-6 text-lg shadow-lg shadow-red-500/20 dark:shadow-red-900/30">
                Schedule a Pen Test
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" className="px-8 py-6 text-lg border-red-600 text-red-600 dark:text-red-400 dark:border-red-400">
                Download Sample Report
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={itemVariants}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow"
            >
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600 mb-2">
                92%
              </div>
              <p className="text-gray-600 dark:text-gray-300">Critical Vulnerabilities Found</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow"
            >
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600 mb-2">
                350+
              </div>
              <p className="text-gray-600 dark:text-gray-300">Systems Secured</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow"
            >
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600 mb-2">
                24/7
              </div>
              <p className="text-gray-600 dark:text-gray-300">Remediation Support</p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow"
            >
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 dark:from-red-400 dark:to-red-600 mb-2">
                $4M+
              </div>
              <p className="text-gray-600 dark:text-gray-300">Potential Losses Prevented</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            Our Penetration Testing Process
          </motion.h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-red-500 to-red-700 dark:from-red-400 dark:to-red-600 hidden md:block"></div>
            
            <motion.div 
              className="grid md:grid-cols-5 gap-8 relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className={`bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 ${
                    index % 2 === 0 ? 'md:mb-16' : 'md:mt-16'
                  } hover:shadow-xl transition-shadow group`}
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg mr-4 group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                      <span className="text-red-600 dark:text-red-400">{step.icon}</span>
                    </div>
                    <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/10 dark:to-red-900/5">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            Comprehensive Testing Services
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceTypes.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-all"
              >
                <div className="text-red-600 dark:text-red-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 border border-red-100 dark:border-red-900/30">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Why Choose Professional Pen Testing?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="bg-red-100 dark:bg-red-900/20 w-12 h-12 rounded-full flex items-center justify-center mt-1 mr-4 flex-shrink-0">
                    <span className="text-red-600 dark:text-red-400">{benefit.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-600 to-red-800 dark:from-red-700 dark:to-red-900 rounded-2xl shadow-xl p-8 md:p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-white">Our Testing Advantage</h2>
            
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <CheckCircle className="w-6 h-6 text-red-300 mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg text-red-100">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          >
            Trusted by Security Leaders
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-6">
                      <Avatar className="mr-4">
                        <AvatarImage src={testimonial.avatar} />
                        <AvatarFallback className="bg-red-100 dark:bg-red-900/30">
                          {testimonial.author.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.author}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg italic">"{testimonial.quote}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <Calendar className="w-16 h-16 mx-auto text-red-600 dark:text-red-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Uncover Your Vulnerabilities?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Schedule a professional penetration test and get actionable insights to strengthen your security.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400 text-white px-8 py-6 text-lg">
                Schedule Your Pen Test
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="px-8 py-6 text-lg border-red-600 text-red-600 dark:text-red-400 dark:border-red-400">
                Speak with an Expert
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PenetrationTestingPage;