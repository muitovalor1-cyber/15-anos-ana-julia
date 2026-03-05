import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from './SectionWrapper';

const OLD_PHOTOS = [
  { url: 'https://i.imgur.com/AiLEkbc.jpeg', caption: 'Momentos Preciosos' },
  { url: 'https://i.imgur.com/UaNbZ0I.jpeg', caption: 'Onde tudo começou' },
  { url: 'https://i.imgur.com/dTseysg.jpeg', caption: 'Sorrisos que guardamos' },
  { url: 'https://i.imgur.com/5DDhF4h.jpeg', caption: 'Nossa Pequena Ana' },
  { url: 'https://i.imgur.com/GHd8ymL.jpeg', caption: 'Crescendo com Amor' }
];

export const MemorySection: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#FDFBF7] py-20 overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-tiffany-dark italic mb-4"
          >
            Nossa Pequena Ana
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-sans text-gray-500 font-light tracking-widest uppercase text-xs"
          >
            Relembrando momentos que nos trouxeram até aqui
          </motion.p>
        </div>

        {/* Polaroid/Gallery Grid */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 px-4">
          {OLD_PHOTOS.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotate: index % 2 === 0 ? -5 : 5, y: 30 }}
              whileInView={{ opacity: 1, rotate: index % 2 === 0 ? -2 : 2, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className="relative bg-white p-4 pb-12 shadow-xl border border-gray-100/50 w-full max-w-[280px] group"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm transition-all duration-700">
                <img 
                  src={photo.url} 
                  alt={photo.caption} 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span className="font-serif text-sm text-gray-400 italic">
                  {photo.caption}
                </span>
              </div>
              
              {/* Subtle texture for polaroid feel */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-black/[0.02] to-transparent"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Artistic Decorative Element */}
        <div className="absolute -bottom-10 -right-20 w-80 h-80 bg-tiffany-soft/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -top-10 -left-20 w-60 h-60 bg-tiffany-soft/5 rounded-full blur-3xl -z-10"></div>
      </div>
    </SectionWrapper>
  );
};
