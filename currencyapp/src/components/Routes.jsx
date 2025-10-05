import { Route, Routes } from "react-router";
import Home from '../pages/Home';

function Routes() {
  return (
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="*" element={<h2>No found</h2>} />
    </Routes>
  )
}

export default Routes;