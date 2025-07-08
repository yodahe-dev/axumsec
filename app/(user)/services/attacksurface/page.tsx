"use client";

import Attack from "./components/Attack";
import Hero from "./components/Hero";
import Security from "./components/Security";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";

const AttackSurfacePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <Hero />

      {/* Attack Surface Management Section */}
      <Attack />

      {/* Security Control Installation Section */}
      <Security />

      {/* Benefits Section */}
      <Benefits />

      {/* CTA Section */}
      <CTA />
    </div>
  );
};

export default AttackSurfacePage;