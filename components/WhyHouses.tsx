import React from 'react';
import BannerCard from './BannerCard';
import Image from 'next/image';
import Button from './Button';
import TitleCard from './TitleCard';
import { FEATURES_WHY } from '@/constants';

const WhyHouses = () => {
  return (
    <div className='container'>
      <div className='min-h-[530px] flex items-center py-10 bg-beige-30 '>
        <div className='container'>
          <TitleCard title='Why HOMES at 971?' />

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20'>
            {FEATURES_WHY.map((feature) => {
              return (
                <div className='space-y-8' key={feature.title}>
                  <BannerCard
                    icon={feature.image}
                    title={feature.title}
                    description={feature.description}
                  />
                </div>
              );
            })}
          </div>

          <div
            data-aos='fade-up'
            data-aos-delay='1000'
            className='mb-20 mt-10 flex justify-center'
          >
            <Button
              type='button'
              variant='bg-marron-10 text-beige-30 rounded-full shadow-md py-2 px-9 transition duration-300'
              title='Get Started'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHouses;
