import React from 'react'
import Navbar from '../components/Navbar'
import pic3 from '../assets/pic3.jpg'
import { Link } from 'react-router-dom'
import star from '../assets/star-s.png'
import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


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
            <Link to='/register'>Join Us</Link></button>
          </h2>
      </div>
      {/*  Second banner of the websites */}
      <div>
        <h2 className='text-4xl font-bold text-center'>About of Our Websites</h2>
      </div>
      <div>
        <h2 className='text-center text-2xl font-bold '>Our Client Reviews</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='flex-col p-10 px-10'>
            <h2 className='text-2xl font-bold'>Logan Paul</h2>
            <p>He is a American YouTuber and a professional boxer.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sit in quas facere nobis expedita, iure ad doloremque nostrum qui ex necessitatibus architecto harum nam iusto beatae repellat omnis voluptate.</p>
              <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>

              </div>
             
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex-col p-10 px-10'>
            <h2 className='text-2xl font-bold'>Logan Paul</h2>
            <p>He is a American YouTuber and a professional boxer .
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sit in quas facere nobis expedita, iure ad doloremque nostrum qui ex necessitatibus architecto harum nam iusto beatae repellat omnis voluptate.</p>
              <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>

              </div>
              
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex-col p-10 px-10'>
            <h2 className='text-2xl font-bold'>Logan Paul</h2>
            <p>He is a American YouTuber and a professional boxer.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sit in quas facere nobis expedita, iure ad doloremque nostrum qui ex necessitatibus architecto harum nam iusto beatae repellat omnis voluptate.</p>
              <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>

              </div>
              
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex-col p-10 px-10'>
            <h2 className='text-2xl font-bold'>Logan Paul</h2>
            <p>He is a American YouTuber and a professional boxer.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sit in quas facere nobis expedita, iure ad doloremque nostrum qui ex necessitatibus architecto harum nam iusto beatae repellat omnis voluptate.</p>
              <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>

              </div>
              
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex-col p-10 px-10'>
            <h2 className='text-2xl font-bold'>Logan Paul</h2>
            <p>He is a American YouTuber and a professional boxer.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sit in quas facere nobis expedita, iure ad doloremque nostrum qui ex necessitatibus architecto harum nam iusto beatae repellat omnis voluptate.</p>
              <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>

              </div>
              
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex-col p-10 px-10'>
            <h2 className='text-2xl font-bold'>Logan Paul</h2>
            <p>He is a American YouTuber and a professional boxer.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sit in quas facere nobis expedita, iure ad doloremque nostrum qui ex necessitatibus architecto harum nam iusto beatae repellat omnis voluptate.</p>
              <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>

              </div>
              
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='flex-col p-10 px-10'>
            <h2 className='text-2xl font-bold'>Logan Paul</h2>
            <p>He is a American YouTuber and a professional boxer.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sit in quas facere nobis expedita, iure ad doloremque nostrum qui ex necessitatibus architecto harum nam iusto beatae repellat omnis voluptate.</p>
              <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>

              </div>
              
          </div></SwiperSlide>
        <SwiperSlide>
        <div className='flex-col p-10 px-10'> 
            <h2 className='text-2xl font-bold'>Logan Paul</h2>
            <p>He is a American YouTuber and a professional boxer.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sit in quas facere nobis expedita, iure ad doloremque nostrum qui ex necessitatibus architecto harum nam iusto beatae repellat omnis voluptate.</p>
              <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>

              </div>
             
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex-col p-10 px-10'>
            <h2 className='text-2xl font-bold'>Logan Paul</h2>
            <p>He is a American YouTuber and a professional boxer.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sit in quas facere nobis expedita, iure ad doloremque nostrum qui ex necessitatibus architecto harum nam iusto beatae repellat omnis voluptate.</p>
              <div className='flex justify-center items-center gap-2' id='star'>
              <img src={star} ></img>
              <img src={star} ></img>
             <img src={star} ></img>
             <img src={star} ></img>

              </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default About
