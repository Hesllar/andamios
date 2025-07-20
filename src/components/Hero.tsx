import { Container } from "@/components/Container";

import { SwiperDesktop, SwiperMobile } from "./swiper";
interface Props {
  refSectionHero: React.RefObject<HTMLDivElement>;
}

export const Hero = ({ refSectionHero }: Props) => {
  return (
    <Container className="flex flex-wrap" refGeneric={refSectionHero}>
      <div className="flex items-center w-full lg:w-1/2">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Andamios J&V
          </h1>
          <p className="py-5 text-xl italic leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Brindamos un servicio integral, seguro y puntual, adaptado a cada
            proyecto. En Andamios J&V trabajamos con responsabilidad y
            compromiso, desde pequeñas obras hasta grandes construcciones.
          </p>
        </div>
      </div>
      {/* Formato desktop */}
      <div className="  sm:flex items-center justify-center w-full lg:w-1/2">
        <SwiperDesktop />
      </div>
      {/* Formato mobile */}
      <div className="flex items-center justify-center w-full">
        <SwiperMobile />
      </div>
    </Container>
  );
};
