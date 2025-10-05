'use client'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { motion, Variants } from 'framer-motion';
import NavigationButton from '../ui/arrow-button';
import AgriInfoCard from '../ui/agri-info-card';

interface AgriInfo {
  id: number;
  title: string;
  description: string;
  date: string;
  imageHref: string;
}

const AgriInfoItems: AgriInfo[] = [
  {
    id: 1,
    title: "AgriPod Prototype: Our Innovative IoT Weather Sensing Device",
    description: "AgriTel's engineering team is developing an advanced IoT-based AgriPod prototype - a wind and weather sensing device for hyper-local forecasts.",
    date: "Dec, 15/12/2024",
    imageHref: "/images/agripod-prototype.jpg"
  },
  {
    id: 2,
    title: "Bridging the Digital Divide in Rural Agriculture",
    description: "How AgriTel combines digital and offline communication tools to ensure all farmers have access to actionable agricultural insights.",
    date: "Nov, 28/11/2024",
    imageHref: "/images/digital-divide.jpg"
  },
  {
    id: 3,
    title: "Partnership with Ghana Meteorological Services Enhances Forecasting",
    description: "Our collaboration with meteorological experts enables more accurate, location-specific weather predictions for smallholder farmers.",
    date: "Oct, 10/10/2024",
    imageHref: "/images/weather-partnership.jpg"
  },
];

const AgriInfo = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <motion.section 
      className='flex flex-col min-h-screen justify-between px-4 sm:px-8 lg:px-14 py-12 lg:py-18 w-full max-w-7xl mx-auto bg-[var(--color-secondary)]'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
        {/* Header Section - Your Original Layout */}
        <motion.div className='mb-12 lg:mb-16' variants={itemVariants}>
            <h1 className='font-normal text-4xl sm:text-5xl lg:text-[48px] text-white text-left mb-6 max-w-full lg:max-w-[60%] leading-tight'>
                Latest AgriTel <span className='text-[var(--text-accent)]'>Innovations</span> and Smart Farming <span className='text-[var(--text-accent)]'>Insights</span>
            </h1>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 w-full'> 
                 <p className='font-normal text-lg sm:text-xl lg:text-[18px] text-white/60 text-left max-w-full lg:max-w-2xl flex-1'>
                 Stay updated with AgriTel's latest technological developments, farmer success stories, and climate-smart agriculture innovations that are transforming farming communities.
                 </p>
                 <div className='flex gap-4'>
                   <NavigationButton 
                    icon={faArrowLeft}
                    variant="glass"
                    ariaLabel="Previous slide"
                    />
                   <NavigationButton
                   icon={faArrowRight}
                   variant="glass"
                   ariaLabel="Next slide"/>
                 </div>
            </div>
        </motion.div>

        {/* Cards Grid - Maintained Responsive Improvements */}
        <motion.div 
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
          variants={containerVariants}
        >
          {AgriInfoItems.map((item, index) => (
              <motion.div key={item.id} variants={itemVariants}>
                <AgriInfoCard 
                  title={item.title}
                  description={item.description}
                  date={item.date}
                  imageHref={item.imageHref}
                />
              </motion.div>
          ))}
        </motion.div>
    </motion.section>
  );
};

export default AgriInfo;