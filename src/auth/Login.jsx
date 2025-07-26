import { useState } from 'react';
import { FiBookOpen, FiEye, FiEyeOff } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { validationSchema } from '../Validation/validationSchema';

const SignInField = [
    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'Enter your email' },
    { label: 'Password', name: 'password', type: 'password', placeholder: 'Enter your password' }
];

const initialValues = {
    email: '',
    password: '',
    rememberMe: false
};

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (values, actions) => {
        console.log('Sign In Submitted:', values);
        actions.setSubmitting(false);
        actions.resetForm();
        navigate('/');
    };

    return (
        <div className='min-h-screen flex flex-col items-center m-5 justify-center px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50'>
            <div className="flex items-center gap-2 mb-4">
                <FiBookOpen className='w-10 h-10 text-blue-700' />
                <span className="font-bold text-2xl text-gray-800">BlogHub</span>
            </div>

            <div className='w-full max-w-md bg-white border border-gray-200 rounded-xl p-6 shadow-md'>
                <div className="mb-4 text-center">
                    <p className='text-xl font-semibold text-gray-800 mb-1'>Welcome Back</p>
                    <p className='text-gray-600 text-sm'>Log in to continue sharing your stories.</p>
                </div>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                    <Form className='flex flex-col gap-3'>
                                              {SignInField.map((field) => (
                            <div key={field.name} className="flex flex-col relative">
                                <label htmlFor={field.name} className="text-sm font-medium mb-1 text-gray-700">
                                    {field.label}
                                </label>

                                {field.name === 'password' ? (
                                    <>
                                        <Field
                                            id={field.name}
                                            name={field.name}
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder={field.placeholder}
                                            className="border border-gray-300 rounded-lg px-3 py-2 pr-10 text-sm bg-gray-50 placeholder:text-gray-400 
                        focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-300 transition"
                                        />
                                        <div
                                            className="absolute right-3 top-[38px] text-gray-500 cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
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

