import Link from "next/link";
import Image from "next/image";

import { FaArrowRight } from "react-icons/fa";
import { Container } from "@/components/ui";
import { SwiperDesktop } from "./SwiperDesktop";
import { SwiperMobile } from "./SwiperMobile";

const images = [
  {
    id: 1,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608789/andamios-2d_ekdlec.webp`,
  },
];

interface Props {
  refSectionHero: React.RefObject<HTMLDivElement | null>;
}

export const Hero = ({ refSectionHero }: Props) => {
  return (
    <Container className="flex flex-wrap" refGeneric={refSectionHero}>
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-sm font-semibold tracking-widest uppercase">
            Arriendos &amp; Montaje
          </div>
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-white lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Jaramillo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">
              Andamios Pro
            </span>
          </h1>
          <p className="py-5 text-xl leading-normal text-gray-200 lg:text-xl xl:text-2xl">
            Brindamos un servicio integral, seguro y puntual, adaptado a cada
            proyecto. Trabajamos con responsabilidad y compromiso, desde
            pequeñas obras hasta grandes construcciones.
          </p>
          <div className="w-full flex justify-center lg:justify-start">
            <Link
              href="https://wa.me/56962109122"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center w-full md:w-[90%] lg:w-auto  px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg shadow-lg shadow-orange-600/30 hover:from-orange-500 hover:to-amber-500 transition-all duration-200"
            >
              <div className="inline-flex items-center gap-2">
                <span>Solicitar cotización</span>
                <FaArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="  sm:flex items-center justify-center w-full lg:w-1/2">
        {/* <SwiperDesktop /> */}

        {images.map((img) => (
          <Image
            key={img.id}
            src={img.src}
            alt={`Andamios ${img.id}`}
            width={400}
            height={400}
          />
        ))}
      </div>
      {/* Mobile */}
      {/* <div className="flex items-center justify-center w-full">
        <SwiperMobile />
      </div> */}
    </Container>
  );
};
