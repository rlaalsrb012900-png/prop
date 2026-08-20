import { createContext, useContext, useEffect, useRef, useState } from "react";
import { SECTION_IDS } from "./sections";

const FullPageScrollContext = createContext(null);

const LOCK_MS = 900;
const MIN_WIDTH = 1440;
const WHEEL_THRESHOLD = 4;

export function FullPageScrollProvider({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const touchStartYRef = useRef(null);

  const scrollToIndex = (index) => {
    const clamped = Math.max(0, Math.min(SECTION_IDS.length - 1, index));
    const el = document.getElementById(SECTION_IDS[clamped]);
    if (!el) return;

    isAnimatingRef.current = true;
    activeIndexRef.current = clamped;
    setActiveIndex(clamped);

    const scrollMarginTop = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
    const targetY = el.getBoundingClientRect().top + window.scrollY - scrollMarginTop;
    window.scrollTo({ top: targetY, left: 0, behavior: "smooth" });

    window.clearTimeout(scrollToIndex._t);
    scrollToIndex._t = window.setTimeout(() => {
      isAnimatingRef.current = false;
    }, LOCK_MS);
  };

  const goToSection = (id) => {
    const index = SECTION_IDS.indexOf(id);
    if (index !== -1) scrollToIndex(index);
  };

  useEffect(() => {
    const isEnabled = () => window.innerWidth >= MIN_WIDTH;

    const handleWheel = (e) => {
      if (!isEnabled()) return;

      const hscroll = e.target.closest?.("[data-hscroll]");
      if (hscroll) {
        const atStart = hscroll.scrollLeft <= 0;
        const atEnd =
          hscroll.scrollLeft + hscroll.clientWidth >= hscroll.scrollWidth - 1;
        const scrollingIn = (e.deltaY > 0 && !atEnd) || (e.deltaY < 0 && !atStart);
        if (scrollingIn) {
          e.preventDefault();
          hscroll.scrollLeft += e.deltaY;
          return;
        }
      }

      e.preventDefault();
      if (isAnimatingRef.current) return;
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;

      scrollToIndex(activeIndexRef.current + (e.deltaY > 0 ? 1 : -1));
    };

    const handleKeyDown = (e) => {
      if (!isEnabled()) return;
      if (isAnimatingRef.current) return;

      if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        scrollToIndex(activeIndexRef.current + 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        scrollToIndex(activeIndexRef.current - 1);
      }
    };

    const handleTouchStart = (e) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      if (!isEnabled() || isAnimatingRef.current || touchStartYRef.current === null) return;
      const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;
      touchStartYRef.current = null;
      if (Math.abs(deltaY) < 60) return;

      scrollToIndex(activeIndexRef.current + (deltaY > 0 ? 1 : -1));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.clearTimeout(scrollToIndex._t);
    };
  }, []);

  return (
    <FullPageScrollContext.Provider value={{ activeIndex, activeId: SECTION_IDS[activeIndex], goToSection }}>
      {children}
    </FullPageScrollContext.Provider>
  );
}

export function useFullPageScroll() {
  const ctx = useContext(FullPageScrollContext);
  if (!ctx) throw new Error("useFullPageScroll must be used within FullPageScrollProvider");
  return ctx;
}
