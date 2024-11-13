// src/components/layout/Footer.jsx
import Link from 'next/link';
import { footerNavigation } from '@/data/navigation';

export default function Footer({ basePath = '' }) {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:grid md:grid-cols-2 md:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">UPSGB</span>
            </Link>
            <p className="text-base text-gray-500">
              Trabajando para conseguir una escuela más ecológica
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 md:mt-0">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Enlaces
              </h3>
              <ul className="mt-4 space-y-4">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contacto
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <p className="text-base text-gray-500">
                    San Juan de Dios, Desamparados
                  </p>
                </li>
                <li>
                  <a
                    href="tel:+50622197643"
                    className="text-base text-gray-500 hover:text-gray-900"
                  >
                    Tel: (506) 2219-7643
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 py-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Unidad Pedagógica Sotero González B. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}