import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import TeamHero from './components/TeamHero';
import LibertySection from './components/LibertySection';
import MissionSection from './components/MissionSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <TeamHero />
        <LibertySection />
        <MissionSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;