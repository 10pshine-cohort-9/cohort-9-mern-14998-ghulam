import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
import Registration from "./Registration"
import Login from './Login'
import Home from "./Home"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<Registration />} />
      <Route path="/" element={<Login/>} />
      <Route path="login" element={<Login/>} />
      <Route path="Home" element={<Home/>} />


    </Routes>
    </BrowserRouter>
  )
}

export default App
