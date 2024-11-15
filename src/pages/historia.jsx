// src/pages/historia.jsx
import React from 'react';
import { School, Calendar, MapPin, Book, Award } from 'lucide-react';
import { historiaData } from '@/data/historia';

export default function Historia() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introducción */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {historiaData.introduccion.titulo}
          </h1>
          <div className="flex justify-center items-center space-x-8 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>{historiaData.introduccion.nacimiento}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{historiaData.introduccion.lugarNacimiento}</span>
            </div>
          </div>
        </div>

        {/* Línea de tiempo */}
        <div className="space-y-12">
          {historiaData.etapas.map((etapa, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-primary-100 p-3">
                    <School className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-2xl font-bold text-gray-900">{etapa.titulo}</h2>
                    <p className="text-sm text-gray-500">{etapa.periodo}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2">
                  {etapa.contenido.map((texto, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="h-2 w-2 mt-2 bg-primary-400 rounded-full mr-2"></span>
                      <p className="text-gray-600">{texto}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Poema */}
        <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
          <div className="flex items-center mb-6">
            <Book className="h-6 w-6 text-primary-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">{historiaData.poema.titulo}</h2>
          </div>
          <div className="prose prose-blue mx-auto">
            {historiaData.poema.versos.map((verso, index) => (
              <p key={index} className="text-gray-600 italic text-center">{verso}</p>
            ))}
            <p className="text-sm text-gray-500 mt-4 text-right">
              {historiaData.poema.fuente}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}