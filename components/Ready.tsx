import Button from './Button';
import Image from 'next/image';

const Ready = () => {
  return (
    <div className='container'>
      <div className='grid drid-cols-1 place-items-center bg-beige-30 px-10 text-center'>
        <div
          className='flex justify-center items-center flex-row text-center space-y-5 py-14'
          data-aos='fade-up'
        >
          <Image
            src='/Vector.png'
            alt='line'
            width='30'
            height='30'
            className='mr-6'
          />
          <h1 className='text-3xl font-semibold'>
            Ready to transform your space?
          </h1>
          <Image
            src='/Vector.png'
            alt='line'
            width='30'
            height='30'
            className='ml-6 '
          />
        </div>
        <div>
          <p data-aos='fade-up' className='text-base sm:text-xl'>
            Let’s get started with a free consultation. We’re here to bring your
            vision to life!
          </p>
          <div data-aos='fade-up' className='mb-20 mt-20 flex justify-center'>
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

export default Ready;
