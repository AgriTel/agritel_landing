import React from 'react';
import EmailInput from '../ui/email-input';

const AgricRevolution = () => {
  return (
    <div className='flex flex-col py-12 sm:py-16 lg:py-20 bg-[var(--color-secondary)]/24 justify-center items-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='flex flex-col justify-between items-center w-full max-w-4xl text-center'>
            <h1 className='font-normal text-3xl sm:text-4xl lg:text-5xl xl:text-[50px] text-white mb-3 sm:mb-4 leading-tight'>
                Join the Agricultural Revolution Now!
            </h1>
            <p className='font-normal text-base sm:text-lg lg:text-xl text-white/60 max-w-full sm:max-w-xl lg:max-w-2xl leading-relaxed'>
                Let's Explore the Depths of Agricultural Advancement and Discover How We Can Create a Meaningful Change Together!
            </p>
        </div>
        
        {/* Email Input Section */}
        <div className='w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center'>
            <EmailInput />
        </div>
    </div>
  );
};

export default AgricRevolution;