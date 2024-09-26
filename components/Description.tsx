import TitleCard from './TitleCard';

const Description = () => {
  return (
    <div className='container grid drid-cols-1 place-items-center'>
      <div className='text-center  pt-10'>
        <TitleCard title='homes at 971' />
        <p
          data-aos='fade-up'
          className='text-base sm:text-xl text-center px-10'
        >
          Specializes in delivering stunning, customized interiors that reflect
          the unique personalities of each client. Whether you’re a tenant
          seeking a personalized living space or an investor wanting to maximize
          property value, we provide high-quality renovations in just 1-3 days.
        </p>
      </div>
    </div>
  );
};

export default Description;
