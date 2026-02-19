import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { HERO_COPY } from '../constants';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#FDFBF7]">
      {/* Photo Container - Top Half */}
      <div className="absolute top-0 right-0 left-0 h-[80vh] z-0">
        <div
          className="absolute inset-0 bg-cover bg-top h-full w-full opacity-100"
          style={{ backgroundImage: 'url(https://i.imgur.com/AiLEkbc.jpeg)' }}
        />
        {/* Gradient: Pure transparent at the top, starts fading only after the face, becoming solid at the text area */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-40% via-[#FDFBF7]/80 via-80% to-[#FDFBF7]"></div>
      </div>

      {/* Content Container - Pushed further down to clear the face */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-6 pb-12 mt-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="bg-gradient-to-br from-white/50 via-white/20 to-white/5 backdrop-blur-[30px] rounded-[2.5rem] p-8 md:p-12 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-center relative overflow-hidden group"
        >
          {/* Liquid Glass Highlight Reflective Effect */}
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/20 via-transparent to-transparent rotate-12 pointer-events-none"></div>

          <div className="relative z-10 space-y-5">
            <h1 className="font-serif text-5xl md:text-6xl font-light text-[#2D3748] tracking-tight leading-tight">
              Ana Júlia
            </h1>

            <div className="flex items-center justify-center gap-4">
              <div className="h-[1px] w-6 bg-tiffany/40"></div>
              <span className="font-sans text-tiffany-dark tracking-[0.2em] uppercase text-[10px] md:text-xs font-bold">
                15 Anos de Delicadeza
              </span>
              <div className="h-[1px] w-6 bg-tiffany/40"></div>
            </div>

            <p className="font-sans text-gray-700 text-sm md:text-base leading-relaxed tracking-wide font-medium">
              {HERO_COPY.subtitle}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-tiffany"
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </section>
  );
};