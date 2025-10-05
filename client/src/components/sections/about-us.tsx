'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Linked from '../ui/link';

interface StatTypes {
    id: number;
    stat: string;
    title: string;
    description: string;
}

const stats: StatTypes[] = [
    {
        id: 1,
        stat: "150+",
        title: "Farmers in Our Network",
        description: "AgriTel connects with smallholder farmers across underserved communities, providing them with actionable insights to improve their agricultural practices and livelihoods."
    },
    {
        id: 2,
        stat: "3+",
        title: "Core Service Solutions",
        description: "Our comprehensive suite includes localized weather forecasts, pest outbreak predictions, and fertilizer timing insights - all powered by IoT and AI technology."
    },
    {
        id: 3,
        stat: "24/7",
        title: "Data Collection & Analysis",
        description: "Our AgriTel On-Farm Units continuously collect environmental data, providing real-time insights that help farmers make informed decisions for optimal crop management."
    },
];

const AboutUs = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
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

    const statsVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }
        }
    }

    return (
        <motion.div 
            className='px-4 sm:px-6 lg:px-14 py-12 lg:py-18 space-y-12 lg:space-y-14 max-w-7xl mx-auto'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Top Section */}
            <div className='flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12'>
                {/* Left Heading */}
                <motion.div className='flex-1' variants={itemVariants}>
                    <h1 className='text-left font-normal text-4xl sm:text-5xl lg:text-[52px] leading-tight lg:leading-snug text-[var(--text-primary)]'>
                        Empowering <span className='text-[var(--text-accent)]'>Farmers</span> Through Innovation and <span className='text-[var(--text-accent)]'>Knowledge</span>
                    </h1>
                </motion.div>
                
                {/* Right Content */}
                <motion.div className='flex-1 flex flex-col gap-8 lg:gap-14 max-w-full lg:max-w-xl' variants={itemVariants}>
                    <div className='flex flex-col gap-6 lg:gap-8'>
                        <p className='text-lg sm:text-xl lg:text-[18px] font-normal text-[var(--text-primary)] leading-relaxed'>
                            AgriTel leverages IoT, AI, and meteorological data to provide actionable insights to smallholder farmers in underserved communities. Our mission is to bridge the digital divide and foster sustainable food security.
                        </p>
                        <p className='text-lg sm:text-xl lg:text-[18px] font-normal text-[var(--text-primary)]/64 leading-relaxed'>
                            By integrating cutting-edge technology with accessible solutions, we empower farmers with climate-smart agricultural practices.
                        </p>
                    </div>
                    {/* Link Component */}
                    <Linked href="#" />
                </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div 
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'
                variants={containerVariants}
            >
                {stats.map((statItem, index) => (
                    <motion.div 
                        key={statItem.id} 
                        className='flex flex-col gap-4 lg:gap-6 text-left p-4 lg:p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300'
                        variants={statsVariants}
                        whileHover={{ 
                            y: -5,
                            transition: { type: "spring", stiffness: 300 }
                        }}
                    >
                        <p className='font-normal text-5xl sm:text-6xl lg:text-[72px] text-[var(--text-primary)] leading-none'>
                            {statItem.stat}
                        </p>
                        <h3 className='font-normal text-xl lg:text-[18px] text-[var(--text-primary)] leading-tight'>
                            {statItem.title}
                        </h3>
                        <p className='font-normal text-base lg:text-[16px] text-[var(--text-secondary)] leading-relaxed'>
                            {statItem.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default AboutUs;