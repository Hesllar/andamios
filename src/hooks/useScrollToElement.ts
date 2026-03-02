import { useCallback, RefObject } from "react";

type ScrollBehavior = "auto" | "smooth" | "instant";

export const useScrollToElement = () => {
  const scrollToElement = useCallback(
    (
      elementRef: RefObject<HTMLElement | null>,
      offset: number = 0,
      behavior: ScrollBehavior = "smooth",
    ) => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrollTop = window.scrollY;

        window.scrollTo({
          top: scrollTop + rect.top - offset,
          behavior: behavior,
        });
      }
    },
    [],
  );

  return scrollToElement;
};
