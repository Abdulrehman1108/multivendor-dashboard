
import React from 'react';

const PlatformFeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'Real-Time Order Tracking',
      description: 'Know exactly where your food is.'
    },
    {
      title: 'Secure Payments',
      description: 'For Riders, Restaurants, and Customers.'
    },
    {
      title: '24/7 Support',
      description: 'Always here to assist you.'
    },
    {
      title: 'Customizable Menus',
      description: 'Restaurants can manage offerings effortlessly.'
    }
  ];

  return (
    <>
    <section className="w-full bg-black max-h-screen flex items-center py-[120px]">
      <div className="max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Heading */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Platform Features<br />
              That Make Us Stand<br />
              Out.
            </h2>
            <p className="text-gray-400 text-lg">
              We provide cutting-edge features to ensure your experience is smooth and hassle-free:
            </p>
          </div>

          {/* Right Column - Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#4CAF50"/>
                    <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white text-xl font-semibold">
                    {feature.title}:
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default PlatformFeaturesSection;