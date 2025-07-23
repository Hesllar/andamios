import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface Props {
  images: StaticImageData[];
}

export const GalleryDesktop = ({ images }: Props) => {
  const [imageActive, setImageActive] = useState<StaticImageData | null>(null);

  return (
    <>
      <div className="hidden lg:flex flex-wrap -m-4">
        {images.map((image, index) => (
          <div key={index} className="sm:w-1/2 lg:w-1/3 p-4">
            <div
              onClick={() => setImageActive(image)}
              className={clsx(
                "relative z-10 w-full border-4 border-gray-200  rounded-lg overflow-hidden h-[500px]",
                {
                  " hover:origin-bottom hover:-rotate-2": index % 2 === 0,
                  " hover:origin-top hover:rotate-2": index % 2 !== 0,
                }
              )}
            >
              <Image
                src={image.src}
                alt={`Image ${index + 1}`}
                width={500}
                height={500}
                className=" w-full h-full object-cover cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      {imageActive && (
        <div
          className="hidden fixed inset-0 bg-black bg-opacity-80 lg:flex items-center justify-center z-50 "
          onClick={() => setImageActive(null)}
        >
          <div className="relative">
            <div className="w-[800px] h-[800px]">
              <Image
                src={imageActive.src}
                alt="Active Image"
                fill
                className="object-fill"
                sizes="800px"
              />
            </div>
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setImageActive(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};
