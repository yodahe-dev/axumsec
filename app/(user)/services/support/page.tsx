"use client";

import Benefits from "./components/Benefits";
import CTA from "./components/CTA";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Form from "./components/Form";
import How from "./components/How";
import Interactive from "./components/Interactive";

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* How It Works Section */}
      <How />

      {/* Interactive Support Console */}
      <Interactive />

      {/* Benefits Section */}
      <Benefits />

      {/* Support Request Form */}
      <Form />

      {/* Final CTA */}
      <CTA />

    </div>
  )
}
