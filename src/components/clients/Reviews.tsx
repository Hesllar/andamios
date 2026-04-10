import { useEffect, useEffectEvent, useState } from "react";
import Image from "next/image";

import { FcGoogle } from "react-icons/fc";
import clsx from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Container } from "../ui";
import { Stars } from "./Stars";
import styles from "./style.module.css";

const REVIEWS = [
  {
    id: 1,
    name: "Marcelo narvaez mena",
    initials: "",
    rating: 5,
    text: "Excelente disposición, respuesta inmediata y oportuna, buen stock y calidadde equipos.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVY0HIgYWIT94McJT83vY32Gmtph5K61GDtSOtKq7ZZ2fgECY37=s36-c-rp-mo-br100",
    color: "",
  },
  {
    id: 2,
    name: "Carolina Ulloa",
    initials: "",
    rating: 5,
    text: "Súper responsable llegaron a la hora acordada y todo muy bien organizado",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjUhkOZAm2hWPbQlalpQu-up1fBoQZYM-sOvXNoMiYeyQSYwEz9l=s36-c-rp-mo-br100",
    color: "",
  },
  {
    id: 3,
    name: "carlos ortega",
    initials: "",
    rating: 5,
    text: "",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjXovb1URprpeLYMfHOjKRUU8xDfKpS89YFZLFi9YVtVVLtw5w0=s36-c-rp-mo-br100",
    color: "",
  },
  {
    id: 4,
    name: "Marcos Miranda",
    initials: "M",
    rating: 5,
    text: "Contrate el servicio de arriendos de andamios y fue la mejor elección. Puntualidad, rapidez y por sobre todo calidad y asesoría deseada. Todos con sus accesorios correspondientes. Cero detalles.",
    img: "",
    color: "bg-fuchsia-400",
  },
  {
    id: 5,
    name: "Majo De la cruz",
    initials: "",
    rating: 5,
    text: "Excelente servicio. Puntual y claro.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWqmJSRZz2MQmGd2nU_DgP6JnAe4WfaejzF6Rw7TtFbp7en6TsG=s36-c-rp-mo-br100",
    color: "",
  },
  {
    id: 6,
    name: "Marisol Rojas",
    initials: "M",
    rating: 5,
    text: "",
    img: "",
    color: "bg-blue-400",
  },
  {
    id: 7,
    name: "rodrigo jimenez",
    initials: "r",
    rating: 5,
    text: "Buen servicio, precio al alcance de todos...",
    img: "",
    color: "bg-neutral-600",
  },
  {
    id: 8,
    name: "riquelme emilio",
    initials: "",
    rating: 5,
    text: "Un excelente atención y personalizada ..",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWf81P1C_5oObZmrG6mXDJT6iMsZ8X5eYSDNdYOPy7gU_Ccj0UI=s36-c-rp-mo-br100",
    color: "",
  },
  {
    id: 9,
    name: "ALEJANDRO TORNERIA",
    initials: "",
    rating: 5,
    text: "Buen servicio",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjWXqvr69pVolNp-srZ9zc8s4R8xVomKm2-0-CsaeJ2J3mXQcq0z=s36-c-rp-mo-br100",
    color: "",
  },
  {
    id: 10,
    name: "Gabriel Irausquin",
    initials: "",
    rating: 5,
    text: "Excelente servicio",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjX-dRDte4Kj1hnKysGm3TYE-LUzvpbsQIXnRPSJCjKp_Fyx76_PjQ=s36-c-rp-mo-br100",
    color: "",
  },
  {
    id: 11,
    name: "Alfredo Schilling",
    initials: "",
    rating: 5,
    text: "Calidad de los equipos, entrega y retiro oportuno y expedito. Atiende fuera de horario habitual de la competencia. Lo que significa una gran ventaja desde el pto de vista logístico.",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjW5ntD9s2KrxPHhChcNmIGCWdhE6xli1_RiNIvzu_MalyrlTJh4=s36-c-rp-mo-br100",
    color: "",
  },
  {
    id: 12,
    name: "Macarena Poblete",
    initials: "M",
    rating: 5,
    text: "Responsable y cumplidor",
    img: "",
    color: "bg-teal-400",
  },
  {
    id: 13,
    name: "Marcela Orellana",
    initials: "M",
    rating: 5,
    text: "Excelente servicio, entrega en lugar acordado y explica cómo se implementa los andamios. Amable y excente calidad de las estructuras.",
    img: "",
    color: "bg-fuchsia-600",
  },
  {
    id: 14,
    name: "Jean Carlos Galvis Sanches",
    initials: "J",
    rating: 5,
    text: "Muy buena la atención y herramientas de trabajo 👍🏽",
    img: "",
    color: "bg-zinc-500",
  },
  {
    id: 15,
    name: "Yoyi R",
    initials: "",
    rating: 5,
    text: "",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVNiCQ9plf7_dtoE1-C0mkpRmH9deO_IhNMSG3NVIUib27kqNQbSA=s36-c-rp-mo-br100",
    color: "",
  },
  {
    id: 16,
    name: "jhony charamel",
    initials: "",
    rating: 5,
    text: "Buen servicio siempre",
    img: "https://lh3.googleusercontent.com/a-/ALV-UjVViElt5c4G_XgD7G04q1ND-ZbDemUyfVoJSkd7Rb_6wVjPVrk=s36-c-rp-mo-br100",
    color: "",
  },
  {
    id: 17,
    name: "Pamela Jaramillo",
    initials: "P",
    rating: 5,
    text: "Exelente Servicio",
    img: "",
    color: "bg-sky-700",
  },
  {
    id: 18,
    name: "Mario Herrera",
    initials: "M",
    rating: 5,
    text: "Muy buen servicio!! Recomendados para cuálquier trabajo en alturas",
    img: "",
    color: "bg-orange-600",
  },
  {
    id: 19,
    name: "Samuel Galleguillos",
    initials: "S",
    rating: 5,
    text: "Muy buen servicio muy puntuales 💯 confiables",
    img: "",
    color: "bg-emerald-600",
  },
];

