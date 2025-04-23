
import React from 'react';
import SponsorLogo from './SponsorLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-2xl font-medium mb-8 text-center">Partneři</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
            <SponsorLogo name="Tempest" logo="/public/logo-placeholder.svg" />
            <SponsorLogo name="Havel" logo="/public/logo-placeholder.svg" />
            <SponsorLogo name="Ostrava" logo="/public/logo-placeholder.svg" />
            <SponsorLogo name="Logo 4" logo="/public/logo-placeholder.svg" />
            <SponsorLogo name="Logo 5" logo="/public/logo-placeholder.svg" />
            <SponsorLogo name="Logo 6" logo="/public/logo-placeholder.svg" />
            <SponsorLogo name="Logo 7" logo="/public/logo-placeholder.svg" />
            <SponsorLogo name="Logo 8" logo="/public/logo-placeholder.svg" />
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Bud INline Ostrava. Všechna práva vyhrazena.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
