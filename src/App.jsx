import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom'
import Register from './components/Register'

export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <div style={{marginTop:"5vw"}}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </div>
      </Router>
    </div>
  )
}
