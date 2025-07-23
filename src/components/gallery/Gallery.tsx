import React from "react";
import { Container } from "../Container";
import { GalleryDesktop } from "./GalleryDesktop";
import { GalleryMobile } from "./GalleryMobile";

import img1 from "../../../public/img/img1.webp";
import img2 from "../../../public/img/img2.webp";
import img3 from "../../../public/img/img3.webp";
import img4 from "../../../public/img/img4.webp";

const images = [img1, img2, img3, img4];

export const Gallery = () => {
  return (
    <Container className="flex flex-col justify-center gap-10">
      <div className=" w-full bg-gradient-to-b from-gray-200 to-red-500 rounded-lg">
        <h2 className=" text-3xl font-bold items-center text-center p-8 text-white dark:text-white">
          Galería
        </h2>
      </div>
      <GalleryDesktop images={images} />
      <GalleryMobile images={images} />
    </Container>
  );
};
