import React from 'react';

const UniversalCard = ({ title, type, data, style }) => {
  const renderContent = () => {
    switch (type) {
      case 'list':
        return (
          <ul className="list-none">
            {data.map((item, index) => (
              <li className='text-gray text-xs m-1 flex   relative group  ' key={index}>
                <item.Icon1 className="text-xs text-blue m-1" />
                <span className="flex-grow pl-1">{item.text}</span>
                <item.Icon2 className="text-xs text-blue" />
                {/* <span className="absolute right-5 -top-5  bg-gray text-gray-700 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.hovertext}
                </span> */}
              </li>
            ))}
          </ul>
        );
        case 'business':
          return (
            <ul className="list-none">
              {data.map((item, index) => (
                <li className='text-gray font-bold m-1 relative group  flex' key={index}>
                <img src={item.Icon1} alt="icon1" style={{height:'18px', width:"18px"}} />
                <span className="flex-grow text-lg pl-2">{item.text}</span>
                  {/* <item.Icon2 className="text-xs text-blue" /> */}
                  <span className="absolute right-5 top-2  bg-gray-200 text-gray-700 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.hovertext}
                </span>
                </li>
              ))}
            </ul>
          );
      case 'quote':
        return (
          <blockquote className="italic border-l-4 pl-4 mt-24 border-gray-300">
            {data.map((item, index) => <p className='text-sm' key={index}>{item}</p>)}
          </blockquote>
        );
      case 'icons':
        return (
          <div className="grid grid-cols-4 gap-2">
            {data.map((Icon, index) => <Icon key={index} className="text-xl" />)}
          </div>
        );
      case 'images':
        return (
          <div className="grid grid-cols-7 gap-4">
            {data.map((src, index) => <img key={index} src={src} alt={`img-${index}`} className="w-full h-auto" />)}
          </div>
        );
      case 'spotify':
        return (
          <ul className="list-disc pl-2">
            {data.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="shadow-md rounded-lg bg-angray p-4" style={style}>
      {title && <h2 className="text-xl font-bold text-gray-700 mb-4">{title}</h2>}
      {renderContent()}
    </div>
  );
};

export default UniversalCard;
