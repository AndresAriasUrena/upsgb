// src/pages/servicios.jsx
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import { GraduationCap, Music, Users, Code, Book, Award, Globe, Heart } from 'lucide-react';
import Image from 'next/image';
import { academico1, academico2, academico3, especial1, especial2, especial3, cultural1, cultural2 } from '@/assets';

import Meta from '@/components/Meta';


const serviciosData = [
  {
    categoria: "Programas Académicos",
    descripcion: "Formación integral siguiendo el programa del MEP",
    servicios: [
      // {
      //   nombre: "Educación Preescolar",
      //   descripcion: "Desarrollo temprano y preparación para la educación primaria",
      //   image: academico1,
      //   icon: Heart
      // },
      {
        nombre: "Primer Ciclo",
        descripcion: "De primer a tercer grado de educación primaria",
        image: academico2,
        icon: GraduationCap
      },
      {
        nombre: "Segundo Ciclo",
        descripcion: "De cuarto a sexto grado de educación primaria",
        image: academico3,
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
        image: especial1,
        icon: Users
      },
      {
        nombre: "Informática y Robótica",
        descripcion: "Desarrollo de habilidades tecnológicas y pensamiento lógico",
        image: especial2,
        icon: Code
      },
      {
        nombre: "Inglés",
        descripcion: "Programa de inglés como segundo idioma",
        image: especial3,
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
        image: cultural1,
        icon: Music
      },
      {
        nombre: "Actividades Extracurriculares",
        descripcion: "Olimpiadas de matemática, concursos de oratoria y más",
        image: cultural2,
        icon: Award
      }
    ]
  }
];

export default function Servicios() {
  return (
    <>
    <Meta 
      title="Servicios Educativos | Unidad Pedagógica Sotero González B."
      description="Ofrecemos educación preescolar, primaria, programas artísticos, educación especial y robótica. Formación integral con valores y excelencia académica."
      keywords="educación preescolar, educación primaria, programas artísticos, robótica educativa, educación especial"
    />
    <div className="bg-gradient-to-r from-[#26d0ce] to-[#1a2980]  py-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Nuestros Servicios</h1>
          <p className="mt-4 text-lg text-gray-50">
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
                      <div className="rounded-lg p-3 w-fit mx-auto">
                        <Image
                          src={servicio.image}
                          alt={servicio.nombre}
                          width={150}
                          height={150}
                          className="object-cover"
                        />
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
    </>
  );
}