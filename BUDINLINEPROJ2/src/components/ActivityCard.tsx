
import React from 'react';

interface ActivityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText?: string;
  stats?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({ 
  title, 
  description, 
  icon, 
  buttonText = "Více informací", 
  stats 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md border-l-4 border-brand-pink hover:shadow-xl transition-all duration-500 h-full flex flex-col justify-between group transform hover:-translate-y-2">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-brand-lightPink p-3 rounded-full text-brand-pink mr-4 group-hover:bg-brand-pink group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
            {icon}
          </div>
          <h3 className="font-medium text-lg text-brand-dark group-hover:text-brand-pink transition-colors duration-300">{title}</h3>
        </div>
        <p className="text-brand-gray text-sm mb-4 transition-colors duration-300 group-hover:text-brand-dark">{description}</p>
      </div>
      <div className="px-6 pb-6 mt-auto">
        <button className="w-full py-3 rounded-lg bg-brand-blue text-white text-sm font-medium transition-all duration-300 hover:bg-opacity-90 active:scale-95 group-hover:bg-brand-pink group-hover:shadow-md relative overflow-hidden">
          <span className="relative z-10">{buttonText}</span>
          <span className="absolute inset-0 bg-gradient-to-r from-brand-pink to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>
        {stats && (
          <div className="text-xs text-brand-gray text-center mt-2 group-hover:text-brand-pink transition-colors duration-300">{stats}</div>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;
