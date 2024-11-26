import Hero from '../components/Hero';
import SpecialMenu from '../components/SpecialMenu';
import Testimonials from '../components/Testimonials';
import About from '../components/About';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <SpecialMenu />
      <Testimonials />
      <About />
    </main>
  );
};

export default HomePage;
