# Actualización del posicionamiento profesional

Fecha: 18 de noviembre de 2026 (America/Guayaquil). Trabajo local, sin publicación.

## Auditoría y alcance

Arquitectura: Next.js 15 App Router, React 19, TypeScript y Tailwind CSS 4. Dos rutas, `/` y `/es`, con diccionarios tipados y un componente Portfolio compartido. Navbar, Footer, tarjetas, línea de experiencia y grupos de habilidades se reutilizan. Metadata nativa de Next, JSON-LD y next-sitemap existentes; no se añadieron dependencias.

Los roles y fechas anteriores no reflejaban la trayectoria actual. Faltaban backend, bases de datos, liderazgo técnico y la experiencia institucional. Los proyectos dependían de índices para imágenes y enlaces, lo que impedía reordenarlos con seguridad. Borondo enlazaba a App Store a pesar del estado beta indicado. La accesibilidad existente ya incluía foco visible, navegación móvil por teclado, enlace de salto y movimiento reducido.

Se contrastó el contenido con el texto proporcionado y el CV `William_Puma_Senior_Software_Engineer_CV.pdf`. No se reemplazaron los PDF públicos, siguiendo la indicación de esperar el documento definitivo para descarga.

## Cambios y archivos

- `src/locales/en.ts`, `src/locales/es.ts`: Hero Senior Software Engineer, especialización, resumen profesional, fechas, ubicaciones, experiencia y contacto. Simplified Practice tiene tres etapas sin fechas inventadas. Borondo explica su desarrollo desde cero y estado beta; SportYeah reconoce una arquitectura preexistente. Se conserva PAYQA y se incorpora Instituto Superior 17 de Julio con las responsabilidades verificadas en el CV.
- `src/components/Portfolio.tsx`: renderiza especialización, ubicaciones, etapas y estado del producto. Proyectos ordenados CRM, Borondo, SportYeah y SP Members Portal. Imágenes y enlaces asociados por identificador estable, en lugar de posición. Se retira el enlace de Borondo a tienda. Los botones externos de contacto anuncian la apertura de una pestaña nueva a lectores de pantalla.
- Layouts EN/ES: títulos, descripciones, Open Graph y Twitter actualizados con el posicionamiento Senior y full-stack/mobile.
- `src/components/JsonLd.tsx`: puesto, conocimientos y nombre de perfil coherentes con ambos idiomas.
- `public/sitemap-0.xml`: regenerado por el postbuild existente.

Se conservan paleta, Arial, radios, espaciados, fotografías, recursos gráficos, navegación, CTA, transiciones y tratamiento de movimiento reducido. No existía selector de tema en este checkout. No se crearon páginas nuevas: las tarjetas y las etapas visibles contienen la información disponible.

## Validación ejecutada

- `npm run lint`: pasó, sin advertencias.
- `npm run typecheck`: pasó.
- `npm run build`, incluido postbuild de sitemap: pasó. Ambas portadas estáticas; JavaScript inicial informado por Next: 111 kB por portada.
- Pruebas Chrome/Playwright contra producción local en puerto 3100: pasaron navegación, cambio de idioma conservando sección, enlace de salto, menú móvil con teclado/Escape/restauración de foco, canonical, hreflang, OG, Twitter, JSON-LD, 404, sitemap y robots.
- Ambos idiomas sin desbordamiento de página o secciones a 320, 390, 768, 1024 y 1440 px.
- Ambos PDF: HTTP 200, firma PDF y cabecera de descarga. Imagen social: HTTP 200 e image/jpeg. Enlaces internos a secciones: destinos existentes.
- Contenido comprobado en navegador: Senior Software Engineer, tres etapas, CRM como primer proyecto y ausencia del enlace de tienda de Borondo.
- Sin errores JavaScript de página durante las pruebas.

Evidencia: `docs/audit/seniority-browser-checks.json` y capturas `seniority-{en,es}-{390,1440}.png`. Los informes anteriores se preservan; no deben interpretarse como mediciones de esta actualización.

## Límites y próximos pasos

No existe script de tests unitarios en package.json. No se ejecutó una nueva auditoría axe ni Lighthouse: las herramientas no están instaladas en este proyecto. Las pruebas de teclado y responsive no certifican todos los criterios WCAG. No se midieron Core Web Vitals ni se verificaron destinos externos o el hosting publicado.

Para una siguiente revisión: validar con dispositivos reales y lector de pantalla, confirmar el destino público de SportYeah (actualmente webdev.sportyeah.com), repetir accesibilidad automatizada y revisar el CV definitivo antes de sustituir las descargas. Las dependencias y posibles avisos documentados en la auditoría previa quedan fuera de este cambio de contenido.

## Corrección posterior de fechas

El usuario confirmó que el período de TRECE SOFTWARE — Borondo fue mayo de 2024 – abril de 2025. Se corrigió en ambos diccionarios; esta confirmación prevalece sobre el período indicado en el CV y el texto inicial. Las capturas de esta auditoría son anteriores a esta corrección.

## Actualización de contenido profesional (18 de noviembre de 2026)

El usuario confirmó explícitamente que su colaboración con Simplified Practice finalizó en noviembre de 2026. Se actualizó el período a marzo de 2022 – noviembre de 2026 en EN/ES, conservando cargo, responsabilidades y etapas. Sportyeah / Digital Arena aparece primero como experiencia actual desde agosto de 2025. Se verificó Borondo: mayo de 2024 – abril de 2025. Las demás experiencias no cambiaron.

Archivos de aplicación modificados: `src/locales/en.ts`, `src/locales/es.ts`, `src/app/(en)/layout.tsx`, `src/app/(es)/es/layout.tsx` y `src/components/JsonLd.tsx`. El resumen destaca frontend con React/TypeScript, Flutter, backend, APIs, pagos, CRM, mapas, geolocalización y migración de datos, respaldados por las experiencias existentes. El contacto explicita los tres roles senior buscados. Metadata, Open Graph, Twitter y ProfilePage comparten el título «William Puma | Senior Software Engineer | React, TypeScript & Flutter». En el hero se conserva el cargo y se priorizan React/TypeScript en la línea de tecnologías existente para mantener la composición visual.

Validación de esta actualización: `npm run lint`, `npm run typecheck` y `npm run build` (con postbuild) pasaron. Se comprobó el HTML de producción de ambas rutas: orden, fechas, ausencia del período abierto de Simplified Practice y coherencia de metadatos y JSON-LD. La comparación automatizada contra HEAD confirmó que cargos, responsabilidades, etapas, proyectos y habilidades permanecen intactos. No se modificaron componentes visuales, CSS, navegación, recursos ni dependencias. No se ejecutó una nueva prueba visual en navegador; las capturas e informes previos corresponden a sus auditorías originales.

Trabajo local, sin publicación. Los PDF públicos se conservaron conforme a la indicación previamente documentada de esperar el CV definitivo; no se sincronizaron con esta actualización. Los informes históricos de auditoría se preservan como evidencia, no como fuentes de contenido actuales.
