import React from 'react'
import { Link, Links } from 'react-router-dom'
import banner1 from '../assets/map.png'
import map from '../assets/maplog.png'
import List from '../img.json'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Footer from '../components/Footer'
const Intro = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
  <>
   <div className="navbar flex justify-between bg-blue-800 text-white">
      <div className='flex px-6 py-4'>
        <h1 className='text-2xl font-bold'>Our Logo</h1>
       </div>
      <div className='flex gap-10 px-6 pt-4 text-2xl font-semibold mr-10 max-sm:hidden'>
        <Link to='/'>Home</Link>
        <Link to="/home">Learn More</Link>
        <button className='btn btn-warning text-white font-bold'> <Link to="/register">Register</Link></button>
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
     <div className='flex-col justify-center items-center  inline w-[100%] text-center absolute top-10 '>
        <h2 className='text-2xl text-warning font-bold'>Explore Museum with Us</h2>
        <p className='text-xl text-white'>Explore Best Museum in the world with us</p>
        <div>
          <label className='font-bold text-white'>Select Your Location:</label>
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
        <button className='btn btn-warning border-2 border-solid  border-white rounded-md p-2 px-8 my-9'><Link to='/home'>Locate</Link></button>
        </div>

        
      </div>
     </div>
     <div className='flex-col'>
      <h2 className='text-2xl font-bold text-center bg-slate-200 py-10 space-y-8'>There are over more than 1000+ Meusum Located in the India<br/><span className='text-xl font-semibold'>"Meusum are the best place to recall our past and to learn about our history real museums are places where time is transformed into space"</span><br/><h2 className='text-red-700'>We have visisted more than 500+ best mesume of  the India.Join us to explore the best museum in the world</h2>
      <button className='btn btn-warning'>Join Us</button><br></br>
      <span className='text-2xl font-bold font-serif'>Best meusum to Visit in India</span>
      </h2>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
         {
      List.map((item,index)=><div className='relative' key={index}>
        <SwiperSlide><img src={item.url} className='max-md:h-[200px]' id='mapimg'></img><h2 className='text-3xl text-yellow-500 font-bold absolute top-10 left-0 right-0'>{item.title}<br/><span className='text-xl font-semibold text-white'>
          {item.description}</span></h2></SwiperSlide>
        
      </div>
      )
    }
    </Swiper>

     </div>
     <Footer/>
  </>
  )
}

export default Intro