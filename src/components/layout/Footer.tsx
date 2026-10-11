import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Container } from "@/components/ui";

export function Footer() {
  return (
    <footer className="relative border-t border-industrial-borderOnDark bg-industrial-footer text-industrial-onDark">
      <Container className="!pb-[calc(6rem+env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <p className="text-xl font-bold">Jaramillo Andamios Pro</p>
          </div>
          <div>
            <h2 className="text-base font-semibold">Cotización</h2>
            <a
              href="https://wa.me/56962109122"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-industrial-accent px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-industrial-accentHover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-industrial-highlight"
            >
              Cotizar por WhatsApp
            </a>
          </div>
          <div>
            <h2 className="text-base font-semibold">Síguenos</h2>
            <div className="mt-4 flex gap-3 text-industrial-mutedOnDark">
              <a
                href="https://web.facebook.com/profile.php?id=61588199405677"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:text-industrial-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-industrial-highlight"
              >
                <span className="sr-only">Facebook</span>
                <FaFacebook size={26} aria-hidden="true" focusable="false" />
              </a>
              <a
                href="https://www.instagram.com/jaramilloandamiospro/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:text-industrial-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-industrial-highlight"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram size={26} aria-hidden="true" focusable="false" />
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 border-t border-industrial-borderOnDark pt-6 text-center text-sm leading-relaxed text-industrial-mutedOnDark">
          Copyright © {new Date().getFullYear()}. Desarrollado por{" "}
          <a
            href="https://www.linkedin.com/in/hesllar-linzmayer-8665a31a0/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm font-medium underline underline-offset-4 transition-colors hover:text-industrial-highlight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-industrial-highlight"
          >
            Hesllar Linzmayer.
          </a>
        </p>
      </Container>
    </footer>
  );
}
