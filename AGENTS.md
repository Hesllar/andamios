# Repository guidance

## Setup and verification
- Use Node.js >=20.9.0: the locked Next.js 16 dependency requires it despite README.md saying Node 18+.
- Install with `npm ci` using package-lock.json.
- Set `NEXT_PUBLIC_URL_BASE_CLOUDINARY` from .env.example in .env.local before development or builds. Use a Cloudinary delivery base ending in `/image/upload`, without a trailing slash; components append `/q_auto/f_auto/...` and have no fallback.
- Development: `npm run dev`. Production: `npm run build`, then `npm start`. The build uses `next/font/google` for Montserrat and requires access to Google Fonts.
- Focused type checking: run `npx next typegen`, then `npx tsc --noEmit --incremental false`. Next generates route types referenced by next-env.d.ts; do not edit that file manually.
- `npm run lint` is currently broken: it invokes `next lint`, removed in Next 16. The existing .eslintrc is also legacy configuration for ESLint 9; there is no working flat config.
- No automated test suite or test script is configured. For UI changes, verify the affected desktop and mobile behavior in the dev server.

## App wiring and gotchas
- src/app/page.tsx is a client component that assembles the homepage and owns section refs. Navbar navigation indexes into those refs: keep its labels aligned with Hero, Services, Gallery, and OurClients.
- src/app/layout.tsx owns BackgroundScene, Footer, and PopupWidget; Navbar belongs to the homepage.
- The root HTML is hardcoded to Spanish and dark mode. ThemeToggle exists, but no ThemeProvider is wired into the app.
- Hero currently renders a static image. Its SwiperDesktop/SwiperMobile integrations are commented out despite the README describing a carousel.
- Gallery.tsx supplies one image list to separate desktop and mobile implementations: desktop uses a grid/lightbox; mobile uses Swiper, switching at Tailwind's `lg` breakpoint.
- next/image remote sources are restricted in next.config.ts to HTTPS res.cloudinary.com and lh3.googleusercontent.com; update that configuration when introducing another host.
