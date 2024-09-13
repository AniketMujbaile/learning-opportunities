import React from 'react';
import { Monitor, Telescope } from 'lucide-react';

const ApprodablePackages = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          {/* Left side: Approdable Packages */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="w-16 h-1 bg-red-500 mb-6"></div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Approdable Packages</h2>
            <p className="text-gray-600 max-w-lg">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
            <a href="#" className="inline-flex items-center text-[#b3db97] mt-4 hover:underline group">
              Learn More
              <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-2">
                <svg className="w-4 h-4" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          </div>
          
          {/* Right side: Feature Cards */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Monitor className="w-8 h-8 text-white" />}
              title="Certified Teacher"
              description="The gradual accumulation of information about"
            />
            <FeatureCard 
              icon={<Telescope className="w-8 h-8 text-white" />}
              title="Expert instruction"
              description="The gradual accumulation of information about"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-left">
      <div className="bg-[#b3db97] w-16 h-16 rounded-full flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="w-12 h-1 bg-red-500 mb-4"></div>
      <p className="text-gray-600 mb-8">{description}</p>
    </div>
  );
};

export default ApprodablePackages;

 

 