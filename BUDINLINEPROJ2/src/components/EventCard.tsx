
import React from 'react';

interface EventCardProps {
  title: string;
  date: string;
  imageUrl: string;
  description: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, imageUrl, description }) => {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
      <div className="absolute top-0 right-0 z-10 bg-white px-4 py-2 m-3 rounded-full text-xs font-medium text-brand-blue border border-brand-lightBlue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
        {date}
      </div>
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-6 relative">
        <h3 className="font-medium text-lg mb-3 text-brand-dark group-hover:text-brand-pink transition-colors duration-300">{title}</h3>
        <p className="text-brand-gray text-sm mb-4 transition-colors duration-300 group-hover:text-brand-dark">{description}</p>
        <div className="flex justify-between items-center">
          <button className="py-2 px-5 rounded-lg bg-brand-lightPink text-brand-pink text-sm font-medium transition-all duration-300 hover:bg-brand-pink hover:text-white active:scale-95 group-hover:shadow-md relative overflow-hidden">
            <span className="relative z-10">Více informací</span>
            <span className="absolute inset-0 bg-brand-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
          <div className="w-8 h-8 flex items-center justify-center bg-brand-lightBlue rounded-full text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 transform group-hover:rotate-90 group-hover:scale-110">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
