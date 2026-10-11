# SPEC 02 — Base visual, navegación y contacto

> **Estado:** Aprobado
> **Depende de:** SPEC 01
> **Fecha:** 2026-10-11
> **Objetivo:** Preparar la identidad industrial compartida y rediseñar la navegación y el contacto de la landing sin interrumpir las secciones pendientes.

## 1. Alcance

### Incluido

- Definir tokens de color bajo `industrial` en `tailwind.config.ts`, usando Tailwind CSS 3 actual.
- Conservar Montserrat, nombre comercial y logo local.
- Mantener `Container` como contenedor compartido con sus referencias de sección.
- Crear `src/components/ui/RemoteImage.tsx` para los estados de error acordados.
- Rediseñar `Navbar`, `Footer` y `PopupWidget` con superficies claras y texto grafito.
- Mantener Inicio, Servicios, Galería y Clientes asociados a las referencias existentes.
- Fijar cabecera de 80 px y compensación de desplazamiento de 96 px.
- Incorporar cotización en la cabecera y en el pie.
- Conservar el botón flotante verde y todos los destinos comerciales actuales.
- Retirar los enlaces de Términos y Privacidad que apuntan al inicio.
- Verificar los componentes de esta entrega a 360, 768 y 1440 px.

### Fuera de alcance

- Rediseñar portada, servicios, clientes, galería o reseñas.
- Retirar `dark`, `BackgroundScene` o el fondo racing global: corresponde al final de SPEC 04.
- Aplicar el nuevo componente de imagen a las secciones: corresponde a SPEC 03 y SPEC 04.
- Nuevas rutas, dependencias, formularios, backend, persistencia o selector de tema.
- Cambiar la marca, los recursos, los destinos de contacto o el contenido legal.
- Reparar lint o cambiar el gestor de paquetes.

## 2. Diseño y comportamiento

### Tokens compartidos

| Token                    | Valor     | Uso                                     |
| ------------------------ | --------- | --------------------------------------- |
| `industrial.background`  | `#FFFFFF` | Fondo principal y superficies blancas.  |
| `industrial.surface`     | `#F3F4F6` | Superficies secundarias.                |
| `industrial.text`        | `#1F2937` | Texto principal grafito.                |
| `industrial.muted`       | `#4B5563` | Texto secundario.                       |
| `industrial.accent`      | `#C2410C` | Botones de cotización con texto blanco. |
| `industrial.accentHover` | `#9A3412` | Estado hover de cotización.             |
| `industrial.border`      | `#D1D5DB` | Bordes discretos.                       |

Mantener `green-600` en el botón flotante de WhatsApp. Usar sombras suaves, foco visible y jerarquía consistente de títulos.

Los componentes rediseñados declaran su propia superficie clara y color de texto. El fondo global oscuro continúa durante las entregas parciales. No modificar globalmente reglas de color de las secciones pendientes.

### Contenedor

- Conservar `children`, `className` y `refGeneric` de `Container`.
- Mantener centrado y ancho responsive mediante el contenedor de Tailwind.
- Conservar el relleno horizontal actual: 16 px por debajo de `sm` y 64 px desde `sm`.
- Conservar el espaciado vertical actual: 40 px por debajo de `sm` y 32 px desde `sm`.
- Permitir ajustes locales de cada sección mediante `className`.

### Cabecera y navegación

- Cabecera fija superior de 80 px en móvil y escritorio.
- No variar su altura o relleno al pasar el cursor.
- Mantener el cambio entre menú móvil y escritorio en `lg` (1024 px).
- Presentar el desplegable móvil debajo de la cabecera, sin aumentar sus 80 px.
- Mostrar acceso a `https://wa.me/56962109122` en escritorio y en el desplegable móvil.
- Usar botones o enlaces semánticos en lugar de los `span` clicables actuales.
- Mantener el logo como enlace al inicio.
- El botón de menú tendrá nombre accesible, estado expandido y foco visible.
- Cerrar el menú al seleccionar cualquiera de los cuatro destinos.
- Desplazar a la referencia correspondiente con una compensación de 96 px.
- Conservar la llamada a `useScrollToElement`; no requiere modificar el hook.
- La compensación deja 16 px de separación entre la cabecera y el inicio de la sección.

