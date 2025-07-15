"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Zoom, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import heroImg from "../../../../public/img/img1.webp";
import img3 from "../../../../public/img/img3.webp";
import img4 from "../../../../public/img/img4.webp";

import styles from "./styles.module.css";

export const SwiperMobile = () => {
  return (
    <Swiper
      // pagination={true}
      // modules={[Pagination, Zoom, Autoplay]}
      // className={styles.swiper}
      // navigation
      modules={[Navigation, Pagination, Autoplay, Zoom]}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3500, // Tiempo entre slides (ms)
        disableOnInteraction: false, // Continúa después de interacción manual
        pauseOnMouseEnter: true, // Pausa al hacer hover
        reverseDirection: false, // Dirección normal (izq -> der)
        waitForTransition: true, // Espera que termine la transición
        stopOnLastSlide: false, // No se detiene en el último slide
      }}
      zoom={{
        maxRatio: 3, // Zoom máximo 3x
        minRatio: 1, // Zoom mínimo 1x (original)
        toggle: true, // Permite toggle con doble clic
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed",
      }}
      className={styles.swiper}
    >
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
