import React from 'react'
import Navbar from '../components/Navbar'
import pic3 from '../assets/pic3.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
       <Navbar/>
      <div className='flex-col justify-center items-center relative'>
        <img src={pic3} id='aboutbnr' className='h-[650px]' width='100%'></img>
        <h2 className='text-3xl text-white font-bold w-[50%] absolute top-28 left-16 max-md:w-[100%] max-md:left-0 max-md:p-2 '>
          <h2 className='text-4xl text-amber-400'>Museum<br></br> Excursion</h2>
          We are the best Museum visiting Partner of the India<br></br>
          <span className='text-xl font-light text-white'>We have explored more than 500<sup>+</sup> best museum of the India
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quam facilis nesciunt, nemo repellendus quo error quisquam quos pariatur unde! Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime quidem, commodi libero suscipit nesciunt sit accusantium consequuntur nulla dolores, provident eos cupiditate numquam nisi adipisci incidunt, dolore iste unde?
          </span>
         <button className='btn btn-warning px-8 text-xl mt-2 font-semibold'>
            <Link to='/signup'>Join Us</Link></button>
          </h2>
      </div>
    </div>
  )
}

export default About
