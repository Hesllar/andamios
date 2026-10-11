# SPEC 04 — Galería, reseñas e integración global

> **Estado:** Aprobado
> **Depende de:** SPEC 01, SPEC 02, SPEC 03
> **Fecha:** 2026-10-11
> **Objetivo:** Adaptar la galería y las reseñas conservando sus interacciones y completar la activación global de la identidad industrial clara.

## 1. Alcance

### Incluido

- Rediseñar galería y reseñas usando los tokens y `RemoteImage` de SPEC 02.
- Conservar las 13 imágenes y los 19 registros de reseñas sin alterar su contenido.
- Mantener galería de escritorio con cuadrícula, rotaciones hover y ampliación.
- Concretar la ampliación como diálogo modal operable por teclado.
- Mantener coverflow, bucle y paginación de galería móvil con su configuración actual.
- Mantener cuadrícula de reseñas, diez registros iniciales y expansión desde `sm`.
- Mantener el carrusel móvil de reseñas con sus 19 registros y configuración actual.
- Aplicar errores de imagen a galería, ampliación y avatares remotos.
- Conservar las iniciales actuales únicamente en reseñas que ya carecen de avatar.
- Retirar `BackgroundScene`, `dark` y estilos racing al final de esta entrega.
- Ajustar la composición global y el espacio bajo la cabecera de 80 px.
- Verificar el conjunto completo a 360, 768 y 1440 px y en los límites responsive.

### Fuera de alcance

- Cambiar los textos comerciales fijados en SPEC 03.
- Añadir imágenes, autores, comentarios, puntuaciones o logos.
- Integrar Google Reviews dinámicamente.
- Eliminar los carruseles o sustituir coverflow por un carrusel plano.
- Añadir rutas, dependencias, backend, formularios, persistencia o selector de tema.
- Borrar componentes de fondo o carrusel sin uso como tarea de limpieza.
- Reparar lint o cambiar herramientas de instalación.

## 2. Diseño y comportamiento

### Galería de escritorio

- Conservar `images` en `Gallery.tsx` como lista compartida para ambas implementaciones.
- Mantener cuadrícula desde `lg` (1024 px) y las rotaciones alternas al pasar el cursor.
- Adaptar títulos, bordes, espacios y superficies a la paleta industrial.
- Representar miniaturas mediante controles con nombre accesible y foco visible.
- Permitir abrir una imagen con clic, Enter o Espacio.
- Mostrar la imagen ampliada en un diálogo modal por encima de cabecera y WhatsApp.
- El fondo oscurecido del modal sigue permitido para destacar la fotografía.
- Llevar el foco al control de cierre al abrir y mantenerlo dentro del modal.
- Cerrar con botón, Escape o clic en el fondo exterior a la imagen.
- No cerrar al interactuar con el contenido de la imagen.
- Devolver el foco a la miniatura que abrió el diálogo.
- El control de cierre permanece disponible aunque falle la imagen ampliada.
- Usar `RemoteImage` tanto en miniaturas como en ampliación.

### Galería móvil

- Mantener visible la implementación móvil por debajo de `lg`.
- Conservar `effect: coverflow`, cursor de arrastre, centrado y `slidesPerView: auto`.
- Conservar `rotate: 50`, `stretch: 0`, `depth: 100`, `modifier: 1` y `slideShadows: true`.
- Conservar `loop: true` y paginación activada.
- Mantener la anchura de diapositiva de la mitad del contenedor y alturas actuales de 350 px y 450 px desde `sm`.
- Contener el efecto para que no cause desplazamiento horizontal de la página.
- Adaptar bordes y paginación a la identidad clara.
- Reservar el espacio de cada diapositiva incluso ante errores de imagen.

### Reseñas

