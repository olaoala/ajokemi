import React, { useState } from 'react';
import { motion } from 'framer-motion';
import workdata from '../Work.json';
import iconComponents from '../Common/iconMap';

// Optional fields you can add to a project entry in Work.json once you have the details:
// "role": "Sole frontend dev",
// "stack": ["FaReact", "SiMongodb", "SiAxios"] — same icon keys as Experience's "skills" field, see Common/iconMap.js
// "repo": "https://github.com/you/project"
// Cards render fine without them — they just skip that row.

const StackIcons = ({ stack }) => {
    if (!stack || stack.length === 0) return null;
    return (
        <div className="flex text-lg gap-2 md:gap-3 mb-3 text-gray-600">
            {stack.map((tech, index) => {
                const IconComponent = iconComponents[tech];
                return IconComponent ? <IconComponent key={index} /> : null;
            })}
        </div>
    );
};

const ProjectLinks = ({ link, repo }) => (
    <div className="flex gap-4 text-sm">
        {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
                View Project
            </a>
        )}
        {repo && (
            <a href={repo} target="_blank" rel="noopener noreferrer" className="text-gray-500 font-semibold hover:underline">
                Code
            </a>
        )}
    </div>
);

const Projects = () => {
    const [projects] = useState(workdata.filter((item) => item.type === 'Projects'));
    const [currentIndex, setCurrentIndex] = useState(0);

    if (projects.length === 0) return null;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    return (
        <motion.div
            className="relative w-full flex flex-col items-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="relative w-full flex items-center">
                {projects.length > 1 && (
                    <button
                        onClick={prevSlide}
                        aria-label="Previous project"
                        className="hidden sm:flex items-center justify-center w-9 h-9 -ml-4 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 z-10"
                    >
                        &#10094;
                    </button>
                )}

                <div className="overflow-hidden w-full">
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {projects.map((project) => (
                            <div key={project.id} className="flex-shrink-0 w-full px-1">
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                                    {project.image && (
                                        <img
                                            src={require(`../Assets/${project.image}`)}
                                            alt={project.title}
                                            className="h-64 md:h-96 w-full object-cover"
                                        />
                                    )}
                                    <div className="p-5">
                                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{project.title}</h3>
                                        {project.role && <p className="text-sm text-gray-500 mb-2">{project.role}</p>}
                                        <p className="text-gray-600 mb-3">{project.description}</p>
                                        <StackIcons stack={project.stack} />
                                        <ProjectLinks link={project.link} repo={project.repo} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {projects.length > 1 && (
                    <button
                        onClick={nextSlide}
                        aria-label="Next project"
                        className="hidden sm:flex items-center justify-center w-9 h-9 -mr-4 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 z-10"
                    >
                        &#10095;
                    </button>
                )}
            </div>

            {projects.length > 1 && (
                <div className="flex gap-2 mt-4">
                    {projects.map((project, index) => (
                        <button
                            key={project.id}
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Go to project ${index + 1}`}
                            className={`w-2 h-2 rounded-full ${index === currentIndex ? 'bg-accent' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            )}
        </motion.div>
    );
};

export default Projects;
