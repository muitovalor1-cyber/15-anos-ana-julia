import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONFIRMATION_COPY, WHATSAPP_LINK } from '../constants';

export const ConfirmationSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-white">
      <div className="text-center max-w-xl mx-auto">

        {/* Suggestion: Last photo inviting */}
        <div className="w-full aspect-[4/5] max-w-lg mx-auto mb-10 rounded-3xl overflow-hidden border-4 border-tiffany-soft shadow-2xl">
          <img src="https://i.imgur.com/xvR6TKt.jpeg" alt="Ana Júlia" className="w-full h-full object-cover object-top" />
        </div>

        <h2 className="font-serif text-4xl text-[#2D3748] mb-6">
          {CONFIRMATION_COPY.title}
        </h2>

        <div className="font-['Montserrat'] text-gray-600 font-light mb-10 space-y-4">
          <p>{CONFIRMATION_COPY.text1}</p>
          <p>{CONFIRMATION_COPY.text2}</p>
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