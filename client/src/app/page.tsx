import React from 'react';
import Hero from '@/components/sections/hero';
import AboutUs from '@/components/sections/about-us';
import OurSolutions from '@/components/sections/our-solutions';
import AgriInfo from '@/components/sections/agri-info';
import WhyWeBuilt from '@/components/sections/why-we-built';
import AgricRevolution from '@/components/sections/agric-revolution';
import Footer from '@/components/sections/footer';
const Page = () => {
  return (
    <div className=''>
      <Hero />
      <AboutUs />
      <OurSolutions />
      <AgriInfo />
      <WhyWeBuilt />
      <AgricRevolution />
      <Footer />
    </div>
  )
}

export default Page;