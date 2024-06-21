import React, { useState } from 'react';
import workdata from '../Work.json';

const Work = () => {
    const [selectedWork, setSelectedWork] = useState(workdata[0]);

    const getImage = (imageName) => {
        try {
            return require(`../Assets/${imageName}`);
        } catch (err) {
            console.error(err);
            return null;
        }
    };

    const groupedWorkData = workdata.reduce((acc, item) => {
        if (!acc[item.type]) {
            acc[item.type] = [];
        }
        acc[item.type].push(item);
        return acc;
    }, {});

    return (
        <div className=' m-4 min-h-screen'>
            <div className='container mx-auto'>
                {Object.keys(groupedWorkData).map((type) => (
                    <div key={type} className="m-5 ">
                        <div className='w-28  md:w-28 h-28 mb-9  bg-blue rounded-full flex items-center justify-center '>
                        <h3 className='text-slate-200 text-center font-bold '>{type}</h3>
                    </div>

                        <div className={type === "Certifications" ||type === "prpject" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4" : " grid grid-cols-1 gap-2"}>
                            {groupedWorkData[type].map((obj) => (
                                <div
                                    key={obj.id}
                                    className='md:p-2 flex gap-4 text-slate-200 border-transparent text-sm rounded-xl hover:border hover:bg-hover cursor-pointer'
                                    onClick={() => setSelectedWork(obj)}
                                >
                                    {obj.type === "Projects" ? (
                                        <>
                                            <div className='m-4'>
                                                <img src={getImage(obj.image)} alt={obj.title} className='h-16 w-16 md:h-32 md:w-40 object-cover rounded-xl' />
                                            </div>
                                            <div className='m-2 flex-1'>
                                                <h2 className='font-bold text-sm'>{obj.title}</h2>
                                                <p className='text-slate-500 text-xs'>{obj.description}</p>
                                            </div>
                                        </>
                                    ) : obj.type === "Experiences" ? (
                                        <>
                                            <div className=''>
                                                <span>{obj.date}</span>
                                            </div>
                                            <div className='m-2 flex-1'>
                                                <h2 className='font-bold text-sm'>{obj.title}</h2>
                                                <span className='text-slate-500 text-xs'>{obj.description}</span>
                                                <ul className='list-none flex gap-4 mt-2'>
                                                    {obj.skills.map((skill, index) => (
                                                        <li key={index} className='text-sm p-2 rounded-lg bg-hover hover:bg-blue'>{skill}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    ) 
                                    // : obj.type === "Certifications" ? (
                                    //     <>
                                    //     <div className='mx-12 p-2'>
                                    //     <div className='m-2'>
                                    //             <img src={getImage(obj.image)} alt={obj.title} className='h-32 w-40 object-cover rounded-xl' />
                                    //         </div>
                                    //         <div className='m-2 flex-1'>
                                    //             <h2 className='font-bold text-sm'>{obj.title}</h2>
                                    //             <span className='text-slate-500 text-xs'>{obj.description}</span>
                                    //         </div>
                                    //     </div>
                                          
                                    //     </>
                                    // ) 
                                    : null}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Work;
