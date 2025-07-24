import * as Yup from 'yup';
const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$");

// Validation schema
export const validationSchema = Yup.object({
  firstName: Yup.string().required('Please enter your firstname'),
  lastName: Yup.string().required('Please enter your lastname'),
  email: Yup.string().email('Invalid email').required('Please enter youe email'),
  password: Yup.string().matches(passwordRegex, "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character. ").required("Please enter your password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Enter your confrmation passwork')
});

