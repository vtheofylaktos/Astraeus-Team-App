import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:4000/api', // άλλαξε το αν τρέχεις backend αλλού
  timeout: 8000,
});

export default instance;
