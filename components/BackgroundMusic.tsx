import React, { useEffect, useRef, useState } from 'react';
import { Music, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

declare global {
    interface Window {
        onYouTubeIframeAPIReady: () => void;
        YT: any;
    }
}

export const BackgroundMusic: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [player, setPlayer] = useState<any>(null);
    const [isApiReady, setIsApiReady] = useState(false);
    const hasStartedRef = useRef(false);

    useEffect(() => {
        // Load YouTube IFrame API
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => {
                setIsApiReady(true);
            };
        } else if (window.YT && window.YT.Player) {
            setIsApiReady(true);
        }
    }, []);

    useEffect(() => {
        if (isApiReady && !player) {
            // Create a container for the player if it doesn't exist
            let container = document.getElementById('youtube-audio-player');
            if (!container) {
                container = document.createElement('div');
                container.id = 'youtube-audio-player';
                container.style.position = 'absolute';
                container.style.top = '-1000px';
                container.style.left = '-1000px';
                container.style.width = '1px';
                container.style.height = '1px';
                container.style.opacity = '0';
                container.style.pointerEvents = 'none';
                document.body.appendChild(container);
            }

            try {
                const newPlayer = new window.YT.Player('youtube-audio-player', {
                    height: '0',
                    width: '0',
                    videoId: 'lQ6T5PqMhh0',
                    playerVars: {
                        autoplay: 0,
                        loop: 1,
                        playlist: 'lQ6T5PqMhh0',
                        controls: 0,
                        showinfo: 0,
                        modestbranding: 1,
                        disablekb: 1,
                        fs: 0,
                        iv_load_policy: 3,
                        autohide: 1
                    },
                    events: {
                        onReady: (event: any) => {
                            setPlayer(event.target);
                        },
                        onStateChange: (event: any) => {
                            // Loop logic if playlist isn't handled correctly by YT
                            if (event.data === window.YT.PlayerState.ENDED) {
                                event.target.playVideo();
                            }
                        }
                    },
                });
            } catch (err) {
                console.error("Error creating YT Player", err);
            }
        }
    }, [isApiReady, player]);

    useEffect(() => {
        const handleInteraction = () => {
            if (!hasStartedRef.current && player) {
                player.playVideo();
                setIsPlaying(true);
                hasStartedRef.current = true;

                // Cleanup listeners once music has started
                window.removeEventListener('click', handleInteraction);
                window.removeEventListener('scroll', handleInteraction);
                window.removeEventListener('touchstart', handleInteraction);
                window.removeEventListener('mousemove', handleInteraction);
            }
        };

        if (player && !hasStartedRef.current) {
            window.addEventListener('click', handleInteraction);
            window.addEventListener('scroll', handleInteraction, { passive: true });
            window.addEventListener('touchstart', handleInteraction);
            window.addEventListener('mousemove', handleInteraction);
        }

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('scroll', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('mousemove', handleInteraction);
        };
    }, [player]);

    const togglePlay = () => {
        if (player) {
            if (isPlaying) {
                player.pauseVideo();
            } else {
                player.playVideo();
                hasStartedRef.current = true;
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <AnimatePresence>
            {isApiReady && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={togglePlay}
                    className="fixed bottom-6 left-6 z-50 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-tiffany-soft text-tiffany-dark w-10 h-10 rounded-full shadow-lg shadow-tiffany/10 cursor-pointer hover:bg-white transition-all group"
                    aria-label={isPlaying ? "Pausar música" : "Tocar música"}
                >
                    {isPlaying ? (
                        <Pause size={18} className="text-tiffany group-hover:scale-110 transition-transform" />
                    ) : (
                        <Music size={18} className="text-tiffany group-hover:scale-110 transition-transform" />
                    )}

                    {isPlaying && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tiffany opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-tiffany"></span>
                        </span>
                    )}
                </motion.button>
            )}
        </AnimatePresence>
    );
};
