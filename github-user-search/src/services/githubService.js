
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const GITHUB_API_URL = import.meta.env.VITE_APP_GITHUB_API_URL;
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
export async function fetchUserData(username){
    const response = await api.get(`/users/${username}`);
    return response.data;
}