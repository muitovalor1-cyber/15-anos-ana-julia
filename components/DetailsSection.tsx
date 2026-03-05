import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { MapPin, Car, Utensils } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

export const DetailsSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-white py-16">
      <div className="max-w-3xl mx-auto text-center px-4">
        {/* Date and Time - Harmonious Single Line */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-8">
          <p className="font-serif text-2xl md:text-3xl text-[#2D3748]">
            {EVENT_DETAILS.date.split('(')[0].trim()}
          </p>
          <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-tiffany-accent"></div>
          <p className="font-serif text-2xl md:text-3xl text-tiffany-dark italic">
            {EVENT_DETAILS.time}
          </p>
        </div>

        {/* Location Details */}
        <div className="mb-12">
          <p className="font-serif text-2xl text-[#2D3748] mb-1">{EVENT_DETAILS.locationName}</p>
          <p className="font-sans text-gray-500 font-light text-sm mb-4">{EVENT_DETAILS.address}</p>

          <a
            href={EVENT_DETAILS.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-tiffany-dark hover:text-tiffany transition-colors border-b border-tiffany-dark/30 hover:border-tiffany pb-0.5 text-[11px] font-sans tracking-[0.15em] uppercase font-semibold"
          >
            <MapPin size={14} />
            Ver no Google Maps
          </a>
        </div>

        <div className="w-16 h-[1px] bg-tiffany-soft mx-auto mb-10"></div>

        {/* Menu & Values - Delicate Card */}
        <div className="bg-[#FAF9F6] rounded-[2.5rem] p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative overflow-hidden max-w-2xl mx-auto border border-white">
          {/* Subtle abstract background decoration */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-tiffany-soft/10 rounded-bl-full -z-0"></div>

          <div className="relative z-10">
            <h3 className="font-serif text-xl text-[#2D3748] mb-4 flex items-center justify-center gap-2 italic">
              <Utensils size={18} className="text-tiffany" />
              Sobre o Jantar
            </h3>

            <p className="font-sans text-gray-600 text-[13px] md:text-sm leading-relaxed mb-8 max-w-[90%] mx-auto font-light">
              {EVENT_DETAILS.menu}
            </p>

            {EVENT_DETAILS.prices && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 border-t border-tiffany-soft/30 pt-8">
                <div className="text-center">
                  <p className="text-[9px] font-sans uppercase tracking-[0.2em] text-gray-400 mb-1.5">Adulto</p>
                  <p className="font-serif text-lg text-tiffany-dark">{EVENT_DETAILS.prices.adult}</p>
                </div>
                <div className="text-center">
                  <p className="text-[9px] font-sans uppercase tracking-[0.2em] text-gray-400 mb-1.5">5 a 8 anos</p>
                  <p className="font-serif text-lg text-tiffany-dark">{EVENT_DETAILS.prices.kids5to8}</p>
                </div>
                <div className="text-center">
                  <p className="text-[9px] font-sans uppercase tracking-[0.2em] text-gray-400 mb-1.5">9 a 11 anos</p>
                  <p className="font-serif text-lg text-tiffany-dark">{EVENT_DETAILS.prices.kids9to11}</p>
                </div>
                <div className="text-center">
                  <p className="text-[9px] font-sans uppercase tracking-[0.2em] text-gray-400 mb-1.5">Bariátrica</p>
                  <p className="font-serif text-lg text-tiffany-dark">{EVENT_DETAILS.prices.bariatric}</p>
                </div>
              </div>
            )}

            {EVENT_DETAILS.prices?.note && (
              <div className="mt-8 pt-6 border-t border-tiffany-soft/30 flex flex-col items-center gap-4">
                <p className="text-[9px] font-sans text-gray-400 uppercase tracking-[0.1em] font-medium bg-white px-4 py-1.5 rounded-full inline-block shadow-sm">
                  {EVENT_DETAILS.prices.note}
                </p>

                {EVENT_DETAILS.parkingNote && (
                  <div className="flex items-center gap-1.5 text-gray-400 font-sans text-[10px] uppercase tracking-wider">
                    <Car size={12} className="opacity-70" />
                    <span>Estacionamento ao lado</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

      </div>
    </SectionWrapper>
  );
};