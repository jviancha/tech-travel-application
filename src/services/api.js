import axios from 'axios';

const api = axios.create({
    baseURL: 'https://629aa072cf163ceb8d0ca0c9.mockapi.io/'
});

export default api;