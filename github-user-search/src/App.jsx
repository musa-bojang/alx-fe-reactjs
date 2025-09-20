import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './index.css'
import { BrowserRouter } from 'react-router'

import Search from './components/Search'


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
    <BrowserRouter>
      <h1>Vite + React</h1>
      <Search/>

    </BrowserRouter>
      
    </>
  )
}

export default App
