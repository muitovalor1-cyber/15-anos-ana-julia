import React, { useState } from 'react';
import { Copy, Check, Gift } from 'lucide-react';
import { PIX_DATA } from '../constants';
import { motion } from 'framer-motion';

export const PixCard: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(PIX_DATA.key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl shadow-tiffany/10 border border-tiffany-soft max-w-md mx-auto mt-8">
      <div className="flex justify-center mb-6">
        <div className="bg-tiffany-soft p-4 rounded-full">
          <Gift className="w-8 h-8 text-tiffany" />
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-xs font-sans uppercase tracking-widest text-gray-400 text-center mb-1">Chave Pix</p>
          <p className="font-serif text-2xl text-center text-gray-800 break-all">{PIX_DATA.key}</p>
        </div>

        <div className="text-center">
          <p className="text-xs font-sans uppercase tracking-widest text-gray-400 mb-1">Nome</p>
          <p className="font-sans text-sm text-gray-600">{PIX_DATA.name}</p>
        </div>

        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={handleCopy}
          className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl transition-all duration-300 ${copied
              ? 'bg-green-100 text-green-700 border border-green-200'
              : 'bg-tiffany-dark text-white shadow-lg shadow-tiffany-dark/20 hover:bg-tiffany'
            }`}
        >
          {copied ? (
            <>
              <Check size={18} />
              <span className="font-sans font-medium">Copiado! ✅</span>
            </>
          ) : (
            <>
              <Copy size={18} />
              <span className="font-sans font-medium">Copiar Chave Pix</span>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
};