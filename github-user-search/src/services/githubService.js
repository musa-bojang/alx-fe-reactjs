
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;
const GITHUB_API_URL = import.meta.env.VITE_APP_GITHUB_API_URL;

export async function fetchUser(username){
    const response = await fetch(`${GITHUB_API_URL}/users/${username}`, {
        // headers: {
        //     Authorization: `token ${GITHUB_API_KEY}`
        // }
    });

    if(!response.ok){
        throw new Error('User not found');
    }
    return await response.json();
}