import axios from 'axios';

const fetchUserData = async (username, location, minRepos, page = 1) => {
    let query = '';
    
    // Build the query string based on provided inputs
    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    const response = await axios.get(
        `https://api.github.com/search/users?q=${query}&page=${page}`
    );
    return response.data; // This returns an object containing { items, total_count }
};

export default fetchUserData;