import React, { useState, useEffect } from 'react';
import { Gift, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PixCard } from './PixCard';
import { GIFT_COPY } from '../constants';

export const FloatingPixButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show button after scrolling 400px
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsModalOpen(true)}
                        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-tiffany-soft text-tiffany-dark px-4 py-2.5 rounded-full shadow-lg shadow-tiffany/10 hover:shadow-xl transition-all cursor-pointer group"
                        aria-label="Dar um presente"
                    >
                        <Gift size={18} className="group-hover:animate-bounce" />
                        <span className="font-sans text-xs font-medium uppercase tracking-wider">Presentear</span>

                        {/* Subtle indicator */}
                        <span className="absolute -top-1 -right-1 flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tiffany opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-tiffany"></span>
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Gift Popup Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-[#000000]/40 backdrop-blur-sm"
                            onClick={() => setIsModalOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 z-20 bg-white/50 backdrop-blur-md p-2 rounded-full text-gray-800 hover:bg-white transition-colors"
                                aria-label="Fechar"
                            >
                                <X size={20} />
                            </button>

                            {/* Photo Header */}
                            <div className="w-full h-56 sm:h-64 relative">
                                <img src="https://i.imgur.com/2D53BWC.jpeg" alt="Ana Júlia" className="w-full h-full object-cover object-[center_30%]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                            </div>

                            <div className="px-6 pb-8 pt-0 text-center relative z-10">
                                <h2 className="font-serif text-3xl text-[#2D3748] mb-4">
                                    {GIFT_COPY.title}
                                </h2>

                                <div className="space-y-4 font-sans text-gray-600 font-light leading-relaxed mb-2 text-sm sm:text-base">
                                    <p>{GIFT_COPY.text1}</p>
                                    <p>{GIFT_COPY.text2}</p>
                                    <p className="font-medium text-gray-800 italic">{GIFT_COPY.text3}</p>
                                </div>

                                <PixCard />
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
