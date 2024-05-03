import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { sendEmail } from '@/lib/sendEmail'
import { FormEvent, useId } from 'react'
import ContactForm from '@/components/ClientForm'

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Oportunidades laborales
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Si te gustaria formar parte del equipo de Project Apollo, nos dudes en
        acercarte, nos emociona conocer gente nueva!
      </p>

      <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
        {[['Careers', 'careers@projectapollo.com']].map(([label, email]) => (
          <div key={email}>
            <dt className="font-semibold text-neutral-950">{label}</dt>
            <dd>
              <Link
                href={`mailto:${email}`}
                className="text-neutral-600 hover:text-neutral-950"
              >
                {email}
              </Link>
            </dd>
          </div>
        ))}
      </dl>

      {/*<Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />*/}

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Otras consultas
        </h2>
        <p className="mt-6 text-base text-neutral-600">
          Por si no encuentras lo que estas buscando, tienes dudas, o cualquier
          otra consulta no relacionada
        </p>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[['Otras consultas', 'other@projectapollo.com']].map(
            ([label, email]) => (
              <div key={email}>
                <dt className="font-semibold text-neutral-950">{label}</dt>
                <dd>
                  <Link
                    href={`mailto:${email}`}
                    className="text-neutral-600 hover:text-neutral-950"
                  >
                    {email}
                  </Link>
                </dd>
              </div>
            ),
          )}
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Follow us
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Contactanos">
        <p>
          Queremos escucharte, ya sea para formar parte del equipo o para
          iniciar tu proyecto. No dudes en escribirnos!
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
