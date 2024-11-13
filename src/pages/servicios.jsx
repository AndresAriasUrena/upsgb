// src/pages/servicios.jsx
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { GraduationCap, Music, Users, Code, Book, Award, Globe, Heart } from 'lucide-react';

const serviciosData = [
  {
    categoria: "Programas Académicos",
    descripcion: "Formación integral siguiendo el programa del MEP",
    servicios: [
      {
        nombre: "Educación Preescolar",
        descripcion: "Desarrollo temprano y preparación para la educación primaria",
        icon: Heart
      },
      {
        nombre: "Primer Ciclo",
        descripcion: "De primer a tercer grado de educación primaria",
        icon: GraduationCap
      },
      {
        nombre: "Segundo Ciclo",
        descripcion: "De cuarto a sexto grado de educación primaria",
        icon: Book
      }
    ]
  },
  {
    categoria: "Programas Especiales",
    descripcion: "Desarrollo de habilidades específicas",
    servicios: [
      {
        nombre: "Educación Especial",
        descripcion: "Atención personalizada para necesidades especiales",
        icon: Users
      },
      {
        nombre: "Informática y Robótica",
        descripcion: "Desarrollo de habilidades tecnológicas y pensamiento lógico",
        icon: Code
      },
      {
        nombre: "Inglés",
        descripcion: "Programa de inglés como segundo idioma",
        icon: Globe
      }
    ]
  },
  {
    categoria: "Programas Culturales y Artísticos",
    descripcion: "Desarrollo artístico y cultural",
    servicios: [
      {
        nombre: "Festival de las Artes",
        descripcion: "Participación en festivales artísticos y culturales",
        icon: Music
      },
      {
        nombre: "Actividades Extracurriculares",
        descripcion: "Olimpiadas de matemática, concursos de oratoria y más",
        icon: Award
      }
    ]
  }
];

export default function Servicios() {
  return (
    <div className="bg-gray-50 py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Nuestros Servicios</h1>
          <p className="mt-4 text-lg text-gray-600">
            Ofrecemos una educación integral con programas diseñados para el desarrollo completo de nuestros estudiantes
          </p>
        </div>

        <div className="space-y-16">
          {serviciosData.map((categoria) => (
            <section key={categoria.categoria} className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{categoria.categoria}</h2>
              <p className="text-gray-600 mb-8">{categoria.descripcion}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoria.servicios.map((servicio) => (
                  <Card key={servicio.nombre} className="h-full">
                    <div className="flex flex-col h-full">
                      <div className="rounded-lg bg-primary-100 p-3 w-fit">
                        <servicio.icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-gray-900">
                        {servicio.nombre}
                      </h3>
                      <p className="mt-2 text-gray-600 flex-grow">
                        {servicio.descripcion}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}