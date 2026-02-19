import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { ESSENCE_COPY } from '../constants';

export const EssenceSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-white">
      {/* Visual Suggestion: Photo collage/transition */}
      <div className="grid grid-cols-2 gap-4 mb-16 px-4">
        <div className="col-span-2 aspect-[4/5] md:aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-2xl shadow-tiffany/20">
          <img src="https://i.imgur.com/UaNbZ0I.jpeg" alt="Ana Júlia" className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl shadow-tiffany/10">
          <img src="https://i.imgur.com/dTseysg.jpeg" alt="Ana Júlia" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-xl shadow-tiffany/10">
          <img src="https://i.imgur.com/5DDhF4h.jpeg" alt="Ana Júlia" className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700" />
        </div>
      </div>

      <div className="space-y-6 text-center md:text-left">
        <h2 className="font-serif text-3xl md:text-4xl text-tiffany-dark mb-6 italic">
          A Essência
        </h2>

        <p className="font-sans text-gray-700 leading-loose text-lg">
          {ESSENCE_COPY.text1}
        </p>

        <p className="font-sans text-gray-600 leading-relaxed font-light">
          A Ana é feita de <span className="font-medium text-tiffany-dark bg-tiffany-soft px-1">melodia</span>, dedicação aos estudos e muitos sonhos. Uma menina de coração imensamente doce. Se você a conhece bem, sabe que ela encontra seu refúgio mais profundo na música, distribui <span className="italic text-gray-800">amor incondicional</span> a todos os animais que cruzam seu caminho e tira sua força inabalável de <span className="font-medium text-tiffany-dark">Jesus</span>, seu melhor amigo para todas as horas.
        </p>

        <p className="font-['Montserrat'] text-gray-600 leading-relaxed font-light">
          {ESSENCE_COPY.text3}
        </p>
      </div>
    </SectionWrapper>
  );
};