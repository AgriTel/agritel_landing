import React from 'react';
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
        title: "Organic Fertilizer",
        description: "An Eco-Friendly Method for Enriching Soil Health and Supporting Flourishing Plants. This approach enhances soil quality and fosters a thriving ecosystem, ensuring a brighter future.",
        href: "/solutions/organic-fertilizer",
        imagePath: "/images/organic-fertilizer.jpg",
        alt: "Organic fertilizer application in farm"
    },
    {
        id: 2,
        title: "Technology Irrigation",
        description: "Innovative Irrigation Technology for Sustainable Agriculture. This cutting-edge system optimizes water usage, promotes healthy crop growth, and supports biodiversity, paving the way for a more sustainable agricultural future.",
        href: "/solutions/technology-irrigation",
        imagePath: "/images/technology-irrigation.jpg",
        alt: "Modern irrigation system in field"
    },
    {
        id: 3,
        title: "Agricultural Monitoring",
        description: "A Comprehensive Approach to Agricultural Monitoring for Sustainable Growth. This method improves crop management and supports a robust agricultural ecosystem, paving the way for a more sustainable future.",
        href: "/solutions/agricultural-monitoring",
        imagePath: "/images/agricultural-monitoring.jpg",
        alt: "Farm monitoring technology"
    },
    {
        id: 4,
        title: "Terrace Cultivation & Soil Stewardship",
        description: "Terrace cultivation is a sustainable farming technique that transforms hilly landscapes into flat, manageable plots. This method not only conserves soil and Water aids soil health and prevents erosion. Farmers cultivate diverse crops.",
        href: "/solutions/terrace-cultivation",
        imagePath: "/images/terrace-cultivation.jpg",
        alt: "Terraced farming landscape"
    },
];

const OurSolutions = () => {
    return (
        <section className='px-4 sm:px-8 lg:px-14 py-12 lg:py-18 w-full max-w-7xl mx-auto'>
            {/* Header Section */}
            <div className='flex flex-col mb-12 lg:mb-16'>
                <h1 className='font-normal text-4xl sm:text-5xl lg:text-[50px] text-[var(--text-primary)] text-left mb-4 max-w-4xl'>
                    Our Agriculture Solution
                </h1>
                <p className='font-normal text-lg sm:text-xl text-[var(--text-secondary)] text-left max-w-2xl'>
                    Our Agriculture Solution boosts productivity and sustainability. This approach merges technology with tradition to aid farmers.
                </p>
            </div>
            
            {/* Solutions Cards */}
            <div className='flex flex-col gap-8 sm:gap-12 lg:gap-14'>
                {solutions.map((solution) => (
                    <SolutionCard 
                        key={solution.id}
                        title={solution.title}
                        description={solution.description}
                        href={solution.href}
                        imagePath={solution.imagePath}
                        alt={solution.alt}
                    />
                ))}
            </div>
        </section>
    );
};

export default OurSolutions;