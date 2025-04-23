
import React from 'react';
import EventCard from './EventCard';

const CalendarSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-medium mb-3 text-center">Nadcházející události</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Sledujte náš kalendář, abyste nepropásli žádnou událost nebo plánovaný kurz.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <EventCard 
            title="Prázdninový tábor - CAMP" 
            date="25.06.2023"
            imageUrl="https://images.unsplash.com/photo-1564226803597-8818becbf76f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            description="Letní tábor pro děti, plný aktivit, her a zábavy na kolečkových bruslích."
          />
          <EventCard 
            title="Kurz bruslení pro začátečníky" 
            date="01.07.2023"
            imageUrl="https://images.unsplash.com/photo-1600730308723-81a842cbff0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            description="Naučte se základy bruslení pod vedením zkušených instruktorů."
          />
          <EventCard 
            title="Maraton na bruslích Ostrava" 
            date="15.07.2023"
            imageUrl="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            description="Tradiční maraton na kolečkových bruslích pro všechny věkové kategorie."
          />
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
