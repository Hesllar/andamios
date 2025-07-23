"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Image, { StaticImageData } from "next/image";

interface Props {
  images: StaticImageData[];
}

export const GalleryMobile = ({ images }: Props) => {
  return (
    <div className="flex lg:hidden">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="!w-full !flex !justify-center !items-center"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="!w-1/2 !h-[350px]  sm:!h-[450px] !lg:w-1/3 lg:!h-[550px]"
          >
            <Image
              width={350}
              height={350}
              src={image.src}
              alt={`Image ${index + 1}`}
              className="!w-full !h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
