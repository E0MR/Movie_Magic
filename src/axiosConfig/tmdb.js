import axios from 'axios';

const apiKey = '4adc3db14538db1070add3733f000e70';  // Replace with your actual TMDB API key

// language: 'en-US',

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: apiKey
  },
});

export default tmdb;
