import React from 'react';
import { FiBookOpen } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from '../Validation/validationSchema';

const SignupField = [
  { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'Enter your first name' },
  { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'Enter your last name' },
  { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email' },
  { label: 'Password', name: 'password', type: 'password', placeholder: 'Create a password' },
  { label: 'Confirm Password', name: 'confirmPassword', type: 'password', placeholder: 'Re-enter your password' }
];

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const handleSubmit = (values, actions) => {
    console.log('Form submitted:', values);
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <div className='min-h-screen flex flex-col items-center m-5 justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50'>
      
      {/* Logo */}
      <div className="flex items-center gap-2 mb-4">
        <FiBookOpen className='w-10 h-10 text-blue-700' />
        <span className="font-bold text-2xl text-gray-800">BlogHub</span>
      </div>

      {/* Form Box */}
      <div className='w-full max-w-md bg-white border border-gray-200 rounded-xl p-6 shadow-md'>

        {/* Header */}
        <div className="mb-4 text-center">
          <p className='text-xl font-semibold text-gray-800 mb-1'>Welcome to BlogHub</p>
          <p className='text-gray-600 text-sm'>Create an account to share your stories.</p>
        </div>

        {/* Formik Form */}
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className='flex flex-col gap-3'>
            {SignupField.map((field) => (
              <div key={field.name} className="flex flex-col">
                <label htmlFor={field.name} className="text-sm font-medium mb-1 text-gray-700">
                  {field.label}
                </label>
                <Field
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50 placeholder:text-gray-400 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                             hover:border-blue-300 transition"
                />
                <ErrorMessage name={field.name} component="div" className="text-red-500 text-xs mt-1 min-h-[1rem]" />
              </div>
            ))}

            {/* Buttons */}
            <div className='flex flex-col sm:flex-row gap-2 pt-2'>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-sm 
                           transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign Up
              </button>
              <button
                type="button"
                className="w-full border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white 
                           font-medium py-2 rounded-lg text-sm transition-all duration-200 focus:outline-none 
                           focus:ring-2 focus:ring-gray-300"
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>

        {/* Additional Links */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?
            <span className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium ml-1">
              Sign In
            </span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500">
          By signing up, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default SignUp;
