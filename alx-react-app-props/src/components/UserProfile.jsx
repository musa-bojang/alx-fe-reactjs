import UserContext from "./UserContext";
import { useContext } from "react";


function UserProfile() {
    const data = useContext(UserContext);
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
   <h2 style={{ color: 'blue' }}>{data.name}</h2>
   <p>Age: <span style={{ fontWeight: 'bold' }}>{data.age}</span></p>
   <p>Bio: {data.bio}</p>
 </div>
    );
}
export default UserProfile;