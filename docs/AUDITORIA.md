# Auditoría técnica del portafolio

Fecha: 4 de noviembre de 2026 (America/Guayaquil).

Se auditó el checkout local de `wp-portfolio` y se implementaron correcciones sin rediseñar el sitio. Las pruebas se ejecutaron contra una compilación de producción en `http://localhost:3100`; no se hizo push, merge ni despliegue. Los resultados no certifican el comportamiento de la versión que esté publicada actualmente en el dominio.

## A. Problemas encontrados

| Problema | Archivo | Severidad | Evidencia inicial |
| --- | --- | --- | --- |
| El idioma almacenado podía reemplazar el indicado por la URL; el almacenamiento también podía fallar en entornos restringidos. | `src/components/Layout/Navbar.tsx` | Alta, funcional | `useEffect` leía `portfolio-locale` y ejecutaba `router.replace`; el selector escribía en `localStorage` sin manejo de errores. |
| Menú móvil sin cierre con Escape, restauración de foco ni relación explícita entre botón y panel. | `src/components/Layout/Navbar.tsx` | Media, accesibilidad | No había escucha de teclado, referencia al botón ni `aria-controls`. |
| Falta de enlace para saltar al contenido; selector con `outline-none` sin sustituto de foco. | `src/components/Portfolio.tsx`, `src/components/NotFound.tsx`, `src/app/globals.css`, `Navbar.tsx` | Media, accesibilidad | No existía enlace de salto; al enfocar el selector no había indicador propio visible. |
| Etiqueta de navegación en inglés en la versión española. | `Navbar.tsx` | Baja | `aria-label="Primary navigation"` estaba fijado en el componente. |
| La 404 heredaba canonical y alternancias de la portada. | Archivos `[...rest]/page.tsx` de ambos idiomas | Media, SEO | Los metadatos de las rutas desconocidas se heredaban del layout; ya existía `notFound()`. |
| Datos estructurados válidos pero sin relacionar el perfil, la persona y el sitio; `WebSite.url` variaba según idioma. | `src/components/JsonLd.tsx` | Baja, SEO | Person y WebSite sin identificadores; URL del WebSite era `/es` en español. |
| Sitemap sin alternancias y sin una lista explícita de rutas indexables. | `next-sitemap.config.js` | Baja, mantenimiento SEO | La transformación aceptaba cualquier ruta generada y no incluía `alternateRefs`. |
| Imágenes de proyectos pesadas y estimaciones `sizes` demasiado amplias. | `public/images/`, `Portfolio.tsx` | Media, rendimiento | Tres fuentes PNG sumaban 2.72 MB al convertirlas; las tarjetas declaraban `100vw`/`50vw` sin descontar márgenes ni ancho máximo. |
| Descarga y precarga de Geist sin utilizarse como fuente visible. | Layouts de ambos idiomas | Baja, rendimiento | Los layouts cargaban `next/font/google`, pero `body` utilizaba Arial por CSS. |
| ESLint ausente y falta de comando de TypeScript. | `package.json` | Media, mantenimiento | `next lint` existía como script, pero no había paquete/configuración ESLint ni `typecheck`. En Next 15.3 el comando era compatible; el problema era la configuración faltante. |
| Dependencias sin referencias en código/configuración. | `package.json` | Baja | Búsqueda en el repositorio sin usos de `framer-motion`, `lucide-react`, `zustand` ni `autoprefixer`; PostCSS ya utilizaba `@tailwindcss/postcss`. |
| Dependencias con avisos de seguridad, incluido Next 15.3.8. | `package.json`, `package-lock.json` | Crítica según npm audit | Primer análisis tras instalar ESLint: 14 avisos, incluido uno crítico. Se confirmó el aviso oficial del optimizador de imágenes de Next.js. No todos sus vectores se aplican necesariamente a este despliegue. |
| Algunas frases eran poco naturales o ambiguas en español. | `src/locales/es.ts`, `src/locales/en.ts` | Baja, contenido | “compartición” de rutas y “prácticas de salud”; se podían precisar sin agregar experiencia. |

Los metadatos principales, las descripciones del perfil, canonical de las portadas, `hreflang`, `x-default`, robots.txt, textos alternativos, contraste automatizado y el tratamiento de movimiento reducido ya estaban implementados. Se conservaron sus decisiones válidas. La etiqueta duplicada de Sportyeah se convirtió de `h3` a párrafo manteniendo todas sus clases; la tarjeta conserva su encabezado principal.

