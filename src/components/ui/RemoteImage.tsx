"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type CSSProperties } from "react";

type RemoteImageProps = ImageProps & {
  containerClassName?: string;
  containerStyle?: CSSProperties;
};

export function RemoteImage({
  src,
  alt,
  width,
  height,
  fill,
  style,
  onError,
  containerClassName,
  containerStyle,
  ...imageProps
}: Readonly<RemoteImageProps>) {
  const [hasError, setHasError] = useState(false);
  const staticImage = typeof src === "object"
    ? ("default" in src ? src.default : src)
    : undefined;
  const reservedWidth = width ?? staticImage?.width;
  const reservedHeight = height ?? staticImage?.height;
  const reservedStyle: CSSProperties = fill
    ? { position: "absolute", inset: 0 }
    : {
        width: reservedWidth === undefined ? undefined : Number(reservedWidth),
        maxWidth: "100%",
        aspectRatio: reservedWidth && reservedHeight
          ? `${reservedWidth} / ${reservedHeight}`
          : undefined,
      };

  return (
    <div
      className={`relative overflow-hidden ${containerClassName ?? ""}`}
      style={{ ...reservedStyle, ...containerStyle }}
    >
      {hasError ? (
        <span
          role="status"
          className="absolute inset-0 flex items-center justify-center bg-industrial-surface p-2 text-center text-sm text-industrial-text"
        >
          Imagen no disponible
        </span>
      ) : (
        <Image
          {...imageProps}
          src={src}
          alt={alt}
          width={width}
          height={height}
          fill={fill}
          style={fill ? style : { width: "100%", height: "100%", ...style }}
          onError={(event) => {
            setHasError(true);
            onError?.(event);
          }}
        />
      )}
    </div>
  );
}
