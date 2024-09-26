'use client';

import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '@/constants';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import { useState } from 'react';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className='relative z-10 shadow-md w-full duration-300'>
      <div className='container py-4 md:py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo Section */}
          <Link href='/'>
            <Image src='/logo.png' alt='logo' width='100' height='100' />
          </Link>
          {/* Desktop Menu Section */}
          <div className='hidden md:block'>
            <ul className='flex items-center gap-6'>
              {NAV_LINKS.map((links) => {
                return (
                  <li key={links?.key}>
                    <Link
                      href={links?.href}
                      className='text-lg font-medium text-marron-10 py-2 px-4 rounded-full hover:bg-beige-20 transition-300'
                    >
                      {links?.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Mobile Menu Section */}
          <div className='md:hidden flex items-center gap-4'>
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className='cursor-pointer transition-all'
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className='cursor-pointer transition-all'
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