## B. Correcciones implementadas

### Navegación y accesibilidad

- El idioma depende de `/` y `/es`. Se eliminaron la lectura y escritura de preferencias persistentes; el cambio explícito conserva `window.location.hash`.
- El menú usa `aria-expanded` y `aria-controls`; Escape lo cierra y devuelve el foco al botón. Tab sigue el orden natural de una navegación desplegable, sin imponer un patrón ARIA de menú de aplicación ni atrapar el foco.
- Cerrar al salir de la cabecera o pasar a escritorio evita un panel abierto fuera de contexto. El panel puede desplazarse en pantallas de poca altura.
- Los enlaces móviles a secciones trasladan el foco a su destino. Los destinos admiten foco programático con `tabIndex={-1}`, sin añadir paradas a Tab.
- Se añadieron enlaces de salto en las portadas y en la 404, visibles únicamente al recibir foco, y contornos de foco coherentes en controles y enlaces.
- La navegación tiene nombre accesible traducido. Los iconos decorativos del menú y de descarga se ocultan a tecnologías de asistencia.
- Se mantuvieron los offsets de las secciones y se añadió margen de desplazamiento al destino superior para el encabezado fijo.

### SEO

- Se preservaron los títulos, descripciones, canonical y alternancias de las dos portadas: describen las tecnologías y el perfil respaldados por el contenido.
- Open Graph incorpora el idioma alternativo; se conserva el logo W JPEG ya configurado, con dimensiones, tipo y URL HTTPS. Twitter utiliza la misma imagen.
- Las 404 tienen título propio y no heredan canonical ni enlaces de idiomas de la portada. `notFound()` sigue generando HTTP 404 y `noindex`.
- Sitemap limitado a las dos rutas públicas, con alternancias recíprocas `en`, `es` y `x-default`; robots.txt permite el rastreo y apunta al índice de sitemaps.
- JSON-LD relaciona Person, WebSite y ProfilePage mediante identificadores estables. Incluye la foto de la persona y tecnologías ya presentes en el contenido; mantiene el escape de `<` al serializar.

### Rendimiento y mantenimiento

- Se generaron WebP **sin pérdida**, manteniendo dimensiones, encuadre y píxeles RGBA idénticos. Se conservaron los originales.

| Imagen | Fuente PNG | WebP | Reducción |
| --- | ---: | ---: | ---: |
| Borondo | 1,596,676 B | 750,586 B | 53.0 % |
| SP Members Portal | 592,906 B | 195,082 B | 67.1 % |
| Simplified Practice | 525,517 B | 205,824 B | 60.8 % |

La reducción conjunta de las fuentes es **57.6 %**. No equivale a esa reducción en transferencia HTTP: `next/image` ya optimizaba las respuestas. Se ajustó `sizes` a la disposición existente; el retrato conserva prioridad y las tarjetas su carga diferida. No se añadió conversión AVIF ni recompresión del retrato original.

- Se retiró la carga de Geist manteniendo Arial, que ya era la fuente visible.
- Navbar recibe solamente las traducciones que utiliza; las demás secciones siguen siendo Server Components. No se trasladó contenido estático al cliente.
- Se configuró ESLint con las reglas oficiales de Next y TypeScript y se añadieron `npm run lint` y `npm run typecheck` no interactivos.
- Se retiraron las cuatro dependencias sin uso confirmado. No se quitaron animaciones ni funcionalidades porque no las utilizaban.
- Next se actualizó de 15.3.8 a **15.5.29**, con `eslint-config-next` alineado. Se aplicaron correcciones compatibles mediante `npm audit fix`, sin `--force`.
- README refleja las dependencias y los comandos actuales e incluye cómo repetir la comprobación funcional con herramientas temporales.

### Contenido y proyectos

Se revisaron Sportyeah, Borondo, SP Members Portal y Simplified Practice: ya explicaban producto, rol, tecnologías y contribución. Se mantuvieron su estructura y atribuciones. Solo se precisaron frases sobre los flujos de rutas y la descripción de la plataforma para clínicas y consultorios. No se añadieron métricas, certificaciones, responsabilidades, páginas de proyectos ni tecnologías nuevas al perfil.

## C. Validaciones ejecutadas

