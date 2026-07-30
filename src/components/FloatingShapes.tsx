import { useEffect, useRef, useState } from "react";

export default function FloatingShapes() {
  const pathRef = useRef<SVGPathElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const mobileGroupRef = useRef<SVGGElement>(null);
  const timeRef = useRef(0);
  const rafRef = useRef(0);
  const evapRef = useRef(0);
  const projectsRef = useRef(false);

  const [isMobile, setIsMobile] = useState(false);
  const [isProjects, setIsProjects] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = document.getElementById("projects");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([e]) => {
        setIsProjects(e.isIntersecting);
        projectsRef.current = e.isIntersecting;
      },
      { threshold: 0.25, rootMargin: "-80px 0px 0px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMobile) {
      const group = mobileGroupRef.current;
      if (!group) return;

      const rects: SVGRectElement[] = [];
      const count = 10;
      const data = Array.from({ length: count }, () => ({
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
        size: 8 + Math.random() * 20,
        speed: 0.15 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 2,
      }));

      for (let i = 0; i < count; i++) {
        const r = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect",
        );
        r.setAttribute("fill", "white");
        r.setAttribute("stroke", "black");
        r.setAttribute("stroke-width", "1.5");
        group.appendChild(r);
        rects.push(r);
      }

      function loop() {
        const t = timeRef.current;
        for (let i = 0; i < count; i++) {
          const d = data[i];
          const y = ((d.y + t * d.speed * 6) % 110) - 5;
          const x = d.x + Math.sin(t * 0.3 + d.phase) * 12;
          const rot = d.rot + t * d.rotSpeed * 30;
          const s = d.size + Math.sin(t * 0.4 + d.phase) * 4;
          rects[i].setAttribute("x", `${x}%`);
          rects[i].setAttribute("y", `${y}%`);
          rects[i].setAttribute("width", `${s}`);
          rects[i].setAttribute("height", `${s}`);
          rects[i].setAttribute(
            "transform",
            `rotate(${rot} ${x + s / 2} ${y + s / 2})`,
          );
        }
        timeRef.current += 0.015;
        rafRef.current = requestAnimationFrame(loop);
      }

      rafRef.current = requestAnimationFrame(loop);
      return () => {
        cancelAnimationFrame(rafRef.current);
        rects.forEach((r) => r.remove());
      };
    }

    const w = 300;
    const h = 400;
    const cx = w / 2;
    const cy = h / 2;
    const baseR = 130;
    const count = 20;

    function generate(t: number) {
      evapRef.current += ((projectsRef.current ? 1 : 0) - evapRef.current) * 0.02;
      const evap = Math.max(0, Math.min(1, evapRef.current));

      const phase = t * 0.7;
      const dx = Math.sin(t * 0.11) * 40 + Math.sin(t * 0.23 + 1) * 25;
      const dy = Math.cos(t * 0.13) * 35 + Math.cos(t * 0.19 + 2) * 30;

      const points: [number, number][] = [];
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const w1 = Math.sin(t * 0.53 + i * 0.9 + phase) * 32;
        const w2 = Math.sin(t * 0.37 + i * 1.1 + 1) * 22;
        const w3 = Math.sin(t * 0.29 + i * 0.6 + 4) * 14;
        const w4 = Math.sin(t * 0.19 + i * 1.7 + 2) * 6;
        const r = baseR + w1 + w2 + w3 + w4;
        points.push([
          cx + dx + Math.cos(angle) * r,
          cy + dy + Math.sin(angle) * r,
        ]);
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
        d +=
          i === 0
            ? `M ${cur[0]} ${cur[1]} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${next[0]} ${next[1]}`
            : ` C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${next[0]} ${next[1]}`;
      }

      if (pathRef.current) {
        pathRef.current.setAttribute("d", d);

        const gray = Math.round(255 * (1 - Math.min(evap * 2.5, 1)));
        pathRef.current.setAttribute("fill", `rgb(${gray}, ${gray}, ${gray})`);

        const opacity = 1 - Math.min(Math.max((evap - 0.3) * 1.43, 0), 1);
        pathRef.current.setAttribute("opacity", `${opacity}`);
      }

      if (svgRef.current) {
        const blur = 4 + evap * evap * 40;
        svgRef.current.style.filter = `blur(${blur}px)`;
      }
    }

    function loop() {
      timeRef.current += 0.015;
      generate(timeRef.current);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isMobile]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: isMobile ? "auto" : "100px",
        right: isMobile ? "auto" : "500px",
        top: isMobile ? "0" : "auto",
        left: isMobile ? "0" : "auto",
        zIndex: isProjects && !isMobile ? 5 : 40,
        pointerEvents: "none",
        width: isMobile ? "100%" : "auto",
        height: isMobile ? "100%" : "auto",
        mixBlendMode: "difference",
        opacity: isMobile ? 1 : 0.8,
        transition: "z-index 0.8s ease",
      }}
    >
      {isMobile ? (
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          style={{ display: "block" }}
        >
          <g ref={mobileGroupRef} />
        </svg>
      ) : (
        <svg
          ref={svgRef}
          width="500"
          height="800"
          viewBox="0 0 300 400"
          style={{ display: "block", filter: "blur(4px)" }}
        >
          <path ref={pathRef} fill="white" opacity={1} />
        </svg>
      )}
    </div>
  );
}
