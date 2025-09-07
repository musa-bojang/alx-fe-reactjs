import {useState } from 'react'
import './App.css'

import UserContext from "./components/UserContext.js"
import ProfilePage from './components/ProfilePage.jsx'
import UserProfile from './components/UserProfile.jsx';


function App() {
  
  const userData = { name: "Jane Doe 3", email: "jane.doe@example.com", bio: "A passionate developer.", age: 28 };
  return (
    <>
    
    <UserContext.Provider value={userData}>
      <ProfilePage />
   <UserProfile />
    </UserContext.Provider>
  
    </>
  )
}

export default App