- Conservar todos los campos y el orden de los 19 elementos de `REVIEWS`.
- No corregir, resumir ni reescribir los comentarios o nombres.
- Mantener “Sin comentario” cuando el registro no tiene texto.
- Desde `sm` (640 px), mostrar inicialmente los primeros diez registros.
- Evitar que aparezcan brevemente los 19 registros antes de mostrar los diez iniciales.
- El botón **“¡Ver todas las reseñas!”** mostrará los 19 y dejará de aparecer tras activarlo.
- No introducir acción de contracción ni persistir la expansión.
- Por debajo de `sm`, mantener el carrusel con los 19 registros.
- Conservar `slidesPerView: 1`, `spaceBetween: 30` y `loop: true`.
- Conservar avance automático de 2000 ms, `disableOnInteraction: false` y `pauseOnMouseEnter: true`.
- Conservar paginación con `clickable: false`.
- Adaptar tarjetas, títulos y paginación al tema claro.
- Conservar los colores e iniciales de los registros que ya carecen de avatar.

### Fallos de imágenes

- Mostrar **“Imagen no disponible”** dentro del espacio reservado de fotografías de galería y ampliación.
- Reservar 40 × 40 px cuando falle un avatar remoto.
- Para el avatar fallido, mostrar el aviso junto al espacio, en el bloque del autor, de forma legible.
- No sustituir un avatar fallido por iniciales u otra imagen.
- Mantener iniciales existentes cuando `img` ya está vacío en el registro.
- Conservar autor, estrellas y comentario aunque falle el avatar.
- Mantener cada estado de fallo local y temporal según SPEC 02.

### Integración global final

- Realizar esta activación después de adaptar galería y reseñas.
- Desconectar `BackgroundScene` desde `layout.tsx` sin borrar su archivo.
- Retirar `className="dark"` del documento y conservar `lang="es"`.
- Conservar Montserrat, metadatos y composición de Footer y PopupWidget desde el layout.
- Sustituir el fondo global oscuro por blanco y el texto base por grafito.
- Retirar las reglas racing de `globals.css` sin retirar estilos ajenos al fondo.
- Mantener el fade-in existente, que no corresponde al fondo racing.
- Ajustar la reserva superior del contenido a la cabecera de 80 px, eliminando rellenos duplicados que produzcan huecos excesivos.
- Conservar la compensación de navegación de 96 px.
- Conservar el orden Portada → Servicios → Galería → Clientes → Reseñas → Pie.
- Corregir variantes de color residuales en componentes visibles, sin cambiar sus datos.

## 3. Modelo de datos

No se introduce un modelo de negocio ni persistencia.

Se reutilizan `images`, `REVIEWS`, `imageActive`, `showAllReviews` y las referencias de sección de `page.tsx`. La inicialización de reseñas mostradas debe representar diez registros desde el primer render de la cuadrícula.

El diálogo necesita conservar la referencia a la miniatura que lo abrió para restaurar su foco. Este estado es temporal. Los fallos de imagen continúan siendo locales a cada `RemoteImage`.

## 4. Archivos afectados

| Área                               | Archivos                                                                                                                                     |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Galería                            | `src/components/gallery/Gallery.tsx`, `src/components/gallery/GalleryDesktop.tsx`, `src/components/gallery/GalleryMobile.tsx`                |
| Reseñas                            | `src/components/clients/reviews/Reviews.tsx`, `src/components/clients/reviews/Widget.tsx`, `src/components/clients/reviews/style.module.css` |
| Activación global                  | `src/app/layout.tsx`, `src/app/globals.css`, `src/app/page.tsx`                                                                              |
| Ajuste final de espacio de portada | `src/components/hero/Hero.tsx`                                                                                                               |

`RemoteImage` y los componentes de navegación/contacto se reutilizan desde SPEC 02. No se crean nuevos archivos de implementación en esta entrega. No se modifica el contenido de `Stars.tsx` ni el archivo de `BackgroundScene`.

## 5. Plan de implementación

Cada paso deja la aplicación ejecutable. Los cambios de fondo global ocurren después de adaptar todos los componentes visibles.

