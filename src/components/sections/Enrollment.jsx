// src/components/sections/Enrollment.jsx
import React from 'react';
import { Download, Calendar, Users, ClipboardCheck } from 'lucide-react';

export default function Enrollment() {
  // Esta función manejará la descarga del PDF
  const handleDownload = () => {
    // Aquí debes reemplazar '/docs/matricula-2025.pdf' con la ruta real a tu PDF
    const pdfUrl = `${process.env.NEXT_PUBLIC_BASE_PATH}/docs/matricula-2025.pdf`;
    window.open(pdfUrl, '_blank');
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Columna de Video */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              className="absolute w-full h-full"
              src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/escuelasoterogonzalezbarquero/videos/1959064227924618"
              title="Matrícula 2025 - UPSGB"
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            ></iframe>
          </div>

          {/* Columna de Información */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-gray-900">
                Matrícula Abierta 2025
              </h2>
              <p className="text-lg text-gray-600">
                ¡Bienvenidos al proceso de matrícula para el curso lectivo 2025!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Fechas Importantes</h3>
                  <p className="text-gray-600">Fecha de matrícula: Viernes 6 de diciembre, 2024</p>
                </div>
              </div>

              <div className="flex items-start">
                <ClipboardCheck className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Horarios</h3>
                  <ul className="text-gray-600 list-disc ml-4">
                    <li>I ciclo: 7:00am a 11:30am</li>
                    <li>II ciclo: 12:30pm a 4:50pm</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <Users className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Niveles Disponibles</h3>
                  <p className="text-gray-600">Primer Ciclo y Segundo Ciclo</p>
                </div>
              </div>
            </div>

            <button
              onClick={handleDownload}
              className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              <Download className="h-5 w-5 mr-2" />
              Descargar Información Completa
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}