| Validación | Resultado y límite |
| --- | --- |
| TypeScript | `npm run typecheck`: correcto. |
| ESLint | `npm run lint`: correcto, cero advertencias. |
| Build | `npm run build`: correcto, incluida generación de sitemap y robots.txt. |
| Portadas | `/` y `/es`: HTTP 200 y `html lang` correcto, incluso con preferencia contraria en localStorage. |
| Idioma | Cambio en ambas direcciones conserva `#projects`; también comprobado desde menú móvil. |
| Teclado | Salto al main, apertura con Enter, Tab al primer enlace, Escape y retorno de foco, salida del panel y foco en la sección: correctos en Chrome. |
| Encabezado fijo | Destino de proyectos visible por debajo de la cabecera en escritorio y móvil. |
| Responsive | Sin desbordamiento horizontal de página ni secciones a 320, 390, 768, 1024 y 1440 px, en ambos idiomas. |
| Axe | Cero infracciones detectadas con reglas WCAG A/AA, 2.1 AA y 2.2 AA en las cuatro combinaciones portada/idioma/tamaño, y en tres URLs 404. **No constituye certificación WCAG completa.** |
| Metadatos | Canonical, tres alternancias, OG, Twitter, `lang` y relaciones del JSON-LD comprobados en el documento de ambas portadas. JSON parseable y tipos/propiedades revisados con Schema.org; no se ejecutó el validador remoto de Google. |
| 404 | Tres rutas desconocidas: HTTP 404, `noindex`, sin canonical de portada ni infracciones axe. |
| Enlaces internos | Todos los fragmentos apuntan a IDs existentes. |
| CV | Ambos archivos responden 200, contienen firma PDF y cabecera `Content-Disposition: attachment`. |
| WhatsApp | Los dos enlaces mantienen número y mensaje español codificado correctamente. No se envió ningún mensaje. |
| Enlaces externos | GitHub, Sportyeah, Google Play y App Store: 200. LinkedIn: 999, bloquea la comprobación automática; queda revisión manual. |
| Imagen social | JPEG del logo accesible localmente con HTTP 200 y tipo correcto. No se verificó la caché de WhatsApp ni el despliegue actual. |
| Errores de navegador | Ningún `pageerror` durante las pruebas funcionales; sin errores de hidratación observados. |
| Comparación visual | Capturas antes/después a 1440×1000 y 390×844. Posición y dimensiones de todas las secciones idénticas en las cuatro comparaciones. No son imágenes idénticas píxel a píxel. |

### Lighthouse real, perfil móvil

Una ejecución antes y otra después por idioma, con Chrome local y configuración móvil de Lighthouse. Las ejecuciones finales se realizaron después de las otras pruebas de navegador. No son una mediana ni datos de usuarios reales.

| Métrica | Inglés antes | Inglés después | Español antes | Español después |
| --- | ---: | ---: | ---: | ---: |
| Rendimiento | 98 | 99 | 100 | 99 |
| Accesibilidad | 100 | 100 | 100 | 100 |
| Buenas prácticas | 100 | 100 | 100 | 100 |
| SEO | 100 | 100 | 100 | 100 |
| LCP | 2.223 s | 2.157 s | 1.591 s | 2.027 s |
| CLS | 0 | 0 | 0 | 0 |
| TBT | 17 ms | 23.5 ms | 11.5 ms | 11 ms |
| Transferencia total de la ejecución | 208,712 B | 186,809 B | 209,303 B | 187,278 B |

La transferencia medida disminuyó aproximadamente un 10.5 %, pero no todas las métricas mejoraron: el LCP español aumentó en esta muestra. No se atribuye causalidad a una única ejecución ni se afirma una mejora universal de Core Web Vitals. Lighthouse utiliza TBT como señal de laboratorio; **INP de campo no se midió**. El JavaScript de primera carga informado por Next pasó de unos 109 a 111 KB tras la actualización del framework: quitar dependencias no importadas no reduce por sí solo ese bundle.

Evidencias: [pruebas de navegador](audit/browser-checks.json), [axe antes](audit/before.json), [axe después](audit/after.json), [métricas](audit/metrics.json), [comparación visual](audit/visual-comparison.json), [conversiones](audit/images.json), [inventario de imágenes](audit/assets.json), [dependencias](audit/dependencies.json). Los informes Lighthouse completos están en `audit/lighthouse-*.json`.

## D. Cambios visuales

