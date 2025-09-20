import { useState, useEffect } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
const [query, setQuery] = useState("");
const [newData, setNewdata] = useState("");
    function handleChange(e) {
        setQuery(e.target.value);
    }
    useEffect(() => {
        if(query.trim()==="") return;

        fetchUserData(query)
        .then((data) => setNewdata(data))
        .catch((err) => console.error(err));
      }, [query]);
  return (
    <>
     <div>Search Component</div>
    <input onChange={handleChange} style={{padding:"10px", color:"black", backgroundColor:"white"}} type="text" placeholder="type name of github user"/>
    
    <h2>results</h2>
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