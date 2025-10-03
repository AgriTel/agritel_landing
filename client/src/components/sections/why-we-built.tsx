import React from 'react';
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
        quote: "We built AgriTel because farmers deserve access to real-time insights, not guesswork. Precision should be accessible to all.",
        attribution: "Aaron Nartey",
        role: "Founder"
    },
    {
        id: 2,
        quote: "Bridging the productivity gap in African agriculture requires intelligent systems that understand local contexts and challenges.",
        attribution: "Dr. Kwame Mensah",
        role: "Mechatronics Advisor"
    },
    {
        id: 3,
        quote: "Machine failures shouldn't dictate harvest seasons. AgriTel brings predictability to unpredictable environments.",
        attribution: "Kofi Asare",
        role: "Farmer, Ashanti Region"
    }
];

const WhyWeBuilt = () => {
    return (
        <section className='px-4 sm:px-8 lg:px-14 py-12 lg:py-18 w-full max-w-7xl mx-auto bg-white'>
            {/* Header Section */}
            <div className='flex flex-col mb-12 lg:mb-16'>
                <h1 className='font-normal text-4xl sm:text-5xl lg:text-[50px] text-[var(--text-primary)] text-left mb-4 max-w-4xl'>
                    Why We Built AgriTel
                </h1>
                <p className='font-normal text-lg sm:text-xl text-[var(--text-secondary)] text-left max-w-2xl'>
                    Farmers deserve smarter tools. Here's what inspired us to revolutionize agriculture through technology.
                </p>
            </div>
            
            {/* Testimonial Cards Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
                {testimonials.map((testimonial, index) => (
                    <WhyWeBuiltCard 
                        key={testimonial.id}
                        quote={testimonial.quote}
                        attribution={testimonial.attribution}
                        role={testimonial.role}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default WhyWeBuilt;