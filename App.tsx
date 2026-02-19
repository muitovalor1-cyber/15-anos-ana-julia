import React, { useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { EssenceSection } from './components/EssenceSection';
import { InvitationSection } from './components/InvitationSection';
import { DetailsSection } from './components/DetailsSection';
import { GiftSection } from './components/GiftSection';
import { ConfirmationSection } from './components/ConfirmationSection';
import { Footer } from './components/Footer';
import { FloatingPixButton } from './components/FloatingPixButton';

const App: React.FC = () => {
  // Smooth scroll behavior for the whole document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="font-sans antialiased selection:bg-tiffany-accent selection:text-tiffany-dark overflow-x-hidden">
      <FloatingPixButton />
      <main className="relative z-10 flex flex-col gap-0">
        <HeroSection />
        <EssenceSection />
        <InvitationSection />
        <GiftSection />
        <DetailsSection />
        <ConfirmationSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;