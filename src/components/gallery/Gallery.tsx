"use client";
import { Container } from "@/components/ui";
import { GalleryDesktop } from "./GalleryDesktop";
import { GalleryMobile } from "./GalleryMobile";

import img1 from "../../../public/img/img1.webp";
import img2 from "../../../public/img/img2.webp";
import img3 from "../../../public/img/img3.webp";
import img4 from "../../../public/img/img4.webp";
import img5 from "../../../public/img/img5.webp";
import img6 from "../../../public/img/img6.webp";
import img7 from "../../../public/img/img7.webp";
import img8 from "../../../public/img/img8.webp";
import img9 from "../../../public/img/img9.webp";
import img10 from "../../../public/img/img10.webp";
import img11 from "../../../public/img/img11.webp";
import img12 from "../../../public/img/img12.webp";
import img13 from "../../../public/img/img13.webp";

interface Props {
  refSectionGallery: React.RefObject<HTMLDivElement | null>;
}

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
];

export const Gallery = ({ refSectionGallery }: Props) => {
  return (
    <>
      <Container
        className="flex flex-col justify-center gap-10"
        refGeneric={refSectionGallery}
      >
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange-500/50" />
          <h2 className="text-3xl font-bold text-white tracking-wide uppercase px-2">
            Galería
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange-500/50" />
        </div>
        <GalleryDesktop images={images} />
        <GalleryMobile images={images} />
      </Container>
    </>
  );
};
