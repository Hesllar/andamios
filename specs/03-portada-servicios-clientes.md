# SPEC 03 — Portada, servicios y clientes

> **Estado:** Aprobado
> **Depende de:** SPEC 01, SPEC 02
> **Fecha:** 2026-10-11
> **Objetivo:** Rediseñar la portada, los servicios y los logos de clientes con la identidad industrial y los textos comerciales acordados.

## 1. Alcance

### Incluido

- Rediseñar `Hero`, `Services` y `OurClients` sobre superficies claras.
- Reutilizar los tokens, `Container` y `RemoteImage` de SPEC 02.
- Conservar nombre comercial, Montserrat y recursos actuales.
- Fijar los textos exactos definidos en esta spec.
- Mantener una imagen estática en portada.
- Presentar arriendo y montaje/desmontaje como dos servicios diferenciados.
- Mantener explícito el carácter opcional del montaje/desmontaje.
- Conservar los dos logos de clientes y su orden actual.
- Mantener botones de cotización y referencias de navegación existentes.
- Aplicar el aviso de error a portada, fotografías de servicios y logos remotos.
- Verificar las tres secciones a 360, 768 y 1440 px.

### Fuera de alcance

- Rediseñar navegación, pie, botón flotante, galería o reseñas.
- Retirar el fondo racing, `BackgroundScene` o `dark`: corresponde a SPEC 04.
- Reactivar carruseles comentados de portada.
- Cambiar fuentes de imágenes, logos o marca.
- Añadir precios, estadísticas, certificaciones o garantías nuevas.
- Añadir rutas, dependencias, formularios, backend o persistencia.
- Modificar testimonios o integrar datos dinámicos.

## 2. Diseño y comportamiento

### Portada

- Usar composición de dos columnas desde `lg` y una columna por debajo.
- Presentar texto primero e imagen después en móvil.
- Mantener una imagen grande usando la fuente actual de `images` en `Hero.tsx`.
- Conservar Jaramillo Andamios Pro como nombre visible junto al mensaje principal.
- Usar exactamente este encabezado principal: **“Arriendo de andamios para tu proyecto”**.
- Usar exactamente esta introducción: **“Jaramillo Andamios Pro ofrece arriendo de andamios y montaje opcional para obras de construcción, mantención y proyectos industriales”**.
- Mantener **“Solicitar cotización”** como acción principal.
- Retirar gradientes de texto y brillos decorativos de la presentación anterior.
- Declarar fondo y texto claros propios mientras el documento conserva el fondo oscuro durante la transición.

### Servicios

Mostrar estos títulos y textos, sin añadir afirmaciones:

| Título               | Texto                                                                                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Arriendo de andamios | Andamios tipo europeo, modulares y de armado rápido, para trabajos en altura. Equipos certificados, fabricados con materiales resistentes y mantenidos periódicamente. |
| Montaje y desmontaje | Servicio opcional de montaje y desmontaje de nuestros andamios, realizado por personal capacitado y adaptado a los requerimientos de cada proyecto.                    |

- Reutilizar las fotografías e iconos existentes de `Services.tsx`.
- Mantener el destino `https://wa.me/56962109122` en cada bloque.
- Usar **“Solicitar cotización”** en ambos botones.
- Usar blanco y gris claro para diferenciar bloques, sin brillos ni sombras naranja intensas.
- Permitir apilado responsive sin modificar la información comercial definida.
- La referencia a equipos certificados proviene del texto existente; no representa una certificación nueva.

### Clientes

- Conservar los dos elementos de `clients`, sus fuentes y su orden.
- Presentar logos con tamaño adaptable sobre superficies claras.
- Mantener el encabezado de clientes y su referencia de sección.
- No añadir nombres, clientes o logotipos nuevos.

### Imágenes y estados

- Importar `RemoteImage` directamente y usarlo para todas las imágenes remotas de estas tres secciones.
- Reservar las dimensiones o relación de aspecto previstas durante carga y fallo.
- Mostrar **“Imagen no disponible”** dentro del espacio de una fotografía o logo fallido.
- No descargar una imagen de respaldo.
- Conservar operativos los botones de cotización aunque falle una imagen.
- Mantener los recursos locales mediante `next/image` cuando corresponda.

## 3. Modelo de datos

No se introduce un modelo de negocio ni persistencia.

Se reutilizan `images` de `Hero.tsx`, las fuentes actuales de fotografías e iconos de `Services.tsx` y `clients` de `OurClients.tsx`.

Las entradas de cada sección conservan las referencias `refSectionHero`, `refSectionServices` y `refSectionOurClients`. El estado de error de cada imagen permanece en `RemoteImage` según SPEC 02.

## 4. Archivos afectados

| Área      | Archivos                                |
| --------- | --------------------------------------- |
| Portada   | `src/components/hero/Hero.tsx`          |
| Servicios | `src/components/services/Services.tsx`  |
| Clientes  | `src/components/clients/OurClients.tsx` |

