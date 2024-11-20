// src/pages/proyectos.jsx
import React, { useState } from 'react';
import { TreePine, Bot, BookOpen, Clock, CheckCircle, ChevronDown, ChevronUp, Target, Trophy } from 'lucide-react';
import Image from 'next/image';
import { proyecto1, proyecto2, proyecto3 } from '@/assets';

import Meta from '@/components/Meta';


const proyectosData = [
  {
    titulo: "Bandera Azul Ecológica",
    descripcion: "Programa de gestión ambiental que promueve la conservación y el desarrollo sostenible.",
    descripcionDetallada: "La Bandera Azul Ecológica es un galardón que premia el esfuerzo y el trabajo voluntario en la búsqueda de la conservación y el desarrollo sostenible.",
    estado: "activo",
    image: proyecto1,
    Icon: TreePine,
    logros: [
      "Certificación Bandera Azul desde el 2018",
      "Reducción del consumo de agua en un 20%",
      "Implementación de programa de reciclaje"
    ],
    objetivos: [
      "Mantener la certificación Bandera Azul",
      "Reducir el consumo energético en un 15%",
      "Expandir el programa de reciclaje a toda la comunidad"
    ],
    coordinador: "Comité Ambiental Escolar"
  },
  {
    titulo: "Taller de Robótica",
    descripcion: "Desarrollo de habilidades tecnológicas y pensamiento computacional.",
    descripcionDetallada: "El taller de robótica introduce a los estudiantes en el mundo de la programación y la robótica mediante proyectos prácticos y competencias.",
    estado: "activo",
    image: proyecto2,
    Icon: Bot,
    logros: [
      "Participación en competencias nacionales",
      "Desarrollo de proyectos innovadores",
      "Estudiantes de I y II ciclo capacitados en programación NXT PROGRAMMING"
    ],
    objetivos: [
      "Ampliar el programa a más niveles educativos",
      "Participar en competencias internacionales"
    ],
    coordinador: "Departamento de Tecnología"
  },
  {
    titulo: "Biblioteca Digital",
    descripcion: "Modernización de la biblioteca escolar con recursos digitales.",
    descripcionDetallada: (
      <div className="space-y-4">
        <p>Transformación digital de nuestra biblioteca para ofrecer recursos educativos modernos y accesibles a toda la comunidad estudiantil.</p>
        <div className="flex items-center space-x-2">
          <a
            href="https://www.facebook.com/GAR29?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg 
              className="w-5 h-5 mr-2" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
            </svg>
            Visita nuestra página de Facebook
          </a>
        </div>
      </div>
    ),
    estado: "en desarrollo",
    image: proyecto3,
    Icon: BookOpen,
    logros: [
      "Préstamo de libros y materiales didácticos",
      <span key="facebook">
        Fomentar programa de lectura virtual mediante{' '}
        <a 
          href="https://www.facebook.com/GAR29?mibextid=LQQJ4d" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          nuestra página de Facebook
        </a>
      </span>
    ],
    objetivos: [
      "Digitalización del catálogo completo",
      "Implementación de sistema de préstamos digital",
      "Creación de área de computadoras"
    ],
    coordinador: "Biblioteca Escolar"
}
];

export default function Proyectos() {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (titulo) => {
    setExpandedProjects(prev => ({
      ...prev,
      [titulo]: !prev[titulo]
    }));
  };

  return (
    <>
    <Meta 
        title="Proyectos Institucionales | Unidad Pedagógica Sotero González B."
        description="Descubre nuestros proyectos innovadores: Bandera Azul Ecológica, Taller de Robótica y Biblioteca Digital. Comprometidos con la educación moderna y sostenible."
        keywords="bandera azul ecológica, robótica educativa, biblioteca digital, proyectos educativos, educación sostenible"
      />
    <div className="bg-primary-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <TreePine className="h-8 w-8 text-primary-600 mr-3" />
          <h1 className="text-4xl font-bold text-gray-900">
            Nuestros Proyectos
          </h1>
        </div>
        
        <div className="space-y-6">
          {proyectosData.map((proyecto) => {
            const ProyectoIcon = proyecto.Icon;
            const isExpanded = expandedProjects[proyecto.titulo];
            
            return (
              <div
                key={proyecto.titulo}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50"
                  onClick={() => toggleProject(proyecto.titulo)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="rounded-full bg-primary-100 p-3">
                        {/* <ProyectoIcon className="h-6 w-6 text-primary-600" /> */}
                        <Image
                          src={proyecto.image}
                          alt={proyecto.titulo}
                          width={150}
                          height={150}
                          className="object-cover"
                        />
                      </div>
                      <h2 className="ml-3 text-3xl font-bold text-gray-900">
                        {proyecto.titulo}
                      </h2>
                    </div>
                    <button className="text-gray-500 flex gap-2">
                      {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                      {isExpanded ? <p>Mostrar menos</p> : <p>Mostrar más</p>}

                    </button>
                  </div>

                  <p className="mt-4 text-gray-600">{proyecto.descripcion}</p>

                  <div className="mt-4 flex items-center space-x-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${
                        proyecto.estado === 'activo'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {proyecto.estado === 'activo' ? (
                        <>
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Activo
                        </>
                      ) : (
                        <>
                          <Clock className="h-4 w-4 mr-1" />
                          En Desarrollo
                        </>
                      )}
                    </span>
                    <span className="text-sm text-gray-500">
                      Coordinado por: {proyecto.coordinador}
                    </span>
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-6 pb-6 bg-gray-50 border-t">
                    <div className="mt-6">
                      <p className="text-gray-600 mb-6">{proyecto.descripcionDetallada}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <Trophy className="h-5 w-5 mr-2 text-primary-600" />
                            Logros Alcanzados
                          </h3>
                          <ul className="space-y-3">
                            {proyecto.logros.map((logro, index) => (
                              <li
                                key={index}
                                className="flex items-start text-sm text-gray-600"
                              >
                                <CheckCircle className="h-4 w-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                                <span>{logro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <Target className="h-5 w-5 mr-2 text-primary-600" />
                            Objetivos
                          </h3>
                          <ul className="space-y-3">
                            {proyecto.objetivos.map((objetivo, index) => (
                              <li
                                key={index}
                                className="flex items-start text-sm text-gray-600"
                              >
                                <Clock className="h-4 w-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                                <span>{objetivo}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
}