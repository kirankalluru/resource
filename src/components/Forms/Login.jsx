import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-blue-100 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl text-gray-800 font-bold text-center mb-4">Login</h2>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email"
          id="email" 
          className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
          placeholder="Enter your email"
        />
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <input 
          type="password" 
          id="password" 
          className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
          placeholder="Enter your email"
        />
        <button 
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-gray-600 transition duration-200">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
