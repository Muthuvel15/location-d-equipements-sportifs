// api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = () => api.get('/products');

export const signup = (userData) => api.post('/users', userData);




const apis = {
  getProducts,
  signup,
};

export default apis;
