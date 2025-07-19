import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const AuthCallback = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        // Handle the auth callback
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Auth callback error:', error);
          toast({
            title: "Verification Error",
            description: "Email verification failed. Please try signing up again.",
            variant: "destructive",
          });
          navigate('/auth');
          return;
        }

        if (data.session) {
          toast({
            title: "Success",
            description: "Email verified successfully! Welcome to NCEAMBT 2025.",
          });
          navigate('/dashboard');
        } else {
          // No session found, redirect to auth
          navigate('/auth');
        }
      } catch (error) {
        console.error('Unexpected error during auth callback:', error);
        toast({
          title: "Error",
          description: "An unexpected error occurred during verification.",
          variant: "destructive",
        });
        navigate('/auth');
      }
    };

    handleAuthCallback();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
        <h2 className="text-xl font-semibold text-foreground mb-2">Verifying your email...</h2>
        <p className="text-muted-foreground">Please wait while we confirm your account.</p>
      </div>
    </div>
  );
};

export default AuthCallback;
