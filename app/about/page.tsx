import AboutTitle from '@/components/AboutTitle';
import Footer from '@/components/Footer';
import HeroAbout from '@/components/HeroAbout';
import Navbar from '@/components/Navbar';
import Ready from '@/components/Ready';
import TitleCard from '@/components/TitleCard';
import WhyHouses from '@/components/WhyHouses';

export default function About() {
  return (
    <>
      <Navbar />
      <TitleCard title='Abouts' />
      <HeroAbout />
      <AboutTitle
        title='2. Our Mission'
        description='Our mission is simple: to deliver stunning, high-quality interiors in just 1-3 days, while maximizing property value and tenant satisfaction. Through innovative design, meticulous craftsmanship, and a client-first approach,HOMES at 971 elevates the standard of living spaces, while helping property owners and investors achieve superior returns on their properties.'
      />
      <WhyHouses />
      <AboutTitle
        title='3.Meet Our Team'
        description='At HOMES at 971, we pride ourselves on our talented, multidisciplinary team of designers, craftsmen, and project managers. Together, we bring expertise, creativity, and passion to each project we undertake. Our team is committed to delivering exceptional results that exceed client expectations.'
      />
      <AboutTitle
        title='4.Our Commitment'
        description='We don t  just renovate spaces—we create experiences. We re committed to delivering  spaces that reflect your unique vision, increase the value of your property, and enhance the overall quality of life. Your satisfaction is our top priority, and we re available 24/7 to make sure your project is  completed exactly as you envision.'
      />
      <Ready />
      <Footer />
    </>
  );
}
