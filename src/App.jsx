import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom'
import Register from './components/Register'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './components/Admin'
import "./App.css"

export default function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <div style={{marginTop:"5vw"}}>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
      </div>
      </Router>
      <ToastContainer />
    </div>
  )
}
