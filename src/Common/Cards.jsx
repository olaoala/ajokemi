import React from 'react';

const UniversalCard = ({ title, type, data, style }) => {
  const renderContent = () => {
    switch (type) {
      case 'list':
        return <ul className="list-none  pl-2">{data.map((item, index) => <li className='text-gray text-xs p-1' key={index}>{item}</li>)}</ul>;
      case 'quote':
        return <blockquote className="italic border-l-4 pl-4 mt-24 border-gray-300">{data.map((item, index) => <p className='text-sm'  key={index}>{item}</p>)}</blockquote>;
      case 'icons':
        return <div className="grid grid-cols-4 gap-2">{data.map((Icon, index) => <Icon key={index} className="text-xl" />)}</div>;
      case 'images':
        return <div className="grid grid-cols-7 gap-4">{data.map((src, index) => <img key={index} src={src} alt={`img-${index}`} className="w-full h-auto" />)}</div>;
      case 'business':
        return <ul className="list-none pl-2">{data.map((item, index) => <li className='p-1' key={index}>{item}</li>)}</ul>;
      case 'spotify':
        return <ul className="list-disc pl-2">{data.map((item, index) => <li key={index}>{item}</li>)}</ul>;
      default:
        return null;
    }
  };

  return (
    <div className="shadow-md rounded-lg  bg-angray p-4" style={style}>
      {title && <h2 className="text-xl font-bold text-gray-700 mb-4">{title}</h2>}
      {renderContent()}
    </div>
  );
};

export default UniversalCard;
