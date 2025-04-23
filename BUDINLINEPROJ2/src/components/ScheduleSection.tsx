
import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

const scheduleItems = [
  {
    id: 1,
    title: "Bud INline Ostrava Camp",
    date: "25.06.2023 - 30.06.2023",
    location: "Ostrava"
  },
  {
    id: 2,
    title: "Bud INline Městský Camp",
    date: "03.07.2023 - 07.07.2023",
    location: "Ostrava"
  },
  {
    id: 3,
    title: "Bud INline Víkendový Camp",
    date: "15.07.2023 - 16.07.2023",
    location: "Ostrava"
  },
  {
    id: 4,
    title: "Bud INline Ostrava Camp",
    date: "24.07.2023 - 28.07.2023",
    location: "Ostrava"
  }
];

const ScheduleSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-medium mb-3 text-center">Nejbližší termíny akcí</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Zarezervujte si místo na našich akcích včas, počet míst je omezen.
        </p>
        
        <div className="max-w-3xl mx-auto">
          {scheduleItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-xl shadow-sm mb-4 p-4 flex items-center justify-between border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="bg-brand-lightBlue p-3 rounded-full text-brand-blue hidden sm:block">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <div className="text-sm text-gray-500 flex flex-col sm:flex-row sm:gap-2">
                    <span>{item.date}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
              <button className="text-brand-blue hover:text-brand-pink transition-colors p-2">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
