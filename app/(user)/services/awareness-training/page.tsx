"use client";

import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Training from "./components/Training";

const AwarenessTrainingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <Hero />

      {/* Training Options Tabs */}
      <Training />

      {/* Benefits Section */}
      <Benefits/>

      {/* Final CTA */}
      <CTA />
      
    </div>
  );
};

export default AwarenessTrainingPage;