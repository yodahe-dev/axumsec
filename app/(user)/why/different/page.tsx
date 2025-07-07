'use client';

import Hero from './components/Hero';
import Differentiation from './components/Differentiation';
import Innovation from './components/Innovation';
import Technology from './components/Technology';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';

const HowWeAreDifferent = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      {/* Hero Section */}
      <Hero/>

      {/* What Sets Us Apart */}
      <Differentiation/>

      {/* Innovation Spotlight */}
      <Innovation/>

      {/* Technology Showcase */}
      <Technology />

      {/* Testimonials Section */}
      <Testimonials/>

      {/* CTA Section */}
      <CTA/>

    </div>
  );
};

export default HowWeAreDifferent;