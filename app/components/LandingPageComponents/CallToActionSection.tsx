
import React from 'react';
import Image from 'next/image';
import AppStoreBadge from '../../assets/images/appStore.svg';
import GooglePlayBadge from '../../assets/images/playstore.svg';
import PhonesMockup from '../../assets/images/DoubleMobile.png';

const CallToActionSection: React.FC = () => {
  return (
    <>
    <section className="w-full bg-[#5AC12F]  py-8 pb-0  relative">
      {/* Phones Image - Positioned to overlap */}
      <div className="absolute right-10 -top-[20%] lg:w-[45%] h-[120%] hidden lg:block">
        <Image
          src={PhonesMockup}
          alt="App Screenshots"
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content Column */}
          <div className="lg:w-1/2 z-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Order Your Favorites Anytime, Anywhere
            </h2>
            
            <div className=" ">
              <p className="text-white text-lg font-semibold ">
                Experience the convenience of having all your favorite restaurant 
                meals and cuisines in one place, delivered straight to your door—
                fast and fresh. Download the Enatega App today, and turn every 
                craving into a delicious reality.
              </p>
              
              <p className="text-white text-lg font-semibold">
                Explore a wide range of options, from local favorites and comfort 
                food to gourmet dishes, healthy eats, and more.
              </p>
              
              <p className="text-white text-lg font-semibold">
                Download the Enatega App today, and turn every craving into a 
                delicious reality.
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex items-center flex-wrap gap-4">
              <a href="#" className="w-[160px] h-[155px] relative">
                <Image
                  src={GooglePlayBadge}
                  alt="Get it on Google Play"
                  fill
                  className="object-contain"
                />
              </a>
              
              <a href="#" className="w-[160px] h-[155px] relative ">
                <Image
                  src={AppStoreBadge}
                  alt="Download on the App Store"
                  fill
                  className="object-contain"
                />
              </a>
            </div>
          </div>

          {/* Mobile-only Image */}
          <div className="lg:hidden mt-12 w-full">
            <div className="relative w-full h-[400px]">
              <Image
                src={PhonesMockup}
                alt="App Screenshots"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default CallToActionSection;