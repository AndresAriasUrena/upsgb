🎉 ¡Emocionado de compartir nuestro último proyecto de responsabilidad social!
Hemos completado la modernización del sitio web de la Escuela Sotero González B., transformando un sitio web básico de Wix de 2016 en una plataforma moderna y escalable.
🏫 Sobre el proyecto:

Cliente: Escuela Sotero González B.
Ubicación: San Juan de Dios, Desamparados
Objetivo: Mejorar la presencia digital de la institución

📈 Mejoras principales:

Migración de Wix a Next.js/React
Diseño responsive y moderno
Mejor rendimiento y tiempos de carga
Sistema de gestión de contenido simplificado
Código abierto y mantenible

🛠️ Tecnologías utilizadas:

Next.js
React
Tailwind CSS
GitHub Pages
CI/CD con GitHub Actions

💡 Beneficios para la escuela:

Mayor visibilidad de sus programas y logros
Facilidad de actualización de contenido
Mejor experiencia para padres y estudiantes
Cero costos de mantenimiento
Plataforma escalable para futuro crecimiento

Agradecido por la oportunidad de contribuir al desarrollo tecnológico de instituciones educativas en nuestra comunidad. Este proyecto demuestra cómo la tecnología moderna puede hacer una diferencia significativa en la comunicación y accesibilidad de la información educativa.
#DesarrolloWeb #ResponsabilidadSocial #Educación #TechForGood #OpenSource #CostaRica


1. Flujo de trabajo para actualizaciones:
```bash
# Desarrollo local
npm run dev  # Para probar cambios

# Antes de desplegar
git add .
git commit -m "Descripción de los cambios"
git push origin main  # Actualiza el repositorio

# Despliegue
npm run deploy  # Actualiza GitHub Pages
```

2. Estructura importante a mantener:
```
school-website/
├── src/
│   ├── styles/
│   │   └── globals.css    # Estilos globales
│   ├── components/        # Componentes reutilizables
│   ├── pages/            # Rutas de la aplicación
│   └── data/             # Datos estáticos
├── public/               # Archivos estáticos
├── next.config.js        # Configuración de Next.js
├── tailwind.config.js    # Configuración de Tailwind
└── .env.production       # Variables de entorno para producción
```

3. Archivos clave a no modificar:
- `next.config.js` - Mantiene la configuración para GitHub Pages
- `.env.production` - Contiene el NEXT_PUBLIC_BASE_PATH
- La estructura base del `package.json`

4. Para futuras modificaciones:
- Contenido: Actualizar los archivos en `src/data/`
- Estilos: Modificar componentes individuales o `globals.css`
- Nuevas páginas: Crear en `src/pages/`
- Imágenes: Añadir en `public/`

5. Puntos a recordar:
- El sitio estará siempre disponible en https://andresariasurena.github.io/upsgb/
- Los cambios en `main` no se reflejan automáticamente; siempre usar `npm run deploy`
- Mantener respaldos del contenido en caso de necesitar revertir cambios

