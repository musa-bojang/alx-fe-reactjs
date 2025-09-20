import { useState, useEffect } from "react";
// import { fetchUserData } from "../services/githubService";
import "../App.css";



// import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [user, setUser] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchUserData({ username: user, location, minRepos: repos });
      setResults(data);
    } catch (err) {
      setError(err.message);
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-4 mb-6">
        <input
          type="text"
          placeholder="Username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded p-2"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="border rounded p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid gap-4 md:grid-cols-3">
        {results.length > 0 ? (
          results.map((user) => (
            <div key={user.id} className="border p-4 rounded shadow text-center">
              <img src={user.avatar_url} alt={user.login} className="w-24 h-24 mx-auto rounded-full mb-2" />
              <h3 className="font-bold">{user.login}</h3>
              <p>Location: {user.location}</p>
              <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                View Profile
              </a>
            </div>
          ))
        ) : (
          !loading && <p>No users found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;

// function Search() {
// const [query, setQuery] = useState("");
// const [user, setUser] = useState("");
// const [location, setLocation] = useState("");
// const [repos, setRepos] = useState("");
// const [newData, setNewdata] = useState("");
// const [loading, setLoading] = useState(false);
// const [error, setError ] = useState(null);

// function handleUser(e) {
//     setUser(e.target.value);
// }
// function handleLocation(e) {
//     setLocation(e.target.value);
// }
//     function handleRepos(e) {
//         setRepos(e.target.value);
//     }
//     async function handleSubmit(e) {
//         e.preventDefault(); // prevent page reload
//         if (user.trim() === "" || location.trim() === "" || repos.trim() === "") return;
    
//         setLoading(true);
//         setError(null);
    
//         try {
//           const data = await fetchUserData(user,location,repos);
//           setNewdata(data);
//         } catch (err) {
//           setError(err.message);
//           setNewdata(null);
//         } finally {
//           setLoading(false);
//         }
//       }
//   return (
//     <>
//   <form onSubmit={handleSubmit}>
//   <div>Search Component</div>
//   <div className="flex flex-row">
//   <div className="basis-1/3">
//   <input type="text" placeholder="username" onChange={handleUser} />
//   </div>
//   <div className="basis-2/3">
//    <input type="text" placeholder="location" onChange={handleLocation}/>
//    </div>
//    <div className="basis-3/3">
//    <input type="text" placeholder="min repository" onChange={handleRepos}/>
//    </div>
//    <button type="submit" >search</button>
// </div>

//   </form>
     
//     <h2>results</h2>
//     {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     {newData ? (
//         <div>
//           <p>👤 Username: {newData.login}</p>
//           <p>📛 Name: {newData.name}</p>
//           <img src={newData.avatar_url} alt="User avatar" width="100" />
//         </div>
//       ) : (
//         <p>Looks like we cant find the user</p>
//       )}

//     </>
//   )
// }   
// export default Search