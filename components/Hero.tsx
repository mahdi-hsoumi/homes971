import Image from 'next/image';
import Button from './Button';

const Hero = () => {
  return (
    <div className='container'>
      {/* text Container Section */}
      <div className='grid drid-cols-1 place-items-center'>
        <div className='text-center space-y-5 py-14'>
          <h1
            data-aos='fade-up'
            data-aos-delay='400'
            className='text-3xl font-semibold md:text-6xl'
          >
            Transform Your Home in Just 3 Days
          </h1>
          <p
            data-aos='fade-up'
            data-aos-delay='600'
            className='text-base sm:text-xl'
          >
            At HOMES at 971, we bring art and architecture together to create
            unique, high-value living spaces—quickly and cost-effectively.
          </p>
          <div data-aos='fade-up' data-aos-delay='800'>
            <Button
              type='button'
              variant='bg-marron-10 text-beige-30 rounded-full shadow-md py-2 px-9 transition duration-300'
              title='Get Started'
            />
          </div>
        </div>
      </div>
      {/** Image Section */}
      <div
        data-aos='zoom-in-right'
        data-aos-duration='1000'
        className='w-full md:max-w md:h-auto'
      >
        <Image
          src='/heroImage.png'
          alt='hero image'
          width='100'
          height='100'
          className='w-full max-h-[500px] translate-y-10 sm:translate-y-0'
        />
      </div>
    </div>
  );
};

export default Hero;
