'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import SolutionCard from '../ui/solution-card';

interface SolutionItems {
    id: number;
    title: string;
    description: string;
    href: string;
    imagePath: string;
    alt: string;
}

const solutions: SolutionItems[] = [
    {
        id: 1,
        title: "Localized Weather Forecasts",
        description: "Hyper-local weather predictions powered by our AgriTel On-Farm Units. Get accurate, location-specific forecasts that help you plan planting, irrigation, and harvesting.",
        href: "/solutions/weather-forecasts",
        imagePath: "/images/weather-forecasting.jpg",
        alt: "Weather monitoring technology for smart farming"
    },
    {
        id: 2,
        title: "Pest Outbreak Predictions",
        description: "AI-powered pest detection system that analyzes environmental conditions to alert farmers about potential threats, enabling proactive crop protection.",
        href: "/solutions/pest-predictions",
        imagePath: "/images/pest-prediction.jpg",
        alt: "AI-powered pest detection and monitoring system"
    },
    {
        id: 3,
        title: "Fertilizer & Pesticide Timing",
        description: "Data-driven recommendations for optimal application timing. Our IoT sensors analyze soil conditions and weather patterns to maximize effectiveness.",
        href: "/solutions/fertilizer-timing",
        imagePath: "/images/fertilizer-timing.jpg",
        alt: "Smart fertilizer application timing technology"
    },
    {
        id: 4,
        title: "AgriTel On-Farm Unit (IoT Device)",
        description: "Our flagship IoT device that collects real-time environmental data. This innovative AgriPod prototype provides the foundation for all our insights.",
        href: "/solutions/on-farm-unit",
        imagePath: "/images/iot-device.jpg",
        alt: "AgriTel On-Farm IoT sensing device"
    },
];

const OurSolutions = () => {
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
            id="solutions"
            className='px-4 sm:px-8 lg:px-14 py-12 lg:py-18 w-full max-w-7xl mx-auto'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Header Section */}
            <motion.div className='flex flex-col mb-12 lg:mb-16' variants={itemVariants}>
                <h1 className='font-normal text-4xl sm:text-5xl lg:text-[48px] text-[var(--text-primary)] text-left mb-4 max-w-4xl'>
                    Our <span className='text-[var(--text-accent)]'>Smart Farming</span> Solutions
                </h1>
                <p className='font-normal text-lg sm:text-xl lg:text-[18px] text-[var(--text-secondary)] text-left max-w-2xl'>
                    AgriTel leverages IoT, AI, and meteorological data to provide actionable insights that empower farmers with data-driven knowledge for enhanced productivity and sustainable agriculture.
                </p>
            </motion.div>
            
            {/* Solutions Cards */}
            <motion.div className='flex flex-col gap-8 sm:gap-12 lg:gap-14' variants={containerVariants}>
                {solutions.map((solution, index) => (
                    <motion.div key={solution.id} variants={itemVariants}>
                        <SolutionCard 
                            title={solution.title}
                            description={solution.description}
                            href={solution.href}
                            imagePath={solution.imagePath}
                            alt={solution.alt}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default OurSolutions;