1. **Adaptar el contenedor de galería.** Aplicar título y superficie clara conservando la lista de 13 fuentes y el breakpoint.
2. **Adaptar miniaturas de escritorio.** Usar controles semánticos, bordes claros y `RemoteImage`, conservando rotaciones hover.
3. **Convertir ampliación en diálogo.** Aplicar nombre accesible, capa superior y cierre mediante botón, Escape y fondo exterior.
4. **Completar gestión del foco.** Mover foco al abrir, mantenerlo dentro y restaurarlo a la miniatura al cerrar.
5. **Completar el fallo de ampliación.** Reservar espacio y mantener accesible el cierre cuando falle la fotografía.
6. **Adaptar galería móvil.** Conectar `RemoteImage` y actualizar presentación conservando todos los valores de Swiper definidos.
7. **Adaptar tarjetas de reseñas.** Aplicar tokens sin modificar los campos de `REVIEWS` ni el contenido de estrellas.
8. **Completar avatares.** Integrar el aviso junto al autor para fallos remotos y conservar iniciales cuando el registro no tiene imagen.
9. **Adaptar cuadrícula de reseñas.** Inicializar diez registros sin destello de los 19 y conservar la expansión mediante botón.
10. **Adaptar carrusel de reseñas.** Aplicar superficies y paginación claras manteniendo todos los valores y registros definidos.
11. **Activar la identidad global.** Desconectar `BackgroundScene`, retirar `dark`, sustituir colores base y retirar reglas racing en un cambio funcional conjunto.
12. **Completar composición final.** Ajustar reserva bajo cabecera y relleno de portada; conservar orden, referencias y compensación de 96 px.

## 6. Criterios de aceptación

### Datos y presentación

- [ ] Se conservan las 13 imágenes, sus fuentes y su orden en ambas galerías.
- [ ] Se conservan los 19 registros de reseñas con todos sus campos sin modificaciones.
- [ ] Se conservan estrellas, iniciales existentes y “Sin comentario” donde corresponde.
- [ ] Toda la landing usa la paleta industrial clara y conserva Montserrat, marca y recursos.
- [ ] `BackgroundScene` ya no se renderiza y el documento no fuerza `dark`.
- [ ] El fondo racing, destellos y brillos decorativos ya no aparecen.
- [ ] El orden de secciones coincide con el marco SPEC 01.

### Galería e imágenes

- [ ] Desde 1024 px se muestra cuadrícula y por debajo se muestra la galería móvil.
- [ ] Las miniaturas de escritorio conservan las rotaciones alternas hover.
- [ ] Clic, Enter y Espacio abren la ampliación correspondiente.
- [ ] El modal queda por encima de cabecera y botón flotante.
- [ ] El foco entra al cierre, permanece dentro y vuelve a la miniatura al cerrar.
- [ ] Botón de cierre, Escape y clic exterior cierran el modal; clic en la imagen no lo cierra.
- [ ] El modal sigue pudiendo cerrarse si falla su fotografía.
- [ ] La galería móvil conserva los valores de coverflow, bucle y paginación especificados.
- [ ] Al bloquear una miniatura, una imagen móvil y una ampliación, aparece “Imagen no disponible” sin colapsar su espacio.
- [ ] Al bloquear un avatar remoto, permanecen los 40 × 40 px y el aviso aparece junto al autor sin reemplazo por iniciales.
- [ ] Fallos de avatar no ocultan autor, estrellas o comentario ni descargan recursos de respaldo.

### Reseñas e integración

