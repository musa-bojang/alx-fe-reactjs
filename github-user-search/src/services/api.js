import axios from "axios";
const GITHUB_API_URL = import.meta.env.VITE_APP_GITHUB_API_URL;
const api = axios.create({
    baseURL: GITHUB_API_URL
    // headers: {
    //     Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
    // }

});

export default api;