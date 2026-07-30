import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import React from 'react'

import Login from './Login'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="Registration" element={<Registration/>} /> */}
      <Route path="/" element={<Login/>} />
      <Route path="login" element={<Login/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
