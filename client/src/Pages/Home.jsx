import React from "react";
import List from "../img.json";

import banner from "../assets/banner2.png";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

// Import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

import "../index.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Chatbot from "./Chatbot";

const Home = () => {
  console.log(List);

  return (
    <div>
      <Navbar />
      <div className="bg-white h-screen">
        {/* Banner Section */}
        <div
          className="flex justify-around py-10 bg-sky-200 max-md:flex-col"
          id="forbanner"
        >
          <h1 className="text-3xl font-bold py-40 text-black max-md:text-center p-4">
            Welcome to <span className="text-amber-400">E-museum website</span>
            <br />
            Explore world Best museum with Us.
          </h1>
          <div className="flex justify-center">
            <img
              src={banner}
              alt="banner image"
              className="w-[650px] h-[450px] max-md:hidden"
            />
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-4xl font-semibold text-[orange] text-center mt-8 py-4">
          Best Museum In the World
        </h2>

        {/* Swiper Section */}
        <div className=" bg-sky-200">
          <Swiper
            autoplay={{
              delay: 3000, // Time between slides (in ms)
              disableOnInteraction: false, // Keep autoplay running after user interaction
            }}
            // Add Autoplay module
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-pagination-color": "#000",
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Navigation, Autoplay]}
            className="mySwiper"
          >
            {/* Background Image for Parallax */}

            {/* Swiper Slides */}
            {List.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.url}></img>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Museum Locator Section */}
        <div className="flex-col justify-center items-center py-10 bg-slate-50">
          <h2 className="text-2xl text-amber-500 font-bold text-center">
            Lets explore Together the adventure of the world Wide Museum
            <p className="text-xl font-semibold text-black">
              Discover the cultural heritage and museums of India!
            </p>
          </h2>
          <div className="flex justify-center pt-10">
            <label className="px-10 py-1">
              Choose your current location to locate a museum near you
            </label>
            <select className="bg-white rounded-md text-black border-2 border-solid border-slate-400">
              <option value="delhi">Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="chennai">Chennai</option>
              <option value="bangalore">Bangalore</option>
              <option value="hyderabad">Hyderabad</option>
              <option value="kolkata">Kolkata</option>
            </select>
          </div>
          <div className="flex justify-center items-center pt-4">
            <button className="btn btn-warning px-8">Locate</button>
          </div>
        </div>

        {/* Footer Section */}
        <div>
          An Indian museum serves as a window into the nation's vibrant and
          multifaceted history, culture, and traditions. Whether it's the
          magnificent sculptures of ancient temples, the intricate designs of
          Mughal paintings, or the relics from the Indus Valley Civilization,
          these institutions curate artifacts that narrate timeless stories. For
          instance, the National Museum in New Delhi houses collections ranging
          from prehistoric tools to modern art. The Indian Museum in Kolkata,
          one of the oldest in the country, features diverse exhibits such as
          fossils, mummies, and Mughal-era ornaments. Museums in India are not
          just repositories of the past but also hubs of learning and
          inspiration for curious minds.
        </div>
        <Chatbot />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
