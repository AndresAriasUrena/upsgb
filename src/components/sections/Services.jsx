// src/components/sections/Services.jsx
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import { GraduationCap, Music, Book, Code, Users, Award } from 'lucide-react';

const services = [
  {
    name: 'Educación Regular',
    description: 'Preescolar, primer y segundo ciclo siguiendo el programa del MEP.',
    icon: GraduationCap
  },
  {
    name: 'Programas Artísticos',
    description: 'Festival estudiantil de las artes, baile folklórico y más.',
    icon: Music
  },
  {
    name: 'Educación Especial',
    description: 'Atención personalizada para necesidades especiales.',
    icon: Users
  },
  {
    name: 'Robótica e Informática',
    description: 'Talleres de programación y robótica educativa.',
    icon: Code
  },
  {
    name: 'Biblioteca',
    description: 'Recursos educativos y espacio de estudio.',
    icon: Book
  },
  {
    name: 'Actividades Extracurriculares',
    description: 'Olimpiadas de matemática, concursos y más.',
    icon: Award
  }
];

export default function Services() {
  return (
    <Container className="py-24">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nuestros Servicios
        </h2>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          Ofrecemos una educación integral con programas académicos y extracurriculares
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.name} className="hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-lg bg-primary-100 p-3">
                <service.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{service.name}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}