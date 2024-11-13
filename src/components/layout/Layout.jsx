// src/components/layout/Layout.jsx
import { useRouter } from 'next/router';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  const router = useRouter();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <div className="min-h-screen flex flex-col">
      <Header basePath={basePath} />
      <main className="flex-grow">{children}</main>
      <Footer basePath={basePath} />
    </div>
  );
}