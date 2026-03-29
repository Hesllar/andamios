import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  refGeneric?: React.RefObject<HTMLDivElement | null>;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      ref={props.refGeneric}
      className={`container px-4 py-10 sm:p-8 sm:px-6 mx-auto ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
