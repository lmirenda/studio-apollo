'use server'
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: ClientContactForm) => {
  console.log('Running on server')

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'project.apollo.base@gmail.com',
    subject: 'Consulta desde formulario Web',
    text: `nombre: ${formData.name}, \n
     email: ${formData.email}, \n
     empresa: ${formData.company}, \n
     mensaje: ${formData.message}, \n
     telefono: ${formData.phone}, \n
     presupuesto: ${formData.budget}
    `,
  })
}

export interface ClientContactForm {
  name?: string
  email?: string
  company?: string
  message?: string
  phone?: string
  budget?: string
}
