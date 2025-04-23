
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white"></div>
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-brand-lightPink rounded-bl-[50%] opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-1/2 bg-brand-lightBlue rounded-tr-[40%] opacity-70"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-10 -left-10 bg-brand-lightPink w-20 h-20 rounded-full blur-xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 bg-brand-lightBlue w-24 h-24 rounded-full blur-xl opacity-70"></div>
              
              <div className="relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Bud <span className="text-brand-blue">IN</span><span className="text-brand-pink">line</span>
                  <span className="block text-brand-dark">Ostrava</span>
                </h1>
                <p className="text-brand-gray mb-8 text-lg">
                  Přijďte se naučit bruslit! S naší pomocí budete bruslit bezpečně, 
                  stylově a s úsměvem na tváři.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-brand-pink text-white px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-brand-pink/20">
                    Vybrat kurz
                  </button>
                  <button className="bg-transparent border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg font-medium hover:bg-brand-blue hover:text-white transition-all active:scale-95">
                    Zjistit více
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 order-1 md:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-tl-[30%] rounded-br-[30%] bg-gradient-to-br from-brand-pink/20 to-brand-blue/20 transform rotate-12"></div>
              <img 
                src="/lovable-uploads/df4ad596-de25-496b-afe7-05baccec143e.png" 
                alt="Rodina na bruslích" 
                className="relative z-10 rounded-tl-[30%] rounded-br-[30%] shadow-xl border-8 border-white transform -rotate-3 hover:rotate-0 transition-all duration-500" 
              />
              <div className="absolute h-24 w-24 bg-brand-pink rounded-full -top-5 -left-5 z-0 opacity-20 blur-xl"></div>
              <div className="absolute h-32 w-32 bg-brand-blue rounded-full -bottom-8 -right-8 z-0 opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
