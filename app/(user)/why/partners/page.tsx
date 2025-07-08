"use client";

import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Partners from "./components/Partners";
import Testimonials from "./components/Testimonials";

const PartnersPage = () => {

  return (
    <div className="bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-black min-h-screen">
      {/* Hero Section */}
      <Hero/>

      {/* Introduction */}
      <Introduction/>

      {/* Benefits */}
      <Benefits/>

      {/* Key Partners */}
      <Partners/>

      {/* Testimonials */}
      <Testimonials/>

      {/* CTA */}
      <CTA />

    </div>
  );
};

export default PartnersPage;