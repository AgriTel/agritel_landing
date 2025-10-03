import React from 'react';
import Button from './button';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface AgriInfoCardProps {
    title: string;
    description: string;
    date: string;
    imageHref: string;
    onClick?: () => void;
}

const AgriInfoCard: React.FC<AgriInfoCardProps> = ({
    title,
    description,
    date,
    imageHref,
    onClick
}) => {
  return (
    <div className='flex flex-col justify-between bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] group'>
        {/* Image Section */}
        <div className='relative w-full h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-green-400/20 to-blue-500/20'>
            {imageHref ? (
                <Image 
                    src={imageHref}
                    alt={title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                />
            ) : (
                <div className='w-full h-full flex items-center justify-center'>
                    <span className='text-white/40 text-sm'>Image Coming Soon</span>
                </div>
            )}
        </div>
        
        {/* Content Section */}
        <div className='flex flex-col gap-4 lg:gap-6 p-4 sm:p-6 lg:p-7'>
            <div className='flex flex-col gap-3 lg:gap-4'>
                <h3
                    className="font-medium text-xl sm:text-2xl lg:text-2xl text-white leading-tight group-hover:text-white/90 transition-colors"
                >
                    {title}
                </h3>
                <p className='font-normal text-sm sm:text-base lg:text-[16px] text-white/60 leading-relaxed line-clamp-3'>
                    {description}
                </p>
                <p className='font-normal text-xs sm:text-sm lg:text-[14px] text-white/30'>
                    {date}
                </p>
            </div>
            
            <div className='flex justify-start'>
                <Button
                variant='primary'
                icon={faArrowRight}
                text='Read More'
                onClick={onClick}
                className='hover:translate-x-1 transition-transform duration-250'
                />
            </div>
        </div>
    </div>
  );
};

export default AgriInfoCard;