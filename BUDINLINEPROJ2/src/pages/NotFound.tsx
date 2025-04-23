
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-md w-full p-8">
        <div className="relative mb-12">
          <div className="text-[10rem] font-bold opacity-10 text-brand-blue absolute -top-16 left-1/2 -translate-x-1/2">404</div>
          <img 
            src="/lovable-uploads/df4ad596-de25-496b-afe7-05baccec143e.png" 
            alt="404 Image" 
            className="relative z-10 h-64 object-contain mx-auto opacity-90"
          />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-brand-pink to-brand-blue bg-clip-text text-transparent">Stránka nenalezena</h1>
          <p className="text-brand-gray mb-8">Bohužel jsme nemohli najít stránku, kterou hledáte. Možná byla přesunuta nebo odstraněna.</p>
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-brand-pink text-brand-pink rounded-lg hover:bg-brand-pink hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zpět na hlavní stránku
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
