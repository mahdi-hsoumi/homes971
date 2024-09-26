type TitleAboutProps = {
  title: string;
  description: string;
};

const AboutTitle = ({ title, description }: TitleAboutProps) => {
  return (
    <div className='container mb-10 mt-10'>
      <div className='grid drid-cols-1 place-items-center'>
        <div className='text-center space-y-5 py-14'>
          <h2 className='text-3xl font-semibold'>{title}</h2>
          <p className='text-base sm:text-xl px-10'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutTitle;
