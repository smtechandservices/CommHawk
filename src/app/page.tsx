import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Technologies from '@/components/Technologies';
import Services from '@/components/Services';
import Businesses from '@/components/Businesses';
import Contact from '@/components/Contact';
import ComparisonToggle from '@/components/ComparisonToggle';
import AboutUs from '@/components/AboutUs';
import GrowthCircles from '@/components/GrowthCircles';
import RecognisedBy from '@/components/RecognisedBy';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Technologies />
      <ComparisonToggle />
      <Services />
      <Businesses />
      <RecognisedBy />
      <GrowthCircles />
      <AboutUs />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
