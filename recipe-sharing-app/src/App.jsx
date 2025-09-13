import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { Routes, Route } from 'react-router-dom'
import RecipeDetails from './components/RecipeDetails'
// import RecipeDetails from './components/RecipeDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<h2>Welcome to the Recipe App</h2>} />  
      <Route path="*" element={<h2>Not found</h2>} />
      {/* <Route path="/recipes/:id" element={<h2>Recipe Details Page</h2>} /> */}
      <Route path="/recipes/:id" element={<RecipeDetails/>} />
      
      </Routes>

      <RecipeList />
      <AddRecipeForm />
     
    </>
  )
}

export default App
