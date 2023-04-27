import * as yup from "yup";

const EMAIL_SCHEMA = yup.string().email().required();

export const SIGN_UP_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
  name: yup.string().min(1).max(128).required(),
  password: yup
    .string()
    .matches(/[A-Za-z]{8,}/, "Password must be a 8 symbol or more letters only")
    .required(),
  gender: yup.string().required(),
  isSub: yup.bool(),
  accountLevel: yup.string().required(),
});

export const PRODUCT_SCHEMA = yup.object({
  name: yup.string().required(),
  desciption:yup.string(),
  price:yup.number().required().integer()
})

export const LOGIN_SCHEMA = yup.object({
  email: EMAIL_SCHEMA,
  password: yup.string().min(8).required(),
});


PRODUCT_SCHEMA.validate({
  
})