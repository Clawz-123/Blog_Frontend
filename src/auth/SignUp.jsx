import { useState } from 'react';
import { FiBookOpen } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { signUpSchema } from '../Validation/validationSchema';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

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
    rememberMe: false
};

const SignUp = () => {
    const handleSubmit = (values, actions) => {
        console.log('Form submitted:', values);
        actions.setSubmitting(false);
        actions.resetForm();
        navigate('/login')
    };


    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


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
                <Formik initialValues={initialValues} validationSchema={signUpSchema} onSubmit={handleSubmit}>
                    <Form className='flex flex-col gap-3'>
                        {SignupField.map((field) => (
                            <div key={field.name} className="flex flex-col relative">
                                <label htmlFor={field.name} className="text-sm font-medium mb-1 text-gray-700">
                                    {field.label}
                                </label>

                                {field.name === "password" || field.name === "confirmPassword" ? (
                                    <>
                                        <Field
                                            id={field.name}
                                            name={field.name}
                                            type={
                                                field.name === "password"
                                                    ? showPassword ? "text" : "password"
                                                    : showConfirmPassword ? "text" : "password"
                                            }
                                            placeholder={field.placeholder}
                                            className="border border-gray-300 rounded-lg px-3 py-2 pr-10 text-sm bg-gray-50 placeholder:text-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition"
                                        />
                                        <div
                                            className="absolute right-3 top-[38px] text-gray-500 cursor-pointer"
                                            onClick={() => {
                                                if (field.name === "password") {
                                                    setShowPassword(!showPassword);
                                                } else {
                                                    setShowConfirmPassword(!showConfirmPassword);
                                                }
                                            }}
                                        >
                                            {(field.name === "password" && showPassword) || (field.name === "confirmPassword" && showConfirmPassword) ? (
                                                <FiEyeOff />
                                            ) : (
                                                <FiEye />
                                            )}
                                        </div>
                                    </>
                                ) : (
                                    <Field
                                        id={field.name}
                                        name={field.name}
                                        type={field.type}
                                        placeholder={field.placeholder}
                                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-gray-50 placeholder:text-gray-400 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition"
                                    />
                                )}
                                <ErrorMessage name={field.name} component="div" className="text-red-500 text-xs mt-1 min-h-[1rem]" />
                            </div>
                        ))}
                        {/* Remember me checkbox */}
                        <div className="flex items-center gap-2 text-sm text-gray-700 mt-1">
                            <Field type="checkbox" name="rememberMe" id="rememberMe" className="w-4 h-4" />
                            <label htmlFor="rememberMe" className="cursor-pointer select-none">
                                Remember me
                            </label>
                        </div>

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
                                onClick={()=> navigate('/')}
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
                        <span 
                        onClick={()=> navigate('/login')}
                        className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium ml-1">
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
