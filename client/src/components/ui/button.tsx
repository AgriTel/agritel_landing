import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'tertiary'; // Made more specific
    icon?: IconDefinition;
    className?: string;
    text: string;
    onClick?: () => void; // Added optional click handler
    type?: 'button' | 'submit' | 'reset'; // Added button type
}

const Button = ({ icon, variant, className = '', text, onClick, type = 'button' }: ButtonProps) => {
    const getVariant = (variant: string) => {
        switch (variant) {
            case 'primary':
                return 'bg-[var(--primary-button)] text-[var(--text-primary)] hover:opacity-80';
            case 'secondary':
                return 'bg-[var(--secondary-button)] text-[var(--text-primary)] hover:opacity-80';
            case 'tertiary':
                return 'bg-[var(--primary-secondary)] text-white hover:opacity-90'; // Fixed undefined variable
            default:
                return 'bg-[var(--primary-button)] text-[var(--text-primary)] hover:opacity-80';
        }
    }

    return (
        <button 
            type={type}
            onClick={onClick}
            className={`w-fit rounded-[100px] px-5 py-3 flex items-center gap-2 ${getVariant(variant)} ${className} font-medium text-[16px] transition-all duration-200 active:scale-95`}
        >
            <span>{text}</span> 
            {icon && <FontAwesomeIcon icon={icon} className="w-4 h-4" />}
        </button>
    )
}

export default Button;