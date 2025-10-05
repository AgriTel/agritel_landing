'use client'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import Button from './button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { Mouse } from 'lucide-react';

const HeroContent = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <motion.div 
      className='flex flex-col justify-end pb-8 sm:pb-10 lg:pb-14 bg-transparent w-full min-h-[80vh] lg:h-[120dvh]'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        {/* Heading */}
        <motion.div className='mb-4 sm:mb-6 lg:mb-8' variants={itemVariants}>
            <h1 className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal leading-tight sm:leading-snug lg:leading-tight xl:leading-snug'>
                Insight-driven <span className='text-[var(--text-accent)]'>agriculture</span> for a sustainable <span className='text-[var(--text-accent)]'>tomorrow</span>
            </h1>
        </motion.div>
        
        {/* Description */}
        <motion.div className='mb-6 sm:mb-8 lg:mb-10 max-w-full sm:max-w-xl lg:max-w-2xl' variants={itemVariants}>
            <p className='text-white text-base sm:text-lg lg:text-xl font-normal leading-relaxed'>
                AgriTel leverages IoT, AI, and meteorological data to provide actionable insights 
                that empower smallholder farmers with data-driven knowledge for enhanced productivity 
                and sustainable agriculture.
            </p>
        </motion.div>
        
        {/* CTA Buttons */}
        <motion.div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6' variants={itemVariants}>
            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto'>
                <Button variant='secondary' icon={faArrowRight} text='Join AgriTel Waitlist' />
                <Button variant='primary' text='Explore Our Solutions' />
            </div>
            
            {/* Explore More Link */}
            <motion.a 
                href='#solutions' 
                className='no-underline flex text-white gap-2.5 items-center hover:text-gray-400 transition-colors duration-250 w-full sm:w-auto justify-center sm:justify-start group'
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <Mouse size={20} className='group-hover:animate-bounce' />
                <span className='text-sm sm:text-base'>Discover Smart <span className='text-[var(--text-accent)]'>Farming</span></span>
            </motion.a>
        </motion.div>
    </motion.div>
  )
}

export default HeroContent;