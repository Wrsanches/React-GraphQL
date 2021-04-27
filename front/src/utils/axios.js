import axios from 'axios';

const api = axios.create({
  baseURL: 'https://app.novainvest.com.br'
});

export default api;
