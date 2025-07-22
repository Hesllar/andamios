import Image from "next/image";
import React from "react";
import img2 from "../../../public/img/img2.webp";
import { Container } from "../Container";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface Props {
  refSectionServices: React.RefObject<HTMLDivElement>;
}

const services = [
  {
    title: "Armado y desmontaje",
    description: `Servicio especializado en montaje y desmontaje de andamios tipo
              Euro, con seguridad, eficiencia y cumplimiento en cada proyecto.`,
    image: img2,
  },
  {
    title: "Arriendo de andamios",
    description: `Arriendo de andamios Euro certificados, ideales para obras que
              requieren seguridad, estabilidad y eficiencia.`,
    image: img2,
  },
];

export const Services = ({ refSectionServices }: Props) => {
  return (
    <Container
      className="flex flex-col items-center gap-16"
      refGeneric={refSectionServices}
    >
      <div className=" w-full bg-gradient-to-b from-red-500 to-gray-200 rounded-lg">
        <h2 className=" text-3xl font-bold items-center text-center p-8 text-white dark:text-white">
          Nuestros servicios
        </h2>
      </div>
      <div className="flex flex-wrap w-full justify-around gap-6 lg:gap-0">
        {services.map((service) => (
          <div
            key={service.title}
            className="
            bg-white shadow-2xl border border-gray-200 rounded-lg h-fit
            ease-in-out duration-300
            sm:max-w-sm sm:h-[650px] dark:bg-gray-800 dark:border-gray-700
            hover:lg:scale-105"
          >
            <Image
              src={service.image}
              alt="img2"
              className="rounded-t-lg h-[200px] sm:h-2/3 object-cover sm:object-fill"
            />
            <div className="flex flex-col justify-between px-4 py-2 h-auto sm:h-2/6">
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                {service.title}
              </h5>

              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                {service.description}
              </p>
              <Link
                href="https://wa.me/56948166780"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 
                font-medium rounded-lg text-lg px-3 py-3 items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
