import React from 'react';

const Card = ({ type, data }) => {
  if (type === 'aboutCard') {
    return <AboutCard data={data} />;
  } else if (type === 'spotifyCard') {
    return <SpotifyCard data={data} />;
  }
  return null;
};

const AboutCard = ({ data }) => (
  <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
    <h2 className="text-xl font-medium text-black">About Me</h2>
    <ul className="list-disc pl-5">
      {data.list.map((item, index) => (
        <li key={index} className="text-gray-700">{item}</li>
      ))}
    </ul>
  </div>
);

const SpotifyCard = ({ data }) => (
  <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
    <h2 className="text-xl font-medium text-black">My Spotify Favorites</h2>
    <div className="text-gray-700">
      <p><strong>Top Songs:</strong> {data.topSongs.join(', ')}</p>
      <p><strong>Top Genres:</strong> {data.topGenres.join(', ')}</p>
      <p><strong>Top Artists:</strong> {data.topArtists.join(', ')}</p>
    </div>
  </div>
);

export default Card;
