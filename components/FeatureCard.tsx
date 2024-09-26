import Image from 'next/image';

type CardProps = {
  title: string;
  image: string;
  key: number;
};

const FeatureCard = ({ title, image, key }: CardProps) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-delay='600'
      className='group rounded-2xl  duration-200 max-w-[300px] relative'
      key={key}
    >
      <div className='h-[300px] w-[300px] '>
        <Image
          src={image}
          alt='house'
          width={100}
          height={100}
          className='w-full block mx-auto transform  group-hover:scale-110 group-hover:translate-x-4 duration-300'
        />
      </div>
      <h2 className='text-xl font-semibold flex justify-center mt-8'>
        {title}
      </h2>
    </div>
  );
};

export default FeatureCard;
