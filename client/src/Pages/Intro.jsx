import React from 'react'
import { Link, Links } from 'react-router-dom'
import banner1 from '../assets/map.png'
import map from '../assets/maplog.png'
const Intro = () => {
  return (
  <>
   <div className="navbar flex justify-between bg-blue-800 text-white">
      <div className='flex px-6 py-4'>
        <h1 className='text-2xl font-bold'>Our Logo</h1>
       </div>
      <div className='flex gap-10 px-6 pt-4 text-2xl font-semibold mr-10 max-sm:hidden'>
        <Link to='/'>Home</Link>
        <Link to="/home">About</Link>
        <button className='btn btn-primary text-white font-bold'> <Link to="/signup">Signup</Link></button>
        <button className='btn btn-secondary text-white font-bold'> <Link to="/login">Login</Link></button>
      </div>
     </div>
     <div id='intro' className='bg-slate-100 flex justify-around gap-5 py-16'> 
      <div className='w-[50%] pt-12 max-md:w-[100%]'>
         <h2 className='px-10 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laborum cupiditate eveniet ratione dolorem deleniti aliquid dolor sequi iusto sint?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius temporibus enim excepturi amet voluptatibus neque nobis totam nesciunt, atque, et ipsum incidunt eligendi natus consectetur sunt earum perspiciatis! Vero, enim officia odit ipsum obcaecati omnis dolorem ut repellendus eos temporibus!</h2>
         <h2 className='px-10 text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex accusamus nam fugit, impedit dolorem veniam omnis labore provident? Odit distinctio omnis incidunt, quas ducimus fugiat repellendus. Asperiores corporis reprehenderit deleniti. Fuga debitis expedita nisi, omnis id doloremque. Est, aut omnis!</h2>
          
         <div className='m-6 mx-10'>
         <button className='btn btn-warning border-2 border-solid  border-white rounded-md p-2 px-8'><Link to='/home'>Learn More</Link></button>
         </div>
      </div>
      <div className='max-md:hidden'>
      <img src={banner1} alt="" width="100%" height='auto' id='banner1' />
        
      </div>
     </div>
    <div className='flex-col justify-center items-center space-y-8 relative'>
     <img src={map} className='w-full h-[500px] max-md:h-[250px]' id='map'></img>
     <div className='flex-col justify-center items-center bg-stone-50 inline w-[100%] text-center '>
        <h2 className='text-2xl text-warning font-bold'>Explore Museum with Us</h2>
        <p className='text-xl '>Explore Best Museum in the world with us</p>
        <div>
          <label className='font-bold'>Select Your Location:</label>
        <select>
          <option value="option1">Bengaluru</option>
          <option value="option1">Mumbai</option>
          <option value="option1">New Delhi</option>
          <option value="option1">Hydrabad</option>
          <option value="option1">Lukhnow</option>
          <option value="option1">Pune</option>

       </select>
        </div>
        
        <div>
        <button className='btn btn-warning border-2 border-solid  border-white rounded-md p-2 px-8'><Link to='/home'>Locate</Link></button>
        </div>

        
      </div>
     </div>
     
  </>
  )
}

export default Intro