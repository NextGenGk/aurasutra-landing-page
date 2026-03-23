'use client'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Features from '@/components/Features'
import Marquee from '@/components/MarqueeBanner'
import WhyChooseUs from '@/components/WhyChooseUs'
import Appointment from '@/components/Appointment'
import PortalSections from '@/components/PortalSections'
import SpecialCare from '@/components/SpecialCare'
import Testimonials from '@/components/Testimonials'
import OurTeam from '@/components/OurTeam'
import BusinessServices from '@/components/BusinessServices'
import Footer from '@/components/Footer'

import CustomCursor from '@/components/CustomCursor'
import Preloader from '@/components/Preloader'
import ScrollProgress from '@/components/ScrollProgress'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Preloader />

      <ScrollProgress />
      <SmoothScroll>
        <Navbar />
        <Hero />
        <About />
        <Features />
        <Marquee />
        <WhyChooseUs />
        <Appointment />
        <PortalSections />
        <SpecialCare />
        <Testimonials />
        <OurTeam />
        
        <BusinessServices />
        <Footer />
      </SmoothScroll>
    </>
  )
}
