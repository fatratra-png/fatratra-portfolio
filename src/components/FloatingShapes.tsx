import { useEffect, useRef, useState } from "react";

export default function FloatingShapes() {
  const groupRef = useRef<SVGGElement>(null);
  const timeRef = useRef(0);
  const rafRef = useRef(0);
  const splitRef = useRef(0);
  const hideRef = useRef(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = document.getElementById("hero");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        setVisible(e.isIntersecting);
        hideRef.current = !e.isIntersecting;
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const rects: SVGRectElement[] = [];
    const count = 8;
    const data: {
      x: number;
      y: number;
      size: number;
      phase: number;
      dx: number;
      dy: number;
      rot: number;
    }[] = [];

    for (let i = 0; i < count; i++) {
      const r = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect",
      );
      const size = 8 + Math.random() * 22;
      const x = Math.random() * 80 + 10;
      const y = Math.random() * 80 + 10;
      r.setAttribute("x", `${x}%`);
      r.setAttribute("y", `${y}%`);
      r.setAttribute("width", `${size}`);
      r.setAttribute("height", `${size}`);
      r.setAttribute("fill", "white");
      group.appendChild(r);
      rects.push(r);

      const angle = Math.random() * Math.PI * 2;
      data.push({
        x,
        y,
        size,
        phase: Math.random() * Math.PI * 2,
        dx: Math.cos(angle) * (40 + Math.random() * 50),
        dy: Math.sin(angle) * (40 + Math.random() * 50),
        rot: (Math.random() - 0.5) * 90,
      });
    }

    function loop() {
      const t = timeRef.current;
      const target = hideRef.current ? 1 : 0;
      splitRef.current += (target - splitRef.current) * 0.025;
      const split = Math.max(0, Math.min(1, splitRef.current));

      for (let i = 0; i < count; i++) {
        const d = data[i];
        const wobX = Math.sin(t * 0.25 + d.phase) * 4;
        const wobY = Math.cos(t * 0.2 + d.phase + 1) * 4;
        const ease = split * split * (3 - 2 * split);
        const splitX = ease * d.dx;
        const splitY = ease * d.dy;
        const rot = ease * d.rot;
        const cx = d.x + wobX + splitX;
        const cy = d.y + wobY + splitY;
        const s = d.size * (1 - ease * 0.3);
        const o = Math.max(0, 0.4 - ease * 0.4);
        const r = rects[i];
        r.setAttribute("x", `${cx - s / 2}%`);
        r.setAttribute("y", `${cy - s / 2}%`);
        r.setAttribute("width", `${s}`);
        r.setAttribute("height", `${s}`);
        r.setAttribute(
          "transform",
          `rotate(${rot} ${cx}% ${cy}%)`,
        );
        r.setAttribute("opacity", `${o}`);
      }
      timeRef.current += 0.015;
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      rects.forEach((r) => r.remove());
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        mixBlendMode: "difference",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        style={{ display: "block" }}
      >
        <g ref={groupRef} />
      </svg>
    </div>
  );
}
