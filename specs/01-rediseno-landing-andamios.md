# SPEC 01 — Rediseño industrial de la landing de andamios

> **Estado:** Aprobado
> **Depende de:** Ninguna
> **Fecha:** 2026-10-11
> **Objetivo:** Rediseñar la landing de Jaramillo Andamios Pro con una identidad industrial clara usando Tailwind CSS, manteniendo una única página y la cotización por WhatsApp.

## Organización de la ejecución

Revisión del 2026-10-11: esta spec conserva el estado **Aprobado** como marco general del rediseño.

La ejecución se divide en tres contratos independientes, inicialmente en **Borrador**:

| Orden | Spec | Entrega |
| --- | --- | --- |
| 1 | [SPEC 02](02-base-visual-navegacion-contacto.md) | Tokens visuales, imágenes compartidas, navegación, pie y contacto. |
| 2 | [SPEC 03](03-portada-servicios-clientes.md) | Portada, servicios y logos de clientes. |
| 3 | [SPEC 04](04-galeria-resenas-integracion.md) | Galería, reseñas y activación global del diseño claro. |

El plan de la sección 5 queda como referencia del alcance original. Para implementar, se utilizarán los planes y criterios de cada entrega, en orden **02 → 03 → 04**. La aprobación de este marco no aprueba automáticamente las entregas.

Las precisiones acordadas en la revisión se documentan en esas entregas:

- Colores exactos bajo `industrial` en `tailwind.config.ts`.
- Cabecera de 80 px y compensación de navegación de 96 px.
- Componente compartido `src/components/ui/RemoteImage.tsx` para errores de imágenes.
- Aviso junto al autor cuando falle un avatar, reservando sus 40 × 40 px.
- Textos comerciales exactos en la SPEC 03.
- Ampliación de galería como diálogo modal con Escape y gestión del foco.
- Activación del fondo claro global al final de la SPEC 04.

Las entregas concretan los detalles de ejecución de este marco. El alcance comercial, los recursos y las interacciones que se acordó conservar siguen siendo los de esta spec.

## 1. Alcance

### Incluido

- Rediseñar todos los elementos visibles: navegación, portada, servicios, galería, clientes, reseñas, pie de página y botón flotante.
- Adoptar fondos blancos y gris claro, texto grafito y acentos naranja oscuro.
- Conservar Montserrat, el nombre comercial y el logo actual.
- Reutilizar las fotografías y logos disponibles en el proyecto y Cloudinary.
- Reorganizar y resumir los textos comerciales sin inventar información.
- Mantener este orden:
  1. Portada.
  2. Servicios.
  3. Galería.
  4. Clientes.
  5. Reseñas.
  6. Pie de página.
- Destacar dos servicios: **Arriendo de andamios** y **Montaje y desmontaje**, conservando el carácter opcional del segundo.
- Mantener la navegación dentro de la landing y el menú móvil.
- Mantener los efectos e interacciones actuales de galería y reseñas.
- Retirar los enlaces de Términos y Privacidad que actualmente apuntan al inicio.
- Mantener la cotización mediante `https://wa.me/56962109122`.
- Mostrar un espacio reservado con un mensaje breve cuando falle una imagen remota.
- Verificar la presentación en móvil, tablet y escritorio.

### Fuera de alcance

- Nuevas rutas.
- Formularios, backend o sistemas de gestión de cotizaciones.
- Nuevas dependencias o migración de Tailwind CSS.
- Cambio de marca o creación de material fotográfico.
- Precios, estadísticas, certificaciones o testimonios nuevos.
- Integración dinámica con Google Reviews.
- Persistencia o almacenamiento de información del visitante.
- Selector de tema claro/oscuro.
- Redacción de contenido legal.
- Reparación de la configuración de lint.

## 2. Diseño y comportamiento

### Identidad visual

- Fondo principal blanco, con superficies gris claro para separar contenido.
- Texto principal grafito y texto secundario gris oscuro.
- Botones de cotización naranja oscuro con texto blanco.
- Bordes discretos, sombras suaves y jerarquía consistente de títulos.
- Mantener el verde identificativo del botón de WhatsApp.
- Eliminar de la presentación el fondo racing, los destellos y los brillos decorativos.
- Mantener los efectos de galería y reseñas expresamente elegidos por el usuario.

### Navegación y portada

- Cabecera fija con logo, navegación interna y acceso a cotización.
- Menú desplegable en móvil, que se cierre al seleccionar una sección.
- Mantener las etiquetas Inicio, Servicios, Galería y Clientes alineadas con sus referencias.
- Compensar la altura de la cabecera al desplazarse a cada sección.
- Portada con texto e imagen grande de andamios en dos columnas en escritorio.
- En móvil, presentar primero el texto y después la imagen.
- Mostrar el servicio de arriendo de andamios de forma explícita en el encabezado principal.
- Mantener una imagen estática en la portada.

### Servicios

- Presentar arriendo y montaje/desmontaje como dos bloques diferenciados.
- Resumir los párrafos actuales para facilitar su lectura.
- Conservar la información comercial existente.
- Mantener un botón de cotización en cada bloque.
- No atribuir nuevas características o garantías al servicio.

