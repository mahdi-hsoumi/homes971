import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='relative pb-10 pt-20  px-8 lg:px-20 3xl:px-0 flex flex-col justify-center items-center gap-10'>
      <Link href='/'>
        <Image src='/logo.png' alt='logo' width={76} height={32} />
      </Link>
      <h4 className='font-bold'>Contact Us</h4>
      <p>info@homes971.com</p>
      <p>+971 54 747 9070</p>
      <div className='flex flex-row gap-5'>
        <Image
          src='/instagram.png'
          alt='instagram'
          width={100}
          height={100}
          className='h-10 w-10'
        />
        <Image
          src='/facebook.png'
          alt='instagram'
          width={100}
          height={100}
          className='h-10 w-10'
        />
        <Image
          src='/linkedin.png'
          alt='instagram'
          width={100}
          height={100}
          className='h-10 w-10'
        />
      </div>
    </footer>
  );
};

export default Footer;
