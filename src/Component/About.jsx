import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div id="about" className='bg-white py-12'>
            <motion.div
                className='px-6 md:px-12 max-w-5xl mx-auto text-gray-500'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <h3 className='font-bold text-2xl text-gray-800 mb-6'>About</h3>
                <p className='font-bold text-3xl'>Wuraola Babalola is a full-stack engineer with a caffeine habit and zero patience for slow, clunky interfaces.</p>

                <p className='text-lg mt-3'>I build across the stack — React on the front end, the APIs and databases behind it — and pay attention to the details most people skip: load times, edge cases, and the small interactions that make software feel right. I work closely with designers, backend engineers, and product teams to ship things that actually work.</p>

                <div className='flex flex-wrap gap-2 mt-6'>
                    {['React', 'JavaScript', 'MongoDB', 'REST APIs', 'Tailwind CSS'].map((skill) => (
                        <span key={skill} className='bg-accentTint text-accentTint text-sm font-semibold px-3 py-1 rounded-md'>
                            {skill}
                        </span>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;