### Galería

- Conservar las 13 imágenes actuales.
- Mantener cuadrícula y ampliación en escritorio.
- Mantener Swiper con efecto coverflow, bucle y paginación en móvil.
- Conservar el cambio entre implementaciones en el breakpoint `lg`.
- Adaptar bordes, espacios y controles a la identidad clara.

### Clientes y reseñas

- Conservar los dos logos de clientes actuales.
- Conservar los 19 registros de reseñas, sus autores, puntuaciones y comentarios.
- No resumir ni reescribir los testimonios como parte de los cambios de texto comercial.
- Mantener diez reseñas iniciales y el botón para mostrar todas desde `sm`.
- Mantener el carrusel móvil de reseñas con avance automático y configuración actual.
- Adaptar tarjetas, títulos y paginación al nuevo diseño.

### Pie y contacto

- Incluir la marca, acceso a WhatsApp y redes sociales actuales.
- Conservar el crédito de desarrollo y el año dinámico.
- Eliminar los enlaces de Términos y Privacidad.
- Mantener el botón flotante de WhatsApp sin cubrir controles o contenido esencial.

### Estados de las imágenes

- Durante la carga, reservar las dimensiones previstas.
- Ante un error de carga remota, conservar ese espacio y mostrar **“Imagen no disponible”**.
- No sustituir la imagen fallida por otro recurso.
- Mantener operativos los botones de contacto.
- Conservar el uso de iniciales cuando una reseña ya carece de avatar.

## 3. Modelo de datos

No se introduce un modelo de datos de negocio ni persistencia.

Se reutilizan:

- `images` en `src/components/hero/Hero.tsx`.
- `images` en `src/components/gallery/Gallery.tsx`.
- `clients` en `src/components/clients/OurClients.tsx`.
- `REVIEWS` en `src/components/clients/reviews/Reviews.tsx`.
- Las referencias de sección en `src/app/page.tsx`.
- Los enlaces comerciales y sociales existentes.

El estado necesario para representar errores de imagen será local y temporal. Se reiniciará al recargar la página.

## 4. Archivos afectados

| Área                           | Archivos                                                                                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Composición y estilos globales | `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css`, `tailwind.config.ts`                                                                                                 |
| Contenedor compartido          | `src/components/ui/Container.tsx`                                                                                                                                                     |
| Navegación y contacto          | `src/components/layout/Navbar.tsx`, `src/components/layout/Footer.tsx`, `src/components/layout/PopupWidget.tsx`                                                                       |
| Portada                        | `src/components/hero/Hero.tsx`                                                                                                                                                        |
| Servicios                      | `src/components/services/Services.tsx`                                                                                                                                                |
| Galería                        | `src/components/gallery/Gallery.tsx`, `src/components/gallery/GalleryDesktop.tsx`, `src/components/gallery/GalleryMobile.tsx`                                                         |
| Clientes y reseñas             | `src/components/clients/OurClients.tsx`, `src/components/clients/reviews/Reviews.tsx`, `src/components/clients/reviews/Widget.tsx`, `src/components/clients/reviews/style.module.css` |

`BackgroundScene` se desconectará desde `src/app/layout.tsx`. No se crearán rutas ni se reactivarán los carruseles comentados de la portada.

## 5. Plan de implementación

Cada paso debe dejar la aplicación ejecutable.

1. **Definir la base visual.**
   Incorporar los colores acordados en `tailwind.config.ts` y ajustar `src/components/ui/Container.tsx` para mantener anchos y espaciados consistentes.

2. **Rediseñar la navegación.**
   Aplicar la cabecera clara, mantener los destinos internos e incorporar cotización. Usar controles accesibles por teclado y ajustar el cierre del menú móvil.

3. **Rediseñar la portada.**
   Aplicar la composición de texto e imagen, resumir el mensaje comercial y conservar WhatsApp como acción principal.

4. **Rediseñar los servicios.**
   Presentar los dos bloques acordados con textos breves, imágenes existentes y botones de cotización.

5. **Adaptar la galería de escritorio.**
   Actualizar su presentación y controles de ampliación. Mantener las imágenes y permitir apertura y cierre mediante teclado.

6. **Adaptar la galería móvil.**
   Aplicar el diseño claro conservando coverflow, bucle, paginación y breakpoint.

7. **Rediseñar clientes.**
   Presentar los logos existentes sobre superficies claras y con tamaños adaptables.

8. **Rediseñar las tarjetas de reseñas.**
   Ajustar `src/components/clients/reviews/Widget.tsx` y sus estilos sin modificar autores, comentarios o puntuaciones.

9. **Adaptar el conjunto de reseñas.**
   Mantener cuadrícula, botón de expansión y carrusel automático móvil con la nueva presentación.

10. **Rediseñar pie y botón flotante.**
    Retirar los enlaces legales sin contenido y conservar WhatsApp, redes y crédito.

