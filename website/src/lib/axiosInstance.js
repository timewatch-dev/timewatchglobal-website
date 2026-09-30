// lib/axios.js
import axios from 'axios';

// The deploy workflow builds the website without an .env, so the fallback is
// what actually runs in production. It must stay on this site's own domain —
// nginx routes /api/ to the global backend.
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "https://www.timewatchglobal.com/api"
    // baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5003/api"
});

export default axiosInstance;
