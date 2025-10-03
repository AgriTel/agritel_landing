import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
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
    title: "Millennial Farmers Utilize Drones for Land Mapping and Fertilization.",
    description: "Millennial farmers use drones for mapping and fertilization. Aerial imagery helps optimize yields and manage resources.",
    date: "Sep, 15/05/2025",
    imageHref: ""
  },
  {
    id: 2,
    title: "Drought-resistant seedlings for the dry season.",
    description: "Innovative farmers are developing drought-resistant seedlings to tackle challenges during the dry season.",
    date: "Sep, 15/05/2025",
    imageHref: ""
  },
  {
    id: 3,
    title: "Young Farmers Employ Drones for Terrain Analysis and Crop Nourishment",
    description: "Farmers use drones for mapping and fertilization. Aerial photos improve yield and resource management.",
    date: "Sep, 15/05/2025",
    imageHref: ""
  },
];

const AgriInfo = () => {
  return (
    <section className='flex flex-col min-h-screen justify-between px-4 sm:px-8 lg:px-14 py-12 lg:py-18 w-full max-w-7xl mx-auto bg-[var(--color-secondary)]'>
        {/* Header Section - Your Original Layout */}
        <div className='mb-12 lg:mb-16'>
            <h1 className='font-normal text-4xl sm:text-5xl lg:text-[50px] text-white text-left mb-6 max-w-full lg:max-w-[60%] leading-tight'>
                Discover the Latest Agriculture Info on AgriTel
            </h1>
            <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 w-full'> 
                 <p className='font-normal text-lg sm:text-xl text-white/60 text-left max-w-full lg:max-w-2xl flex-1'>
                 Our Agriculture Solution boosts productivity and sustainability. This approach merges technology with tradition to aid farmers.
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
        </div>

        {/* Cards Grid - Maintained Responsive Improvements */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
          {AgriInfoItems.map((item) => (
              <AgriInfoCard 
              key={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              imageHref={item.imageHref}
              />
          ))}
        </div>
    </section>
  );
};

export default AgriInfo;