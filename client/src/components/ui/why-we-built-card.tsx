import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faLightbulb, faBridge, faGear } from '@fortawesome/free-solid-svg-icons';

interface WhyWeBuiltCardProps {
    quote: string;
    attribution: string;
    role?: string;
    index: number;
}

const WhyWeBuiltCard: React.FC<WhyWeBuiltCardProps> = ({
    quote,
    attribution,
    role,
    index
}) => {
    // Font Awesome icons
    const icons: IconDefinition[] = [
        faLightbulb, // Insight/Innovation
        faBridge,    // Connection/Bridging gap
        faGear       // Reliability/Technology
    ];

    return (
        <div className='flex flex-col justify-between bg-white rounded-2xl p-6 lg:p-8 h-full hover:bg-gray-50 transition-colors duration-300 group'>
            {/* Content */}
            <div className='flex flex-col gap-4 lg:gap-6 h-full'>
                {/* Icon */}
                <div className='flex justify-start'>
                    <div className='w-12 h-12 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)] group-hover:scale-110 transition-transform duration-300'>
                        <FontAwesomeIcon 
                            icon={icons[index]} 
                            className='text-lg'
                        />
                    </div>
                </div>

                {/* Quote */}
                <div className='flex-grow'>
                    <p className='text-left font-normal text-lg lg:text-xl text-[var(--text-primary)] leading-relaxed'>
                        {quote}
                    </p>
                </div>

                {/* Attribution */}
                <div className='flex flex-col gap-1'>
                    <p className='text-left font-semibold text-base lg:text-lg text-[var(--text-primary)]'>
                        {attribution}
                    </p>
                    {role && (
                        <p className='text-left font-normal text-sm lg:text-base text-[var(--text-secondary)]'>
                            {role}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WhyWeBuiltCard;