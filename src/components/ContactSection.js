import React, { useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
    } else if (!validateEmail(email)) {
      setError('Please enter a valid email address');
    } else {
       console.log('Subscribed with email:', email);
      setEmail('');
      setError('');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDF3F1] flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto p-6">
        <div className="text-center mb-6">
          <h2 className="text-sm text-[#b3db97] tracking-wide font-semibold mb-2">Newsletter</h2>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Watch our Courses</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col sm:flex-row gap-2 mt-12">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(''); 
              }}
              className={`flex-grow px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#b3db97] ${
                error ? 'border-red-500' : 'border-gray-300'
              }`}
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#b3db97] text-white font-semibold rounded-md hover:bg-[#96BB7C] transition duration-300 ease-in-out"
            >
              Subscribe
            </button>
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;
