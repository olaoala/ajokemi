import React, { useState } from 'react';
import workdata from '../Work.json';
import image from '../Assets/image.jpg';

const Work = () => {
    const [selectedWork, setSelectedWork] = useState(workdata[0]);

    return (
        <div>
            <div className=' w-24 h-24 ml-24 -mt-8 m-4 bg-amber-400 border-2 rounded-full'>
            <p className='text-center my-8'>Projects</p>
            </div>
            <div className='bg-amber-50 flex flex-wrap justify-between p-32 my-10 py-12'>
                <div className="ml-40 ">
                    <img src={image} alt='' className='h-64 w-64 object-cover rounded-xl my-2' />
                    <h2 className='font-bold text-sm'>{selectedWork.title}</h2>
                    <p className='text-slate-500 text-xs'>{selectedWork.description}</p>
                    {selectedWork.link && (
                        <a
                            href={selectedWork.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="card-link"
                        >
                            <button className="button border border-black rounded-xl p-2 my-2 bg-gray-800 text-slate-200 text-sm">Check it out</button>
                        </a>
                    )}
                </div>
           

                <div className="mr-40 grid grid-cols-3 gap-3 h-10 mt-24 ">
                    {workdata.map((obj) => (
                        <button
                            key={obj.id}
                            className={`title ${selectedWork.id === obj.id ? 'selected' : ''} p-2 bg-gray-800 border text-slate-200 text-sm border-black rounded-xl text-center max-h-10`}
                            onClick={() => setSelectedWork(obj)}
                        >
                            {obj.title}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;
