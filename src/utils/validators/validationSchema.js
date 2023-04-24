import * as yup from "yup"
export const SIGN_UP_SCHEMA = yup.object({
    email: yup.string().email().required(),
    firstName: yup.string().min(1).max(128).required(),
    lastName: yup.string().min(1).max(128).required(),
    password: yup.string().min(8).required(),
  });