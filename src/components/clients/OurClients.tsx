import Image from "next/image";
import clsx from "clsx";

import imgClienteCarrera from "../../../public/img/img_cliente_los_carrera.webp";
import imgClienteEsval from "../../../public/img/img_cliente_esval.webp";
import { Container } from "../Container";

const clients = [
  {
    path: imgClienteCarrera,
  },
  {
    path: imgClienteEsval,
  },
];

export const OurClients = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center gap-4">
        <div className="text-3xl text-center text-gray-700 dark:text-white">
          <h2 className="font-semibold">Nuestros Clientes</h2>
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
          {/* <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
            </div> */}

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