### Pie y botón flotante

- Mostrar Jaramillo Andamios Pro, cotización y redes sociales sobre superficie clara.
- Mantener Facebook: `https://web.facebook.com/profile.php?id=61588199405677`.
- Mantener Instagram: `https://www.instagram.com/jaramilloandamiospro/`.
- Mantener el crédito a Hesllar Linzmayer y su enlace de LinkedIn actual.
- Conservar el año dinámico con `new Date().getFullYear()`.
- Eliminar tanto los enlaces legales como el espacio de la columna que ocupaban.
- El enlace flotante tendrá nombre accesible y foco visible en el enlace mismo.
- Evitar que el botón flotante cubra controles esenciales.
- La futura ampliación de galería de SPEC 04 se mostrará por encima del botón y de la cabecera.

### Contrato de `RemoteImage`

- Será un componente cliente que reutilice `next/image` y sus propiedades de fuente, dimensiones, `fill`, `sizes`, prioridad y ajuste visual.
- Se importará directamente desde `@/components/ui/RemoteImage`.
- Reservará las dimensiones previstas durante carga y error.
- En error, mostrará exactamente **“Imagen no disponible”**, sin descargar un recurso de respaldo.
- Para fotografías y logos, el aviso estará dentro del espacio reservado.
- Permitirá presentar el aviso junto a la imagen para los avatares de SPEC 04.
- El modo de avatar conservará un espacio de 40 × 40 px y colocará el aviso en el bloque del autor.
- El fallo de una instancia no modificará otras imágenes o los controles de contacto.
- El estado de error será temporal y se reiniciará al recargar la página.
- No se aplicará al logo local ni convertirá un avatar fallido en iniciales.

## 3. Modelo de datos

No se introduce un modelo de negocio ni persistencia.

Se reutilizan `navigation`, `sectionRef` y `openMenuMobile` de `Navbar`, y los enlaces existentes de `Footer` y `PopupWidget`.

`RemoteImage` utilizará un estado local booleano para representar el fallo de carga. Sus entradas serán las propiedades de `next/image` y la presentación del aviso dentro del espacio o junto a él. No almacenará estado fuera de su instancia.

## 4. Archivos afectados

| Área                             | Archivos                                                                    |
| -------------------------------- | --------------------------------------------------------------------------- |
| Tokens                           | `tailwind.config.ts`                                                        |
| Contenedor                       | `src/components/ui/Container.tsx`                                           |
| Imagen compartida, nuevo archivo | `src/components/ui/RemoteImage.tsx`                                         |
| Navegación                       | `src/components/layout/Navbar.tsx`                                          |
| Pie y contacto                   | `src/components/layout/Footer.tsx`, `src/components/layout/PopupWidget.tsx` |

Se reutilizan `src/app/page.tsx` y `src/hooks/useScrollToElement.ts` sin cambiar sus contratos. La activación global de `layout.tsx` y `globals.css` pertenece a SPEC 04.

## 5. Plan de implementación

Cada paso deja la aplicación ejecutable. La presentación mixta durante las entregas parciales es intencional.

1. **Añadir tokens.** Incorporar la paleta `industrial` sin reemplazar los colores usados por componentes pendientes.
2. **Conservar el contrato del contenedor.** Mantener anchos, rellenos y referencias al reutilizar `Container` en navegación y contacto; ajustar la composición local si lo requiere la presentación responsive.
3. **Crear la imagen compartida.** Implementar la reserva de espacio y aviso interior ante error en `RemoteImage`.
4. **Completar el modo de avatar.** Permitir el aviso junto al espacio reservado sin introducir imágenes de respaldo.
5. **Fijar la cabecera.** Aplicar superficie clara, texto grafito y altura de 80 px sin hover que modifique medidas.
6. **Adaptar navegación de escritorio.** Sustituir los destinos clicables por controles semánticos y aplicar compensación de 96 px.
7. **Adaptar navegación móvil.** Mantener el desplegable bajo la cabecera, estado accesible y cierre tras selección.
8. **Añadir cotización a navegación.** Incorporar el destino actual de WhatsApp en las dos presentaciones.
9. **Reorganizar el pie.** Retirar enlaces legales y presentar marca, cotización y redes actuales.
10. **Completar el crédito.** Aplicar texto legible y conservar autor, destino y año dinámico.
11. **Adaptar el botón flotante.** Mantener su verde y destino, con nombre accesible, foco y colocación utilizable.

