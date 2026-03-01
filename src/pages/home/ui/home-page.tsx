import FaqSection from './FaqSection'
import FeaturesBlock from './FeaturesBlock'
import Footer from './Footer'
import HeroSection from './HeroSection'
import InteractiveFeatures from './InteractiveFeatures'
import Marquee from './Marquee'
import Navbar from './Navbar'
import PricingSection from './PricingSection'
import ProtocolSection from './ProtocolSection'

export function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-x-hidden bg-background text-foreground selection:bg-primary/30">
      {/* Dynamic Background Gradations */}
      <div className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/10 mix-blend-screen blur-[150px]" />
      <div className="pointer-events-none absolute top-[40%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 mix-blend-screen blur-[150px]" />

      {/* Site Components */}
      <div className="relative isolate z-10">
        <Navbar />
        <HeroSection />
        <InteractiveFeatures />
        <FeaturesBlock />
        <ProtocolSection />
        <PricingSection />
        <Marquee />
        <FaqSection />
        <Footer />
      </div>
    </main>
  )
}
