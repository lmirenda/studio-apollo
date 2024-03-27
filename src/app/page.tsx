import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import GradientText from '@/components/GradientText'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-gradient-to-b from-purple-600 to-blue-600 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Trabajamos con decenas de negocios increibles
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Aborda tus Desafíos Digitales"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className={'mb-4'}>
          ¿Tu negocio lucha por destacarse en línea? ¿Necesitas una identidad de
          marca sólida para diferenciarte en un mercado saturado? ¿O quizás
          buscas soluciones tecnológicas personalizadas para resolver problemas
          específicos de tu empresa?
        </p>
        <p>
          Sea cual sea tu desafío digital, estamos aquí para ayudarte a
          superarlo. Descubre cómo nuestros servicios pueden ser la respuesta
          que estás buscando. Haz clic en la tarjeta que mejor se ajuste a tus
          necesidades y comienza a transformar tu negocio hoy mismo.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Servicios"
        title="Ayudamos a identificar, explorar y responder a nuevas oportunidades."
        className="mt-24 sm:mt-32 lg:mt-40 "
      >
        <p>
          Nos especializamos en potenciar el crecimiento de tu negocio mediante
          herramientas digitales. Desde identificar nuevas oportunidades de
          mercado hasta crear productos innovadores, nuestro enfoque se centra
          en aprovechar al máximo el poder de la tecnología para impulsar tu
          éxito empresarial.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Sitios Web">
              Creación de sitios web personalizados que reflejen la identidad
              única de tu marca y maximicen la experiencia del usuario.
            </ListItem>
            <ListItem title="Aplicaciones Web">
              Desarrollo de plataformas escalables y seguras, adaptadas a tus
              necesidades específicas y diseñadas para impulsar el crecimiento
              de tu negocio en línea.
            </ListItem>
            <ListItem title="Branding e identidad de marca">
              Desarrollo de estrategias de branding sólidas y coherentes que
              ayuden a diferenciar tu marca en el mercado y a crear conexiones
              emocionales duraderas con tu audiencia objetivo.
            </ListItem>
            <ListItem title="Soluciones Personalizadas">
              Creación de soluciones digitales personalizadas que se adapten
              perfectamente a los requisitos únicos de tu negocio, desde
              aplicaciones móviles hasta sistemas de gestión de contenido.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="md:mt-56s bg mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h3 className=" mb-6 text-neutral-600">
            {' '}
            ¡Lleva tu negocio al siguiente nivel hoy mismo!
          </h3>
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Despega tu negocio a la web con{' '}
            <GradientText>Proyecto Apollo</GradientText>
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Evoluciona tu marca e impulsa tu presencia online. Nos dedicamos a
            crear soluciones digitales a medida para pequeñas y medianas
            empresas. Desde páginas web cautivadoras hasta branding distntivo
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user’s microphone without triggering one of
        those annoying permission dialogs.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
