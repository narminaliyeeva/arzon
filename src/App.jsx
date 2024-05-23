import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/home'
import Admin from './assets/admin'


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route element={<Home/>} path="/"></Route>
     <Route element={<Admin/>} path="/admin"></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App