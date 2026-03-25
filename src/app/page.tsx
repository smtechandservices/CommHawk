import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackgroundEffects from '@/components/BackgroundEffects';
import ComparisonToggle from '@/components/ComparisonToggle';
import GrowthCircles from '@/components/GrowthCircles';

export default function Home() {
  return (
    <main>
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Work />
      <GrowthCircles />
      <ComparisonToggle />
      <Contact />
      <Footer />
    </main>
  );
}
