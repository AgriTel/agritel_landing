import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ButtonProps {
    variant: 'primary' | 'secondary' | 'tertiary';
    icon?: IconDefinition;
    className?: string;
    text?: string; // Made optional since children can be used instead
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    children?: React.ReactNode;
}

const Button = ({ 
    icon, 
    variant, 
    className = '', 
    text, 
    onClick, 
    type = 'button', 
    disabled = false, 
    children 
}: ButtonProps) => {
    const getVariantClasses = (variant: string) => {
        switch (variant) {
            case 'primary':
                return 'bg-[var(--color-primary)] text-[var(--text-primary)] hover:bg-gray-50 transition-colors duration-200';
            case 'secondary':
                return 'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] transition-colors duration-200';
            case 'tertiary':
                return 'bg-[var(--color-secondary)] text-white hover:bg-gray-800 transition-colors duration-200';
            default:
                return 'bg-[var(--color-primary)] text-[var(--text-primary)] hover:bg-gray-50 transition-colors duration-200';
        }
    }

    const getDisabledClasses = () => {
        return 'opacity-50 cursor-not-allowed hover:bg-current';
    }

    return (
        <button 
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`
                w-fit rounded-[100px] px-5 py-3 
                flex items-center justify-center gap-2 
                font-medium text-[16px] 
                outline-none focus:outline-none
                ${getVariantClasses(variant)} 
                ${disabled ? getDisabledClasses() : ''}
                ${className}
            `.trim()}
        >
           
            {/* Render text or children */}
            {text && <span>{text}</span>}
             {icon && <FontAwesomeIcon icon={icon} className="w-4 h-4" />}
            {children}
        </button>
    )
}

export default Button;