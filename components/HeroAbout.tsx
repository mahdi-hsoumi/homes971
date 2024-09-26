import Image from 'next/image';
import AboutTitle from './AboutTitle';

const HeroAbout = () => {
  return (
    <div className='container mb-10 mt-10'>
      <div className='grid drid-cols-1 place-items-center'>
        <AboutTitle
          title='1.Our Vision'
          description='At HOMES at 971, we believe that every home should be as unique as the
        people who live in it. Our vision is to transform living spaces across
        the UAE by merging art and architecture to create homes that tell a
        story, reflect personality, and enhance value. We aim to revolutionize
        the way homes are designed, making extraordinary living spaces
        accessible to everyone.'
        />
      </div>
      <div data-aos='zoom-in-right' className='w-full md:max-w md:h-auto'>
        <Image
          src='/heroabout.png'
          alt='hero image'
          width='100'
          height='100'
          className='w-full max-h-[500px] translate-y-10 sm:translate-y-0'
        />
      </div>
    </div>
  );
};

export default HeroAbout;
