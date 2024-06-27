import React from 'react';

const UniversalCard = ({ type, data }) => {
  switch (type) {
    case 'list':
      return <ListCard data={data} />;
    case 'images':
      return <ImagesCard data={data} />;
    case 'icons':
      return <IconsCard data={data} />;
    case 'quote':
        return <QuoteCard data={data} />;
      default:
      return null;
  }
};

const ListCard = ({ data }) => (
  <div className="p-6 w-40 h-64 mx-auto bg-gray rounded-xl shadow-md space-y-4">
    <h2 className="text-xl font-medium text-black">List</h2>
    <ul className="list-disc pl-5">
      {data.map((item, index) => (
        <li key={index} className="text-gray-700">{item}</li>
      ))}
    </ul>
  </div>
);
const QuoteCard = ({ data }) => (
  <div className="p-6 w-40 h-64 mx-auto bg-gray rounded-xl shadow-md space-y-4">
    <h2 className="text-xl font-medium text-black">List</h2>
    <div className="list-disc pl-5">
      {data.map((item, index) => (
        <p key={index} className="text-gray-700">{item}</p>
      ))}
    </div>
  </div>
);

const ImagesCard = ({ data }) => (
  <div className="p-6 h-64 w-96 mx-auto bg-gray rounded-xl shadow-md space-y-4">
    <h2 className="text-xl font-medium text-black">Images</h2>
    <div className="grid grid-cols-2 gap-4">
      {data.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index}`} className="h-24 w-24 object-cover rounded-lg" />
      ))}
    </div>
  </div>
);

const IconsCard = ({ data }) => (
  <div className="p-6 max-w-sm mx-auto bg-gray rounded-xl shadow-md space-y-4">
    <h2 className="text-xl font-medium text-black">Icons</h2>
    <div className="flex space-x-4">
      {data.map((IconComponent, index) => (
        <IconComponent key={index} className="h-6 w-6 text-gray-700" />
      ))}
    </div>
  </div>
);

export default UniversalCard;
