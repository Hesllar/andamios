# Andamios J&V

Sitio web de **Andamios J&V**, empresa de arriendo de andamios y servicios de construcción en Chile. Desarrollado con Next.js, React y Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16
- **UI:** React 19 + Tailwind CSS 3
- **Lenguaje:** TypeScript
- **Componentes:** Headless UI, Swiper, React Icons
- **Tema oscuro:** next-themes

## Estructura del proyecto

```
src/
├── app/                        # App Router (layout, page, estilos globales)
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/                     # Componentes reutilizables (Container, ThemeToggle)
│   ├── layout/                 # Componentes de estructura (Navbar, Footer, PopupWidget)
│   ├── hero/                   # Sección hero con carruseles (Swiper)
│   ├── services/               # Sección de servicios
│   ├── gallery/                # Galería de imágenes (desktop + mobile)
│   └── clients/                # Sección de clientes
├── hooks/                      # Hooks personalizados
│   └── useScrollToElement.ts
└── types.ts                    # Tipos compartidos
```

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
git clone <repo-url>
cd andamios
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build de producción

```bash
npm run build
npm start
```

## Lint

```bash
npm run lint
```

## Autor

Desarrollado por [Hesllar Linzmayer](https://www.linkedin.com/in/hesllar-linzmayer-8665a31a0/)
