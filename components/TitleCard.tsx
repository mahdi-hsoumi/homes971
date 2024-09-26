import Image from 'next/image';

type TitleProps = {
  title: string;
};

const TitleCard = ({ title }: TitleProps) => {
  return (
    <div className='space-y-10 py-10  text-center '>
      <div className='flex items-center justify-center gap-5 '>
        <Image
          src='/Line.png'
          alt='line'
          width='60'
          height='50'
          color='white'
        />
        <Image src='/Vector.png' alt='line' width='30' height='30' />
        <h2 className='text-3xl font-semibold uppercase'>{title}</h2>
      </div>
    </div>
  );
};

export default TitleCard;
