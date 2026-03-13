"use client";

export function LatticeCube() {
  const gridPlanes = [];
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

          <div className="lattice-flow-z" style={{ "--pos-x": "60px", "--pos-y": "180px" } as React.CSSProperties}>
            <div className="lattice-mover-z">
              <div className="lattice-plane-z" style={{ transform: "translateZ(0px)", "--max-op": 0.82 } as React.CSSProperties} />
              <div className="lattice-plane-z" style={{ transform: "translateZ(-30px)", "--max-op": 0.52 } as React.CSSProperties} />
              <div className="lattice-plane-z" style={{ transform: "translateZ(-60px)", "--max-op": 0.28 } as React.CSSProperties} />
            </div>
          </div>

          <div className="lattice-flow-x" style={{ "--pos-y": "120px", "--pos-z": "-60px" } as React.CSSProperties}>
            <div className="lattice-mover-x">
              <div className="lattice-plane-x" style={{ transform: "translateX(0px) rotateY(90deg)", "--max-op": 0.76 } as React.CSSProperties} />
              <div className="lattice-plane-x" style={{ transform: "translateX(-30px) rotateY(90deg)", "--max-op": 0.46 } as React.CSSProperties} />
              <div className="lattice-plane-x" style={{ transform: "translateX(-60px) rotateY(90deg)", "--max-op": 0.24 } as React.CSSProperties} />
            </div>
          </div>

          <div className="lattice-flow-y" style={{ "--pos-x": "180px", "--pos-z": "0px" } as React.CSSProperties}>
            <div className="lattice-mover-y">
              <div className="lattice-plane-y" style={{ transform: "translateY(0px) rotateX(90deg)", "--max-op": 0.72 } as React.CSSProperties} />
              <div className="lattice-plane-y" style={{ transform: "translateY(-30px) rotateX(90deg)", "--max-op": 0.44 } as React.CSSProperties} />
              <div className="lattice-plane-y" style={{ transform: "translateY(-60px) rotateX(90deg)", "--max-op": 0.22 } as React.CSSProperties} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
