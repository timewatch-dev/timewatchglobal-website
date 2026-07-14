// lib/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://timewatchuae.com/api"
    // baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001/api"
}); 

export default axiosInstance;
