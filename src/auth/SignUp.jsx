import React from 'react';
import { FiBookOpen } from 'react-icons/fi';

const SignupField = [
  { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name' },
  { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name' },
  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email' },
  { label: 'Password', name: 'password', type: 'password', placeholder: 'Create a password' },
  { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: 'Re-enter your password' }
];

const SignUp = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4 bg-gray-50'>
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <FiBookOpen className='text-5xl text-blue-700' />
        <span className="font-bold text-2xl">BlogHub</span>
      </div>

      {/* Form Box */}
      <div className='w-full max-w-md bg-white border border-gray-300 rounded-lg p-6 shadow-sm'>
        {/* Header */}
        <div className="mb-6 text-center">
          <p className='text-xl font-semibold'>Welcome to BlogHub</p>
          <p className='text-gray-500 text-sm mt-1'>Create an account to start sharing and discovering amazing stories.</p>
        </div>

        {/* Form */}
        <form className='flex flex-col gap-4'>
          {SignupField.map((field) => (
            <div key={field.name} className="flex flex-col">
              <label htmlFor={field.name} className="text-sm font-medium mb-1">
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          ))}

          {/* Buttons */}
          <div className='flex gap-3 pt-2'>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2 rounded-md transition"
            >
              Sign Up
            </button>

            <button
              type="button"
              className="w-full border border-gray-300 text-gray-700 hover:bg-blue-800 hover:text-white font-medium py-2 rounded-md transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
