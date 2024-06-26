import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './css/Hello.css'

const languages = ["Hello.", "Hola.", "Bonjour.", "Hallo.", "Ciao."];
const welcomeMessage = "Hi, I am Wuraola, welcome to my Workspace";

const Hello = () => {
    const [currentLanguage, setCurrentLanguage] = useState(0);
    const [showTyping, setShowTyping] = useState(false);
    const [typedText, setTypedText] = useState("");
    const [isFadingOut, setIsFadingOut] = useState(false);
    const navigate = useNavigate();
    const containerRef = useRef(null);

    useEffect(() => {
        const languageInterval = setInterval(() => {
            setCurrentLanguage(prev => {
                if (prev === languages.length - 1) {
                    clearInterval(languageInterval);
                    setShowTyping(true);
                    return prev;
                }
                return prev + 1;
            });
        }, 500);

        return () => clearInterval(languageInterval);
    }, []);

    useEffect(() => {
        if (showTyping) {
            let index = 0;
            const typingInterval = setInterval(() => {
                if (index < welcomeMessage.length) {
                    setTypedText(welcomeMessage.substring(0, index + 1));
                    index++;
                } else {
                    clearInterval(typingInterval);
                }
            }, 100);

            return () => clearInterval(typingInterval);
        }
    }, [showTyping]);

    const handleWheel = (event) => {
        if (event.deltaY > 0) {
            setIsFadingOut(true);
            setTimeout(() => {
                navigate('/home');
            }, 1000);
        }
    };

    useEffect(() => {
        const refCurrent = containerRef.current;
        refCurrent.addEventListener('wheel', handleWheel);

        return () => {
            refCurrent.removeEventListener('wheel', handleWheel);
        };
    }, []);

    return (
        <motion.div
            ref={containerRef}
            className="min-h-screen flex flex-col items-center justify-center hellobg overflow-hidden"
            initial={{ opacity: 1 }}
        >
            <AnimatePresence>
                {!showTyping && (
                    <motion.div
                        key={currentLanguage}
                        className="absolute text-white text-lg font-bold"
                    >
                        {languages[currentLanguage]}
                    </motion.div>
                )}

                {showTyping && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="relative text-sm text-white md:text-xl md:text-white font-bold"
                    >
                        {typedText}
                    </motion.div>
                )}

                {showTyping && typedText === welcomeMessage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-10 text-white text-2xl animate-bounce"
                    >
                        ↓
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Hello;
