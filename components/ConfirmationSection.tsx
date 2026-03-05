import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONFIRMATION_COPY, WHATSAPP_LINK } from '../constants';

export const ConfirmationSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-white">
      <div className="text-center max-w-xl mx-auto">

        {/* New Photo - Striking Portrait */}
        <div className="w-full aspect-[4/5] max-w-[320px] md:max-w-md mx-auto mb-10 rounded-t-full rounded-b-[3rem] overflow-hidden border-[6px] border-white shadow-2xl relative">
          <div className="absolute inset-0 border border-tiffany-soft/50 rounded-t-full rounded-b-[3rem] z-10 pointer-events-none"></div>
          <img src="https://i.imgur.com/DEB8rv9.jpeg" alt="Ana Júlia" className="w-full h-full object-cover object-[center_30%] hover:scale-105 transition-transform duration-1000" />
        </div>

        <h2 className="font-serif text-4xl text-[#2D3748] mb-6">
          {CONFIRMATION_COPY.title}
        </h2>

        <div className="font-['Montserrat'] text-gray-600 font-light mb-10 space-y-5 px-4 md:px-0">
          <p className="leading-relaxed">
            Como nosso jantar será <strong className="font-semibold text-tiffany-dark">muito intimista</strong>, precisamos organizar tudo com <strong className="font-semibold text-tiffany-dark">muito carinho e precisão</strong>.
          </p>
          <div className="w-10 h-[1px] bg-tiffany-soft mx-auto"></div>
          <p className="leading-relaxed">
            Para <strong className="font-semibold text-gray-800">confirmar sua presença</strong>, clique no botão para entrar em nosso <strong className="font-semibold text-[#25D366]">grupo exclusivo</strong> de convidados no WhatsApp.
          </p>
        </div>

        <motion.a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-3 bg-green-600 text-white px-8 py-4 rounded-full shadow-xl shadow-green-600/30 hover:bg-green-700 transition-colors group relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
          <MessageCircle size={24} className="relative z-10" />
          <span className="font-['Montserrat'] font-semibold text-sm md:text-base relative z-10">
            {CONFIRMATION_COPY.cta}
          </span>
        </motion.a>

        <p className="mt-4 text-xs text-gray-400 font-['Montserrat']">
          Clique para ser redirecionado ao WhatsApp
        </p>
      </div>
    </SectionWrapper>
  );
};