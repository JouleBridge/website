"use client";

import { useEffect, useRef, useCallback } from "react";

export function LatticeCube() {
  const redRef = useRef<HTMLDivElement>(null);
  const cyanRef = useRef<HTMLDivElement>(null);
  const pinkRef = useRef<HTMLDivElement>(null);

  const getRandomXY = useCallback(() => Math.floor(Math.random() * 5) * 60, []);
  const getRandomZ = useCallback(() => Math.floor(Math.random() * 5) * 60 - 120, []);

  useEffect(() => {
    const redEl = redRef.current;
    const cyanEl = cyanRef.current;
    const pinkEl = pinkRef.current;
    if (!redEl || !cyanEl || !pinkEl) return;

    const redMover = redEl.querySelector(".lattice-red-mover") as HTMLElement;
    const cyanMover = cyanEl.querySelector(".lattice-cyan-mover") as HTMLElement;
    const pinkMover = pinkEl.querySelector(".lattice-pink-mover") as HTMLElement;

    const onRedIteration = () => {
      redEl.style.setProperty("--pos-x", getRandomXY() + "px");
      redEl.style.setProperty("--pos-y", getRandomXY() + "px");
    };
    const onCyanIteration = () => {
      cyanEl.style.setProperty("--pos-y", getRandomXY() + "px");
      cyanEl.style.setProperty("--pos-z", getRandomZ() + "px");
    };
    const onPinkIteration = () => {
      pinkEl.style.setProperty("--pos-x", getRandomXY() + "px");
      pinkEl.style.setProperty("--pos-z", getRandomZ() + "px");
    };

    redMover?.addEventListener("animationiteration", onRedIteration);
    cyanMover?.addEventListener("animationiteration", onCyanIteration);
    pinkMover?.addEventListener("animationiteration", onPinkIteration);

    return () => {
      redMover?.removeEventListener("animationiteration", onRedIteration);
      cyanMover?.removeEventListener("animationiteration", onCyanIteration);
      pinkMover?.removeEventListener("animationiteration", onPinkIteration);
    };
  }, [getRandomXY, getRandomZ]);

  const gridPlanes = [];
  // 6 planes on each axis (XY, XZ, YZ)
  const offsets = [-150, -90, -30, 30, 90, 150];
  for (const z of offsets) {
    gridPlanes.push({ transform: `translateZ(${z}px)` });
  }
  for (const z of offsets) {
    gridPlanes.push({ transform: `rotateX(90deg) translateZ(${z}px)` });
  }
  for (const z of offsets) {
    gridPlanes.push({ transform: `rotateY(90deg) translateZ(${z}px)` });
  }

  return (
    <div className="lattice-scene">
      <div className="lattice-camera">
        <div className="lattice-container">
          {gridPlanes.map((gp, i) => (
            <div key={i} className="lattice-grid-plane" style={{ transform: gp.transform }} />
          ))}

          {/* Purple flow (Z-axis) — was red */}
          <div
            ref={redRef}
            className="lattice-flow-z"
            style={{ "--pos-x": "60px", "--pos-y": "180px" } as React.CSSProperties}
          >
            <div className="lattice-red-mover lattice-mover-z">
              <div className="lattice-plane-z" style={{ transform: "translateZ(0px)", "--max-op": 1 } as React.CSSProperties} />
              <div className="lattice-plane-z" style={{ transform: "translateZ(-30px)", "--max-op": 0.6 } as React.CSSProperties} />
              <div className="lattice-plane-z" style={{ transform: "translateZ(-60px)", "--max-op": 0.3 } as React.CSSProperties} />
              <div className="lattice-plane-z" style={{ transform: "translateZ(-90px)", "--max-op": 0.1 } as React.CSSProperties} />
            </div>
          </div>

          {/* Teal flow (X-axis) — was cyan */}
          <div
            ref={cyanRef}
            className="lattice-flow-x"
            style={{ "--pos-y": "120px", "--pos-z": "-60px" } as React.CSSProperties}
          >
            <div className="lattice-cyan-mover lattice-mover-x">
              <div className="lattice-plane-x" style={{ transform: "translateX(0px) rotateY(90deg)", "--max-op": 1 } as React.CSSProperties} />
              <div className="lattice-plane-x" style={{ transform: "translateX(-30px) rotateY(90deg)", "--max-op": 0.6 } as React.CSSProperties} />
              <div className="lattice-plane-x" style={{ transform: "translateX(-60px) rotateY(90deg)", "--max-op": 0.3 } as React.CSSProperties} />
              <div className="lattice-plane-x" style={{ transform: "translateX(-90px) rotateY(90deg)", "--max-op": 0.1 } as React.CSSProperties} />
            </div>
          </div>

          {/* Accent flow (Y-axis) — was pink */}
          <div
            ref={pinkRef}
            className="lattice-flow-y"
            style={{ "--pos-x": "180px", "--pos-z": "0px" } as React.CSSProperties}
          >
            <div className="lattice-pink-mover lattice-mover-y">
              <div className="lattice-plane-y" style={{ transform: "translateY(0px) rotateX(90deg)", "--max-op": 1 } as React.CSSProperties} />
              <div className="lattice-plane-y" style={{ transform: "translateY(-30px) rotateX(90deg)", "--max-op": 0.6 } as React.CSSProperties} />
              <div className="lattice-plane-y" style={{ transform: "translateY(-60px) rotateX(90deg)", "--max-op": 0.3 } as React.CSSProperties} />
              <div className="lattice-plane-y" style={{ transform: "translateY(-90px) rotateX(90deg)", "--max-op": 0.1 } as React.CSSProperties} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
