// src/pages/index.jsx
import Hero from '@/components/sections/Hero';
import Enrollment from '@/components/sections/Enrollment';
import Services from '@/components/sections/Services';
import News from '@/components/sections/News';

export default function Home() {
  return (
    <>
      <Hero />
      <Enrollment />
      <Services />
      <News />
    </>
  );
}