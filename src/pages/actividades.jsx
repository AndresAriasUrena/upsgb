// src/pages/actividades.jsx
import React from 'react';
import { Calendar, Award, Music, Brain, Flag, Users } from 'lucide-react';
import Image from 'next/image';
import { evento1, evento2, evento3, programa1, programa2 } from '@/assets';

const actividadesData = [
  {
    categoria: "Eventos Anuales",
    actividades: [
      {
        titulo: "Festival Estudiantil de las Artes",
        descripcion: "Participación en diversas categorías artísticas",
        fecha: "Marzo - Abril",
        logros: ["Clasificación a etapa circuital 2024"],
        image: evento1,
        icon: Music
      },
      {
        titulo: "Olimpiadas de Matemática",
        descripcion: "Competencia académica en resolución de problemas matemáticos",
        fecha: "Mayo - Junio",
        logros: ["Clasificación a última fase 2024"],
        image: evento2,
        icon: Brain
      },
      {
        titulo: "Desfile de Independencia",
        descripcion: "Celebración de las fiestas patrias",
        fecha: "Septiembre",
        logros: ["Participación destacada en el cantón"],
        image: evento3,
        icon: Flag
      }
    ]
  },
  {
    categoria: "Programas Permanentes",
    actividades: [
      {
        titulo: "Grupo de Baile Folklórico",
        descripcion: "Preservación de tradiciones culturales a través de la danza",
        horario: "Martes y Jueves",
        image: programa1,
        icon: Users
      },
      {
        titulo: "Taller de Robótica",
        descripcion: "Desarrollo de habilidades en programación y robótica",
        horario: "Lunes y Miércoles",
        image: programa2,
        icon: Brain
      }
    ]
  }
];

export default function Actividades() {
  return (
    <div className="bg-gradient-to-r from-[#50dfb2] to-[#ad8cea] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">
            Actividades y Eventos
          </h1>
          <p className="mt-4 text-lg text-gray-50">
            Descubre todas las actividades que realizamos durante el año
          </p>
        </div>

        <div className="space-y-16">
          {actividadesData.map((seccion) => (
            <section key={seccion.categoria}>
              <h2 className="text-2xl font-bold text-white mb-8">
                {seccion.categoria}
              </h2>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {seccion.actividades.map((actividad) => (
                  <div
                    key={actividad.titulo}
                    className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-col gap-3 items-center mb-4">
                      <div className="rounded-full bg-gradient-to-b from-primary-100 to-primary-300 p-3">
                        {/* <actividad.icon className="h-6 w-6 text-primary-600" /> */}
                        <Image
                          src={actividad.image}
                          alt={actividad.titulo}
                          width={150}
                          height={150}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="ml-3 text-xl font-semibold text-gray-900">
                        {actividad.titulo}
                      </h3>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {actividad.descripcion}
                    </p>

                    {actividad.fecha && (
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {actividad.fecha}
                      </div>
                    )}

                    {actividad.horario && (
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        {actividad.horario}
                      </div>
                    )}

                    {actividad.logros && actividad.logros.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Award className="h-4 w-4 mr-2" />
                          Logros Recientes
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {actividad.logros.map((logro, index) => (
                            <li key={index}>{logro}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}