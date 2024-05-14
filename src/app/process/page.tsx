import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Descubrimiento" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          No creemos en soluciones genéricas. Nos sumergimos
          en tu mundo empresarial para desentrañar los secretos detrás de tu
          éxito. ¿Cómo lo hacemos?
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Colaboración Estrecha:{' '}
          </strong>
          Trabajamos codo a codo con nuestros clientes para comprender sus
          necesidades. Nos involucramos en sus operaciones diarias
          para entender qué impulsa su negocio.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Comprensión Profunda:{' '}
          </strong>
          No nos conformamos con lo superficial. Profundizamos en cada detalle
          para obtener una comprensión completa de lo que hace que tu negocio
          funcione.
        </p>
        <p>
          <strong className="font-semibold text-neutral-950">
            Perspectiva Estratégica:{' '}
          </strong>
          Utilizamos nuestro conocimiento y experiencia para identificar
          oportunidades y desafíos únicos en tu industria.
        </p>
      </div>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Desarrollo" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            Ejecución Precisa:{' '}
          </strong>
          Nuestro equipo técnico se sumerge en el desarrollo, utilizando las
          últimas tecnologías y mejores prácticas para llevar tus proyectos a la
          vida.
        </p>{' '}
        <p>
          <strong className="font-semibold text-neutral-950">
            Iteración Constante:{' '}
          </strong>
          Ajustamos y refinamos continuamente para
          asegurarnos de que cada aspecto esté alineado con tus necesidades y
          expectativas.
        </p>
      </div>

      {/*<Blockquote*/}
      {/*  author={{ name: 'Debra Fiscal', role: 'CEO of Unseal' }}*/}
      {/*  className="mt-12"*/}
      {/*>*/}
      {/*  Studio were so regular with their progress updates we almost began to*/}
      {/*  think they were automated!*/}
      {/*</Blockquote>*/}
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Entrega" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          <strong className="font-semibold text-neutral-950">
            Entrega a Tiempo:{' '}
          </strong>
          Cumplimos rigurosamente con los plazos acordados, asegurando que tu
          proyecto esté listo cuando lo necesites.
        </p>{' '}
        <p>
          <strong className="font-semibold text-neutral-950">
            Calidad Inigualable:{' '}
          </strong>
          Cada entrega es el resultado de un meticuloso proceso de desarrollo y
          revisión, garantizando la más alta calidad en cada detalle para
          satisfacer las necesidades del cliente.
        </p>{' '}
        <p>
          <strong className="font-semibold text-neutral-950">
            Soporte Continuo:{' '}
          </strong>
          Nuestro compromiso no termina con la entrega. Brindamos soporte continuo para 
          garantizar que tu proyecto siga funcionando sin problemas.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Incluido en esta estapa
      </h3>
      <List className="mt-8">
        <ListItem title="Infrastructura">
          Manejamos la infraestructura de tu sitio para garantizar que tu sitio
          web esté siempre disponible cuando tus clientes lo necesiten.
        </ListItem>
        <ListItem title="Capacitación">
          Intruimos y explicamos como hacer
          el uso de las herramientas digitales para alcanzar su máximo
          potencial.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Nuestros valores"
        title="Balance entre Fiabilidad e Innovación"
      >
        <p>
          En Project Apollo, nos destacamos por equilibrar la fiabilidad con la
          innovación.  Nos dedicamos a ayudar
          a negocios a escalar, brindándoles las herramientas y el apoyo
          necesario para alcanzar nuevas alturas en un mundo en
          constante evolución.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Detalle">
            En cada proyecto, aplicamos un enfoque meticuloso para garantizar la
            precisión y la calidad en cada detalle.
          </GridListItem>
          <GridListItem title="Eficiencia">
            Nuestro equipo se esfuerza por maximizar la eficiencia en cada paso
            del proceso, entregando resultados de alta calidad, en tiempo
            record.
          </GridListItem>
          <GridListItem title="Adaptabilidad">
            Nos adaptamos rápidamente a los cambios del mercado y las
            necesidades del cliente, asegurando soluciones flexibles y a la
            medida.
          </GridListItem>
          <GridListItem title="Honestidad">
            Guiados por principios éticos, mantenemos una comunicación
            transparente y honesta en todas nuestras interacciones.
          </GridListItem>
          <GridListItem title="Lealtad">
            Fieles a nuestros clientes y su visión, nos comprometemos a ser su
            socio confiable a largo plazo en su viaje digital.
          </GridListItem>
          <GridListItem title="Innovación">
            Nos desafiamos constantemente a nosotros mismos para encontrar
            nuevas y creativas formas de abordar los desafíos y superar las
            expectativas del cliente.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Nuestro proceso" title="Como trabajamos">
        <p>
          En Project Apollo, entendemos que cada empresa tiene una visión única.
          Nuestro compromiso es convertir esa visión en una realidad digital que
          destaque.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
