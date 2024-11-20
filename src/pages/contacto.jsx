// src/pages/contacto.jsx
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="bg-gradient-to-b from-primary-400 to-primary-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white">Contáctenos</h1>
          <p className="mt-4 text-lg text-gray-100">
            Estamos aquí para atender sus consultas
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Información de Contacto */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Información de Contacto
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-primary-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Dirección</h3>
                  <p className="mt-1 text-gray-600">
                    400m Sur de la Iglesia Católica<br />
                    San Juan de Dios, Desamparados<br />
                    San José, Costa Rica
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-primary-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Teléfono</h3>
                  <p className="mt-1 text-gray-600">
                    <a href="tel:+50622198848" className="hover:text-primary-600">
                      (506) 2219-8848
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-primary-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Correo</h3>
                  <p className="mt-1 text-gray-600">
                    <a href="esc.soterogonzalezbarquero@mep.go.cr" className="hover:text-primary-600">
                      esc.soterogonzalezbarquero<br/>@mep.go.cr
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-primary-600 mt-1" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Horario</h3>
                  <p className="mt-1 text-gray-600">
                    Lunes a Viernes<br />
                    7:00 AM - 5:40 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario de Contacto */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Envíenos un Mensaje
            </h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}