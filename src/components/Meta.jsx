// src/components/Meta.jsx
import Head from 'next/head';

export default function Meta({
  title = "Escuela Sotero González B. | Excelencia Académica en Desamparados",
  description = "Institución educativa en San Juan de Dios de Desamparados, ofreciendo educación preescolar y primaria de calidad. Formando el futuro con excelencia académica, valores y compromiso ambiental desde 1867.",
  keywords = "escuela primaria, educación preescolar, Desamparados, San Juan de Dios, educación Costa Rica, Sotero González, escuela ecológica",
  ogImage = "/images/og-image.jpg" // Imagen para redes sociales
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Datos estructurados para Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EducationalOrganization",
          "name": "Escuela Sotero González B.",
          "description": description,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Juan de Dios",
            "addressRegion": "Desamparados",
            "addressCountry": "CR"
          },
          "foundingDate": "1867",
          "telephone": "+506-2219-8848"
        })}
      </script>
    </Head>
  );
}