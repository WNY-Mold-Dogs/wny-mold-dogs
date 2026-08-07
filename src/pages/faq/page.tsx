import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import FAQHero from './components/FAQHero';
import FAQAccordion from './components/FAQAccordion';
import FAQCTASection from './components/FAQCTASection';

const FAQPage = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <FAQHero />
      <FAQAccordion />
      <FAQCTASection />
    </main>
    <Footer />
  </div>
);

export default FAQPage;
