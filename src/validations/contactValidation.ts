import * as yup from 'yup'

export const contactFormSchema = yup.object().shape({
  name: yup.string().required('Nombre es un campo requerido'),
  email: yup
    .string()
    .email('El formato es incorrecto')
    .required('Email es un campo requerido'),
  phone: yup.string().required('Telefono es un campo requerido'),
  company: yup.string().optional(),
  message: yup.string().optional(),
  budget: yup.string().optional(),
})
