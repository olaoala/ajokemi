import React from 'react';
import UniversalCard from '../Common/Cards';
import { FaApple, FaAndroid, FaWindows } from 'react-icons/fa';

const Personals = () => {
  const listData = ['Item 1', 'Item 2', 'Item 3'];
  const businessData = ['Item 1', 'Item 2', 'Item 3'];

  const quoteData = ['This is a quote.'];
  const imagesData = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
  ];
  const iconsData = [FaAndroid, FaWindows];
  const spotifyData = ['sza', 'brent', 'riri']

  return (
    <div>
      <div className="flex justify-center gap-4">
        <UniversalCard type="list" data={listData} style={{ width: '15em',  height:"13em" }} />
        <UniversalCard type="quote" data={quoteData} style={{ width: '10em' }} />
        <UniversalCard type="icons" data={iconsData} style={{ width: '15em' }} />
        <UniversalCard type="business" data={businessData} style={{ width: '20em' }} />

      </div>
      <div className='flex justify-center m-5 gap-4'>
      <UniversalCard type="images" data={imagesData} style={{ width: '35em', height:"15em" }} />
      <UniversalCard type="spotify" data={spotifyData} style={{ width: '27em' }} />
      </div>


    </div>
  );
};

export default Personals;
