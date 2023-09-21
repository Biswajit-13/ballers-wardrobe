import React from 'react';
import heroIcon from "../../public/heroIcon.png";
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className= "py-20 md:py-32">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center text-center">
          {/* Left Side: Image */}
          <div className="md:w-1/2 mb-6">
            <img src={heroIcon} alt="Jersey Icon" className="mx-auto w-full md:w-full" />
          </div>
      
          {/* Right Side: Text and Button */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-4xl font-bold mb-4 text-hd">Ballers Wardrobe</h1>
            <p className="text-lg md:text-xl mb-6 text-subhd">Championing Your Soccer Style, One Jersey at a Time</p>
            <a
              href="/#collections"
              className="bg-hd hover:bg-act text-white  px-6 py-2 rounded-md inline-block text-lg font-medium hover:underline"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
      
      
    );
}

export default Landing;
