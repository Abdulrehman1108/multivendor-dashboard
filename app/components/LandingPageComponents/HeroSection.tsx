/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import { Button } from 'primereact/button';


const HeroSection: React.FC = () => {
  return (
    <>
    <section className="w-full py-20 px-4 bg-white">
    <div className="max-w-[1200px] mx-auto text-center">
      {/* Main Heading */}
      <h1 className="text-[40px] md:text-[48px] font-normal text-black mb-6 leading-[1.2]">
        Connecting Riders, Restaurants, and Customers
        <br />
        for Seamless Food Delivery
      </h1>

      {/* Subheading */}
      <p className="text-[20px] text-[#666] mb-10 max-w-[900px] mx-auto leading-[1.5]">
        Join the platform that delivers convenience, flexibility, and growth for everyone involved. Whether 
        you're a Rider looking to earn, a Restaurant aiming to expand, or a Customer craving delicious 
        meals, we've got you covered!
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Button 
          className="w-full md:w-auto px-6 py-3 text-sm font-medium bg-[#4CAF50] border-2 border-[#4CAF50] hover:bg-white transition-colors rounded-md"
        >
          REGISTER YOUR RESTAURANT
        </Button>
        
        <Button 
          className="w-full md:w-auto px-6 py-3 text-sm font-medium bg-[#FF9800] border-2 border-[#FF9800] hover:bg-white transition-colors rounded-md"
        >
          SIGN UP FOR A RIDER
        </Button>
        
        <Button 
          className="w-full md:w-auto px-6 py-3 text-sm font-medium bg-[#2196F3] border-2 border-[#2196F3] hover:bg-white  transition-colors rounded-md"
        >
          ORDER FOOD NOW
        </Button>
      </div>
    </div>
  </section>
  </>
);
};

export default HeroSection;