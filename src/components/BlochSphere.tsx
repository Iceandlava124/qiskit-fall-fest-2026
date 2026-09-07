import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface StatePreset {
  label: string;
  name: string;
  theta: number;
  phi: number;
  formula: string;
}

const presets: StatePreset[] = [
  { label: '|0⟩', name: 'Ground State', theta: 0.001, phi: 0, formula: '|ψ⟩ = |0⟩' },
  { label: '|1⟩', name: 'Excited State', theta: Math.PI - 0.001, phi: 0, formula: '|ψ⟩ = |1⟩' },
  { label: '|+⟩', name: 'Hadamard State', theta: Math.PI / 2, phi: 0, formula: '|ψ⟩ = (|0⟩ + |1⟩)/√2' },
  { label: '|−⟩', name: 'Minus State', theta: Math.PI / 2, phi: Math.PI, formula: '|ψ⟩ = (|0⟩ − |1⟩)/√2' },
  { label: '|i⟩', name: 'Phase State +i', theta: Math.PI / 2, phi: Math.PI / 2, formula: '|ψ⟩ = (|0⟩ + i|1⟩)/√2' },
];

export default function BlochSphere() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activePreset, setActivePreset] = useState<StatePreset>(presets[2]); // Default |+⟩
  const [webGlSupported, setWebGlSupported] = useState<boolean>(true);
  const targetDirRef = useRef<THREE.Vector3>(new THREE.Vector3(1, 0, 0));
  const currentDirRef = useRef<THREE.Vector3>(new THREE.Vector3(1, 0, 0));

  const setPreset = (p: StatePreset) => {
    setActivePreset(p);
    const x = Math.sin(p.theta) * Math.cos(p.phi);
    const y = Math.cos(p.theta);
    const z = Math.sin(p.theta) * Math.sin(p.phi);
    targetDirRef.current.set(x, y, z).normalize();
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    } catch {
      setWebGlSupported(false);
      return;
    }

    const rect = container.getBoundingClientRect();
    const width = rect.width > 0 ? rect.width : 360;
    const height = rect.height > 0 ? rect.height : 360;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(2.4, 1.6, 3.2);
    camera.lookAt(0, 0, 0);

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const sphereGroup = new THREE.Group();
    scene.add(sphereGroup);

    const radius = 1.0;

    // 1. Translucent Bloch sphere shell
    const sphereGeo = new THREE.SphereGeometry(radius, 36, 36);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x6929c4,
      transparent: true,
      opacity: 0.08,
      wireframe: false,
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
    sphereGroup.add(sphereMesh);

    // 2. Latitude and Longitude Rings
    const createRing = (axis: 'x' | 'y' | 'z', color: number, opacity: number) => {
      const curve = new THREE.EllipseCurve(0, 0, radius, radius, 0, 2 * Math.PI, false, 0);
      const points = curve.getPoints(64);
      const geom = new THREE.BufferGeometry().setFromPoints(
        points.map((p) => {
          if (axis === 'x') return new THREE.Vector3(0, p.x, p.y);
          if (axis === 'y') return new THREE.Vector3(p.x, 0, p.y);
          return new THREE.Vector3(p.x, p.y, 0);
        })
      );
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity });
      return new THREE.Line(geom, mat);
    };

    sphereGroup.add(createRing('z', 0x6929c4, 0.45)); // Equator
    sphereGroup.add(createRing('x', 0x8a3ffc, 0.35)); // XZ meridian
    sphereGroup.add(createRing('y', 0x491d8b, 0.25)); // YZ meridian

    // 3. Coordinate Axes
    const axisLen = 1.38;
    const makeAxis = (dir: THREE.Vector3, color: number) => {
      const geom = new THREE.BufferGeometry().setFromPoints([
        dir.clone().multiplyScalar(-axisLen),
        dir.clone().multiplyScalar(axisLen),
      ]);
      const mat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.45 });
      return new THREE.Line(geom, mat);
    };

    sphereGroup.add(makeAxis(new THREE.Vector3(1, 0, 0), 0x94a3b8)); // X
    sphereGroup.add(makeAxis(new THREE.Vector3(0, 1, 0), 0x6929c4)); // Z (|0⟩ is +Z)
    sphereGroup.add(makeAxis(new THREE.Vector3(0, 0, 1), 0x94a3b8)); // Y

    // 4. Robust text sprites with cross-platform font fallback
    const makeTextSprite = (text: string, color: string = '#0f172a') => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 128;
      const ctx = canvas.getContext('2d')!;
      ctx.fillStyle = color;
      ctx.font = 'bold 44px "Space Grotesk", "Segoe UI", Arial, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, 128, 64);
      const texture = new THREE.CanvasTexture(canvas);
      const mat = new THREE.SpriteMaterial({ map: texture, transparent: true });
      const sprite = new THREE.Sprite(mat);
      sprite.scale.set(0.5, 0.25, 1);
      return sprite;
    };

    const label0 = makeTextSprite('|0⟩', '#0f172a');
    label0.position.set(0, axisLen + 0.14, 0);
    sphereGroup.add(label0);

    const label1 = makeTextSprite('|1⟩', '#0f172a');
    label1.position.set(0, -axisLen - 0.14, 0);
    sphereGroup.add(label1);

    const labelPlus = makeTextSprite('|+⟩', '#6929c4');
    labelPlus.position.set(axisLen + 0.14, 0, 0);
    sphereGroup.add(labelPlus);

    const labelMinus = makeTextSprite('|−⟩', '#6929c4');
    labelMinus.position.set(-axisLen - 0.14, 0, 0);
    sphereGroup.add(labelMinus);

    // 5. State Vector Arrow & Purple Tip
    const arrow = new THREE.ArrowHelper(
      currentDirRef.current,
      new THREE.Vector3(0, 0, 0),
      radius,
      0x6929c4,
      0.18,
      0.09
    );
    sphereGroup.add(arrow);

    const tipGeo = new THREE.SphereGeometry(0.05, 16, 16);
    const tipMat = new THREE.MeshBasicMaterial({ color: 0x6929c4 });
    const tipMesh = new THREE.Mesh(tipGeo, tipMat);
    tipMesh.position.copy(currentDirRef.current.clone().multiplyScalar(radius));
    sphereGroup.add(tipMesh);

    // North and South Pole Spheres
    const poleGeo = new THREE.SphereGeometry(0.035, 12, 12);
    const poleMat = new THREE.MeshBasicMaterial({ color: 0x6929c4, transparent: true, opacity: 0.5 });
    const northPole = new THREE.Mesh(poleGeo, poleMat);
    northPole.position.set(0, radius, 0);
    sphereGroup.add(northPole);

    const southPole = new THREE.Mesh(poleGeo, poleMat);
    southPole.position.set(0, -radius, 0);
    sphereGroup.add(southPole);

    // Smooth clamped rotation interaction (prevents inversion on PC drag)
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;

    const onDown = (e: MouseEvent | TouchEvent) => {
      isDragging = true;
      prevX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      prevY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    };

    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      const dx = clientX - prevX;
      const dy = clientY - prevY;

      // Rotate Y freely 360 degrees
      sphereGroup.rotation.y += dx * 0.007;

      // Clamp X tilt between -0.45 and 0.45 radians (~25 deg) so it never flips upside down
      sphereGroup.rotation.x = Math.max(-0.45, Math.min(0.45, sphereGroup.rotation.x + dy * 0.005));

      prevX = clientX;
      prevY = clientY;
    };

    const onUp = () => {
      isDragging = false;
    };

    const dom = renderer.domElement;
    dom.addEventListener('mousedown', onDown);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    dom.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onUp);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Animation loop
    let reqId: number;
    const animate = () => {
      reqId = requestAnimationFrame(animate);

      // Smooth state vector transition
      currentDirRef.current.lerp(targetDirRef.current, 0.1);
      arrow.setDirection(currentDirRef.current.clone().normalize());
      tipMesh.position.copy(currentDirRef.current.clone().normalize().multiplyScalar(radius));

      if (!isDragging && !prefersReducedMotion) {
        sphereGroup.rotation.y += 0.003;
      }

      renderer.render(scene, camera);
    };
    animate();

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newW = entry.contentRect.width;
        const newH = entry.contentRect.height;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(reqId);
      resizeObserver.disconnect();
      dom.removeEventListener('mousedown', onDown);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      dom.removeEventListener('touchstart', onDown);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
      
      // Clean up all scene objects, geometries, textures, and materials to prevent mobile WebGL leaks
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh || obj instanceof THREE.Line || obj instanceof THREE.Sprite) {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) {
              obj.material.forEach((m) => {
                if ('map' in m && m.map) m.map.dispose();
                m.dispose();
              });
            } else {
              if ('map' in obj.material && obj.material.map) obj.material.map.dispose();
              obj.material.dispose();
            }
          }
        }
      });

      if (container.contains(dom)) {
        container.removeChild(dom);
      }
      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, []);

  if (!webGlSupported) {
    const r = 78;
    const cx = 110;
    const cy = 110;
    const x3d = Math.sin(activePreset.theta) * Math.cos(activePreset.phi);
    const y3d = Math.cos(activePreset.theta);
    const z3d = Math.sin(activePreset.theta) * Math.sin(activePreset.phi);
    const targetX = cx + (x3d * 0.85 - z3d * 0.4) * r;
    const targetY = cy - (y3d * 0.95 + z3d * 0.2) * r;

    return (
      <div className="flex flex-col items-center w-full max-w-md mx-auto select-none" role="region" aria-label="Bloch Sphere Simulator">
        <div className="relative w-full aspect-square max-w-[280px] sm:max-w-[320px] mx-auto flex items-center justify-center p-2">
          {/* Ambient background glow */}
          <div className="absolute inset-2 rounded-full bg-quantum-purple/10 blur-2xl pointer-events-none" />

          {/* SVG Vector Bloch Sphere */}
          <svg viewBox="0 0 220 220" className="w-full h-full relative z-10 overflow-visible">
            <defs>
              <marker id="arrowhead-svg" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#6929C4" />
              </marker>
            </defs>

            {/* Sphere outline */}
            <circle cx={cx} cy={cy} r={r} fill="#FAF5FF" stroke="#C084FC" strokeWidth="1.5" strokeOpacity="0.5" />
            
            {/* Equator ellipse */}
            <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.32} fill="none" stroke="#9333EA" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.5" />
            
            {/* Z axis (vertical) */}
            <line x1={cx} y1={cy - r - 10} x2={cx} y2={cy + r + 10} stroke="#64748B" strokeWidth="1" strokeDasharray="2 2" />
            <text x={cx} y={cy - r - 14} textAnchor="middle" className="text-[11px] font-mono font-bold fill-purple-700">|0⟩</text>
            <text x={cx} y={cy + r + 20} textAnchor="middle" className="text-[11px] font-mono font-bold fill-purple-700">|1⟩</text>
            
            {/* X axis */}
            <line x1={cx - r * 0.75} y1={cy + r * 0.3} x2={cx + r * 0.75} y2={cy - r * 0.3} stroke="#94A3B8" strokeWidth="1" />
            <text x={cx - r * 0.75 - 10} y={cy + r * 0.3 + 8} textAnchor="middle" className="text-[9px] font-mono fill-slate-500">|+x⟩</text>
            
            {/* Y axis */}
            <line x1={cx - r - 6} y1={cy} x2={cx + r + 6} y2={cy} stroke="#94A3B8" strokeWidth="1" />
            <text x={cx + r + 14} y={cy + 3} textAnchor="start" className="text-[9px] font-mono fill-slate-500">|+y⟩</text>

            {/* State Vector Arrow */}
            <line
              x1={cx}
              y1={cy}
              x2={targetX}
              y2={targetY}
              stroke="#6929C4"
              strokeWidth="2.5"
              markerEnd="url(#arrowhead-svg)"
              className="transition-all duration-300 ease-out"
            />
            {/* Center origin */}
            <circle cx={cx} cy={cy} r="3" fill="#6929C4" />
            {/* Vector tip glowing dot */}
            <circle cx={targetX} cy={targetY} r="4" fill="#6929C4" />
          </svg>

          {/* Dynamic State Equation Chip */}
          <div className="absolute bottom-1 right-1 text-xs font-mono text-quantum-purple bg-white/95 px-3 py-1.5 rounded-lg border border-quantum-purple/30 shadow-md backdrop-blur-md z-20">
            {activePreset.formula}
          </div>
        </div>

        {/* State Presets Buttons */}
        <div className="mt-3 flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl border border-slate-200 bg-white/90 backdrop-blur-md shadow-sm">
          <span className="text-[11px] font-mono text-slate-500 px-2 font-medium">State:</span>
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => setActivePreset(p)}
              className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                activePreset.label === p.label
                  ? 'bg-quantum-purple text-white font-bold shadow-sm ring-1 ring-quantum-purple'
                  : 'text-slate-600 hover:text-quantum-purple hover:bg-slate-100'
              }`}
              title={`${p.name} (${p.label})`}
            >
              {p.label}
            </button>
          ))}
        </div>
        <p className="text-[10px] font-mono text-slate-500 mt-2 text-center">
          (click presets to transform state vector)
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto" role="region" aria-label="Interactive 3D Bloch Sphere Simulator">
      {/* 3D Sphere Container with ambient background ring */}
      <div className="relative w-full aspect-square max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] mx-auto cursor-grab active:cursor-grabbing select-none flex items-center justify-center">
        {/* Subtle glowing halo behind the sphere */}
        <div className="absolute inset-2 rounded-full bg-quantum-purple/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-8 rounded-full border border-quantum-purple/20 pointer-events-none" />

        {/* Three.js Canvas Mount */}
        <div ref={mountRef} className="w-full h-full relative z-10" aria-label="3D Bloch Sphere Canvas" />

        {/* Dynamic State Equation Chip */}
        <div
          className="absolute bottom-2 right-2 text-xs font-mono text-quantum-purple bg-white/95 px-3 py-1.5 rounded-lg border border-quantum-purple/30 pointer-events-none shadow-md backdrop-blur-md z-20"
          aria-live="polite"
        >
          {activePreset.formula}
        </div>
      </div>

      {/* Preset State Selector Buttons with screen-reader friendly ARIA labels */}
      <div
        className="mt-3 flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-xl border border-slate-200 bg-white/90 backdrop-blur-md shadow-sm"
        role="group"
        aria-label="Quantum State Presets"
      >
        <span className="text-[11px] font-mono text-slate-500 px-2 font-medium">State:</span>
        {presets.map((p) => (
          <button
            key={p.label}
            onClick={() => setPreset(p)}
            className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
              activePreset.label === p.label
                ? 'bg-quantum-purple text-white font-bold shadow-sm ring-1 ring-quantum-purple'
                : 'text-slate-600 hover:text-quantum-purple hover:bg-slate-100'
            }`}
            title={`${p.name} (${p.label})`}
            aria-label={`${p.name} (${p.label})`}
            aria-pressed={activePreset.label === p.label}
          >
            <span aria-hidden="true">{p.label}</span>
          </button>
        ))}
      </div>
      <p className="text-[10px] font-mono text-slate-500 mt-2 text-center">
        (drag to rotate • click presets to transform state)
      </p>
    </div>
  );
}
