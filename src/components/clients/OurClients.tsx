import Image from "next/image";
import clsx from "clsx";

import { Container } from "@/components/ui";

interface Props {
  refSectionOurClients: React.RefObject<HTMLDivElement | null>;
}

const clients = [
  {
    id: 1,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608790/img_cliente_los_carrera_ahtjrd.webp`,
  },
  {
    id: 2,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608789/img_cliente_esval_n7kr8a.webp`,
  },
];

export const OurClients = ({ refSectionOurClients }: Props) => {
  return (
    <Container refGeneric={refSectionOurClients}>
      <div className="flex flex-col justify-center gap-4">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange-500/50" />
          <h2 className="text-3xl font-bold text-white tracking-wide uppercase px-2">
            Nuestros Clientes
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange-500/50" />
        </div>
        <div
          className={clsx(
            "flex flex-wrap justify-center gap-5 mt-10 items-center",
            {
              "md:justify-around": clients.length > 3,
              "justify-center": clients.length <= 3,
              "max-w-6xl mx-auto": true,
            },
          )}
        >
          {clients.map((client) => (
            <div
              key={client.id}
              className="p-4 bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/15 transition-all duration-200"
            >
              <Image
                src={client.src}
                alt={`Cliente ${client.id}`}
                width={300}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};
