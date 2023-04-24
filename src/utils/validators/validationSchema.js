import * as yup from "yup";

const EMAIL_SCHEMA = yup.string().email().required()

export const SIGN_UP_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
  firstName: yup.string().min(1).max(128).required(),
  lastName: yup.string().min(1).max(128).required('You must enter last name'),
  password: yup.string().matches(/[A-Za-z]{8,}/, 'Password must be a 8 symbol or more letters only').required(),
});

export const LOGIN_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
  password: yup.string().min(8).required(),
});
