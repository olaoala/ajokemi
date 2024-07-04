import React, { useEffect, useState } from 'react';

const SpotifyAuthorization = ({ setAccessToken }) => {
  const clientId = 'YOUR_CLIENT_ID';
  const redirectUri = 'YOUR_REDIRECT_URI';
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const scopes = [
    'user-library-read',
  ];

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem('token');
    if (!token && hash) {
      token = new URLSearchParams(hash.substring(1)).get('access_token');
      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }
    setAccessToken(token);
  }, [setAccessToken]);

  const handleLogin = () => {
    window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      '%20'
    )}&response_type=token&show_dialog=true`;
  };

  return <button onClick={handleLogin}>Login to Spotify</button>;
};

export default SpotifyAuthorization;
