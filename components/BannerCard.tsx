import Image from 'next/image';

type BannerProps = {
  icon: string;
  title: string;
  description: string;
};

const BannerCard = ({ icon, title, description }: BannerProps) => {
  return (
    <div className='max-w-[350px] mx-auto'>
      <div className='flex items-center gap-4'>
        <div>
          <span className='h-[70px] w-[70px] rounded-xl text-black-10 bg-marron-10 flex items-center justify-center'>
            <Image src={icon} alt='icon' width='40' height='40' />
          </span>
        </div>
        <div>
          <h2 className='text-xl font-bold'>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
