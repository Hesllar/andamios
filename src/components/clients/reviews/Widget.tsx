import Image from "next/image";

import clsx from "clsx";
import { FcGoogle } from "react-icons/fc";

import { Stars } from "./Stars";

interface ReviewProps {
  id: number;
  color: string;
  name: string;
  rating: number;
  initials?: string;
  text?: string;
  img?: string;
}

export const Widget = ({
  color,
  name,
  rating,
  initials = "",
  text,
  img,
}: ReviewProps) => {
  return (
    <article className="flex flex-col gap-3 p-4 rounded-2xl border border-gray-100 bg-white hover:bg-slate-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
      <div className="flex items-start gap-3">
        <div
          className={clsx(
            "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center",
            {
              [`${color} text-sm font-semibold`]: !img,
            },
          )}
        >
          {img ? (
            <Image src={img} alt={name} width={40} height={40} />
          ) : (
            <span>{initials.toUpperCase()}</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-semibold text-gray-900 truncate capitalize">
              {name}
            </span>
          </div>
          <div className="mt-1">{<Stars rating={rating} />}</div>
        </div>
        <FcGoogle fontSize={26} />
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">
        {text ? text : "Sin comentario"}
      </p>
    </article>
  );
};
