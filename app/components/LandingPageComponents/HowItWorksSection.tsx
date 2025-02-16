
import Image from 'next/image';
import React from 'react';
import { Check } from 'lucide-react';
import RestuarantIcon from "../../assets/icons/RestuarantIcon.svg"
import RiderIcon from "../../assets/icons/RiderIcon.svg"
import CustomerIcon from "../../assets/icons/CustomerIcon.svg"

const HowItWorksSection: React.FC = () => {
  const sections = [
    {
      title: "For Restaurants:",
      icon: RestuarantIcon,
      steps: [
        {
          key: "Register –",
          description: "List your restaurant easily."
        },
        {
          key: "Receive Orders –",
          description: "Manage them with our user-friendly dashboard."
        },
        {
          key: "Grow –",
          description: "Attract more customers and boost sales."
        }
      ]
    },
    {
      title: "For Riders:",
      icon: RiderIcon,
      steps: [
        {
          key: "Sign Up –",
          description: "Create a profile in minutes."
        },
        {
          key: "Accept Orders –",
          description: "Deliver food at your convenience."
        },
        {
          key: "Earn Money –",
          description: "Get paid weekly or instantly."
        }
      ]
    },
    {
      title: "For Customers:",
      icon: CustomerIcon,
      steps: [
        {
          key: "Browse Menus –",
          description: "Find your favorite food nearby."
        },
        {
          key: "Place an Order –",
          description: "Enjoy fast delivery."
        },
        {
          key: "Relax –",
          description: "Let us handle the rest!"
        }
      ]
    }
  ];

  return (
    <>
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-[48px] font-normal text-center mb-12">
          How It Works for Everyone
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div key={index} className="bg-white py-14 p-8 rounded-lg border border-gray-100 shadow-sm">
              {/* Icon and Title */}
              <div className="flex flex-col items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#F1F9F1] flex items-center justify-center">
                  <Image 
                    src={section.icon}
                    alt={section.title}
                    width={280}
                    height={280}
                   
                  />
                </div>
                <h2 className="text-[24px] font-medium text-black">
                  {section.title}
                </h2>
              </div>

              {/* Steps */}
              <div className="space-y-4">
                {section.steps.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#4CAF50] mt-1 flex-shrink-0 bg-[#F1F9F1] rounded-lg " />
                    <p className="text-[16px] leading-relaxed">
                      <span className="font-medium text-black">{step.key}</span>
                      <span className="text-[#666]">{step.description}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default HowItWorksSection;