'use client';

import Analysis from "./components/Analysis";
import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Languages from "./components/Languages";
import Vulnerability from "./components/Vulnerability";

const SourceCodeAnalysisPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Benefits Section */}
      <Benefits />

      {/* Analysis Process */}
      <Analysis />

      {/* Languages Section */}
      <Languages />

      {/* Vulnerability Types */}
      <Vulnerability />

      {/* Final CTA */}
      <CTA />

    </div>
  );
};

export default SourceCodeAnalysisPage;