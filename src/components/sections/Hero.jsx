// src/components/sections/Hero.jsx
import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-primary-800 overflow-hidden">
      <Container className="relative z-10 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Unidad Pedagógica Sotero González B.
            </h1>
            <p className="mt-6 text-lg leading-8 text-primary-100">
              Formando el futuro de nuestra comunidad con excelencia académica y valores.
              Trabajando para conseguir una escuela más ecológica.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button 
                variant="secondary"
                onClick={() => window.location.href = '/servicios'}
              >
                Nuestros Programas
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent text-primary-800 border-primary-900 hover:border-white hover:bg-white/10 hover:text-white"
                onClick={() => window.location.href = '/contacto'}
              >
                Contáctenos
              </Button>
            </div>
          </div>
        </div>
      </Container>
      {/* Decorative background */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
}