import React, { useState, useEffect } from 'react';
import workdata from '../Work.json';

const ProjectCarousel = () => {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const projectData = workdata.filter(item => item.type === 'Projects');
    setProjects(projectData);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <div className="relative  w-full flex justify-center items-center">
     
      <div className="carousel-wrapper overflow-hidden relative w-full max-w-3xl">
      <button onClick={prevSlide} className="absolute top-56  z-10 p-2  text-black rounded-full">
            &#10094;
        </button>
        <div className="carousel-inner flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {projects.map((project, index) => (
            <div key={project.id} className="carousel-item flex-shrink-0 w-full p-4">
              <div className="project-card p-5">
              <h3 className="text-3xl font-bold py-2 text-gray-600  hover:text-gray-950">{project.title}</h3>
                {project.image && (
                  <img
                    src={require(`../Assets/${project.image}`)}
                    alt={project.title}
                    className="h-80 w-full object-cover rounded-lg"
                  />
                )}
                <p className="text-gray-600 p-3 hover:text-gray-950">{project.description}</p>
                {project.link && (
                   <a href={project.link} className="bg-grayHover  text-gray-500 hover:text-gray-800 py-2 px-4 rounded mt-2 inline-block text-center hover:bg-blue-600 transition-colors duration-300">
                   View Project
                 </a>
                )}
              </div>
            </div>
          ))}
          <button onClick={nextSlide} className="absolute top-56 right-0 z-10 p-2  text-black rounded-full">
        &#10095;
      </button>
        </div>
        
      </div>
    
    </div>
  );
};

export default ProjectCarousel;
