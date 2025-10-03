import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface NavigationButtonProps {
    icon: IconDefinition;
    direction?: 'left' | 'right';
    onClick?: () => void;
    variant?: 'glass' | 'minimal' | 'border';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    ariaLabel?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
    icon,
    direction = 'left',
    onClick,
    variant = 'glass',
    size = 'md',
    className = '',
    ariaLabel
}) => {
    // Base classes
    const baseClasses = 'inline-flex items-center justify-center transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-white/50';
    
    // Size variants
    const sizeClasses = {
        sm: 'p-2 w-10 h-10',
        md: 'p-3 w-12 h-12',
        lg: 'p-4 w-14 h-14'
    };
    
    // Border radius - fully rounded
    const borderRadius = 'rounded-full';
    
    // Color variants with transparent background
    const variantClasses = {
        glass: 'bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-95',
        minimal: 'bg-transparent text-white border border-white/16 hover:bg-white/10 hover:border-white/25 hover:scale-110 active:scale-95',
        border: 'bg-transparent text-white border-2 border-white/25 hover:bg-white/15 hover:border-white/40 hover:scale-105 active:scale-95 shadow-lg'
    };

    // Hover animation based on direction with smooth translation
    const hoverAnimation = direction === 'left' 
        ? 'hover:-translate-x-0.5' 
        : 'hover:translate-x-0.5';

    return (
        <button
            className={`
                ${baseClasses}
                ${sizeClasses[size]}
                ${borderRadius}
                ${variantClasses[variant]}
                ${hoverAnimation}
                ${className}
            `.trim()}
            onClick={onClick}
            aria-label={ariaLabel || `Navigate ${direction}`}
        >
            <FontAwesomeIcon 
                icon={icon} 
                className="text-white"
            />
        </button>
    );
};

export default NavigationButton;