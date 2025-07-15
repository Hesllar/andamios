"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import heroImg from "../../../../public/img/img1.webp";
import img3 from "../../../../public/img/img3.webp";
import img4 from "../../../../public/img/img4.webp";

import styles from "./styles.module.css";

export const SwiperMobile = () => {
  return (
    <Swiper pagination={true} modules={[Pagination]} className={styles.swiper}>
      <SwiperSlide>
        <Image
          src={heroImg}
          className="object-cover rounded-lg shadow-2xl sm:rounded-b-md w-full h-full"
          alt="Hero Illustration"
          loading="eager"
          placeholder="blur"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={img3}
          className="object-cover rounded-lg shadow-2xl sm:rounded-b-md w-full h-full"
          alt="Hero Illustration"
          loading="eager"
          placeholder="blur"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={img4}
          className="object-cover rounded-lg shadow-2xl sm:rounded-b-md w-full h-full"
          alt="Hero Illustration"
          loading="eager"
          placeholder="blur"
        />
      </SwiperSlide>
    </Swiper>
  );
};
