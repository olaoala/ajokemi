import React from 'react';
import UniversalCard from '../Common/Cards';
import { IoIosMusicalNotes } from "react-icons/io";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { PiDogFill } from "react-icons/pi";
import { GiTennisRacket } from "react-icons/gi";
import { TbBooks } from "react-icons/tb";
import { GiPoliceOfficerHead } from "react-icons/gi";
import { GiAmpleDress } from "react-icons/gi";
import { LuFlower2 } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GiMountains } from "react-icons/gi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { MdSportsGymnastics } from "react-icons/md";
import { TbBeach } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import { GiCaveman } from "react-icons/gi";
import { FaUserSlash } from "react-icons/fa";
import diamonds from '../Assets/diamonds.png';
import shampoo from '../Assets/shampoo.png';
import meal from '../Assets/iftar.png';
import candle from '../Assets/scented-candle.png'
// const fetchLikedSongs = async () => {
//   try {
//     const response = await fetch('http://localhost:3000/likedSongs');
//     console.log(response);

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Failed to fetch liked songs:', error);
//     return [];
//   }
// };

const Personals = () => {
  // const [spotifyData, setSpotifyData] = useState([]);

  // useEffect(() => {
  //   const getSpotifyData = async () => {
  //     const songs = await fetchLikedSongs();
  //     console.log(songs);
  //     setSpotifyData(songs);
  //   };
  //   getSpotifyData();
  // }, []);

  const listData = [
    { text: 'Build more with reactJs', hovertext: 'Building intresting projects with React', Icon1: FaReact, Icon2: LiaLaptopCodeSolid },
    { text: 'Become a fullstack developer', hovertext: 'Learn backend technologies', Icon1: LiaLaptopCodeSolid, Icon2: IoIosMusicalNotes },
    { text: 'Travel around Nigeria', hovertext: 'Till i am able to see the world', Icon1: GiMountains, Icon2: MdOutlineTravelExplore },
    { text: 'Squat twice my weight', hovertext: 'Just for flex', Icon1: CgGym, Icon2: MdSportsGymnastics },
    { text: 'Have more beach', hovertext: 'Host a yoga retreat someday', Icon1: TbBeach, Icon2: GrYoga },
    { text: 'Msc AI and Robotics', hovertext: 'It is more than curiousity', Icon1: FaUserSlash, Icon2: GiCaveman }
  ];

  const businessData = [
    { text: 'Wuranimi', hovertext: '- Jewelry brand', Icon1: diamonds, Icon2: HiOutlinePaintBrush },
    { text: 'Dore Natural', hovertext: '- Hair care products',Icon1: shampoo, Icon2: HiOutlinePaintBrush },
    { text: 'Devour Lagos', hovertext: '- Home made meals', Icon1: meal, Icon2: HiOutlinePaintBrush },
    { text: 'Ile Wura', hovertext: '- Interior decor', Icon1: candle, Icon2: HiOutlinePaintBrush }
  ];

  const quoteData = ['Risking is better than Regretting.'];
  // const imagesData = Array(13).fill('https://via.placeholder.com/150');
  const iconsData = [IoIosMusicalNotes, HiOutlinePaintBrush, PiDogFill, GiTennisRacket, TbBooks, GiPoliceOfficerHead, GiAmpleDress, LuFlower2];

  return (
    <div className=''>
      <div className="flex text-gray-700 justify-center gap-4">

        <UniversalCard title="Todo" type="list" data={listData} style={{ width: '15em', height: "13em" }} />
        <UniversalCard title="Living by" type="quote" data={quoteData} style={{ width: '10em' }} />
        <UniversalCard title="Hobbies" type="icons" data={iconsData} style={{ width: '15em' }} />
        <UniversalCard title="Rich Business Woman" type="business" data={businessData} style={{ width: '20em' }} />
      </div>
      {/* <div className='flex text-gray-700 justify-center m-5 gap-4'>
        <UniversalCard title="Recent Photos" type="images" data={imagesData} style={{ width: '35em', height: "15em" }} />
        <UniversalCard title="Can not shut up about these" type="spotify" data={spotifyData} style={{ width: '27em' }} />
      </div> */}
    </div>
  );
};

export default Personals;
