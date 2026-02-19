import React from 'react';
import { SectionWrapper } from './SectionWrapper';
import { INVITATION_COPY } from '../constants';

export const InvitationSection: React.FC = () => {
  return (
    <SectionWrapper className="bg-[#FAF9F6]">
      <div className="relative border-y border-tiffany-accent py-12 md:py-20 text-center">

        {/* Background Image Suggestion: Starbucks/Casual */}
        <div className="w-full max-w-lg mx-auto aspect-[4/5] mb-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="https://i.imgur.com/GHd8ymL.jpeg" alt="Ana Júlia" className="w-full h-full object-cover object-top" />
        </div>

        <h2 className="font-serif text-4xl md:text-5xl text-[#2D3748] mb-6">
          {INVITATION_COPY.title}
        </h2>

        <div className="max-w-2xl mx-auto space-y-6 font-sans text-gray-600 font-light">
          <p className="leading-relaxed">
            {INVITATION_COPY.text1}
          </p>

          <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-tiffany-soft mx-4">
            <p className="leading-relaxed text-tiffany-dark/80 italic font-medium">
              "Nós acreditamos firmemente que momentos especiais devem ser compartilhados apenas com quem realmente faz parte da nossa vida diária... com aqueles que conhecem a nossa história, os nossos sorrisos e abraços, e não apenas o nosso nome."
            </p>
          </div>

          <p className="leading-relaxed font-medium text-gray-800">
            {INVITATION_COPY.text3}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};