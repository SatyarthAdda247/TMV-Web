import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function MagneticCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [variant, setVariant] = useState<"default" | "hover" | "click">("default");
  const [visible, setVisible] = useState(false);
  const rafRef = useRef<number>(0);

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  // Slower trailing dot
  const trailX = useSpring(cursorX, { damping: 40, stiffness: 180, mass: 0.8 });
  const trailY = useSpring(cursorY, { damping: 40, stiffness: 180, mass: 0.8 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        if (!visible) setVisible(true);
      });
    };

    const onEnter = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select")) {
        setVariant("hover");
      }
    };

    const onLeave = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [role='button'], input, textarea, select")) {
        setVariant("default");
      }
    };

    const onDown = () => setVariant("click");
    const onUp = () => setVariant("default");
    const onLeaveWindow = () => setVisible(false);
    const onEnterWindow = () => setVisible(true);

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", onEnter, { passive: true });
    window.addEventListener("mouseout", onLeave, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.documentElement.addEventListener("mouseenter", onEnterWindow);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onEnter);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      document.documentElement.removeEventListener("mouseenter", onEnterWindow);
    };
  }, [cursorX, cursorY, visible]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  const dotSize = variant === "hover" ? 48 : variant === "click" ? 20 : 10;
  const ringSize = variant === "hover" ? 64 : variant === "click" ? 32 : 36;
  const dotOpacity = visible ? 1 : 0;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-primary mix-blend-difference"
        style={{
          x,
          y,
          width: dotSize,
          height: dotSize,
          translateX: "-50%",
          translateY: "-50%",
          opacity: dotOpacity,
        }}
        animate={{ width: dotSize, height: dotSize }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-primary/60"
        style={{
          x: trailX,
          y: trailY,
          width: ringSize,
          height: ringSize,
          translateX: "-50%",
          translateY: "-50%",
          opacity: dotOpacity,
        }}
        animate={{ width: ringSize, height: ringSize, opacity: variant === "click" ? 0.4 : dotOpacity }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
}
