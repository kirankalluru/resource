import React from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input 
          type="text" 
          id="name" 
          className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
          placeholder="Enter your name"
        />

        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-4">Email</label>
        <input 
          type="email" 
          id="email" 
          className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
          placeholder="Enter your email"
        />

        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mt-4">Password</label>
        <input 
          type="password" 
          id="password" 
          className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
          placeholder="Enter your password"
        />

        <button 
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
