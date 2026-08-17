import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Navigate } from 'react-router-dom';
const languages = ["Hello.", "Hola.", "Bonjour.", "Hallo.", "Ciao."];

const INTRO_SEEN_KEY = 'ajokemi_intro_seen';

const Hello = () => {
    const [currentLanguage, setCurrentLanguage] = useState(0);
    const [skipped, setSkipped] = useState(false);
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const alreadySeenIntro = window.localStorage.getItem(INTRO_SEEN_KEY) === 'true';

    const navigateToHome = useCallback(() => {
        window.localStorage.setItem(INTRO_SEEN_KEY, 'true');
        navigate('/home');
    }, [navigate]);

    useEffect(() => {
        if (skipped || alreadySeenIntro) return;

        const languageInterval = setInterval(() => {
            setCurrentLanguage(prev => {
                if (prev === languages.length - 1) {
                    clearInterval(languageInterval);
                    setTimeout(() => {
                        setCurrentLanguage(-1); // To hide the last greeting before navigating
                        navigateToHome();
                    }, 500); // Adjust the delay as needed
                    return prev;
                }
                return prev + 1;
            });
        }, 500);

        return () => clearInterval(languageInterval);
    }, [navigateToHome, skipped]);

    const handleSkip = () => {
        setSkipped(true);
        navigateToHome();
    };

    // Repeat visitors go straight to the site instead of watching the intro again.
    if (alreadySeenIntro) {
        return <Navigate to="/home" replace />;
    }

    return (
        <motion.div
            ref={containerRef}
            onClick={handleSkip}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleSkip(); }}
            className="min-h-screen flex flex-col items-center justify-center bg-gray hellobg overflow-hidden cursor-pointer"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {currentLanguage >= 0 && (
                <motion.div
                    key={`language-${currentLanguage}`}
                    className="absolute text-white text-lg font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {languages[currentLanguage]}
                </motion.div>
            )}
            <p className="absolute bottom-8 text-white text-xs opacity-60">Tap anywhere to skip</p>
        </motion.div>
    );
};

export default Hello;
