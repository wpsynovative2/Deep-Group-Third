
import MainLayout from '../layouts/MainLayout';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Amenities from '../sections/Amenities';
import Properties from '../sections/Properties';
import WhyChoose from '../sections/WhyChoose';
import Stats from '../sections/Stats';
import Gallery from '../sections/Gallery';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';
import Contact from '../sections/Contact';

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Stats />
      <Amenities />
      <Properties />
      <WhyChoose />
      <Gallery />
      <Testimonials />
      <CTA />
      <Contact />
    </MainLayout>
  );
}
