import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LinkedProps {
    href: string;
    children?: React.ReactNode;
    className?: string;
}

const Linked = ({ href, children = "Learn More", className = "" }: LinkedProps) => {
    return (
        <a 
            href={href} 
            className={`
                inline-flex gap-2 items-center h-fit w-fit 
                text-sm sm:text-base font-medium
                py-1 sm:py-1.5
                text-[var(--a-font)] 
                border-b border-transparent 
                hover:border-gray-300 
                hover:gap-3
                transition-all duration-250 ease-in-out
                group
                ${className}
            `.trim()}
        >
            {children}
            <FontAwesomeIcon 
                icon={faArrowRight} 
                className="w-4 h-4 sm:w-5 sm:h-5 font-medium group-hover:translate-x-1 transition-transform duration-250 ease-in-out" 
            />
        </a>
    );
};

export default Linked;