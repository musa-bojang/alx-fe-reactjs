import {useState } from 'react'
import './App.css'

import UserContext from "./UserContext.js"
import ProfilePage from './components/ProfilePage.jsx'


function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe 3", email: "jane.doe@example.com" };
  return (
    <>
    
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  
    </>
  )
}

export default App
