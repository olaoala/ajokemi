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
        <div className='px-72 py-5 text-gray-600  min-h-screen'>
            <div className='container mx-auto'>
                {Object.keys(groupedWorkData).map((type) => (
                    <div key={type} className="mb-8   shadow-md">
                        <div className=' flex w-full border rounded-lg mb-5 bg-gray items-center justify-left mx-auto'>
                            <h3 className='text-white p-4 text-2xl font-bold'>{type}</h3>
                        </div>
                        <div className={type === "Certifications"  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4" : "grid grid-cols-1 gap-2"}>
                            {groupedWorkData[type].map((obj) => (
                                <div
                                    key={obj.id}
                                    className='p-6 flex gap-4 bg-gray-100'
                                    onClick={() => setSelectedWork(obj)}
                                >
                                    {obj.type === "Projects" ? (
                                        <>
                                            <div className='m-4'>
                                                <img src={getImage(obj.image)} alt={obj.title} className='h-16 w-16 md:h-32 md:w-40 object-cover rounded-xl' />
                                            </div>
                                            <div className='m-2 flex-1'>
                                                <h2 className='font-bold text-lg'>{obj.title}</h2>
                                                <p className='text-gray-600'>{obj.description}</p>
                                            </div>
                                        </>
                                    ) : obj.type === "Experiences" ? (
                                        <>
                                            <div className='m-4'>
                                                <span className='block text-sm text-gray-600'>{obj.date}</span>
                                            </div>
                                            <div className='m-2 flex-1'>
                                                <h2 className='font-bold  text-lg'>{obj.title}</h2>
                                                <span className='text-gray-600'>{obj.description}</span>
                                                <ul className='list-none flex gap-4 mt-2'>
                                                    {obj.skills.map((skill, index) => (
                                                        <li key={index} className='text-sm p-2 rounded-lg bg-gray'>{skill}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    ) : null}
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
