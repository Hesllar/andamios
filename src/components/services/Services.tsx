import Image from "next/image";
import Link from "next/link";

import { FaArrowRight } from "react-icons/fa";
import { IoIosConstruct } from "react-icons/io";

import { Container } from "@/components/ui";
import image from "../../../public/img/scaffolding.png";

interface Props {
  refSectionServices: React.RefObject<HTMLDivElement | null>;
}

// const services = [
//   {
//     id: 1,
//     title: "Armado y desmontaje",
//     description: `Servicio especializado en montaje y desmontaje de andamios tipo
//               Euro, con seguridad, eficiencia y cumplimiento en cada proyecto.`,
//     src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608785/img2_whfxee.webp`,
//   },
//   {
//     id: 2,
//     title: "Arriendo de andamios",
//     description: `Arriendo de andamios Euro certificados, ideales para obras que
//               requieren seguridad, estabilidad y eficiencia.`,
//     src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608785/img2_whfxee.webp`,
//   },
// ];

export const Services = ({ refSectionServices }: Props) => {
  return (
    <Container
      className="flex flex-col items-center gap-16"
      refGeneric={refSectionServices}
    >
      <div className="flex items-center gap-4 w-full">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange-500/50" />
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase px-2">
          Nuestros servicios
        </h2>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange-500/50" />
      </div>
      {/* <div className="flex flex-wrap w-full justify-around gap-6 lg:gap-0">
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
      </div> */}

      <div className="w-full flex flex-col  md:flex-row  xl:flex-col gap-8">
        <div>
          <div className="w-full xl:w-1/2 bg-orange-700 p-4 xl:rounded-tr-2xl xl:rounded-tl-xl flex justify-between items-center">
            <h3 className=" text-xl font-semibold">Arriendo de andamios</h3>
            <Image alt="image" src={image} width={40} height={40} />
          </div>
          <div className="flex">
            <div className="w-full p-4 flex flex-col gap-8 xl:justify-around xl:w-1/2 bg-orange-400/20 border border-orange-300 rounded-b-2xl xl:rounded-br-none xl:rounded-bl-2xl transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-500 hover:bg-orange-800/20">
              <p className="font-medium">
                Andamios tipo europeo de alta calidad, diseñados para ofrecer
                máxima seguridad y estabilidad en todo tipo de trabajos en
                altura. Fabricados con materiales resistentes y duraderos,
                ideales para uso en construcción, mantención y proyectos
                industriales. Sistema de armado rápido y sencillo, lo que
                permite optimizar tiempos y reducir costos en obra. Estructura
                modular adaptable a distintos espacios y requerimientos,
                brindando versatilidad en cada proyecto. Equipos certificados y
                mantenidos periódicamente, garantizando confiabilidad y
                cumplimiento de estándares de seguridad.
              </p>
              <div className="w-full flex justify-center ">
                <Link
                  href="https://wa.me/56962109122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center  w-full xl:w-1/2  px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg shadow-lg shadow-orange-600/30 hover:from-orange-500 hover:to-amber-500 transition-all duration-200"
                >
                  <div className="inline-flex items-center gap-2">
                    <span>Solicitar cotización</span>
                    <FaArrowRight size={14} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="w-1/2 hidden xl:flex">
              <Image
                alt=""
                src={`${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608788/img13_z32pyo.webp`}
                width={700}
                height={700}
                className="rounded-r-2xl "
              />
            </div>
          </div>
        </div>
        <div>
          <div className="w-full flex xl:justify-end">
            <div className=" w-full xl:w-1/2 bg-orange-700 p-4 xl:rounded-tl-2xl xl:rounded-tr-xl flex justify-between items-center">
              <h3 className="text-xl font-semibold">Otros servicios</h3>
              <IoIosConstruct fontSize={40} />
            </div>
          </div>
          <div className="flex">
            <div className="w-1/2 hidden xl:flex">
              <Image
                alt=""
                src={`${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608788/img13_z32pyo.webp`}
                width={700}
                height={700}
                className="rounded-l-2xl w-full"
              />
            </div>

            <div className="w-full p-4 flex flex-col gap-8 xl:justify-around xl:w-1/2 bg-orange-600/20 border border-orange-300 rounded-b-2xl xl:rounded-bl-none xl:rounded-br-2xl transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-orange-500 hover:bg-orange-800/20">
              <p className="font-medium">
                Ofrecemos el servicio de armado y desarme de nuestros andamios,
                realizado por personal capacitado para garantizar seguridad y
                eficiencia en cada proyecto. Este servicio es completamente
                opcional y puede adaptarse a los requerimientos del cliente.
              </p>
              <div className="w-full flex justify-center ">
                <Link
                  href="https://wa.me/56962109122"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center w-full xl:w-1/2 px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg shadow-lg shadow-orange-600/30 hover:from-orange-500 hover:to-amber-500 transition-all duration-200"
                >
                  <div className="inline-flex items-center gap-2">
                    <span>Solicitar cotización</span>
                    <FaArrowRight size={14} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
