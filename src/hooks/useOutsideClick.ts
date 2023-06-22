import { useEffect, useRef } from "react";

interface IuseOutsideClick {
  onClose?: () => void;
}

export function useOutsideClick(props: IuseOutsideClick) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, []);

  return [ref];
}