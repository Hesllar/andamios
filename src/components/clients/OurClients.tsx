import Image from "next/image";
import clsx from "clsx";

import imgClienteCarrera from "../../../public/img/img_cliente_los_carrera.webp";
import imgClienteEsval from "../../../public/img/img_cliente_esval.webp";
import { Container } from "../Container";

interface Props {
  refSectionOueClients: React.RefObject<HTMLDivElement>;
}

const clients = [
  {
    path: imgClienteCarrera,
  },
  {
    path: imgClienteEsval,
  },
];

export const OurClients = ({ refSectionOueClients }: Props) => {
  return (
    <Container refGeneric={refSectionOueClients}>
      <div className="flex flex-col justify-center gap-4">
        <div className=" w-full bg-gradient-to-b from-gray-200 to-red-500 rounded-lg">
          <h2 className=" text-3xl font-bold items-center text-center p-8 text-white dark:text-white">
            Nuestros Clientes
          </h2>
        </div>
        <div
          className={clsx(
            "flex flex-wrap justify-center gap-5 mt-10 items-center",
            {
              "md:justify-around": clients.length > 3,
              "justify-center": clients.length <= 3,
              "max-w-6xl mx-auto": true,
            }
          )}
        >
          {clients.map((client, index) => (
            <div key={index} className="pt-2 text-gray-400 dark:text-gray-400">
              <Image src={client.path} alt={`Cliente ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
