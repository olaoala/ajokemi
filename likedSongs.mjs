import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

const clientId = 'c2f814468ad8481c9a24e8e8cbbeb8ee';
const clientSecret = 'b20543a57e5c40e085ea8fbbba628eb2';
let accessToken;

const getAccessToken = async () => {
  try {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
      },
      body: 'grant_type=client_credentials',
      json:'true'
    }
  );

    if (!response.ok) {
      throw new Error('Failed to fetch access token');
    }
    const data = await response.json();
    accessToken = data.access_token;
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
};

// Ensure access token is fetched initially
getAccessToken().catch(error => {
  console.error('Failed to fetch initial access token:', error);
});

// Endpoint to fetch liked songs from Spotify API
app.get('/spotify/liked-songs', async (req, res) => {
  try {
    if (!accessToken) {
      throw new Error('Access token not available');
    }

    const response = await fetch('https://api.spotify.com/v1/me/tracks?limit=10', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });


    if (!response.ok) {
      throw new Error(`Failed to fetch liked songs: ${response.status}`);
    }

    const data = await response.json();
    res.json(data.items); // Return relevant data to frontend
  } catch (error) {
    console.error('Error fetching liked songs:', error);
    res.status(500).json({ error: 'Failed to fetch liked songs' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