Se conservaron paleta, tipografía visible, tamaños, pesos, disposición, estilos de tarjetas/botones, bordes, fotografía, imágenes de proyectos, animaciones y puntos de adaptación. No se cambió ningún color para contraste porque las pruebas no identificaron un incumplimiento que lo justificara.

Los únicos elementos visuales nuevos son el enlace de salto cuando recibe foco y los contornos de teclado que faltaban. El selector nativo tiene opciones legibles sobre el fondo existente. El menú solo obtiene desplazamiento cuando no cabe en altura. Las correcciones puntuales de texto pueden cambiar la forma de algunas líneas; las capturas confirman que no cambiaron las dimensiones de las secciones.

| Comparación | Antes | Después |
| --- | --- | --- |
| Inglés, escritorio | [Captura](audit/before-en-desktop.png) | [Captura](audit/after-en-desktop.png) |
| Inglés, móvil | [Captura](audit/before-en-mobile.png) | [Captura](audit/after-en-mobile.png) |
| Español, escritorio | [Captura](audit/before-es-desktop.png) | [Captura](audit/after-es-desktop.png) |
| Español, móvil | [Captura](audit/before-es-mobile.png) | [Captura](audit/after-es-mobile.png) |

Durante la sesión se detectó además un cambio en `public/images/simplified_practice.png` ajeno a las operaciones de esta auditoría (251,038 a 525,517 bytes respecto a HEAD). Se preservó la versión de trabajo y el WebP se generó desde ella; no se restauró ni sobrescribió el PNG. Por ello, la comparación visual no puede atribuir todas las diferencias de píxeles exclusivamente a estas correcciones.

## E. Recomendaciones pendientes

| Prioridad | Recomendación | Motivo para dejarla pendiente |
| --- | --- | --- |
| Alta | Resolver los avisos transitivos restantes de seguridad con una actualización compatible revisada o una migración específica. | `npm audit` final: 0 críticos, 1 alto y 7 moderados. El alto corresponde al PostCSS interno de Next; los moderados se propagan principalmente desde minimatch en herramientas TypeScript/ESLint, además de Next. `npm audit fix` sin force no los resolvió; la solución automática propuesta para Next exige 16.4.5. No se forzó una migración mayor ni overrides que alteren contratos transitivos. El sitio no procesa CSS aportado por usuarios, pero esto no elimina el aviso. |
| Alta, al publicar | Repetir validación en `williampuma.dev`, comprobar CDN, redirecciones de host/protocolo, Search Console y vista previa real de WhatsApp. | La publicación no estaba autorizada y no se realizó. Las pruebas de canonical cubren el HTML local, no la configuración del hosting. |
| Media | Revisar con VoiceOver/Safari, Firefox y dispositivos reales; incluir zoom alto y modo de alto contraste. | Esta sesión cubrió Chrome automatizado y varios tamaños, no toda la matriz de accesibilidad ni todos los criterios WCAG 2.2 AA. |
| Media | Medir Core Web Vitals de campo y repetir Lighthouse varias veces en hosting real. | Una medición de laboratorio por idioma no permite concluir sobre INP real o variabilidad de red/servidor. |
| Media | Abrir LinkedIn manualmente y confirmar que `webdev.sportyeah.com` es el enlace público deseado. | LinkedIn bloquea automatización. Sportyeah devuelve 200, pero el nombre del host sugiere un entorno de desarrollo; no se cambió un enlace profesional sin confirmar su destino correcto. |
| Baja | Evaluar archivos pesados no usados antes de archivarlos. | `public/` contiene imágenes de hasta varios MB no referenciadas por los componentes actuales. No se descargan en la portada; eliminarlas no mejora por sí solo LCP y podría romper enlaces externos. |
| Baja | Considerar casos de estudio por proyecto, usando contribuciones y resultados verificables. | Se mantiene la instrucción de no crear nuevas páginas ni cambiar las tarjetas en esta fase. |

Referencias técnicas: [ESLint en Next 15](https://nextjs.org/docs/15/app/api-reference/config/eslint), [navegación desplegable accesible de WAI](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/), [Open Graph](https://ogp.me/), [Person](https://schema.org/Person), [WebSite](https://schema.org/WebSite), [ProfilePage](https://schema.org/ProfilePage), [aviso de seguridad confirmado de Next](https://github.com/advisories/GHSA-2464-fhr4-w9xw).
