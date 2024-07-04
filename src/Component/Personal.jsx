import React, { useState, useEffect } from 'react';
import UniversalCard from '../Common/Cards';
import { IoIosMusicalNotes } from "react-icons/io";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { PiDogFill } from "react-icons/pi";
import { GiTennisRacket } from "react-icons/gi";
import { TbBooks } from "react-icons/tb";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { GiAmpleDress } from "react-icons/gi";
import { LuFlower2 } from "react-icons/lu";
// import fetch from 'node-fetch';

const fetchLikedSongs = async () => {
  try {
    const response = await fetch('http://localhost:3000/likedSongs');
    console.log(response)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
    

  } catch (error) {
    console.error('Failed to fetch liked songs:', error);
    return [];
  }
};



const Personals = () => {
  const [spotifyData, setSpotifyData] = useState([]);

  useEffect(() => {
    const getSpotifyData = async () => {
      const songs = await fetchLikedSongs();
      console.log(songs)
      setSpotifyData(songs);
    };
    getSpotifyData();
  }, []);

  const listData = ['Build more with reactJs', 'Become a fullstack developer', 'Go out more', 'Squat twice my weight', 'Go to the beach', 'Avoid Stress(men)'];
  const businessData = ['Wuranimi', 'Dore Natural', 'Devour lagos', 'Ile Wura'];
  const quoteData = ['Risking is better than Regretting.'];
  const imagesData = Array(13).fill('https://via.placeholder.com/150');
  const iconsData = [IoIosMusicalNotes, HiOutlinePaintBrush, PiDogFill, GiTennisRacket, TbBooks, GiPoliceOfficerHead, GiAmpleDress, LuFlower2];

  return (
    <div className=''>
      <div className="flex text-gray-700 justify-center gap-4">
        <UniversalCard title="Todo" type="list" data={listData} style={{ width: '15em', height: "13em" }} />
        <UniversalCard title="Living by" type="quote" data={quoteData} style={{ width: '10em' }} />
        <UniversalCard title="Hobbies" type="icons" data={iconsData} style={{ width: '15em' }} />
        <UniversalCard title="Rich Business Woman" type="business" data={businessData} style={{ width: '20em' }} />
      </div>
      <div className='flex text-gray-700 justify-center m-5 gap-4'>
        <UniversalCard title="Recent Photos" type="images" data={imagesData} style={{ width: '35em', height: "15em" }} />
        <UniversalCard title="Can not shut up about these" type="spotify" data={spotifyData} style={{ width: '27em' }} />
      </div>
    </div>
  );
};

export default Personals;
