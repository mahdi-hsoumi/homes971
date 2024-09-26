import Image from 'next/image';
import Button from './Button';
import TitleCard from './TitleCard';
import { TESTIMONIAL } from '@/constants';

const Testimonial = () => {
  return (
    <div className='container py-10'>
      <TitleCard title='What Our Clients Say' />
      <div
        data-aos='zoom-in'
        className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-20'
      >
        {TESTIMONIAL.map((testimonial) => {
          return (
            <div className='space-y-4' key={testimonial.key}>
              <div className='max-w-[350px] mx-auto'>
                <div className='flex items-center flex-col gap-4 text-center'>
                  <Image
                    src={testimonial.image}
                    alt='line'
                    width='30'
                    height='30'
                    className='mr-2 w-20 h-20'
                  />
                  <h4 className='text-2xl font-semibold space-2-y'>
                    {testimonial.name}
                  </h4>
                  <p>{testimonial.description}</p>
                </div>
              </div>
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
  );
};

export default Testimonial;
