'use client';

import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import How from "./components/How";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";

const PTaaSPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works */}
      <How />

      {/* Service Tiers */}
      <Service />

      {/* Testimonials */}
      <Testimonials />

      {/* Final CTA */}
      <CTA />
      
    </div>
  );
};

export default PTaaSPage;