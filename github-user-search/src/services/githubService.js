import axios from 'axios';

// Ensure the function name is exactly 'fetchUserData'
export const fetchUserData = async (username, location, minRepos) => {
    // Constructing the query string for the Search API
    const query = `user:${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>=${minRepos}` : ''}`;
    const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
    return response.data;
};