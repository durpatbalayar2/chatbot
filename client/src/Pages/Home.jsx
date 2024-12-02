import React from 'react'
import List from '../img.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner from '../assets/banner2.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import '../index.css';
import Footer from '../components/Footer';


const Home = () => {
  console.log(List);
  return (
    <div className='bg-white h-screen'>
      <div className='flex justify-around py-10 bg-sky-200 max-md:flex-col justify-center'>
        <h1 className='text-3xl font-bold py-40 text-black max-md:text-center p-4'>
         Welcome to<span className='text-amber-400'>E-museum website</span><br></br>
        Explore world Best museum with Us.
        </h1>
        <div className='flex justify-center'>
          <img src={banner} alt='banner image' className='w-[650px] h-[450px] max-md:hidden'>
          </img>
        </div>
      </div>
         <h2 className='text-3xl font-semibold bg-sky-200 text-center text-amber-500 '>Best Museum In the World</h2>
      <div className='flex justify-center py-10 px-8 bg-sky-200'>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {
          List.map((item,index)=> 
         <SwiperSlide>
          <div key={index}>
            <img src={item.url} alt={item}/>
          </div>
         </SwiperSlide>
          )}
      </Swiper>
  </div>
  <div className='flex-col justify-center items-center py-10 bg-slate-50'>
         <h2 className='text-2xl text-amber-500 font-bold text-center'>
         Lets explore Together the adventure of the world Wide Museum
         <p className='text-xl font-semibold text-black'>Discover the cultural heritage and museums of India!</p>
         </h2>
         <div className='flex justify-center py-10'>
            <label className='px-10 py-1'>choose your Current Location to Locate an Museum near you</label>
            <select className='bg-white rounded-md text-black py-2 border-2 border-solid border-slate-400'>
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="chennai">Chennai</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="kolkata">Kolkata</option>
            </select><br></br>

         </div>
         <div className='flex justify-center items-center'>
         <button className="btn btn-warning px-8">Locate</button>
           
         </div>
     
      </div>
    <div>
    lorem ipsum dolor sit amet, consectetur adip
    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     </div>
     <Footer/>
    </div>
  )
}

export default Home
