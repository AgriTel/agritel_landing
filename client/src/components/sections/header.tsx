'use client'
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef } from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useClickOutside from '@/hooks/useClickOutside';

interface RouteType {
    id: number;
    url: string;
    name: string;
}

interface SocialsType {
    id: number;
    url: string;
    name: string;
    icon: IconDefinition;
}

const routes: RouteType[] = [
    { id: 1, url: '/', name: 'Home' },
    { id: 2, url: '/services', name: 'Services' },
    { id: 3, url: '/products', name: 'Products' },
    { id: 4, url: '/about', name: 'About Us' },
    { id: 5, url: '/blog', name: 'Blog' },
] 

const socials: SocialsType[] = [
    { id: 1, url: 'https://www.facebook.com/', name: 'Facebook', icon: faFacebookF },
    { id: 2, url: 'https://www.twitter.com/', name: 'Twitter', icon: faXTwitter },
    { id: 3, url: 'https://www.instagram.com/', name: 'Instagram', icon: faInstagram },
    { id: 4, url: 'https://www.linkedin.com/', name: 'LinkedIn', icon: faLinkedin }
]

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    useClickOutside(mobileMenuRef, () => {
        if (isMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    });

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className='bg-transparent py-4 relative'>
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <div className='flex items-center text-white'>
                    <Image 
                        src="/assets/logo_white.png"
                        width={27}
                        height={32}
                        alt='AgriTel Logo'
                        priority
                        className='w-6 h-7 sm:w-7 sm:h-8'
                    />
                    <p className='text-lg sm:text-xl font-medium ml-2'>AgriTel</p>
                </div>

                {/* Desktop Navigation */}
                <nav className='hidden lg:flex gap-6 xl:gap-8 items-center'>
                    {routes.map((route) => (
                        <Link 
                            key={route.id} 
                            href={route.url} 
                            className='text-[16px] font-normal text-white hover:text-gray-300 transition-colors duration-250 relative group'
                        >
                            {route.name}
                            <span className='absolute bottom-0 left-0 w-0 h-px bg-gray-300 group-hover:w-full transition-all duration-250'></span>
                        </Link>
                    ))}
                </nav>

                {/* Desktop Social Links */}
                <div className='hidden lg:flex gap-4 xl:gap-5 items-center'>
                    {socials.map((social) => (
                        <a 
                            key={social.id} 
                            className='bg-transparent hover:bg-gray-400/20 rounded-md p-2 transition-colors duration-200' 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`Visit our ${social.name}`}
                        >
                            <FontAwesomeIcon 
                                icon={social.icon} 
                                className='text-lg text-white hover:scale-110 transition-transform duration-200' 
                            />
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className='lg:hidden text-white p-2 hover:bg-gray-400/20 rounded-md transition-colors duration-200'
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                >
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className='text-xl'
                    />
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div 
                ref={mobileMenuRef}
                className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Sidebar Header */}
                <div className='flex justify-between items-center p-6 border-b border-gray-700'>
                    <div className='flex items-center text-white'>
                        <Image 
                            src="/assets/logo_white.png"
                            width={27}
                            height={32}
                            alt='AgriTel Logo'
                            className='w-6 h-7'
                        />
                        <p className='text-lg font-medium ml-2'>AgriTel</p>
                    </div>
                    
                    {/* Close Button */}
                    <button 
                        className='text-white p-2 hover:bg-gray-400/20 rounded-md transition-colors duration-200'
                        onClick={closeMobileMenu}
                        aria-label="Close menu"
                    >
                        <FontAwesomeIcon 
                            icon={faXmark} 
                            className='text-xl'
                        />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <nav className='flex flex-col p-6'>
                    {routes.map((route) => (
                        <Link 
                            key={route.id} 
                            href={route.url} 
                            className='text-lg font-normal text-white hover:text-gray-300 py-4 px-2 border-b border-gray-700 hover:bg-gray-400/10 transition-colors duration-250 last:border-b-0'
                            onClick={closeMobileMenu}
                        >
                            {route.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Social Links */}
                <div className='absolute bottom-6 left-0 right-0 flex justify-center gap-4 px-6'>
                    {socials.map((social) => (
                        <a 
                            key={social.id} 
                            className='bg-gray-400/20 hover:bg-gray-400/30 rounded-md p-3 transition-colors duration-200' 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label={`Visit our ${social.name}`}
                            onClick={closeMobileMenu}
                        >
                            <FontAwesomeIcon 
                                icon={social.icon} 
                                className='text-white text-lg' 
                            />
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <div className='lg:hidden fixed inset-0 bg-black/50 z-40' />
            )}
        </header>
    );
};

export default Header;