import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  refGeneric?: React.RefObject<HTMLDivElement>;
}

export function Container(props: Readonly<ContainerProps>) {
  return (
    <div
      ref={props.refGeneric}
      className={`container px-6 py-4 sm:p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </div>
  );
}
