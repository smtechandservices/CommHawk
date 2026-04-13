import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Technologies from '@/components/Technologies';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Contact from '@/components/Contact';
import BackgroundEffects from '@/components/BackgroundEffects';
import ComparisonToggle from '@/components/ComparisonToggle';
import GrowthCircles from '@/components/GrowthCircles';
import RecognisedBy from '@/components/RecognisedBy';

export default function Home() {
  return (
    <main>
      <BackgroundEffects />
      <Navbar />
      <Hero />
      <Technologies />
      <ComparisonToggle />
      <Services />
      <Work />
      <RecognisedBy />
      <GrowthCircles />
      <Contact />
    </main>
  );
}
