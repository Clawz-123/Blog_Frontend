import { useState } from 'react';
import { FiBookOpen, FiEye, FiEyeOff } from "react-icons/fi";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import { signInSchema } from '../Validation/validationSchema';

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

                <Formik initialValues={initialValues} validationSchema={signInSchema} onSubmit={handleSubmit}>
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
                                Sign In
                            </button>
                            <button
                                onClick={() => navigate('/')}
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
                {/* Sign Up Link */}
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600">
                        Don’t have an account?
                        <span
                            onClick={() => navigate('/signup')}
                            className="text-blue-600 hover:text-blue-800 cursor-pointer font-medium ml-1"
                        >
                            Sign Up
                        </span>
                    </p>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                    By signing in, you agree to our Terms of Service and Privacy Policy
                </p>
            </div>
        </div>
    );
};

export default SignIn;

