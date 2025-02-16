/* eslint-disable react/no-unescaped-entities */

import Image from 'next/image';
import React from 'react';
import PlatformSection from "../../assets/images/PlatformSection.png"
import { Check } from 'lucide-react';

const WhyJoinSection: React.FC = () => {
  return (
    <>
    <section className="w-full bg-[#F8FAFC] py-16">
    <div className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
      {/* Left Content */}
      <div className="space-y-6">
        <h1 className="text-[64px] font-normal text-black leading-[1.2] mb-6">
          Why Join Our Platform?
        </h1>
        
        <p className="text-[20px] text-[#666] leading-[1.5] mb-8">
          We're not just a food delivery platform – we're a community built to benefit everyone. Here's why thousands of Riders, Restaurants, and Customers trust us:
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <Check className="w-6 h-6 text-[#4CAF50] mt-1 flex-shrink-0" />
            <div>
              <span className="text-black font-medium text-[20px]">For Riders: </span>
              <span className="text-[#666] text-[20px]">
                Earn on your schedule, get quick payouts, and enjoy easy-to-use tools for managing deliveries.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="w-6 h-6 text-[#4CAF50] mt-1 flex-shrink-0" />
            <div>
              <span className="text-black font-medium text-[20px]">For Restaurants: </span>
              <span className="text-[#666] text-[20px]">
                Boost your reach, streamline order management, and grow your revenue with real-time analytics.
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Check className="w-6 h-6 text-[#4CAF50] mt-1 flex-shrink-0" />
            <div>
              <span className="text-black font-medium text-[20px]">For Customers: </span>
              <span className="text-[#666] text-[20px]">
                Enjoy a wide range of restaurants, fast delivery, and a user-friendly app and website.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className=" rounded-lg p-4">
      <Image
              src={PlatformSection}
              alt="Why Join"
              />
      </div>
    </div>
  </section>
  </>
);
};

export default WhyJoinSection;