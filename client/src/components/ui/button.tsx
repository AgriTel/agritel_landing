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
                return 'bg-[var(--primary-button)] text-[var(--text-primary)] hover:opacity-80 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';
            case 'secondary':
                return 'bg-[var(--secondary-button)] text-[var(--text-primary)] hover:opacity-80 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50';
            case 'tertiary':
                return 'bg-[var(--tertiary-button)] text-white hover:opacity-90 focus:ring-2 focus:ring-white focus:ring-opacity-50';
            default:
                return 'bg-[var(--primary-button)] text-[var(--text-primary)] hover:opacity-80 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50';
        }
    }

    const getDisabledClasses = () => {
        return 'opacity-50 cursor-not-allowed hover:opacity-50 active:scale-100';
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
                transition-all duration-200 
                active:scale-95 disabled:active:scale-100
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