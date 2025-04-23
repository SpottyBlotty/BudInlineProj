
import React from 'react';
import { cn } from '@/lib/utils';

interface SponsorLogoProps {
  name: string;
  logo: string;
  className?: string;
}

const SponsorLogo: React.FC<SponsorLogoProps> = ({ name, logo, className }) => {
  return (
    <div className={cn("grayscale hover:grayscale-0 transition-all duration-300", className)}>
      <img 
        src={logo} 
        alt={`${name} logo`} 
        className="h-8 object-contain max-w-full" 
      />
    </div>
  );
};

export default SponsorLogo;
