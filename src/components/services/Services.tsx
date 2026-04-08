import Image from "next/image";
import React from "react";
import { Container } from "@/components/ui";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface Props {
  refSectionServices: React.RefObject<HTMLDivElement | null>;
}

const services = [
  {
    id: 1,
    title: "Armado y desmontaje",
    description: `Servicio especializado en montaje y desmontaje de andamios tipo
              Euro, con seguridad, eficiencia y cumplimiento en cada proyecto.`,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608785/img2_whfxee.webp`,
  },
  {
    id: 2,
    title: "Arriendo de andamios",
    description: `Arriendo de andamios Euro certificados, ideales para obras que
              requieren seguridad, estabilidad y eficiencia.`,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608785/img2_whfxee.webp`,
  },
];

export const Services = ({ refSectionServices }: Props) => {
  return (
    <Container
      className="flex flex-col items-center gap-16"
      refGeneric={refSectionServices}
    >
      <div className="flex items-center gap-4 w-full">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange-500/50" />
        <h2 className="text-3xl font-bold text-white tracking-wide uppercase px-2">
          Nuestros servicios
        </h2>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange-500/50" />
      </div>
      <div className="flex flex-wrap w-full justify-around gap-6 lg:gap-0">
        {services.map((service) => (
          <div
            key={service.id}
            className="
            bg-[#1a1c27]/80 backdrop-blur-sm border border-orange-500/20 shadow-2xl shadow-black/50 rounded-lg h-fit w-full
            ease-in-out duration-300
            sm:max-w-sm sm:h-[650px]
            hover:lg:scale-105 hover:border-orange-500/50"
          >
            <div className="relative w-full h-[350px] sm:h-2/3 rounded-t-lg overflow-hidden">
              <Image
                src={service.src}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-between px-4 py-2 h-auto sm:h-2/6">
              <h5 className="text-white font-bold text-2xl tracking-tight mb-2">
                {service.title}
              </h5>

              <p className="font-normal text-gray-300 mb-3">
                {service.description}
              </p>
              <Link
                href="https://wa.me/56962109122"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center gap-2 text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 focus:ring-4 focus:ring-orange-500/30
                font-medium rounded-lg text-lg px-3 py-3 items-center shadow-lg shadow-orange-600/20 transition-all duration-200"
              >
                Contactar
                <FaArrowRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};
