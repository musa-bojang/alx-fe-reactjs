import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
// import RecipeDetails from './components/RecipeDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
      <Route path="/" element={<RecipeList />} />  
      <Route path="*" element={<h2>Not found</h2>} />
      {/* <Route path="/recipes/:id" element={<h2>Recipe Details Page</h2>} /> */}
      <Route path="/recipes/:id" element={<RecipeDetails/>} />
      
      </Routes>
      
      
      
      </Router>
    </>
  )
}

export default App
