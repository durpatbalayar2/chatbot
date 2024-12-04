import React from 'react'
//import {MenuIcon} from '@mui/icons-material/Menu';
import{Link}from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar flex justify-between bg-blue-700 text-white">
      <div className='flex px-6 py-4'>
        <h1 className='text-2xl font-bold'>Our Logo</h1>
       </div>
      <div className='flex gap-10 px-6 py-4 text-2xl font-semibold mr-10 max-sm:hidden'>
        <Link to='/home'>Home</Link>
        <Link to="/about">About</Link>
        <Link to="/home">Chatbot</Link>
        <Link to="/Gallary">Gallary</Link>
        <button className='btn btn-warning text-white font-bold'> <Link to="/register">Register</Link></button>
        <button className='btn btn-secondary text-white font-bold'> <Link to="/login">Login</Link></button>

      </div>
     
    </div>
      
    </>
  )
}

export default Navbar
