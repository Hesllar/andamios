import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function PopupWidget() {
  return (
    <Link
      href="https://wa.me/56962109122"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cotizar por WhatsApp"
      className="fixed bottom-[calc(1rem+env(safe-area-inset-bottom))] right-[calc(1rem+env(safe-area-inset-right))] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-sm transition-colors hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-industrial-accent sm:h-16 sm:w-16"
    >
      <FaWhatsapp
        size={32}
        aria-hidden="true"
        focusable="false"
      />
    </Link>
  );
}
