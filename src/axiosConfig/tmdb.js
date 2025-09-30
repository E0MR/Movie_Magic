import axios from 'axios';

import store from '../store/store'
import { setLoading } from "../store/appSlice"

const API_KEY = '4adc3db14538db1070add3733f000e70';  // Replace with your actual TMDB API key


// language: 'en-US',

const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY
  },
});

// Add a request interceptor
tmdb.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(setLoading(true));
    
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
tmdb.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(setLoading(false));
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default tmdb;
