import React from 'react';
import Linked from './link';
import Image from 'next/image';

interface SolutionCardProps {
    title: string;
    description: string;
    href: string;
    imagePath: string;
    alt: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ 
    title, 
    description, 
    href, 
    imagePath, 
    alt 
}) => {
    return (
        <div className='flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8 p-6 lg:p-8 rounded-2xl hover:bg-gray-50 transition-colors duration-300'>
            {/* Content Section */}
            <div className='flex-1 flex flex-col gap-4 lg:gap-6 justify-center order-2 lg:order-1'>
                <div className='flex flex-col gap-3 lg:gap-4'>
                    <h3 className='text-left font-semibold text-2xl lg:text-3xl xl:text-[32px] text-[var(--text-primary)]'>
                        {title}
                    </h3>
                    <p className='text-left font-normal text-base lg:text-lg text-[var(--text-secondary)] leading-relaxed'>
                        {description}
                    </p>
                </div>
                <Linked href={href} />
            </div>
            
            {/* Image Section */}
            <div className='flex-1 order-1 lg:order-2 w-full max-w-md lg:max-w-lg'>
                <div className='relative w-full h-48 sm:h-64 lg:h-72 xl:h-80 rounded-xl overflow-hidden'>
                    <Image 
                        alt={alt}
                        src={imagePath}
                        fill
                        className='object-cover hover:scale-105 transition-transform duration-300'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                </div>
            </div>
        </div>
    );
};

export default SolutionCard;