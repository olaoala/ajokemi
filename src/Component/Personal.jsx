import React from 'react';
import UniversalCard from '../Common/Cards';
import { FaApple, FaAndroid, FaWindows } from 'react-icons/fa';






const Personals = () => {
  const listData = ['Item 1', 'Item 2', 'Item 3'];
  const quoteData = ['Item 1'];
  const imagesData = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ];
  const iconsData = [FaAndroid, FaWindows];

  return (
    
    <div >
      <div className="flex flex-row items-center gap-0 space-y-1">
      <UniversalCard type="list" data={listData} />
      <UniversalCard type="quote" data={quoteData} />
      <UniversalCard type="icons" data={iconsData} />

      </div>
      <UniversalCard type="images" data={imagesData} />

   
    </div>
  );
};


export default Personals;
