'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsappLive = () => {
  const whatsappNumber = '21658783751';
  const baseUrl = 'https://api.whatsapp.com/send/';
  const encodedMessage = 'Heet el message eli theeb thooto';
  const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_abset=0`;

  useEffect(() => {
    const handleScroll = () => {
      const whatsappLineElement = document.querySelector('.whatsapp-link');
      if (window.scrollY > 100) {
        whatsappLineElement?.classList.add('visible');
      } else {
        whatsappLineElement?.classList.remove('visible');
      }
    };

    const checkScrollVisibility = () => {
      const whatsappLinkElement = document.querySelector('.whatsapp-link');
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (scrollHeight > clientHeight) {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
      } else {
        whatsappLinkElement?.classList.add('visible');
      }
    };

    checkScrollVisibility();

    // window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <a
        className='whatsapp-link realtive'
        href={whatsappLink}
        target='_blank'
        rel='noreferrer noopener'
      >
        <span className='absolute left-[7px] top-[7px] -z-50 size-10'>
          <span className='flex size-full items-center justify-center animate-ping rounded-full bg-green-500 opacity-75'></span>
        </span>
        {/* <Image
          src='/Vector.png'
          alt='whats-up'
          width={40}
          height={40}
          className='whatsapp-icon z-50'
        /> */}
        <FaWhatsapp width={40} className='whatsapp-icon z-50' />
      </a>
    </div>
  );
};

export default WhatsappLive;