- [ ] Desde 640 px aparecen diez reseñas desde el primer render, sin mostrar brevemente las 19.
- [ ] El botón de expansión muestra los 19 registros y desaparece tras activarse.
- [ ] Recargar reinicia la expansión y los estados temporales de imagen.
- [ ] Por debajo de 640 px el carrusel conserva los 19 registros y todos los valores definidos de Swiper.
- [ ] El avance automático mantiene el intervalo de 2000 ms y la pausa al pasar el cursor.
- [ ] Los cuatro destinos de navegación siguen sin quedar ocultos bajo la cabecera.
- [ ] Todos los controles de navegación, contacto, ampliación y expansión tienen nombre accesible y foco visible.
- [ ] Todos los enlaces de cotización siguen apuntando a `https://wa.me/56962109122`.
- [ ] Se conservan redes sociales, crédito y año dinámico, y no aparecen enlaces legales sin contenido.
- [ ] La página no presenta desplazamiento horizontal ni superposición de contenido a 360, 768 y 1440 px.
- [ ] A 639/640 px y 1023/1024 px se muestra la implementación correspondiente sin duplicación visible.
- [ ] El botón flotante no impide usar controles esenciales.
- [ ] El texto normal alcanza contraste mínimo de 4,5:1.
- [ ] La landing funciona sin errores de ejecución en consola en el servidor de desarrollo.
- [ ] `npx next typegen` termina correctamente.
- [ ] `npx tsc --noEmit --incremental false` termina correctamente.
- [ ] `npm run build` termina correctamente con base de Cloudinary configurada y acceso a Google Fonts.
- [ ] Se verifica manualmente la landing completa, incluyendo teclado, responsive y bloqueo de solicitudes de imagen.

`npm run lint` queda excluido por utilizar `next lint`, eliminado en Next.js 16. No se introduce una suite automatizada como parte de estas entregas.

## 7. Decisiones tomadas y descartadas

- **Sí: preservar efectos y configuración de Swiper.** Son decisiones cerradas del marco aprobado.
- **No: sustituir coverflow o eliminar carruseles.** Fueron descartados por el usuario.
- **Sí: diálogo modal con gestión del foco.** Concreta la operación por teclado requerida.
- **Sí: capa superior al contacto y navegación.** Evita controles superpuestos en la ampliación.
- **Sí: fondo oscurecido en el modal.** Permite destacar la imagen sin reintroducir el fondo racing.
- **Sí: diez reseñas desde el primer render.** Concreta el estado inicial definido en SPEC 01.
- **No: contracción o persistencia de reseñas.** La interacción actual solo expande durante la sesión de página.
- **Sí: aviso de avatar junto al autor.** Mantiene legibles el mensaje y la tarjeta con un espacio de 40 × 40 px.
- **No: iniciales para avatares fallidos.** Solo se conservan en registros que ya carecen de imagen.
- **Sí: activar el fondo global al final.** Todas las secciones estarán adaptadas antes de retirar la presentación oscura.
- **No: borrar archivos sin uso.** Desconectar el fondo basta para cumplir el alcance.
- **No: nuevos datos o dependencias.** Se aprovechan los registros y herramientas actuales.

## 8. Riesgos identificados

| Riesgo                                                    | Mitigación                                                                                       |
| --------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Modal comparte nivel de capa con la cabecera actual       | Asignar una capa superior y comprobar que cabecera y WhatsApp no quedan sobre el diálogo.        |
| Foco perdido al cerrar o inaccesible dentro del diálogo   | Registrar la miniatura de apertura y comprobar el recorrido completo con teclado.                |
| Coverflow desborda en móvil                               | Contener el efecto y comprobar 360, 768 y los límites de `lg`.                                   |
| Avatar de Google deja de responder                        | Reservar 40 × 40 px y mostrar el aviso junto al autor.                                           |
| Colores blancos o `dark:` residuales sobre fondo claro    | Revisar componentes visibles y verificar contraste tras activar el fondo global.                 |
| CSS de paginación no alcanza elementos internos de Swiper | Verificar el estilo realmente aplicado y ajustar los selectores en los archivos de esta entrega. |
| Build no puede descargar Montserrat                       | Ejecutar con acceso a Google Fonts según los requisitos del proyecto.                            |

## 9. Qué no incluye esta spec

No incluye cambios de contenido comercial o testimonios, nuevos recursos, integración dinámica de reseñas, sustitución de efectos, nuevas rutas, backend, persistencia, selector de tema, limpieza de archivos sin uso o reparación de lint.
