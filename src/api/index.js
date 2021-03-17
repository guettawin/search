import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.jikan.moe/v3',
  timeout: 30000,
});

export default request;
