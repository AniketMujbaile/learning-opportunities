import React from 'react';
import studentImage from '../images/student.png'; 

const Home = () => {
  return (
    <div className="bg-[#FDF3F1] min-h-screen flex items-center mt-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        {/* Left side content */}
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0 md:ml-20">
          <p className="text-[396BA7B] font-semibold mb-2">Welcome</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Best Learning Opportunities
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Our goal is to make online education work for everyone
          </p>
          <div className="flex space-x-4">
            <button className="bg-[#96BB7C] text-white px-6 py-2 rounded-md hover:bg-[#b3db97] transition duration-300">
              Join Us
            </button>
            <button className="border border-[#96BB7C] text-[#96BB7C] px-6 py-2 rounded-md hover:bg-[#b3db97] transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Right side image */}
        <div className="md:w-1/2 relative">
          <img 
            src={studentImage} 
            alt="Student with books" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Home; 

 