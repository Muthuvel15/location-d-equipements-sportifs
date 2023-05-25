import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getProducts = () => api.get('/products');
const apis = {getProducts};
export default apis;
  



