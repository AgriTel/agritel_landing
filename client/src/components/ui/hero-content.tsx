import React from 'react'
import Button from './button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { Mouse } from 'lucide-react';

const HeroContent = () => {
  return (
    <div className='flex flex-col justify-end pb-8 sm:pb-10 lg:pb-14 bg-transparent w-full min-h-[80vh] lg:h-[120dvh]'>
        {/* Heading */}
        <div className='mb-4 sm:mb-6 lg:mb-8'>
            <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight sm:leading-snug lg:leading-tight xl:leading-snug'>
                Introducing Innovation to Your Agricultrading Adventure
            </h1>
        </div>
        
        {/* Description */}
        <div className='mb-6 sm:mb-8 lg:mb-10 max-w-full sm:max-w-xl lg:max-w-2xl'>
            <p className='text-white text-base sm:text-lg lg:text-xl font-normal leading-relaxed'>
                Unlocking creativity transforms farming. Explore techniques
                to enhance productivity and connect with the land.
            </p>
        </div>
        
        {/* CTA Buttons */}
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6'>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto'>
                <Button variant='secondary' icon={faArrowRight} text='Get Started Now' />
                <Button variant='primary' text='Learn Service' />
            </div>
            
            {/* Explore More Link */}
            <a 
                href='#' 
                className='no-underline flex text-white gap-2.5 items-center hover:text-gray-400 transition-colors duration-200 w-full sm:w-auto justify-center sm:justify-start'
            >
                <Mouse size={20} />
                <span className='text-sm sm:text-base'>Explore more</span>
            </a>
        </div>
    </div>
  )
}

export default HeroContent;