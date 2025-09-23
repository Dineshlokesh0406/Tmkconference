import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import day1Pdf from '@/assets/Day1_Session_detail.pdf';
import day2Pdf from '@/assets/Day2_session_details.pdf';

const ConferenceTracks = () => {
  return (
    <section id="sessions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Conference Sessions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore the Day 1 and Day 2 session schedules and details.
          </p>
        </div>

        {/* Sessions Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
          <Card className="mx-auto w-full max-w-xl md:max-w-2xl min-h-80 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:border-primary/40 transform transition-all duration-300 hover:scale-105 animate-slide-up flex flex-col">
            <CardHeader className="pt-6 pb-2">
              <div className="p-3 rounded-full w-fit mx-auto mb-4 bg-background/60 border border-primary/20">
                <Calendar className="text-primary" size={24} />
              </div>
              <CardTitle className="text-center text-xl md:text-2xl leading-snug">
                Day 1 Sessions
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <p className="text-muted-foreground text-base leading-relaxed max-w-[36ch]">
                View the complete schedule and session details for Day 1.
              </p>
              <Button variant="default" size="sm" onClick={() => window.open(day1Pdf, '_blank')}>View PDF</Button>
            </CardContent>
          </Card>

          <Card className="mx-auto w-full max-w-xl md:max-w-2xl min-h-80 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:border-secondary/40 transform transition-all duration-300 hover:scale-105 animate-slide-up flex flex-col" style={{ animationDelay: '100ms' }}>
            <CardHeader className="pt-6 pb-2">
              <div className="p-3 rounded-full w-fit mx-auto mb-4 bg-background/60 border border-secondary/20">
                <Calendar className="text-secondary" size={24} />
              </div>
              <CardTitle className="text-center text-xl md:text-2xl leading-snug">
                Day 2 Sessions
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col items-center justify-center text-center gap-4">
              <p className="text-muted-foreground text-base leading-relaxed max-w-[36ch]">
                Explore the schedule and session details for Day 2.
              </p>
              <Button variant="default" size="sm" onClick={() => window.open(day2Pdf, '_blank')}>View PDF</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ConferenceTracks;