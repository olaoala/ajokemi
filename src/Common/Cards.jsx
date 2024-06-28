import React from 'react';

const UniversalCard = ({ type, data, style }) => {
  const renderContent = () => {
    switch (type) {
      case 'list':
        return <ul className="list-disc pl-5">{data.map((item, index) => <li key={index}>{item}</li>)}</ul>;
      case 'quote':
        return <blockquote className="italic border-l-4 pl-4 border-gray-300">{data.map((item, index) => <p key={index}>{item}</p>)}</blockquote>;
      case 'icons':
        return <div className="flex justify-around">{data.map((Icon, index) => <Icon key={index} className="text-3xl" />)}</div>;
      case 'images':
        return <div className="grid grid-cols-7 gap-4">{data.map((src, index) => <img key={index} src={src} alt={`img-${index}`} className="w-full h-auto" />)}</div>;
      case 'business':
        return <ul className="list-disc pl-5">{data.map((item, index) => <li key={index}>{item}</li>)}</ul>;
      case 'spotify':
        return <ul className="list-disc pl-5">{data.map((item, index) => <li key={index}>{item}</li>)}</ul>;
      default:
        return null;
    }
  };

  return (
    <div className=" shadow-md rounded-lg bg-grayHover opacity-55 p-4" style={style}>
      {renderContent()}
    </div>
  );
};

export default UniversalCard;