export const Reviews = () => {
  const [reviewsOriginal, _] = useState(REVIEWS);

  const [reviewsMutable, setReviewsMutable] = useState(reviewsOriginal);

  const [showAllReviews, setShowAllReviews] = useState(false);

  useEffect(() => {
    if (reviewsOriginal.length > 10)
      setReviewsMutable(reviewsOriginal.slice(0, 10));
  }, []);

  const handleShowAllReviews = () => {
    setShowAllReviews(true);
    setReviewsMutable(reviewsOriginal);
  };

  return (
    <Container>
      <div className="flex flex-col justify-center gap-10">
        <div className="flex items-center gap-4 w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-orange-500/50" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-wide uppercase px-2">
            Reseñas de Clientes
          </h2>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-orange-500/50" />
        </div>
        <div className="hidden sm:block">
          <div className="sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {reviewsMutable.map((review) => (
              <article
                key={review.id}
                className="flex flex-col gap-3 p-4 rounded-2xl border border-gray-100 bg-white hover:bg-slate-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={clsx(
                      "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
                      {
                        [`${review.color} text-sm font-semibold`]: !review.img,
                      },
                    )}
                  >
                    {review.img ? (
                      <Image
                        src={review.img}
                        alt={review.name}
                        width={40}
                        height={40}
                      />
                    ) : (
                      <span>{review.initials.toUpperCase()}</span>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-gray-900 truncate capitalize">
                        {review.name}
                      </span>
                    </div>
                    <div className="mt-1">
                      {<Stars rating={review.rating} />}
                    </div>
                  </div>
                  <FcGoogle fontSize={26} />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {review.text ? review.text : "Sin comentario"}
                </p>
              </article>
            ))}
          </div>
          {!showAllReviews && (
            <div className="flex justify-center mt-4">
              <button
                className="w-1/2 flex justify-center gap-2 text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-amber-500 focus:ring-4 focus:ring-orange-500/30
                font-medium rounded-lg text-lg px-3 py-3 items-center shadow-lg shadow-orange-600/20 transition-all duration-200"
                onClick={handleShowAllReviews}
              >
                ¡Ver todas las reseñas!
              </button>
            </div>
          )}
        </div>
        <div className="flex sm:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            pagination={{
              clickable: false,
            }}
            modules={[Pagination, Autoplay]}
            className={styles.swiper}
          >
            {reviewsOriginal.map((review) => (
              <SwiperSlide key={review.id}>
                <article className="flex flex-col gap-3 p-4 rounded-2xl border border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                  {/* Top row: avatar + name + date */}
                  <div className="flex items-start gap-3">
                    <div
                      className={clsx(
                        "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
                        {
                          [`${review.color} text-sm font-semibold`]:
                            !review.img,
                        },
                      )}
                    >
                      {review.img ? (
                        <Image
                          src={review.img}
                          alt={review.name}
                          width={40}
                          height={40}
                        />
                      ) : (
                        <span>{review.initials}</span>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-gray-900 truncate">
                          {review.name}
                        </span>
                      </div>
                      <div className="mt-1">
                        {<Stars rating={review.rating} />}
                      </div>
                    </div>
                    <FcGoogle fontSize={26} />
                  </div>
                  {/* Review text */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {review.text ? review.text : "Sin comentario"}
                  </p>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};
