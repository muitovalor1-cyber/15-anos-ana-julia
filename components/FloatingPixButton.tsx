import React, { useState, useEffect } from 'react';
import { Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingPixButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

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

    const scrollToPix = () => {
        const element = document.getElementById('presente');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToPix}
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
    );
};
