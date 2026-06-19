import React, { useEffect, useRef } from "react";

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // Responsive Canvas Resizing using ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        width = entryWidth;
        height = entryHeight;
        canvas.width = entryWidth;
        canvas.height = entryHeight;
      }
    });

    resizeObserver.observe(container);

    // Initial size setup
    const rect = container.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width;
    canvas.height = height;

    // Track mouse coordinates
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      mouseRef.current.targetX = (relativeX / width - 0.5) * 100;
      mouseRef.current.targetY = (relativeY / height - 0.5) * 100;
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    // 3D Particles Definition
    interface Particle3D {
      x: number;
      y: number;
      z: number;
      size: number;
      color: string;
      speed: number;
      rotSpeed: number;
      angle: number;
      shape: "circle" | "square" | "ring";
    }

    const particles: Particle3D[] = Array.from({ length: 65 }, () => {
      const colors = [
        "rgba(59, 130, 246, 0.45)", // soft blue
        "rgba(147, 51, 234, 0.45)", // soft purple
        "rgba(236, 72, 153, 0.35)", // soft pink
        "rgba(6, 182, 212, 0.45)"   // cyan
      ];

      return {
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        z: Math.random() * 800 + 200,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.4 + 0.1,
        rotSpeed: (Math.random() - 0.5) * 0.02,
        angle: Math.random() * Math.PI * 2,
        shape: Math.random() > 0.6 ? "ring" : Math.random() > 0.3 ? "circle" : "square"
      };
    });

    // Main animation loop
    const render = () => {
      // Smoothly interpolate mouse target coordinates for organic lag/inertia
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Dark futuristic overlay gradient with cyber blue-violet undertones
      ctx.fillStyle = "rgba(7, 7, 10, 0.15)";
      ctx.fillRect(0, 0, width, height);

      // Draw subtle futuristic cyber digital grid lines behind particles
      ctx.strokeStyle = "rgba(147, 51, 234, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 80;
      const gridOffsetX = (mouseRef.current.x * 0.2) % gridSize;
      const gridOffsetY = (mouseRef.current.y * 0.2) % gridSize;

      for (let x = gridOffsetX; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = gridOffsetY; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw ambient grid background nodes (neon dust)
      particles.forEach((p) => {
        // Move particle deeper along the Z axis, or loop
        p.z -= p.speed;
        p.angle += p.rotSpeed;

        if (p.z <= 10) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * 2000;
          p.y = (Math.random() - 0.5) * 2000;
        }

        // Apply 3D perspective projection formula
        const fov = 400; // focal length of viewer camera
        // Mouse influences X and Y coordinate displacements for perspective effect
        const projX = ((p.x - mouseRef.current.x * 4) * fov) / p.z + width / 2;
        const projY = ((p.y - mouseRef.current.y * 4) * fov) / p.z + height / 2;
        const scale = fov / p.z;
        const size = p.size * scale;

        // Clip drawing if projection falls outside visible boundary
        if (projX < -50 || projX > width + 50 || projY < -50 || projY > height + 50) {
          return;
        }

        ctx.save();
        ctx.translate(projX, projY);
        ctx.rotate(p.angle);

        // Particle Glow
        ctx.shadowBlur = Math.min(20, size * 2.5);
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;

        if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, Math.max(0.5, size), 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "square") {
          ctx.fillRect(-size / 2, -size / 2, Math.max(1, size), Math.max(1, size));
        } else {
          // Ring
          ctx.lineWidth = Math.max(0.7, size * 0.25);
          ctx.beginPath();
          ctx.arc(0, 0, Math.max(1, size), 0, Math.PI * 2);
          ctx.stroke();
        }

        ctx.restore();
      });

      // Draw beautiful top-left and bottom-right subtle aesthetic ambient light pools
      const pColor1 = "rgba(147, 51, 234, 0.08)"; // violet glow
      const pColor2 = "rgba(59, 130, 246, 0.08)"; // blue glow

      const glow1 = ctx.createRadialGradient(
        0, 0, 0,
        0, 0, Math.max(400, width * 0.4)
      );
      glow1.addColorStop(0, pColor1);
      glow1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, width, height);

      const glow2 = ctx.createRadialGradient(
        width, height, 0,
        width, height, Math.max(400, width * 0.4)
      );
      glow2.addColorStop(0, pColor2);
      glow2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.unobserve(container);
    };
  }, []);

  return (
    <div
      id="3d-background-container"
      ref={containerRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 bg-[#060608]"
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