11. **Completar los estados de error de imágenes.**
    Aplicar el espacio reservado y mensaje acordado en los componentes que muestran imágenes remotas.

12. **Integrar la presentación global.**
    Desconectar `BackgroundScene`, retirar la clase de tema oscuro del documento y sustituir los estilos racing. Ajustar el espacio bajo la cabecera y comprobar la composición final en `src/app/page.tsx`.

## 6. Criterios de aceptación

### Diseño y contenido

- [ ] La página conserva una única ruta de presentación: `/`.
- [ ] Toda la landing utiliza la identidad industrial clara acordada.
- [ ] El fondo racing y sus destellos ya no se renderizan.
- [ ] Se conservan nombre, logo y Montserrat.
- [ ] Las secciones aparecen en el orden definido.
- [ ] Arriendo y montaje/desmontaje aparecen como servicios diferenciados.
- [ ] El montaje/desmontaje conserva su carácter opcional.
- [ ] Se mantienen las 13 imágenes de galería, los dos clientes y las 19 reseñas.
- [ ] No se introducen afirmaciones comerciales nuevas.
- [ ] No aparecen enlaces de Términos o Privacidad.
- [ ] Se conservan redes sociales y crédito de desarrollo.

### Interacciones y estados

- [ ] Cada elemento del menú lleva a la sección correcta sin ocultar su título bajo la cabecera.
- [ ] El menú móvil se abre, se cierra y se cierra tras elegir una sección.
- [ ] Los botones de cotización y el botón flotante apuntan a `https://wa.me/56962109122`.
- [ ] La galería de escritorio permite abrir y cerrar una ampliación.
- [ ] La galería móvil conserva coverflow, bucle y paginación.
- [ ] Las reseñas conservan la expansión a todos los registros y el avance automático móvil.
- [ ] Los controles interactivos tienen nombre accesible y foco visible.
- [ ] Menú, cotización, ampliación y expansión de reseñas son operables mediante teclado.
- [ ] Al simular el fallo de una imagen remota, aparece “Imagen no disponible” sin colapsar el bloque.

### Adaptación y comprobaciones técnicas

- [ ] A 360, 768 y 1440 px no hay desplazamiento horizontal de la página ni superposición de contenido.
- [ ] El botón flotante no impide utilizar controles esenciales.
- [ ] El texto normal alcanza un contraste mínimo de 4,5:1.
- [ ] La navegación y los efectos existentes funcionan sin errores de ejecución en consola.
- [ ] `npx next typegen` termina correctamente.
- [ ] `npx tsc --noEmit --incremental false` termina correctamente.
- [ ] `npm run build` termina correctamente con el entorno requerido disponible.
- [ ] Se verifica manualmente la landing en el servidor de desarrollo.

`npm run lint` no será un criterio de aceptación: el comando actual utiliza `next lint`, eliminado en Next.js 16.

## 7. Decisiones tomadas y descartadas

- **Sí: identidad industrial clara.** Destaca los andamios y facilita la lectura.
- **Sí: Tailwind CSS actual.** Reutiliza la herramienta de diseño existente.
- **Sí: rediseño completo.** Mantiene coherencia entre todas las secciones.
- **Sí: marca y recursos actuales.** Aprovecha material disponible.
- **Sí: resumen de textos comerciales.** Reduce bloques extensos sin cambiar los datos.
- **Sí: efectos actuales de galería y reseñas.** El usuario eligió conservarlos.
- **No: carrusel móvil plano o eliminación de carruseles.** Se descartaron frente a los efectos actuales.
- **Sí: WhatsApp actual.** Conserva el canal existente de cotización.
- **No: formulario o backend.** No forman parte del objetivo.
- **Sí: espacio reservado ante errores de imagen.** Evita cambios de distribución sin sustituir material.
- **No: respaldo con imágenes locales.** El usuario prefirió un mensaje de indisponibilidad.
- **Sí: retirar enlaces legales sin contenido.** Evita destinos que no corresponden a su etiqueta.
- **No: nuevas rutas, dependencias o persistencia.** El trabajo permanece centrado en la landing.

## 8. Riesgos identificados

| Riesgo                                                          | Mitigación                                                                 |
| --------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Imágenes remotas o base de Cloudinary no disponibles            | Reservar dimensiones y mostrar el mensaje acordado.                        |
| Texto blanco o variantes `dark:` residuales sobre fondos claros | Revisar todos los componentes visibles y verificar contraste.              |
| Cabecera fija que oculta destinos internos                      | Ajustar la compensación del desplazamiento y comprobar cada sección.       |
| Efecto coverflow que desborda en móvil                          | Revisar tamaños y contención a 360 y 768 px.                               |
| Compilación bloqueada por acceso a Google Fonts                 | Ejecutar el build con acceso a la fuente utilizada por `next/font/google`. |
| Desalineación entre menú y referencias de sección               | Conservar su correspondencia explícita en `src/app/page.tsx`.              |

## 9. Qué no incluye esta spec

No incluye nuevas páginas, formularios, backend, cambio de marca, contenido legal, nuevas integraciones de datos ni reparación del lint.
