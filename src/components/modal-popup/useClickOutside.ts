import { useEffect, RefObject } from "react";

export function useClickOutside(
  target: RefObject<HTMLElement | null>,
  handler: () => void
) {
  useEffect(() => {
    function listen(event: MouseEvent) {
      if (!target.current || target.current?.contains(event.target as Node))
        return;

      handler();
    }

    document.addEventListener("mousedown", listen);

    return () => {
      document.removeEventListener("mousedown", () => {});
    };
  }, [target, handler]);
}
