import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter } from 'react-router'
import Notfound from './components/Notfound.jsx'


// const router = createBrowserRouter([
//   { path: "/", element: <App /> },
//   {path: "*", element: <Notfound />}
  
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
   </BrowserRouter>
  </StrictMode>,
)
