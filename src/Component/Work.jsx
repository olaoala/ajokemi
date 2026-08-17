import React from 'react';
import { motion } from 'framer-motion';
import workdata from '../Work.json';
import Projects from './Project';
import iconComponents from '../Common/iconMap';

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const listVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Work = () => {

    const groupedWorkData = workdata.reduce((acc, item) => {
        if (!acc[item.type]) {
            acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
    }, {});

    return (
        <div id="work" className='bg-gray-50 py-12 text-gray-600'>
            <div className='container px-6 md:px-12 max-w-5xl mx-auto'>
                {Object.keys(groupedWorkData).map((type) => (
                    <motion.div
                        key={type}
                        className="mb-14"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        variants={sectionVariants}
                    >
                        <h3 className='font-bold text-2xl text-gray-800 mb-6'>{type}</h3>

                        {type === "Projects" && <Projects />}

                        {type === "Experiences" && (
                            <motion.div
                                className="border-l-2 border-gray-300 flex flex-col gap-8 pl-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                variants={listVariants}
                            >
                                {groupedWorkData[type].map((obj) => (
                                    <motion.div key={obj.id} variants={itemVariants} className="relative">
                                        <span className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-blue" />
                                        <span className='block text-xs font-bold text-gray-400 mb-1'>{obj.date}</span>
                                        <h2 className='font-bold text-lg text-gray-800'>{obj.title}</h2>
                                        <p className='text-gray-500 mt-1'>{obj.description}</p>
                                        {obj.skills && (
                                            <div className="flex text-lg gap-2 md:gap-3 mt-3">
                                                {obj.skills.map((skill, index) => {
                                                    const IconComponent = iconComponents[skill];
                                                    return IconComponent ? <IconComponent key={index} /> : null;
                                                })}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {type !== "Projects" && type !== "Experiences" && (
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                                variants={listVariants}
                            >
                                {groupedWorkData[type].map((obj) => (
                                    <motion.div
                                        key={obj.id}
                                        variants={cardVariants}
                                        className="bg-white border border-gray-200 rounded-lg p-4"
                                    >
                                        <h2 className='font-bold text-base text-gray-800'>{obj.title}</h2>
                                        {obj.description && <p className='text-gray-500 text-sm mt-1'>{obj.description}</p>}
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Work;
