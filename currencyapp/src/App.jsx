// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import "./mystyles.css";
import { Route, Routes } from "react-router";
import Home from './pages/Home';
 import Nabvar from './components/Navbar';
import FAQ from './pages/FAQ';
import Graph from './pages/Graph';
import About from './pages/About';
import Nofound from './pages/Nofound';

function App() {
  const router = (
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/home" element={<Home/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/graph" element={<Graph/>} />
     <Route path="/faq" element={<FAQ/>} />
     <Route path="*" element={<Nofound/>} />
    </Routes>
  )

  return (
    <>
    <Nabvar/>
    {router}
    </>
  )
}

export default App
