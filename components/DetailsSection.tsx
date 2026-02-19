import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { Calendar, Clock, MapPin, Car, Utensils } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';

export const DetailsSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-white">
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl text-[#2D3748] mb-4">
          Quando e Onde?
        </h2>
        <p className="font-sans text-gray-500 font-light">
          Reserve esta data para estarmos juntos
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {/* Date Card */}
        <div className="flex flex-col items-center justify-center p-8 bg-[#FDFBF7] rounded-2xl border border-tiffany-soft shadow-sm hover:shadow-md transition-shadow">
          <Calendar className="w-8 h-8 text-tiffany mb-4" />
          <h3 className="font-sans font-medium text-gray-900 mb-1">DATA</h3>
          <p className="font-serif text-2xl text-gray-700">{EVENT_DETAILS.date}</p>
        </div>

        {/* Time Card */}
        <div className="flex flex-col items-center justify-center p-8 bg-[#FDFBF7] rounded-2xl border border-tiffany-soft shadow-sm hover:shadow-md transition-shadow">
          <Clock className="w-8 h-8 text-tiffany mb-4" />
          <h3 className="font-sans font-medium text-gray-900 mb-1">HORÁRIO</h3>
          <p className="font-serif text-2xl text-gray-700">{EVENT_DETAILS.time}</p>
        </div>

        {/* Location Card */}
        <div className="md:col-span-2 flex flex-col items-center justify-center p-8 bg-[#FDFBF7] rounded-2xl border border-tiffany-soft shadow-sm hover:shadow-md transition-shadow text-center">
          <MapPin className="w-8 h-8 text-tiffany mb-4" />
          <h3 className="font-sans font-medium text-gray-900 mb-1 tracking-widest uppercase text-xs">LOCAL</h3>
          <p className="font-serif text-3xl text-[#2D3748] mb-2">{EVENT_DETAILS.locationName}</p>
          <p className="font-sans text-gray-600 font-light text-sm max-w-sm mb-8">{EVENT_DETAILS.address}</p>

          <div className="w-full max-w-lg mb-8 p-6 bg-white border border-tiffany-soft/30 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
              <Utensils size={40} className="text-tiffany" />
            </div>
            <h4 className="font-serif text-xl text-tiffany-dark mb-3 flex items-center justify-center gap-2">
              <Utensils size={20} className="text-tiffany" />
              O que teremos no jantar?
            </h4>
            <div className="w-12 h-[1px] bg-tiffany-light mx-auto mb-4"></div>
            <p className="font-sans text-gray-600 text-sm leading-relaxed max-w-md mx-auto">
              {EVENT_DETAILS.menu}
            </p>
          </div>

          <a
            href={EVENT_DETAILS.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-tiffany text-white px-8 py-4 rounded-full text-sm font-sans font-medium hover:bg-tiffany-dark transition-all transform hover:scale-105 shadow-lg shadow-tiffany/20 mb-8"
          >
            <MapPin size={18} />
            Ver no Google Maps
          </a>

          <div className="w-full h-72 rounded-xl overflow-hidden border border-tiffany-soft transition-all duration-500 shadow-inner">
            <iframe
              src="https://maps.google.com/maps?q=Pizzaria%20Nostra%20Casa%20R.%20Raposo%20Tavares%20747%20Pilarzinho%20Curitiba&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Pizzaria Nostra Casa"
            ></iframe>
          </div>
        </div>

        {/* Parking Note */}
        <div className="md:col-span-2 flex items-center justify-center gap-3 text-gray-500 font-sans text-sm italic bg-gray-50 p-4 rounded-lg">
          <Car className="w-4 h-4 text-gray-400" />
          <span>{EVENT_DETAILS.parkingNote}</span>
        </div>

      </div>
    </SectionWrapper>
  );
};