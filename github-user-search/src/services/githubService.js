
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const GITHUB_API_URL = "https://api.github.com";
import axios from "axios";

const api = axios.create({
    baseURL: GITHUB_API_URL
    // headers: {
    //     Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`
    // }

});


// export async function fetchUserData(username){
//     const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
//         // headers: {
//         //     Authorization: `token ${GITHUB_API_KEY}`
//         // }
//     });

//     if(!response.ok){
//         throw new Error('User not found');
//     }
//     return await response.json();
// }
// export async function fetchUserData(username, location, repos){
//     const response = await api.get(`/users/${username}/${location}/${repos}`);
//     return response.data;
// }

export async function fetchUserData({ username, location, minRepos }) {
    let query = "";
  
    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>${minRepos}`;
  
    const response = await api.get(`/search/users?q=${encodeURIComponent(query.trim())}`);
    return response.data.items; // GitHub returns an object with 'items' array
  }