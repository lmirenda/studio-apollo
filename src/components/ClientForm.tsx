'use client'
import { FormEvent, useState } from 'react'
import { ClientContactForm, sendEmail } from '@/lib/sendEmail'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'
import { TextInput } from '@/components/TextInput'
import RadioInput from '@/components/RadioInput'

export default function ContactForm() {
  const [formData, setFormData] = useState<ClientContactForm>({})
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault() // Prevent default form submission behavior
    for (let attribute in formData) {
      if (!attribute) {
        return
      }
    }

    try {
      await sendEmail(formData) // Call sendEmail function with form data
      console.log('Email sent successfully')
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    console.log(formData)
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Presupuestos y Consultas
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Nombre"
            name="name"
            autoComplete="name"
            value={formData?.name}
            onChange={handleChange}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextInput
            label="Empresa"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
          />
          <TextInput
            label="Telefono"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
          />
          <TextInput
            label="Mensaje"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">
                Presupuesto (1k = 1000USD)
              </legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="Menos de 1K"
                  name="budget"
                  value="<1000"
                  onChange={handleChange}
                />
                <RadioInput
                  label="Entre $1K y $5K"
                  name="budget"
                  value="1000 a 5000"
                  onChange={handleChange}
                />
                <RadioInput
                  label="Entre $5K y $10K"
                  name="budget"
                  value="5000 a 10000"
                  onChange={handleChange}
                />
                <RadioInput
                  label="Mas de $10K"
                  name="budget"
                  value=">10000"
                  onChange={handleChange}
                />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Consultar
        </Button>
      </form>
    </FadeIn>
  )
}
