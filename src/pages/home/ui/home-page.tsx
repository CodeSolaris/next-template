'use client'

import FaqSection from './FaqSection'
import FeaturesBlock from './FeaturesBlock'
import Footer from './Footer'
import HeroSection from './HeroSection'
import InteractiveFeatures from './InteractiveFeatures'
import Navbar from './Navbar'
import PricingSection from './PricingSection'
import ProtocolSection from './ProtocolSection'

export function HomePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />

      <div className="flex flex-col">
        <HeroSection />
        <FeaturesBlock />
        <InteractiveFeatures />
        <ProtocolSection />
        <PricingSection />
        <FaqSection />
      </div>

      <Footer />

      {/* Global Background Elements */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(123,97,255,0.05)_0%,transparent_70%)]" />
      </div>
    </main>
  )
}
