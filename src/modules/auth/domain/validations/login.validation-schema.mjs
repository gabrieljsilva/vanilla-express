import yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
