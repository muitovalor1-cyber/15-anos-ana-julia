import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { PixCard } from './PixCard';
import { GIFT_COPY } from '../constants';

export const GiftSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-gradient-to-b from-[#FAF9F6] to-tiffany-soft/30">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="font-serif text-4xl text-[#2D3748] mb-8">
          {GIFT_COPY.title}
        </h2>

        <div className="space-y-6 font-sans text-gray-600 font-light leading-relaxed mb-8">
          <p>{GIFT_COPY.text1}</p>
          <p>{GIFT_COPY.text2}</p>
          <p className="font-medium text-gray-800 italic">{GIFT_COPY.text3}</p>
        </div>

        <PixCard />
      </div>
    </SectionWrapper>
  );
};