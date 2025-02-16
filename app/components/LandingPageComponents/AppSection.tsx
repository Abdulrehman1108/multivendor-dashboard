
import React from 'react';
import Image from 'next/image';
import RiderSection from "../../assets/images/RiderSection.png";
import RestuarantSection from "../../assets/images/RestuarantSection.png";
import OrderSection from "../../assets/images/OrderSection.png";
import { Check } from 'lucide-react';



const AppSection: React.FC = () => {
  const sections = [
    {
      title: "Become a Rider and Start Earning Today!",
      features: [
        { text: "Earn More:", description: "Deliver when you want and earn great payouts" },
        { text: "Flexible Hours:", description: "Work according to your schedule" },
        { text: "Instant Payments:", description: "Get paid weekly or instantly" }
      ],
      buttonLabel: "Sign Up to Start Delivering",
      buttonStyle: "bg-[#FF9900] hover:bg-[#ff8800]",
      image: RiderSection,
      imageAlt: "Rider App Interface",
      imageFirst: true
    },
    {
      title: "Grow Your Restaurant with Our Platform",
      features: [
        { text: "Reach More Customers:", description: "Get discovered by local food lovers" },
        { text: "Easy Order Management:", description: "SimpleOrderText" },
        { text: "Increase Revenue:", description: "Attract more orders and grow your business" }
      ],
      buttonLabel: "Register Your Restaurant",
      buttonStyle: "bg-[#5AC12F] hover:bg-[#1EA750]",
      image: RestuarantSection,
      imageAlt: "Restaurant Dashboard",
      imageFirst: false
    },
    {
      title: "Order Food Anytime, Anywhere!",
      features: [
        { text: "Explore Menus:", description: "Explore Menus" },
        { text: "Track Orders:", description: "See where your food is in real time" },
        { text: "Multiple Platforms:", description: "Order via mobile app or web app" }
      ],
      buttonLabels: ["Order Online Now", "Download Our App"],
      buttonStyle: "bg-[#5AC12F] hover:bg-[#1EA750]",
      image: OrderSection,
      imageAlt: "Food Order Interface",
      imageFirst: true
    }
  ];

  return (
    <>
    <div className="w-full bg-white">
      {sections.map((section, index) => (
        <section key={index} className="py-20 ">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              
              {/* Image Column */}
              <div className={`lg:w-1/2 ${!section.imageFirst ? 'lg:order-last' : ''}`}>
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  className="w-full h-auto"
                />
              </div>

              {/* Content Column */}
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">
                  {section.title}
                </h2>
                
                <div className="space-y-6 mb-8">
                  {section.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                        <Check className="w-5 h-5 m-2 text-[#4CAF50] mt-1 flex-shrink-0 bg-[#F1F9F1] rounded-lg " />
                      <p className="text-gray-700">
                        <span className="font-semibold">{feature.text}</span>
                        {" "}
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  {section.buttonLabels ? (
                    section.buttonLabels.map((label, idx) => (
                      <button
                        key={idx}
                        className={`px-6 py-3 rounded-md text-white font-medium ${section.buttonStyle}`}
                      >
                        {label}
                      </button>
                    ))
                  ) : (
                    <button
                      className={`px-6 py-3 rounded-md text-white font-medium ${section.buttonStyle}`}
                    >
                      {section.buttonLabel}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
    </>
  );
};

export default AppSection;