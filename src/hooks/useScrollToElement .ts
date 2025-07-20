import { useCallback, RefObject } from "react";

// Tipos para las opciones de scroll behavior
type ScrollBehavior = "auto" | "smooth" | "instant";

// Interface para opciones más avanzadas (opcional)
interface ScrollOptions {
  offset?: number;
  behavior?: ScrollBehavior;
  block?: "start" | "center" | "end" | "nearest";
}

// Hook personalizado básico
export const useScrollToElement = () => {
  const scrollToElement = useCallback(
    (
      elementRef: RefObject<HTMLElement>,
      offset: number = 0,
      behavior: ScrollBehavior = "smooth"
    ) => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrollTop = window.pageYOffset;

        window.scrollTo({
          top: scrollTop + rect.top - offset,
          behavior: behavior,
        });
      }
    },
    []
  );

  return scrollToElement;
};