## 6. Criterios de aceptación

- [ ] Existen los siete tokens `industrial` con los valores definidos.
- [ ] Los componentes de esta entrega usan superficies claras y texto legible sin depender del fondo global.
- [ ] `Container` conserva referencias y no provoca desplazamiento horizontal a 360, 768 y 1440 px.
- [ ] La cabecera mide 80 px y no cambia al pasar el cursor.
- [ ] Las etiquetas del menú llevan a las cuatro referencias correctas usando compensación de 96 px.
- [ ] El menú móvil puede abrirse, cerrarse y cerrarse tras seleccionar un destino.
- [ ] Los destinos de navegación se pueden activar con teclado y tienen foco visible.
- [ ] La cotización de cabecera, pie y botón flotante apunta al WhatsApp actual.
- [ ] Se conservan el logo, la marca y los destinos de redes sociales y crédito.
- [ ] El pie conserva el año dinámico y no contiene enlaces de Términos o Privacidad.
- [ ] El botón flotante tiene nombre accesible y no bloquea controles esenciales.
- [ ] `RemoteImage` reserva dimensiones y admite aviso interior y aviso junto a un avatar de 40 × 40 px.
- [ ] El error de imagen no solicita un recurso de respaldo ni afecta otras instancias.
- [ ] El texto normal de los componentes rediseñados alcanza contraste mínimo de 4,5:1.
- [ ] `dark`, `BackgroundScene` y el fondo global siguen disponibles para las secciones pendientes.
- [ ] `npx next typegen` y `npx tsc --noEmit --incremental false` terminan correctamente.
- [ ] `npm run build` termina correctamente con la base de Cloudinary configurada y acceso a Google Fonts.
- [ ] Se verifica manualmente navegación, contacto y presentación en el servidor de desarrollo, sin errores de ejecución en consola.

El error visual de `RemoteImage` se comprobará al integrarlo en las secciones de SPEC 03 y SPEC 04. `npm run lint` queda excluido por utilizar `next lint`, eliminado en Next.js 16.

## 7. Decisiones tomadas y descartadas

- **Sí: división en tres entregas.** Reduce el tamaño de los contratos conservando SPEC 01 como marco aprobado.
- **Sí: tokens exactos.** Evita variaciones de paleta entre componentes.
- **Sí: componente compartido de imagen.** Unifica reserva de espacio y estado de fallo.
- **No: duplicar manejo de errores por sección.** Añade divergencias innecesarias.
- **Sí: 80 px de cabecera y 96 px de compensación.** Define una separación constante de 16 px.
- **No: medir dinámicamente la cabecera.** La altura fija acordada permite reutilizar el hook actual.
- **Sí: superficies claras locales durante la transición.** Mantiene legibles las secciones todavía oscuras.
- **No: activar el tema global en esta entrega.** El cambio se reserva para el final de SPEC 04.
- **Sí: WhatsApp y redes actuales.** Conserva los canales aprobados.
- **No: nuevas rutas, dependencias o persistencia.** No son necesarias para esta entrega.

## 8. Riesgos identificados

| Riesgo                                                   | Mitigación                                                                                                       |
| -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Colores globales oscuros heredados en nuevos componentes | Declarar superficie y color de texto en cada componente rediseñado.                                              |
| Ajustes compartidos afectan secciones pendientes         | Mantener el contrato de `Container` y resolver la presentación responsive desde los componentes de esta entrega. |
| Menú y referencias quedan desalineados                   | Conservar su orden explícito en `page.tsx` y comprobar los cuatro destinos.                                      |
| Build bloqueado por Google Fonts                         | Verificar con acceso a la fuente usada por `next/font/google`.                                                   |

## 9. Qué no incluye esta spec

No incluye rediseño de secciones de contenido, activación global del tema claro, cambios comerciales, contenido legal, nuevas rutas, backend, persistencia o reparación de lint.
