import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoLocationOutline } from "react-icons/io5";
import photo from '../Assets/image.png';

const phrases = [
  "I build fast, responsive web apps that turn visitors into customers",
  "I build full-stack products that just work",
  "I turn ideas into fast, reliable web experiences",
  "I build interfaces that make people want to hit \"buy\"",
];

const TYPING_SPEED = 45;
const DELETING_SPEED = 25;
const PAUSE_TIME = 1800;

function useTypewriter(words) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const next = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);
      timeout = setTimeout(() => setText(next), isDeleting ? DELETING_SPEED : TYPING_SPEED);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words]);

  return text;
}

function Landing() {
  const typedText = useTypewriter(phrases);

  return (
    <div className="bg-blue relative min-h-[55vh] flex items-center justify-center text-center px-6 py-10 md:py-14">
      <div className="max-w-2xl flex flex-col items-center">
        <motion.img
          src={photo}
          alt="Babalola Wuraola Ajoke"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover object-top bg-white border-2 border-white/20 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        />

        <motion.p
          className="text-muted text-sm md:text-base mb-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          Full-stack engineer, tech babe extraordinaire.
        </motion.p>

        <motion.h1
          className="text-white text-xl md:text-3xl font-medium leading-snug mb-4 min-h-[4.5rem] md:min-h-[5.5rem] flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <span className="sr-only">{phrases[0]}</span>
          <span aria-hidden="true">
            {typedText}
            <span className="inline-block w-[2px] h-[1em] bg-white ml-1 align-middle animate-pulse" />
          </span>
        </motion.h1>

        <motion.div
          className="inline-flex items-center gap-2 bg-blue border border-white/20 text-muted text-xs tracking-wide px-4 py-2 rounded-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: 'easeOut' }}
        >
          <IoLocationOutline className="text-base" />
          <span>LAGOS, NIGERIA</span>
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;
