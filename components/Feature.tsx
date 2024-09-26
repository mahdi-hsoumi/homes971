import Image from 'next/image';
import Button from './Button';
import TitleCard from './TitleCard';
import { SERVICES_FEATURES } from '@/constants';
import FeatureCard from './FeatureCard';

const Feature = () => {
  return (
    <div className='container py-4'>
      <div data-aos='fade-up' className=' text-center space-y-5 py-14'>
        <TitleCard title='Our Services' />
        <p
          data-aos='fade-up'
          data-aos-delay='1000'
          className='text-base sm:text-xl px-10'
        >
          We offer comprehensive solutions that cover every aspect of home
          renovation from design to furnishing and everything in between. Here’s
          what we can do for you:
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center text-center'>
        {SERVICES_FEATURES.map((service) => {
          return (
            <FeatureCard
              title={service.title}
              image={service.image}
              key={service.key}
            />
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
  );
};

export default Feature;
