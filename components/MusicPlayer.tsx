import React, { useState, useRef, useEffect } from 'react';
import { Music2, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AUDIO_URL } from '../constants';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => {
      if (!hasInteracted) {
        setIsPlaying(true);
        setHasInteracted(true);
      }
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('scroll', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, [hasInteracted]);

  const toggleMusic = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Hidden YouTube Player for Audio */}
      <div className="fixed bottom-0 left-0 w-0 h-0 overflow-hidden pointer-events-none invisible">
        <iframe
          width="1"
          height="1"
          src={`https://www.youtube.com/embed/lQ6T5PqMhh0?autoplay=${isPlaying ? 1 : 0}&mute=0&loop=1&playlist=lQ6T5PqMhh0&enablejsapi=1&rel=0`}
          allow="autoplay; encrypted-media"
          title="Background Music"
        ></iframe>
      </div>

      <motion.button
        onClick={toggleMusic}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-white/80 backdrop-blur-md text-gray-700 p-4 rounded-full shadow-xl border border-tiffany-soft ring-1 ring-tiffany-accent"
        aria-label={isPlaying ? "Pausar Música" : "Tocar Música"}
      >
        <AnimatePresence mode="wait">
          {isPlaying ? (
            <motion.div
              key="pause"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <Pause size={24} className="text-tiffany-dark" />
            </motion.div>
          ) : (
            <motion.div
              key="play"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Music2 size={24} className="text-tiffany-dark" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Visual Cue for Sound */}
        {isPlaying && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tiffany opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-tiffany"></span>
          </span>
        )}
      </motion.button>
    </>
  );
};