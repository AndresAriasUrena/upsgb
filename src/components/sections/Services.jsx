// src/components/sections/Services.jsx
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import Image from 'next/image';
import { servicio1, servicio2, servicio3, servicio4, servicio5, servicio6 } from '@/assets';

const services = [
  {
    name: 'Educación Regular',
    description: 'Preescolar, primer y segundo ciclo siguiendo el programa del MEP.',
    image: servicio1
  },
  {
    name: 'Programas Artísticos',
    description: 'Festival estudiantil de las artes, baile folklórico y más.',
    image: servicio2
  },
  {
    name: 'Educación Especial',
    description: 'Atención personalizada para necesidades especiales.',
    image: servicio3
  },
  {
    name: 'Robótica e Informática',
    description: 'Talleres de programación y robótica educativa.',
    image: servicio4
  },
  {
    name: 'Biblioteca',
    description: 'Recursos educativos y espacio de estudio.',
    image: servicio5
  },
  {
    name: 'Actividades Extracurriculares',
    description: 'Olimpiadas de matemática, concursos y más.',
    image: servicio6
  }
];

export default function Services() {
  return (
    <Container className="py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-4xl">
          Nuestros Servicios
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Ofrecemos una educación integral con programas académicos y extracurriculares
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.name} className="hover:shadow-lg transition-shadow duration-300 bg-gradient-to-b from-primary-200 to-primary-600 ">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-lg p-3">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={150}
                  height={150}
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{service.name}</h3>
              <p className="mt-2 text-gray-100">{service.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}