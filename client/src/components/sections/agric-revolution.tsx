'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import EmailInput from '../ui/email-input';

const AgricRevolution = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
      className='flex flex-col py-12 sm:py-16 lg:py-20 bg-[var(--color-secondary)]/24 justify-center items-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
        {/* Header Section */}
        <motion.div className='flex flex-col justify-between items-center w-full max-w-4xl text-center' variants={itemVariants}>
            <h1 className='font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-[46px] text-white mb-3 sm:mb-4 leading-tight'>
                Join the AgriTel <span className='text-[var(--text-accent)]'>Smart Farming</span> Revolution!
            </h1>
            <p className='font-normal text-base sm:text-lg lg:text-xl xl:text-[18px] text-white/60 max-w-full sm:max-w-xl lg:max-w-2xl leading-relaxed'>
                Be part of the future of agriculture. Get early access to AgriTel's IoT and AI-powered farming solutions.
            </p>
        </motion.div>
        
        {/* Email Input Section */}
        <motion.div className='w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center' variants={itemVariants}>
            <EmailInput />
        </motion.div>
    </motion.div>
  );
};

export default AgricRevolution;