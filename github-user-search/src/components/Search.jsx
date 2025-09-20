import { useState, useEffect } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
const [query, setQuery] = useState("");
const [newData, setNewdata] = useState("");
const [loading, setLoading] = useState(false);
const [error, setError ] = useState(null);
    function handleChange(e) {
        setQuery(e.target.value);
    }
    async function handleSubmit(e) {
        e.preventDefault(); // prevent page reload
        if (query.trim() === "") return;
    
        setLoading(true);
        setError(null);
    
        try {
          const data = await fetchUserData(query);
          setNewdata(data);
        } catch (err) {
          setError(err.message);
          setNewdata(null);
        } finally {
          setLoading(false);
        }
      }
  return (
    <>
     <div>Search Component</div>
     <form onSubmit={handleSubmit}>
     <input onChange={handleChange} style={{padding:"10px", color:"black", backgroundColor:"white"}} type="text" placeholder="type name of github user"/>
    <button type="submit" >search</button>
     </form>
    
    <h2>results</h2>
    {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    {newData ? (
        <div>
          <p>👤 Username: {newData.login}</p>
          <p>📛 Name: {newData.name}</p>
          <img src={newData.avatar_url} alt="User avatar" width="100" />
        </div>
      ) : (
        <p>No user data yet</p>
      )}
    </>
  )
}   
export default Search