import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import StatsStrip from '@/components/StatsStrip'
import FeaturesSection from '@/components/FeaturesSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import DownloadSection from '@/components/DownloadSection'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsStrip />
        <FeaturesSection />
        <HowItWorksSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  )
}
