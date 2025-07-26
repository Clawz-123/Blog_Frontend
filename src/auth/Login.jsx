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
