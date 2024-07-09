import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './css/Hello.css';

const languages = ["Hello.", "Hola.", "Bonjour.", "Hallo.", "Ciao."];

const Hello = () => {
    const [currentLanguage, setCurrentLanguage] = useState(0);
    const navigate = useNavigate();
    const containerRef = useRef(null);

    const navigateToHome = useCallback(() => {
        navigate('/home');
    }, [navigate]);


    useEffect(() => {
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
    }, [navigateToHome]);

    
    return (
        <motion.div
            ref={containerRef}
            className="min-h-screen flex flex-col items-center justify-center bg-gray hellobg overflow-hidden"
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
        </motion.div>
    );
};

export default Hello;
