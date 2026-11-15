import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Technologies from '@/components/Technologies';
import Services from '@/components/Services';
import Businesses from '@/components/Businesses';
import Contact from '@/components/Contact';
import Process from '@/components/Process';
import AboutUs from '@/components/AboutUs';
import RecognisedBy from '@/components/RecognisedBy';
import MouBanner from '@/components/MouBanner';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MouBanner />
      <Businesses />
      <Services />
      <Process />
      <RecognisedBy />
      <Technologies />
      <AboutUs />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
