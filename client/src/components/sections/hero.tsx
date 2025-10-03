import React from 'react';
import Header from './header';
import HeroContent from '../ui/hero-content';

const Hero = () => {
  return (
    <div className='flex flex-col justify-between bg-[var(--color-secondary)]/20 px-4 sm:px-6 lg:px-8 xl:px-14 pt-4 min-h-screen'>
        <Header />
        <HeroContent />
    </div>
  )
}

export default Hero;