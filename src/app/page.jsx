import Navbar from "@/components/hero-section/navbar";
import HeroSection from "@/components/hero-section/hero-section";
import Footer from "@/components/hero-section/footer";
import { Testimonial } from "@/components/testimonial/testimonial";
import {FeatureSection} from '@/components/feature-section/feature-section'

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0d0c0c]">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Testimonial />
      <Footer />
    </div>
  );
}
