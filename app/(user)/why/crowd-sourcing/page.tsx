'use client';
import Hero from '@/components/user/crowd-sourcing/Hero';
import Overview from '@/components/user/crowd-sourcing/Overview';
import Crowd from '@/components/user/crowd-sourcing/Crowd';
import Step from '@/components/user/crowd-sourcing/Step';
import CaseStudies from '@/components/user/crowd-sourcing/CaseStudies';
import Benefits from '@/components/user/crowd-sourcing/Benefits';
import Testimonials from '@/components/user/crowd-sourcing/Testimonials';
import Faq from '@/components/user/crowd-sourcing/Faq';
import FinalCTA from '@/components/user/crowd-sourcing/FinalCTA';

const CrowdSourcingPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 min-h-screen">
      {/* Hero Section */}
      <Hero/>

      {/* Overview Section */}
      <Overview/>

      {/* What is AXUM Crowd Sourcing */}
      <Crowd/>

      {/* How It Works Section */}
      <Step/>

      {/* Why Choose AXUM Crowd Sourcing */}
      <Benefits/>

      {/* Case Studies Section */}
      <CaseStudies/>

      {/* Testimonials Section */}
      <Testimonials/>

      {/* FAQ Section */}
      <Faq/>

      {/* Final CTA Section */}
      <FinalCTA/>
      
    </div>
  );
};

export default CrowdSourcingPage;