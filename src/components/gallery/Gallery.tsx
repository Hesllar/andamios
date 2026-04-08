"use client";

import { Container } from "@/components/ui";
import { GalleryDesktop } from "./GalleryDesktop";
import { GalleryMobile } from "./GalleryMobile";

interface Props {
  refSectionGallery: React.RefObject<HTMLDivElement | null>;
}

const images = [
  {
    id: 1,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608788/img13_z32pyo.webp`,
  },
  {
    id: 2,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608788/img12_roygig.webp`,
  },
  {
    id: 3,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608787/img11_dlscih.webp`,
  },
  {
    id: 4,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608787/img10_enftls.webp`,
  },
  {
    id: 5,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608786/img9_tiecut.webp`,
  },
  {
    id: 6,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608786/img5_okb0sk.webp`,
  },
  {
    id: 7,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608786/img8_c1whu3.webp`,
  },
  {
    id: 8,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608786/img7_usgzxp.webp`,
  },
  {
    id: 9,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608785/img6_mv3mr7.webp`,
  },
  {
    id: 10,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608785/img2_whfxee.webp`,
  },
  {
    id: 11,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608785/img3_m9wgah.webp`,
  },
  {
    id: 12,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775608785/img4_hrlbgr.webp`,
  },
  {
    id: 13,
    src: `${process.env.NEXT_PUBLIC_URL_BASE_CLOUDINARY}/q_auto/f_auto/v1775611539/img-56_1_ob0l4l.webp`,
  },
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
