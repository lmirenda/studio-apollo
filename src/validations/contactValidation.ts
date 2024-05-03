import * as yup from 'yup'

export const contactFormSchema = yup.object().shape({
  name: yup.string().required('Nombre es un campo requerido'),
  email: yup
    .string()
    .email('El formato es incorrecto')
    .required('Email es un campo requerido'),
  company: yup.string().required('Empresa es un campo requerido'),
  message: yup.string().required('Mensaje es un campo requerido'),
  phone: yup.string().required('Telefono es un campo requerido'),
  budget: yup.string().optional(),
})
