import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Linked = ( { href }: { href: string } ) => {
  return (
    <a href={href} className='py-1 flex gap-2 items-center h-fit w-fit text-[var(--a-font)] font-medium border-b border-transparent hover:border-gray-300 transition-all duration-250 ease-in'>
    Learn More 
    <FontAwesomeIcon icon={faArrowRight} className="w-6 h-6 font-medium" />
    </a>
  )
}

export default Linked;