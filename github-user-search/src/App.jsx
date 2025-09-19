import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router'
import { fetchUser } from './services/githubService';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetchUser("musa-bojang").then(data => console.log(data));
  }, []);
  return (
    <>
    <BrowserRouter>
      <h1>Vite + React</h1>
    </BrowserRouter>
      
    </>
  )
}

export default App
