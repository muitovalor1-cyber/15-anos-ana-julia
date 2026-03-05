import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { HERO_COPY } from '../constants';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#FDFBF7]">
      {/* Photo Container - Full Screen for maximum immersion */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, ease: 'easeOut' }}
          className="absolute inset-0 bg-cover bg-top md:bg-[center_65%] h-full w-full"
          style={{ backgroundImage: 'url(https://i.imgur.com/uFcrOCl.jpeg)' }}
        />
        {/* Gradient mapping: Fades into nothing for her face, building up to the background color at the bottom */}
        {/* Added md:to-80% to stretch the gradient on larger screens for a more natural fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent via-60% md:via-50% to-[#FDFBF7] md:to-90%"></div>
      </div>

      {/* Content Container - Positioned at the top to highlight Ana Júlia */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-5 pt-20 md:pt-32 mt-0">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
          className="bg-white/20 backdrop-blur-[24px] backdrop-saturate-[1.8] rounded-[2.5rem] p-8 md:p-12 border border-white/50 shadow-[0_20px_60px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,0.4)] text-center relative overflow-hidden group"
        >
          <div className="relative z-10 space-y-6 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
            >
              <h1 className="font-serif text-[3.2rem] leading-[1.1] md:text-7xl font-light text-white tracking-tight drop-shadow-lg">
                Ana Júlia
              </h1>
            </motion.div>

            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: '100%', opacity: 1 }}
              transition={{ duration: 1.2, delay: 1 }}
              className="flex items-center justify-center gap-3 md:gap-4 max-w-[100%] mx-auto"
            >
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
              <span className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full font-sans text-white tracking-[0.2em] md:tracking-[0.25em] uppercase text-[9px] md:text-xs font-bold shrink-0 shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-white/30">
                15 Anos de Delicadeza
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="font-sans text-white/90 text-[15px] md:text-base leading-relaxed tracking-wide max-w-[280px] md:max-w-md mx-auto drop-shadow-md"
            >
              Hoje, não celebramos apenas uma <strong className="font-bold text-white">idade</strong>. Celebramos a transição de uma menina que <strong className="font-bold text-white">floresce</strong>, todos os dias, sob o <strong className="font-bold text-white">olhar de Deus</strong>.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Visible against the white background at the bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-sans text-[10px] tracking-[0.3em] font-semibold text-tiffany-dark uppercase opacity-70">
          Deslize
        </span>
        <ChevronDown size={28} strokeWidth={1} className="text-tiffany-dark/80" />
      </motion.div>
    </section>
  );
};