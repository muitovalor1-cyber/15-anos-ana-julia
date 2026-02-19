import React from 'react';
import { FOOTER_COPY } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#2D3748] text-[#FDFBF7] py-16 px-6 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <p className="font-serif text-2xl italic tracking-wide">
          {FOOTER_COPY.signature}
        </p>

        <div className="w-12 h-[1px] bg-tiffany-light/30 mx-auto"></div>

        <p className="font-sans text-xs uppercase tracking-widest text-gray-400 opacity-80 leading-relaxed">
          {FOOTER_COPY.quote}
        </p>
      </div>
    </footer>
  );
};