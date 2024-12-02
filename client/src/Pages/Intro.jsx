import React from 'react'
import { Link } from 'react-router-dom'
import banner1 from '../assets/indialarge.gif'

const Intro = () => {
  return (
  <>
   <div className="navbar flex justify-between bg-blue-800 text-white">
      <div className='flex px-6 py-4'>
        <h1 className='text-2xl font-bold'>Our Logo</h1>
       </div>
      <div className='flex gap-10 px-6 py-4 text-2xl font-semibold mr-10 max-sm:hidden'>
        <Link to='/'>Home</Link>
        <Link to="/home">About</Link>
        <button className='btn btn-primary text-white font-bold'> <Link to="/signup">Signup</Link></button>
        <button className='btn btn-secondary text-white font-bold'> <Link to="/login">Login</Link></button>
      </div>
     </div>
     <div>
        <img src={banner1} alt="" width="100%" height='auto' id='banner1' />
     </div>
  </>
  )
}

export default Intro