import React from 'react'
import {BrowserRouter,Route, Routes,Navigate} from 'react-router-dom'
import Login from './Login'
import Register from './Register'
const App =()=>{
    return<div>

        <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
   <Route path="/login" element={<Login />} />
   <Route path="/register" element={<Register />} />
</Routes>

        
        
        </BrowserRouter>
    </div>
}

export default App