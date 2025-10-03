import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import whiteLogo from "../../../public/assets/logo_white.png";
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  return (
    <header className='bg-transparent py-4'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-8'>
            {/* Logo */}
            <div className='flex items-center text-white'>
                <Image 
                    src={whiteLogo}
                    width={27}
                    height={32}
                    alt='AgriTel Logo'
                    priority
                    className='w-6 h-7 sm:w-7 sm:h-8'
                />
                <p className='text-lg sm:text-xl font-medium ml-2'>AgriTel</p>
            </div>

            {/* Navigation */}
            <nav className='flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 xl:gap-9 items-center order-3 lg:order-2 w-full lg:w-auto mt-4 lg:mt-0'>
                {routes.map((route) => (
                    <Link 
                        key={route.id} 
                        href={route.url} 
                        className='text-sm sm:text-[16px] font-normal text-white hover:text-gray-400 transition-colors duration-250 px-2 py-1'
                    >
                        {route.name}
                    </Link>
                ))}
            </nav>

            {/* Social Links */}
            <div className='flex gap-3 sm:gap-4 lg:gap-5 xl:gap-6 items-center order-2 lg:order-3'>
                {socials.map((social) => (
                    <a 
                        key={social.id} 
                        className='bg-transparent hover:bg-white/20 rounded-md p-1.5 sm:p-2 transition-colors duration-200' 
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Visit our ${social.name}`}
                    >
                        <FontAwesomeIcon 
                            icon={social.icon} 
                            className='text-lg sm:text-xl text-white hover:scale-110 transition-transform duration-200' 
                            size="sm"
                        />
                    </a>
                ))}
            </div>
        </div>
    </header>
  )
}

export default Header;