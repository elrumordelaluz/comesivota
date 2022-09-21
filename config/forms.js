import * as Yup from 'yup'

export const formikConfig = {
  // validateOnBlur: true,
  // validateOnChange: false,
}

const validationFields = {
  email: Yup.string()
    .email('Invalid email')
    .required('Email address is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'At least 6 digits'),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
  // ),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Password Confirmation is required'),
}

export const VALIDATION = {}

export const INITIAL_VALUES = {}
