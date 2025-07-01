// components/user/Hero.tsx
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { 
  Shield, Lock, Server, Database, Network, Key,
  ArrowRight, Sparkles, Zap, ChevronRight
} from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import Typewriter for code splitting
const Typewriter = dynamic(() => import('typewriter-effect'), { ssr: false });

// Define type for typewriter step
type TypewriterStep = {
  type: string;
};

// Extend TypewriterClass to include additional methods
interface CustomTypewriterClass {
  deleteAll: (speed?: number) => CustomTypewriterClass;
  typeString: (str: string) => CustomTypewriterClass;
  pauseFor: (ms: number) => CustomTypewriterClass;
  start: () => void;
  changeDelay: (delay: number) => CustomTypewriterClass;
}

// Type for event handlers to avoid explicit any
type TypewriterEventHandlers = {
  onStart?: () => void;
  onStop?: () => void;
  onStep?: (step: TypewriterStep) => void;
};

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const typewriterActiveRef = useRef(false);
  
  // Initialize audio with preload
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const audioElement = new Audio('/keyboardtyping.mp3');
      audioElement.volume = 0.2;
      audioElement.preload = 'auto';
      setAudio(audioElement);
      
      return () => {
        if (audioElement) {
          audioElement.pause();
          audioElement.remove();
        }
        if (soundTimeoutRef.current) {
          clearTimeout(soundTimeoutRef.current);
        }
      };
    }
  }, []);

  // Auto-enable sound after user interaction
  useEffect(() => {
    if (!audio || soundEnabled) return;

    const handleUserInteraction = () => {
      // Try to play silently to unlock audio context
      audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
        setSoundEnabled(true);
      }).catch(() => {
        setSoundEnabled(false);
      });
      
      // Remove event listeners after first interaction
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [audio, soundEnabled]);

  // Handle sound playback
  const toggleSound = () => {
    if (!audio) return;
    
    if (soundEnabled) {
      // Turning off
      setSoundEnabled(false);
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      }
    } else {
      // Turning on
      setSoundEnabled(true);
      if (typewriterActiveRef.current && !isPlaying) {
        startSound();
      }
    }
  };

  const startSound = () => {
    if (!audio || isPlaying || !soundEnabled) return;
    
    try {
      audio.currentTime = 0;
      audio.play()
        .then(() => setIsPlaying(true))
        .catch(() => setSoundEnabled(false));
    } catch {
      setSoundEnabled(false);
    }
  };

  const stopSound = (immediate = false) => {
    if (!audio || !isPlaying) return;
    
    if (immediate) {
      audio.pause();
      setIsPlaying(false);
    } else {
      // Graceful fade-out
      const fadeOut = () => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, audio.volume - 0.05);
          soundTimeoutRef.current = setTimeout(fadeOut, 50);
        } else {
          audio.pause();
          audio.volume = 0.2; // Reset volume
          setIsPlaying(false);
        }
      };
      fadeOut();
    }
  };

  // Handle typewriter events
  const handleTypewriterStart = () => {
    typewriterActiveRef.current = true;
    startSound();
  };

  const handleTypewriterStop = () => {
    typewriterActiveRef.current = false;
    stopSound();
  };

  const handleTypewriterStep = (step: TypewriterStep) => {
    if (!soundEnabled) return;
    
    if (step.type === 'Type' || step.type === 'Delete') {
      if (!isPlaying) {
        startSound();
      }
    } else if (step.type === 'Pause') {
      stopSound();
    }
  };

  // Handle typewriter initialization
  const handleTypewriterInit = (typewriter: CustomTypewriterClass) => {
    typewriter
      .changeDelay(80)
      .start();
  };

  // Animate when in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants for text elements
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut" as const
      }
    }
  };

  // Cybersecurity services
  const cyberServices = [
    { icon: <Lock className="w-5 h-5" />, text: "Penetration Testing" },
    { icon: <Server className="w-5 h-5" />, text: "Vulnerability Assessments" },
    { icon: <Database className="w-5 h-5" />, text: "Ethical Hacking Tools" },
    { icon: <Network className="w-5 h-5" />, text: "Security Training" },
    { icon: <Key className="w-5 h-5" />, text: "Bug Bounty Programs" },
    { icon: <Shield className="w-5 h-5" />, text: "Vulnerability Disclosure" }
  ];

  // Create event handlers object with explicit type
  const typewriterEventHandlers: TypewriterEventHandlers = {
    onStart: handleTypewriterStart,
    onStop: handleTypewriterStop,
    onStep: handleTypewriterStep
  };

  return (
    <div 
      ref={ref}
      className="relative pb-20 w-full max-h-[600px] min-h-[500px] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950"
    >
      {/* Subtle background particles */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-500/5"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.05, 0.15, 0.05]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Glowing accent */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none z-0"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Main content container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex">
        {/* Left column - text content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={controls}
          className="w-full lg:w-1/2 pr-0 lg:pr-12 flex flex-col justify-center py-10"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            className="mb-5"
          >
            <div className="inline-flex items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Enterprise Cybersecurity Solutions
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-5 text-gray-900 dark:text-white"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
              AXUM SEC
            </span>
            <br />
            <Typewriter
              options={{
                strings: [
                  'Penetration Testing',
                  'Vulnerability Assessments',
                  'Ethical Hacking Tools',
                  'Security Training'
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 40,
                cursor: '',
              }}
              onInit={handleTypewriterInit}
              // Use typed event handlers
              {...typewriterEventHandlers}
            />
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-lg"
          >
            AXUM SEC is a leading cybersecurity company dedicated to helping organizations safeguard their digital assets and infrastructure.
          </motion.p>
          
          <motion.p
            variants={item}
            className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg"
          >
            Our comprehensive range of cybersecurity services and products empower organizations to enhance their cybersecurity posture and protect their valuable digital assets.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Button 
              className="h-12 px-6 rounded-xl bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white font-medium shadow-md transition-all"
            >
              Get Protected
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              className="h-12 px-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 text-gray-800 dark:text-white font-medium"
            >
              <div className="flex items-center">
                <Zap className="w-5 h-5 mr-2 text-red-500" />
                Schedule Demo
              </div>
            </Button>
            
            {/* Sound toggle */}
            <Button 
              variant="ghost" 
              className="rounded-full p-3"
              onClick={toggleSound}
            >
              {soundEnabled ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 11C18.5 12.5 18.5 14 18 15.5"></path>
                  <path d="M15 8C15.8 9.2 16 10.5 16 12C16 13.5 15.8 14.8 15 16"></path>
                  <path d="M12 3H10C8.34315 3 7 4.34315 7 6V18C7 19.6569 8.34315 21 10 21H12L16.5 16.5C17.3284 16.5 18 15.8284 18 15V9C18 8.17157 17.3284 7.5 16.5 7.5L12 3Z"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3H10C8.34315 3 7 4.34315 7 6V18C7 19.6569 8.34315 21 10 21H12L16.5 16.5C17.3284 16.5 18 15.8284 18 15V9C18 8.17157 17.3284 7.5 16.5 7.5L12 3Z"></path>
                  <path d="M22 22L2 2"></path>
                </svg>
              )}
            </Button>
          </motion.div>

          {/* Services grid */}
          <motion.div
            variants={container}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-xl"
          >
            {cyberServices.map((service, index) => (
              <motion.div
                key={index}
                variants={item}
                className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2"
              >
                <div className="text-red-500">
                  {service.icon}
                </div>
                <span>{service.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right column - cybersecurity visualization */}
        <div className="hidden lg:flex lg:w-1/2 items-center justify-center pl-10">
          <div className="relative w-full h-[500px]">
            {/* Main shield */}
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              animate={{ 
                rotate: [0, 3, 0, -3, 0],
                scale: [1, 1.01, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="w-64 h-64 bg-gradient-to-br from-red-500/5 to-red-800/10 border border-red-500/10 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-gradient-to-br from-red-500/10 to-red-800/15 border border-red-500/10 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-red-500/15 to-red-800/20 border border-red-500/10 rounded-full flex items-center justify-center">
                    <Shield className="w-32 h-32 text-red-500" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating security icons */}
            {[
              { icon: <Lock className="w-8 h-8 text-red-500" />, angle: 0, distance: 160 },
              { icon: <Server className="w-8 h-8 text-red-500" />, angle: 60, distance: 160 },
              { icon: <Database className="w-8 h-8 text-red-500" />, angle: 120, distance: 160 },
              { icon: <Network className="w-8 h-8 text-red-500" />, angle: 180, distance: 160 },
              { icon: <Key className="w-7 h-7 text-red-500" />, angle: 240, distance: 160 },
              { icon: <Shield className="w-7 h-7 text-red-500" />, angle: 300, distance: 160 },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2"
                animate={{
                  x: [
                    Math.cos((item.angle * Math.PI) / 180) * item.distance,
                    Math.cos(((item.angle + 10) * Math.PI) / 180) * item.distance,
                    Math.cos((item.angle * Math.PI) / 180) * item.distance
                  ],
                  y: [
                    Math.sin((item.angle * Math.PI) / 180) * item.distance,
                    Math.sin(((item.angle + 10) * Math.PI) / 180) * item.distance,
                    Math.sin((item.angle * Math.PI) / 180) * item.distance
                  ],
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <div className="bg-white dark:bg-gray-800 shadow-md rounded-full p-3 border border-gray-200 dark:border-gray-700 transform -translate-x-1/2 -translate-y-1/2">
                  {item.icon}
                </div>
              </motion.div>
            ))}

            {/* Pulsing rings */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-red-500/20 rounded-full"
              animate={{
                width: [0, 500],
                height: [0, 500],
                opacity: [0.6, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
            
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-red-500/10 rounded-full"
              animate={{
                width: [0, 600],
                height: [0, 600],
                opacity: [0.4, 0]
              }}
              transition={{
                duration: 5,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeOut"
              }}
            />
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <ChevronRight className="w-5 h-5 text-gray-400 rotate-90" />
        <div className="text-xs text-gray-500 mt-1">Scroll to explore</div>
      </div>
    </div>
  );
};

export default Hero;