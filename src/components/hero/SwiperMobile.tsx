// "use client";

// import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Zoom, Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// import heroImg from "../../../public/img/img1.webp";
// import img3 from "../../../public/img/img3.webp";
// import img4 from "../../../public/img/img4.webp";

// import styles from "./swiper-mobile.module.css";

// export const SwiperMobile = () => {
//   return (
//     <Swiper
//       modules={[Navigation, Pagination, Autoplay, Zoom]}
//       spaceBetween={30}
//       slidesPerView={1}
//       navigation
//       pagination={{
//         clickable: true,
//         dynamicBullets: true,
//       }}
//       autoplay={{
//         delay: 3500,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true,
//         reverseDirection: false,
//         waitForTransition: true,
//         stopOnLastSlide: false,
//       }}
//       className={`${styles.swiper} shadow-2xl`}
//     >
//       <SwiperSlide>
//         <Image
//           src={heroImg}
//           className="object-cover rounded-lg shadow-2xl sm:rounded-b-md w-full h-full"
//           alt="Hero Illustration"
//           loading="eager"
//           placeholder="blur"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <Image
//           src={img3}
//           className="object-cover rounded-lg shadow-2xl sm:rounded-b-md w-full h-full"
//           alt="Hero Illustration"
//           loading="eager"
//           placeholder="blur"
//         />
//       </SwiperSlide>
//       <SwiperSlide>
//         <Image
//           src={img4}
//           className="object-cover rounded-lg shadow-2xl sm:rounded-b-md w-full h-full"
//           alt="Hero Illustration"
//           loading="eager"
//           placeholder="blur"
//         />
//       </SwiperSlide>
//     </Swiper>
//   );
// };
