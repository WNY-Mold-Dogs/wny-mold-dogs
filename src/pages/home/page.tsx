import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';
import HowItWorksSection from './components/HowItWorksSection';
import CredibilitySection from './components/CredibilitySection';
import BookingCTASection from './components/BookingCTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <HighlightsSection />
        <HowItWorksSection />
        <CredibilitySection />
        <BookingCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
