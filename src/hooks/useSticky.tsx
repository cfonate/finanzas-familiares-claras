
import { useEffect, useState, useRef } from "react";

export function useSticky<T extends HTMLElement = HTMLElement>(): [boolean, React.RefObject<T>] {
  const ref = useRef<T>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      if (!el) return;
      // El sticky se activa cuando el top del elemento está en la parte superior del viewport
      const { top } = el.getBoundingClientRect();
      setIsSticky(top <= 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // comprobar al inicio

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [isSticky, ref];
}
