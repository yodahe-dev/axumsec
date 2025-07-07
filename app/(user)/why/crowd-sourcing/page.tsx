'use client';
import Hero from '@/app/(user)/why/crowd-sourcing/components/Hero';
import Overview from '@/app/(user)/why/crowd-sourcing/components/Overview';
import Crowd from '@/app/(user)/why/crowd-sourcing/components/Crowd';
import Step from '@/app/(user)/why/crowd-sourcing/components/Step';
import CaseStudies from '@/app/(user)/why/crowd-sourcing/components/CaseStudies';
import Benefits from '@/app/(user)/why/crowd-sourcing/components/Benefits';
import Testimonials from '@/app/(user)/why/crowd-sourcing/components/Testimonials';
import Faq from '@/app/(user)/why/crowd-sourcing/components/Faq';
import FinalCTA from '@/app/(user)/why/crowd-sourcing/components/FinalCTA';

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