
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  useEffect(() => {
    // Burger menu functionality with vanilla JavaScript
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      });
      
      // Close mobile menu when clicking on links
      const mobileLinks = document.querySelectorAll('.mobile-link');
      mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
          menuToggle.classList.remove('active');
          mobileMenu.classList.remove('active');
          document.body.classList.remove('menu-open');
        });
      });
    }
    
    // Cleanup event listeners on component unmount
    return () => {
      if (menuToggle && mobileMenu) {
        menuToggle.removeEventListener('click', function() {});
        const mobileLinks = document.querySelectorAll('.mobile-link');
        mobileLinks.forEach(link => {
          link.removeEventListener('click', function() {});
        });
      }
    };
  }, []);

  return (
    <header className="bg-gradient-to-r from-brand-pink to-brand-blue text-white sticky top-0 z-50 animate-slide-down">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/df4ad596-de25-496b-afe7-05baccec143e.png" 
            alt="Bud INline Ostrava logo" 
            className="h-10 w-10 object-contain rounded-full bg-white p-1" 
          />
          <div>
            <h1 className="font-bold text-lg leading-tight">Bud INline</h1>
            <p className="text-xs leading-tight">Ostrava</p>
          </div>
        </Link>

        {/* Burger Menu Button */}
        <button 
          id="menuToggle"
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 relative z-50 overflow-hidden"
          aria-label="Menu"
        >
          <span className="burger-line"></span>
          <span className="burger-line"></span>
          <span className="burger-line"></span>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link to="/" className="text-white hover:text-opacity-80 transition-colors relative nav-link">Hlavní</Link>
          <Link to="/aktivity" className="text-white hover:text-opacity-80 transition-colors relative nav-link">Aktivity</Link>
          <Link to="/calendar" className="text-white hover:text-opacity-80 transition-colors relative nav-link">Kalendář</Link>
          <Link to="/about" className="text-white hover:text-opacity-80 transition-colors relative nav-link">O nás</Link>
          <Link to="/contact" className="text-white hover:text-opacity-80 transition-colors relative nav-link">Kontakt</Link>
        </nav>
      </div>

      {/* Mobile menu */}
      <div id="mobileMenu" className="mobile-menu">
        <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
          <Link 
            to="/" 
            className="text-white py-2 hover:text-opacity-80 transition-colors mobile-link text-2xl"
          >
            Hlavní
          </Link>
          <Link 
            to="/aktivity" 
            className="text-white py-2 hover:text-opacity-80 transition-colors mobile-link text-2xl"
          >
            Aktivity
          </Link>
          <Link 
            to="/calendar" 
            className="text-white py-2 hover:text-opacity-80 transition-colors mobile-link text-2xl"
          >
            Kalendář
          </Link>
          <Link 
            to="/about" 
            className="text-white py-2 hover:text-opacity-80 transition-colors mobile-link text-2xl"
          >
            O nás
          </Link>
          <Link 
            to="/contact" 
            className="text-white py-2 hover:text-opacity-80 transition-colors mobile-link text-2xl"
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
