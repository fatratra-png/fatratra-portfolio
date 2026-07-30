import { useEffect, useRef, useState } from "react";

export default function FloatingShapes() {
  const pathRef = useRef<SVGPathElement>(null);
  const timeRef = useRef(0);
  const rafRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const w = 300;
    const h = 400;
    const cx = w / 2;
    const cy = h / 2;
    const baseR = 120;

    function generate(t: number) {
      const points: [number, number][] = [];
      const count = 12;

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const wave1 = Math.sin(t * 0.6 + i * 0.8) * 30;
        const wave2 = Math.sin(t * 0.4 + i * 1.2 + 1) * 20;
        const r = baseR + wave1 + wave2;
        const x = cx + Math.cos(angle) * r;
        const y = cy + Math.sin(angle) * r;
        points.push([x, y]);
      }

      let d = "";
      for (let i = 0; i < count; i++) {
        const prev = points[(i - 1 + count) % count];
        const cur = points[i];
        const next = points[(i + 1) % count];
        const next2 = points[(i + 2) % count];
        const cp1x = cur[0] + (next[0] - prev[0]) / 6;
        const cp1y = cur[1] + (next[1] - prev[1]) / 6;
        const cp2x = next[0] - (next2[0] - cur[0]) / 6;
        const cp2y = next[1] - (next2[1] - cur[1]) / 6;
        d += i === 0
          ? `M ${cur[0]} ${cur[1]} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${next[0]} ${next[1]}`
          : ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${next[0]} ${next[1]}`;
      }

      if (pathRef.current) pathRef.current.setAttribute("d", d);
    }

    function loop() {
      timeRef.current += 0.015;
      generate(timeRef.current);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        bottom: isMobile ? "auto" : "100px",
        right: isMobile ? "auto" : "500px",
        top: isMobile ? "20px" : "auto",
        left: isMobile ? "10px" : "auto",
        zIndex: 40,
        pointerEvents: "none",
        mixBlendMode: "difference",
        opacity: isMobile ? 0.35 : 1,
        transform: isMobile ? "scale(0.4)" : "scale(1)",
        transformOrigin: "top left",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <svg
        width="500"
        height="800"
        viewBox="0 0 300 400"
        style={{ display: "block", filter: "blur(5px)" }}
      >
        <path ref={pathRef} fill="white" opacity={1} />
      </svg>
    </div>
  );
}
