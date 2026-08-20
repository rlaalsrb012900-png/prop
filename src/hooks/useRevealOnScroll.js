import { useEffect, useRef } from "react";

export default function useRevealOnScroll({ count, threshold = 0.2 } = {}) {
  const refs = useRef([]);
  refs.current = [];

  const register = (el) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    refs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [count, threshold]);

  return register;
}
