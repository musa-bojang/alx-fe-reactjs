
import './App.css'
import {Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
function App() {
 

  return (
    <>
     <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<h2>Not found</h2>} />
     </Routes>
      <h1>Vite + React</h1>
    </>
       
    
  )
}

export default App
