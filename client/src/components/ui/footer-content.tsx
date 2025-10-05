import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



interface FooterItems {
  id: number;
  header: string;
  links: {
    id: number;
    name: string;
    href: string;
  }[]
}

const footerItems: FooterItems[] = [
  {
    id: 1,
    header: "Product",
    links: [
      { id: 1, name: "Organic Fertilizer", href: "" },
      { id: 2, name: "Technology Irrigation", href: "" },
      { id: 3, name: "Agricultural Monitoring", href: "" },
      { id: 4, name: "Terrace Cultivation", href: "" },
    ]
  },
  {
    id: 2,
    header: "Company",
    links: [
      { id: 1, name: "Resources", href: "" },
      { id: 2, name: "Blog", href: "" },
      { id: 3, name: "Contact Us", href: "" },
      { id: 4, name: "How we work", href: "" },
    ]
  },
  {
    id: 3,
    header: "Services",
    links: [
      { id: 1, name: "Soil Analysis", href: "" },
      { id: 2, name: "Crop Management", href: "" },
      { id: 3, name: "Pest Control", href: "" },
      { id: 4, name: "Sustainability Practices", href: "" },
    ]
  },
  {
    id: 4,
    header: "Innovations",
    links: [
      { id: 1, name: "Precision Farming", href: "" },
      { id: 2, name: "Vertical Farming", href: "" },
      { id: 3, name: "Climate-Smart Agriculture", href: "" },
      { id: 4, name: "Agroecology", href: "" },
    ]
  },
  {
    id: 5,
    header: "Success Stories",
    links: [
      { id: 1, name: "Testimonial", href: "" },
      { id: 2, name: "Case Studies", href: "" },
      { id: 3, name: "Customer Reports", href: "" },
      { id: 4, name: "Impact Assessments", href: "" },
    ]
  }
]

const date = new Date().getFullYear();

const FooterContent = () => {
  return (
    <div className='flex flex-col justify-between gap-12 lg:gap-16'>
      {/* Main Footer Content */}
      <div className='flex flex-col lg:flex-row justify-between gap-8 lg:gap-12'>
        {/* Logo Section */}
        <div className='flex flex-col gap-4 lg:gap-6'>
          <div className='flex items-center text-[var(--text-primary)]'>
            <Image
              src="/assets/logo_black.png"
              width={27}
              height={32}
              alt='AgriTel Logo'
              priority
              className='w-8 h-9 sm:w-9 sm:h-10 lg:w-10 lg:h-11'
            />
            <p className='text-xl sm:text-2xl lg:text-3xl font-semibold ml-3'>AgriTel</p>
          </div>
          <p className='font-normal text-xs lg:text-sm text-[var(--text-secondary)] max-w-sm leading-relaxed'>
            Revolutionizing agriculture through innovative technology and sustainable practices for a better tomorrow.
          </p>
        </div>

        {/* Links Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8'>
          {footerItems.map((item) => (
            <div key={item.id} className='w-full flex flex-col gap-3 lg:gap-3'>
              <p className='font-semibold text-lg text-[var(--text-primary)] mb-1 lg:mb-2'>
                {item.header}
              </p>
              <div className='flex flex-col gap-2 lg:gap-3'>
                {item.links.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className='font-normal text-xs lg:text-sm text-[var(--text-secondary)] hover:text-[var(--color-secondary)] transition-colors duration-300 group'
                  >
                    <span className='relative'>
                      {link.name}
                      <span className='absolute bottom-0 left-0 w-0 h-px bg-[var(--color-secondary)] group-hover:w-full transition-all duration-300 ease-out'></span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 lg:pt-8 border-t border-gray-200'>
        <p className='font-normal text-sm lg:text-base text-[var(--text-secondary)] text-center sm:text-left'>
          Copyright &copy; AgriTel {date}. All rights reserved.
        </p>
        <div className='flex items-center gap-4 lg:gap-6'>
          <a
            href='#'
            className='font-normal text-xs lg:text-sm text-[var(--text-secondary)] hover:text-[var(--color-secondary)] transition-colors duration-300 relative group'
          >
            <span className='relative'>
              Privacy Policy
              <span className='absolute bottom-0 left-0 w-0 h-px bg-[var(--color-secondary)] group-hover:w-full transition-all duration-300 ease-out'></span>
            </span>
          </a>
          <a
            href='#'
            className='font-normal text-xs lg:text-sm text-[var(--text-secondary)] hover:text-[var(--color-secondary)] transition-colors duration-300 relative group'
          >
            <span className='relative'>
              Terms of Use
              <span className='absolute bottom-0 left-0 w-0 h-px bg-[var(--color-secondary)] group-hover:w-full transition-all duration-300 ease-out'></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;