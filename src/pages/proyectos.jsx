// src/pages/proyectos.jsx
import React, { useState } from 'react';
import { TreePine, Bot, BookOpen, Clock, CheckCircle, ChevronDown, ChevronUp, Target, Trophy } from 'lucide-react';

const proyectosData = [
  {
    titulo: "Bandera Azul Ecológica",
    descripcion: "Programa de gestión ambiental que promueve la conservación y el desarrollo sostenible.",
    descripcionDetallada: "La Bandera Azul Ecológica es un galardón que premia el esfuerzo y el trabajo voluntario en la búsqueda de la conservación y el desarrollo sostenible.",
    estado: "activo",
    Icon: TreePine,
    logros: [
      "Certificación Bandera Azul 2023",
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
    Icon: Bot,
    logros: [
      "Participación en competencias nacionales",
      "Desarrollo de 5 proyectos innovadores",
      "30 estudiantes capacitados en programación básica"
    ],
    objetivos: [
      "Ampliar el programa a más niveles educativos",
      "Participar en competencias internacionales",
      "Implementar laboratorio de robótica"
    ],
    coordinador: "Departamento de Tecnología"
  },
  {
    titulo: "Biblioteca Digital",
    descripcion: "Modernización de la biblioteca escolar con recursos digitales.",
    descripcionDetallada: "Transformación digital de nuestra biblioteca para ofrecer recursos educativos modernos y accesibles a toda la comunidad estudiantil.",
    estado: "en desarrollo",
    Icon: BookOpen,
    logros: [
      "Digitalización del catálogo completo",
      "Implementación de sistema de préstamos digital",
      "Creación de área de computadoras"
    ],
    objetivos: [
      "Ampliar la colección de recursos digitales",
      "Implementar programa de lectura virtual",
      "Crear espacios de estudio modernos"
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
    <div className="bg-gray-50 min-h-screen py-12">
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
                      <div className="rounded-lg bg-primary-100 p-3">
                        <ProyectoIcon className="h-6 w-6 text-primary-600" />
                      </div>
                      <h2 className="ml-3 text-xl font-bold text-gray-900">
                        {proyecto.titulo}
                      </h2>
                    </div>
                    <button className="text-gray-500">
                      {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
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
  );
}