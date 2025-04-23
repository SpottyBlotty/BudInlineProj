
import React from 'react';
import ActivityCard from './ActivityCard';
import { CalendarDays, BookOpen, Users, Video, Briefcase, Bike } from 'lucide-react';

const ActivitiesSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-medium mb-3 text-center">Aktivity</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Nabízíme širokou škálu aktivit pro všechny věkové kategorie od začátečníků až po pokročilé.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ActivityCard 
            title="Škola a tábor Inline" 
            description="Výuka bruslení pro děti i dospělé. Organizujeme letní tábory a víkendové akce zaměřené na inline bruslení."
            icon={<Bike className="w-full h-full" />}
            stats="(26)"
            buttonText="Více informací"
          />
          <ActivityCard 
            title="Škola Ski & SNB" 
            description="Zimní kurzy lyžování a snowboardingu pro začátečníky i pokročilé pod vedením zkušených instruktorů."
            icon={<Video className="w-full h-full" />}
            stats="(18)"
            buttonText="Více informací"
          />
          <ActivityCard 
            title="Tábory" 
            description="Organizujeme městské i výjezdní tábory zaměřené na sport, přírodu a zábavné aktivity pro děti."
            icon={<Users className="w-full h-full" />}
            stats="(42)"
            buttonText="Více informací"
          />
          <ActivityCard 
            title="Pro školy a školky" 
            description="Speciální programy pro mateřské školy a základní školy, které pomáhají dětem rozvíjet pohybové dovednosti."
            icon={<BookOpen className="w-full h-full" />}
            stats="(15)"
            buttonText="Více informací"
          />
          <ActivityCard 
            title="Pro firmy a akce" 
            description="Teambuildingové akce a firemní události s programem zaměřeným na bruslení a další sporty."
            icon={<Briefcase className="w-full h-full" />}
            stats="(8)"
            buttonText="Více informací"
          />
          <ActivityCard 
            title="Události" 
            description="Organizujeme veřejné akce, soutěže a výstavy pro všechny nadšence bruslení v Ostravě a okolí."
            icon={<CalendarDays className="w-full h-full" />}
            stats="(31)"
            buttonText="Více informací"
          />
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
