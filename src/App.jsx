import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/pages/home'
import Admin from './assets/pages/admin'
import Add from './assets/pages/add'


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route element={<Home/>} path="/"></Route>
     <Route element={<Admin/>} path="/admin"></Route>
     <Route element={<Add/>} path="/add"></Route>
    </Routes>
    </BrowserRouter>
    
  )
}

export default App