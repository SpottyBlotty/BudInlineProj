
import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-brand-lightBlue">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-medium mb-3 text-center">Promo video</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Podívejte se na naše aktivity v akci a zjistěte, co můžete s námi zažít.
        </p>
        
        <div className="max-w-4xl mx-auto relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
            alt="Náhled promo videa" 
            className="w-full aspect-video object-cover"
          />
          <button className="absolute inset-0 w-full h-full flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors group">
            <div className="bg-white rounded-full p-3 group-hover:scale-110 transition-transform">
              <Play className="h-12 w-12 text-brand-blue fill-brand-blue" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
