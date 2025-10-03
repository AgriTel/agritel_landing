import React from 'react';
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
        stat: "100%",
        title: "Customer Satisfaction Rate",
        description: "AgriTel shows how products meet consumer needs, enhancing satisfaction and fostering loyalty, leading to recommendations and expanding influence."
    },
    {
        id: 2,
        stat: "20+",
        title: "Years of Experience",
        description: "With 20 years in agriculture, AgriTel shows how products meet consumer needs, enhancing satisfaction and loyalty."
    },
    {
        id: 3,
        stat: "160K",
        title: "Farmer Around The World",
        description: "AgriTel illustrates how products cater to the needs of farmers globally, boosting their satisfaction and Loyalty boosts recommendations and expands impact."
    },
];

const AboutUs = () => {
    return (
        <div className='px-4 sm:px-6 lg:px-14 py-12 lg:py-18 space-y-12 lg:space-y-14 max-w-7xl mx-auto'>
            {/* Top Section */}
            <div className='flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12'>
                {/* Left Heading */}
                <div className='flex-1'>
                    <h1 className='text-left font-normal text-4xl sm:text-5xl lg:text-[56px] leading-tight lg:leading-snug text-[var(--text-primary)]'>
                        Innovating the Future of Agriculture
                    </h1>
                </div>
                
                {/* Right Content */}
                <div className='flex-1 flex flex-col gap-8 lg:gap-14 max-w-full lg:max-w-xl'>
                    <div className='flex flex-col gap-6 lg:gap-8'>
                        <p className='text-lg sm:text-xl lg:text-[20px] font-normal text-[var(--text-primary)] leading-relaxed'>
                            AgriTel, where tradition meets innovation, is committed to transforming the agricultural industry through sustainable practices and cutting-edge technology. Our mission is to empower farmers with advanced tools and resources that not only enhance productivity but also promote environmental stewardship.
                        </p>
                        <p className='text-lg sm:text-xl lg:text-[20px] font-normal text-[var(--text-primary)]/64 leading-relaxed'>
                            By integrating modern techniques with time-honored methods, we aim to create a more resilient and efficient agricultural landscape for future generations.
                        </p>
                    </div>
                    {/* Link Component */}
                    <Linked href="#" />
                </div>
            </div>

            {/* Stats Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12'>
                {stats.map((statItem) => (
                    <div 
                        key={statItem.id} 
                        className='flex flex-col gap-4 lg:gap-6 text-left p-4 lg:p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300'
                    >
                        <p className='font-normal text-5xl sm:text-6xl lg:text-[72px] text-[var(--text-primary)] leading-none'>
                            {statItem.stat}
                        </p>
                        <h3 className='font-normal text-xl lg:text-[20px] text-[var(--text-primary)] leading-tight'>
                            {statItem.title}
                        </h3>
                        <p className='font-normal text-base lg:text-[16px] text-[var(--text-secondary)] leading-relaxed'>
                            {statItem.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;