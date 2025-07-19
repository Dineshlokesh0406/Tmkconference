import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CallForPapers from '@/components/CallForPapers';
import ConferenceTracks from '@/components/ConferenceTracks';
import Committee from '@/components/Committee';
import Registration from '@/components/Registration';
import Guidelines from '@/components/Guidelines';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if there are auth tokens in the URL (from email verification)
    const handleAuthCallback = async () => {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hashParams.get('access_token');
      const type = hashParams.get('type');

      if (accessToken && type === 'signup') {
        try {
          // Get the current session to verify the user is authenticated
          const { data: { session }, error } = await supabase.auth.getSession();

          if (session && !error) {
            toast({
              title: "Success",
              description: "Email verified successfully! Welcome to NCEAMBT 2025.",
            });
            // Clear the hash from URL and redirect to dashboard
            window.history.replaceState(null, '', window.location.pathname);
            navigate('/dashboard');
          }
        } catch (error) {
          console.error('Error handling auth callback:', error);
        }
      }
    };

    handleAuthCallback();
  }, [navigate, toast]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if there are auth tokens in the URL (from email verification)
    const handleAuthCallback = async () => {
      const hashParams = new URLSearchParams(window.location.hash.substring(1));
      const accessToken = hashParams.get('access_token');
      const type = hashParams.get('type');

      if (accessToken && type === 'signup') {
        try {
          // Get the current session to verify the user is authenticated
          const { data: { session }, error } = await supabase.auth.getSession();

          if (session && !error) {
            toast({
              title: "Success",
              description: "Email verified successfully! Welcome to NCEAMBT 2025.",
            });
            // Clear the hash from URL and redirect to dashboard
            window.history.replaceState(null, '', window.location.pathname);
            navigate('/dashboard');
          }
        } catch (error) {
          console.error('Error handling auth callback:', error);
        }
      }
    };

    handleAuthCallback();
  }, [navigate, toast]);
  return (
    <div className="min-h-screen bg-background smooth-scroll">
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* About Sections */}
        <AboutSection />
        
        {/* Call for Papers */}
        <CallForPapers />
        
        {/* Conference Tracks */}
        <ConferenceTracks />
        
        {/* Committee & Keynote Speakers */}
        <Committee />
        
        {/* Registration */}
        <Registration />
        
        {/* Guidelines & Ethics */}
        <Guidelines />
        
        {/* Contact & Venue */}
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Index;
