import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import ServicesHero from './components/ServicesHero';
import BookingSection from './components/BookingSection';
import AdditionalServicesSection from './components/AdditionalServicesSection';
import ServiceAreaSection from './components/ServiceAreaSection';
import FAQSection from './components/FAQSection';

const ServicesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ServicesHero />
        <BookingSection />
        <AdditionalServicesSection />
        <ServiceAreaSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;