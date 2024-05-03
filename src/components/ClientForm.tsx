'use client'
import React, { FormEvent, useState } from 'react'
import { ClientContactForm, sendEmail } from '@/lib/sendEmail'
import { FadeIn } from '@/components/FadeIn'
import { Button } from '@/components/Button'
import { TextInput } from '@/components/TextInput'
import RadioInput from '@/components/RadioInput'
import { contactFormSchema } from '@/validations/contactValidation'
import { FieldValues, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
  })
  const [formData, setFormData] = useState<ClientContactForm>({})
  const [submitted, setSubmitted] = useState<boolean>(false)

  const onSubmit = async (data: FieldValues) => {
    try {
      await sendEmail(data)

      setSubmitted(true)
      console.log('Email sent successfully')
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    console.log({ name, value })
    setFormData({ ...formData, [name]: value })
    console.log(formData)
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            register={register}
            error={errors?.name}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            register={register}
            error={errors?.email}
          />
          <TextInput
            label="Empresa"
            name="company"
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            register={register}
            error={errors?.company}
          />
          <TextInput
            label="Telefono"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            register={register}
            error={errors?.phone}
          />
          <TextInput
            label="Mensaje"
            name="message"
            value={formData.message}
            onChange={handleChange}
            register={register}
            error={errors?.message}
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset {...register('budget')}>
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

        {isSubmitting ? (
          <div role="status" className={'mt-10'}>
            <svg
              aria-hidden="true"
              className="h-8 w-8 animate-spin fill-white text-gray-200 dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        ) : submitted ? (
          <span className="disabled mt-10 inline-flex rounded-full bg-green-400 px-4 py-1.5 text-sm font-semibold text-white transition">
            Enviado!
          </span>
        ) : (
          <Button
            type="submit"
            className="mt-10"
            disabled={isSubmitting || submitted}
          >
            Enviar
          </Button>
        )}
      </form>
    </FadeIn>
  )
}
