// src/components/sections/News.jsx
import Card from '@/components/ui/Card';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { Calendar, Trophy, Star } from 'lucide-react';

const news = [
  {
    title: "Éxito en Olimpiadas de Matemáticas",
    date: "Marzo 2024",
    description: "Nuestros estudiantes clasificaron a la última fase de las olimpiadas nacionales.",
    icon: Trophy
  },
  {
    title: "Concurso Regional de Oratoria",
    date: "Febrero 2024",
    description: "Obtuvimos el primer y segundo lugar en el concurso regional.",
    icon: Star
  },
  {
    title: "Festival Estudiantil de las Artes",
    date: "Abril 2024",
    description: "Clasificación a la etapa circuital en varias categorías artísticas.",
    icon: Calendar
  }
];

export default function News() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Últimas Noticias y Logros
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Mantente al día con nuestros eventos y logros más recientes
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card key={item.title}>
              <div className="flex flex-col items-start">
                <div className="rounded-lg bg-primary-100 p-3">
                  <item.icon className="h-6 w-6 text-primary-600" />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{item.date}</p>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="primary"
            onClick={() => window.location.href = '/actividades'}
          >
            Ver todas las actividades
          </Button>
        </div>
      </Container>
    </div>
  );
}