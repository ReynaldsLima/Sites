"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

export default function ScrollReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Marks that the client has taken over, so the blurred "hidden" state
    // (below) never applies unless an IntersectionObserver is actually
    // watching to bring it back — required for no-JS/pre-hydration safety.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Without JS (or before hydration) content renders fully visible — the
  // blurred "hidden" state only ever applies once we can guarantee an
  // observer will bring it back.
  const hidden = mounted && !visible;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        hidden
          ? "translate-y-6 opacity-0 blur-sm"
          : "translate-y-0 opacity-100 blur-none"
      } ${className}`}
    >
      {children}
    </div>
  );
}
