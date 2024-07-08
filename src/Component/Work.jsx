import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import workdata from '../Work.json';
import ProjectCarousel from './Project';
import { BsSuitcaseLg } from "react-icons/bs";
import { PiCookingPotBold } from "react-icons/pi";
import { IoLogoHtml5, IoLogoCss3} from 'react-icons/io';
import { RiJavascriptFill } from 'react-icons/ri';
import { PiFileSql } from 'react-icons/pi';
import { FaGithub, FaReact } from 'react-icons/fa';
import { RxFigmaLogo } from 'react-icons/rx';
import { VscJson } from 'react-icons/vsc';
import { SiAxios, SiReactrouter, SiReacthookform, SiMongodb } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const iconComponents = {
    IoLogoHtml5: IoLogoHtml5,
    IoLogoCss3: IoLogoCss3,
    FaReact: FaReact,
    RiJavascriptFill: RiJavascriptFill,
    PiFileSql: PiFileSql,
    FaGithub: FaGithub,
    RxFigmaLogo: RxFigmaLogo,
    VscJson: VscJson,
    SiAxios: SiAxios,
    SiReactrouter: SiReactrouter,
    SiReacthookform: SiReacthookform,
    SiMongodb: SiMongodb,
    TbApi: TbApi,
  };

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
        <div className='px-72 py-5 text-gray-600 min-h-screen'>
            <div className='container mx-auto '>
                {Object.keys(groupedWorkData).map((type) => (
                    <div key={type} className="mb-8 p-1 shadow-md border border-blue-950  rounded-xl">
                        <div className='flex  w-full border rounded-lg bg-blue items-center justify-left mx-auto'>
                            <h3 className='text-white flex p-4 text-2xl font-bold'>{type}{
                                type==="Experiences"? <BsSuitcaseLg className='my-2 mx-3 text-lg'/>:<PiCookingPotBold className='m-2 mx-3 text-lg'/>}</h3>
                        </div>
                        <div className={type === "Certifications"? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4" : "grid grid-cols-1 gap-2"}>
                            {type === "Projects" ? (
                                               <ProjectCarousel />

                            ) : (
                                groupedWorkData[type].map((obj) => (
                                    <div
                                        key={obj.id}
                                        className='p-6 flex gap-4 bg-gray-100 hover:bg-grayHover  hover:rounded-lg'
                                        onClick={() => setSelectedWork(obj)}
                                    >
                                        {obj.type === "Experiences" ? (
                                            <>
                                                <div className='m-4'>
                                                    <span className='block text-sm font-bold text-gray-500'>{obj.date}</span>
                                                </div>
                                                <div className='m-2 flex-1'>
                                                    <h2 className='font-bold text-lg hover:text-gray-950'>{obj.title}</h2>
                                                    <span className='text-gray-500 hover:text-gray-950'>{obj.description}</span>
                                                    {obj.skills && (
                                                    <div className="flex text-lg gap-3 mt-2">
                                                        {obj.skills.map((skill, index) => {
                                                        const IconComponent = iconComponents[skill];
                                                        return IconComponent ? <IconComponent  key={index} /> : null;
                                                        })}
                                                    </div>
                                                    )}
                                                </div>
                                            </>
                                        ) : null}
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
