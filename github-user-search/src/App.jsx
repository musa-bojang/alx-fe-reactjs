import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <h1>Vite + React</h1>
    </BrowserRouter>
      
    </>
  )
}

export default App
