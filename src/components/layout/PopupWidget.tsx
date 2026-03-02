import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export function PopupWidget() {
  return (
    <Link
      href="https://wa.me/56962109122"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp
        color="white"
        size={24}
        className="p-1 fixed z-40 flex items-center justify-center transition duration-300 rounded-full shadow-lg right-5 bottom-5 w-16 h-16 focus:outline-none bg-green-600 cursor-pointer "
      />
    </Link>
  );
}