Se reutilizan `Container`, `RemoteImage`, los tokens y las referencias de `page.tsx`. No se crean nuevos archivos de implementación en esta entrega.

## 5. Plan de implementación

Cada paso deja la aplicación ejecutable y mantiene los destinos de navegación.

1. **Actualizar texto y superficie de portada.** Aplicar fondo claro, colores compartidos y encabezado e introducción exactos.
2. **Completar composición de portada.** Presentar texto e imagen en el orden responsive acordado y conectar la imagen a `RemoteImage`.
3. **Rediseñar arriendo.** Aplicar su texto exacto, superficie clara, fotografía existente y cotización.
4. **Rediseñar montaje y desmontaje.** Sustituir el título “Otros servicios”, aplicar su texto exacto y mantener la cotización.
5. **Completar imágenes de servicios.** Usar `RemoteImage` en ambas fotografías con reserva de espacio y aviso interior.
6. **Rediseñar clientes.** Aplicar superficie y título claros con los dos logos actuales y estado de fallo compartido.

## 6. Criterios de aceptación

- [ ] Portada, servicios y clientes usan los tokens de SPEC 02 y superficies claras propias.
- [ ] Se conserva Montserrat y aparece el nombre Jaramillo Andamios Pro.
- [ ] El encabezado y la introducción coinciden con los textos exactos definidos.
- [ ] La portada tiene dos columnas desde `lg` y muestra texto antes de imagen por debajo.
- [ ] La portada conserva una imagen estática con la fuente actual.
- [ ] Los servicios se titulan “Arriendo de andamios” y “Montaje y desmontaje”.
- [ ] Los textos de servicios coinciden con los acordados y el montaje figura como opcional.
- [ ] Se conservan las fotografías e iconos actuales y los dos logos de clientes.
- [ ] Los tres botones de estas secciones se titulan “Solicitar cotización” y apuntan al WhatsApp actual.
- [ ] Todos los botones de cotización son operables por teclado y tienen foco visible.
- [ ] Las referencias de Inicio, Servicios y Clientes siguen funcionando con la compensación de SPEC 02.
- [ ] Al bloquear una imagen de portada, una fotografía de servicios y un logo, cada bloque reserva su espacio y muestra “Imagen no disponible”.
- [ ] El fallo de esas imágenes no impide utilizar los botones de contacto ni solicita recursos de respaldo.
- [ ] Las tres secciones no presentan desplazamiento horizontal ni superposición de contenido a 360, 768 y 1440 px.
- [ ] El texto normal alcanza un contraste mínimo de 4,5:1.
- [ ] La galería y las reseñas pendientes siguen utilizables sobre la presentación global anterior.
- [ ] `npx next typegen` y `npx tsc --noEmit --incremental false` terminan correctamente.
- [ ] `npm run build` termina correctamente con el entorno de imágenes y Google Fonts disponible.
- [ ] Se verifican manualmente las tres secciones y sus errores de imagen en el servidor de desarrollo, sin errores de ejecución en consola.

`npm run lint` queda excluido por la incompatibilidad existente con Next.js 16.

## 7. Decisiones tomadas y descartadas

- **Sí: textos comerciales exactos.** Evita que el resumen se improvise durante la implementación.
- **Sí: conservar afirmaciones del contenido actual.** La referencia a equipos certificados ya existía.
- **No: afirmaciones o certificaciones nuevas.** No pertenecen al alcance aprobado.
- **Sí: montaje opcional visible.** Mantiene la distinción comercial actual.
- **Sí: imagen estática de portada.** Respeta la decisión de SPEC 01.
- **No: reactivar Swiper de portada.** No forma parte del rediseño acordado.
- **Sí: componente compartido de error.** Reutiliza la solución de SPEC 02.
- **No: recursos de respaldo.** El usuario eligió el mensaje de indisponibilidad.
- **Sí: conservar recursos y referencias.** Evita cambios en datos comerciales y navegación.
- **No: activar el fondo global todavía.** Galería y reseñas se adaptarán en SPEC 04.

## 8. Riesgos identificados

| Riesgo                                       | Mitigación                                                                                  |
| -------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Imágenes o base de Cloudinary no disponibles | Reservar espacio y comprobar el mensaje bloqueando las solicitudes de cada tipo de recurso. |
| Cambios de texto introducen nuevas promesas  | Usar los textos exactos acordados y conservar solo las afirmaciones ya existentes.          |
| Texto blanco heredado en servicios           | Declarar colores de títulos y párrafos explícitamente y verificar contraste.                |

## 9. Qué no incluye esta spec

No incluye galería, reseñas, activación global del tema claro, nuevos recursos, nuevas promesas comerciales, carruseles de portada, rutas, backend o persistencia.
