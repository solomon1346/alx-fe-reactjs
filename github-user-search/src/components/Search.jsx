import React, { useState } from 'react';
import fetchUserData from '../services/githubService';

const Search = () => {
    const [searchParams, setSearchParams] = useState({ username: '', location: '', minRepos: '' });
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSearchParams(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(false);
        try {
            const data = await fetchUserData(searchParams.username, searchParams.location, searchParams.minRepos);
            setResults(data.items);
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap gap-4">
                <input 
                    name="username" 
                    className="flex-1 border p-2 rounded" 
                    placeholder="Username" 
                    onChange={handleInputChange} 
                />
                <input 
                    name="location" 
                    className="flex-1 border p-2 rounded" 
                    placeholder="Location (e.g. Nairobi)" 
                    onChange={handleInputChange} 
                />
                <input 
                    name="minRepos" 
                    type="number" 
                    className="flex-1 border p-2 rounded" 
                    placeholder="Min Repositories" 
                    onChange={handleInputChange} 
                />
                <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
                    Search
                </button>
            </form>

            {loading && <p className="text-center">Loading...</p>}
            {error && <p className="text-red-500">Looks like we cant find the user</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map(user => (
                    <div key={user.id} className="border p-4 rounded shadow hover:shadow-lg transition">
                        <img src={user.avatar_url} alt={user.login} className="rounded-full w-20 h-20 mx-auto" />
                        <h3 className="text-center mt-2 font-bold">{user.login}</h3>
                        <p className="text-sm text-center text-gray-600">{user.location || 'Location hidden'}</p>
                        <div className="text-center mt-4">
                            <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500 underline">
                                View Profile
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Search;