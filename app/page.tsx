'use client';

import React, { useEffect } from 'react';
import AOS from 'aos';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

import 'aos/dist/aos.css';
import Feature from '@/components/Feature';
import WhyHouses from '@/components/WhyHouses';
import Testimonial from '@/components/Testimonial';
import Ready from '@/components/Ready';
import Description from '@/components/Description';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <Description />
      <Feature />
      <WhyHouses />
      <Testimonial />
      <Ready />
      <Footer />
    </>
  );
}
