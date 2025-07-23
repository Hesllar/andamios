import clsx from "clsx";
import Image, { StaticImageData } from "next/image";

interface Props {
  images: StaticImageData[];
}

export const GalleryDesktop = ({ images }: Props) => {
  return (
    <div className="hidden lg:flex flex-wrap -m-4">
      {images.map((image, index) => (
        <div key={index} className="sm:w-1/2 lg:w-1/3 p-4">
          <div
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
  );
};
