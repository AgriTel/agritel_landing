'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import WhyWeBuiltCard from '../ui/why-we-built-card';

interface TestimonialType {
    id: number;
    quote: string;
    attribution: string;
    role?: string;
}

const testimonials: TestimonialType[] = [
    {
        id: 1,
        quote: "We built AgriTel because farmers deserve access to real-time insights, not guesswork. Every decision should be data-driven for better yields.",
        attribution: "Maurice Elikem Sunuh",
        role: "Founder & CEO"
    },
    {
        id: 2,
        quote: "Climate change demands innovative solutions. AgriTel bridges the gap between traditional farming knowledge and modern technology for sustainable agriculture.",
        attribution: "AgriTel Team",
        role: "Engineering Department"
    },
    {
        id: 3,
        quote: "Smallholder farmers in underserved communities need accessible tools. Our IoT and AI solutions transform how farmers understand their environment.",
        attribution: "AgriTel Research",
        role: "Product Development"
    }
];

const WhyWeBuilt = () => {
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
            className='px-4 sm:px-8 lg:px-14 py-12 lg:py-18 w-full max-w-7xl mx-auto bg-white'
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {/* Header Section */}
            <motion.div className='flex flex-col mb-12 lg:mb-16' variants={itemVariants}>
                <h1 className='font-normal text-4xl sm:text-5xl lg:text-[48px] text-[var(--text-primary)] text-left mb-4 max-w-4xl'>
                    Why We Built <span className='text-[var(--text-accent)]'>AgriTel</span>: Our Vision for Smart <span className='text-[var(--text-accent)]'>Agriculture</span>
                </h1>
                <p className='font-normal text-lg sm:text-xl lg:text-[18px] text-[var(--text-secondary)] text-left max-w-2xl'>
                    AgriTel was born from a vision to empower farmers with actionable insights and foster sustainable food security through innovation.
                </p>
            </motion.div>
            
            {/* Testimonial Cards Grid */}
            <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
                variants={containerVariants}
            >
                {testimonials.map((testimonial, index) => (
                    <motion.div key={testimonial.id} variants={itemVariants}>
                        <WhyWeBuiltCard 
                            quote={testimonial.quote}
                            attribution={testimonial.attribution}
                            role={testimonial.role}
                            index={index}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
};

export default WhyWeBuilt;