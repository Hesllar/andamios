"use client";

import Image, { type ImageProps } from "next/image";
import { useState, type CSSProperties, type ReactNode } from "react";

type RemoteImageProps = ImageProps & {
  containerClassName?: string;
  containerStyle?: CSSProperties;
  /** "beside" reserves a 40 × 40 px avatar and puts errors in the author block. */
  errorPlacement?: "inside" | "beside";
  authorContent?: ReactNode;
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
  errorPlacement = "inside",
  authorContent,
  ...imageProps
}: Readonly<RemoteImageProps>) {
  const [hasError, setHasError] = useState(false);
  const isAvatar = errorPlacement === "beside";
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

  const imageSlot = (
    <div
      className={`relative overflow-hidden ${hasError ? "bg-industrial-surface" : ""} ${containerClassName ?? ""}`}
      style={isAvatar
        ? {
            ...containerStyle,
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }
        : { ...reservedStyle, ...containerStyle }}
    >
      {hasError ? (
        !isAvatar && (
          <span
            role="status"
            className="absolute inset-0 flex items-center justify-center bg-industrial-surface p-2 text-center text-sm text-industrial-text"
          >
            Imagen no disponible
          </span>
        )
      ) : (
        <Image
          {...imageProps}
          src={src}
          alt={alt}
          width={isAvatar && !fill ? 40 : width}
          height={isAvatar && !fill ? 40 : height}
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

  if (isAvatar) {
    return (
      <div className="flex min-w-0 items-center gap-3">
        {imageSlot}
        <div className="min-w-0">
          {authorContent}
          {hasError && (
            <span role="status" className="block text-sm text-industrial-muted">
              Imagen no disponible
            </span>
          )}
        </div>
      </div>
    );
  }

  return imageSlot;
}
