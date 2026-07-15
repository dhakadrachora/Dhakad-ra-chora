import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Background3D({ isDarkMode }: { isDarkMode: boolean }) {
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

    // Track mouse coordinates & spawn ripples
    let lastX = 0;
    let lastY = 0;

    interface MouseRipple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      color: string;
    }
    const ripples: MouseRipple[] = [];

    // Reactive GSAP reference object for scroll parallax
    const scrollOffset = { y: 0 };

    // GSAP Scroll Listener for Stereoscopic Parallax Drift
    const handleScroll = () => {
      const scrollY = window.scrollY;
      gsap.to(scrollOffset, {
        y: scrollY * 0.45, // smooth speed multiplier
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto"
      });

      // Camera depth-of-field lens blur based on scroll percentage
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;
      gsap.to(container, {
        filter: `blur(${scrollPercent * 1.8}px)`,
        duration: 0.6,
        ease: "power1.out",
        overwrite: "auto"
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Dynamic perspective-origin shift handler using GSAP
    const handleMouseMoveOrigin = (e: MouseEvent) => {
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      gsap.to(container, {
        perspectiveOrigin: `${50 + px * 25}% ${50 + py * 25}%`,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto"
      });
    };

    window.addEventListener("mousemove", handleMouseMoveOrigin);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;
      mouseRef.current.targetX = (relativeX / width - 0.5) * 100;
      mouseRef.current.targetY = (relativeY / height - 0.5) * 100;

      // Add organic flow ripple on mouse movement
      const dx = relativeX - lastX;
      const dy = relativeY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 35) {
        const colors = isDarkMode ? [
          "rgba(59, 130, 246, 0.4)", 
          "rgba(147, 51, 234, 0.4)", 
          "rgba(6, 182, 212, 0.4)"
        ] : [
          "rgba(59, 130, 246, 0.2)", 
          "rgba(147, 51, 234, 0.2)", 
          "rgba(6, 182, 212, 0.2)"
        ];
        ripples.push({
          x: relativeX,
          y: relativeY,
          radius: 2,
          maxRadius: Math.random() * 50 + 25,
          alpha: 0.5,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
        lastX = relativeX;
        lastY = relativeY;
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
      gsap.to(container, {
        perspectiveOrigin: "50% 50%",
        duration: 1,
        ease: "power2.out"
      });
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
      driftSeed: number;
    }

    const particles: Particle3D[] = Array.from({ length: 45 }, () => {
      const colors = isDarkMode ? [
        "rgba(59, 130, 246, 0.45)", // soft blue
        "rgba(147, 51, 234, 0.45)", // soft purple
        "rgba(236, 72, 153, 0.35)", // soft pink
        "rgba(6, 182, 212, 0.45)"   // cyan
      ] : [
        "rgba(29, 78, 216, 0.45)",  // deep blue
        "rgba(109, 40, 217, 0.45)", // deep purple
        "rgba(190, 24, 74, 0.35)",  // deep rose
        "rgba(3, 105, 120, 0.45)"   // deep cyan
      ];

      return {
        x: (Math.random() - 0.5) * 1800,
        y: (Math.random() - 0.5) * 1800,
        z: Math.random() * 800 + 200,
        size: Math.random() * 3.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.4 + 0.1,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        angle: Math.random() * Math.PI * 2,
        shape: Math.random() > 0.65 ? "ring" : Math.random() > 0.3 ? "circle" : "square",
        driftSeed: Math.random() * 100
      };
    });

    let time = 0;

    // Main animation loop
    const render = () => {
      time += 0.0015;

      // Smoothly interpolate mouse target coordinates for organic lag/inertia
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Dark futuristic overlay gradient with cyber blue-violet undertones
      ctx.fillStyle = isDarkMode ? "rgba(6, 6, 8, 0.2)" : "rgba(244, 244, 247, 0.2)";
      ctx.fillRect(0, 0, width, height);

      // Draw subtle futuristic cyber digital grid lines behind particles
      ctx.strokeStyle = isDarkMode ? "rgba(147, 51, 234, 0.015)" : "rgba(109, 40, 217, 0.015)";
      ctx.lineWidth = 1;
      const gridSize = 100; // Larger grid size = fewer lines to draw
      const gridOffsetX = (mouseRef.current.x * 0.15) % gridSize;
      const gridOffsetY = (mouseRef.current.y * 0.15 - scrollOffset.y * 0.1) % gridSize;

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

      // Draw interactive flowing ripples/trails
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += (r.maxRadius - r.radius) * 0.06;
        r.alpha -= 0.012;
        if (r.alpha <= 0) {
          ripples.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.strokeStyle = r.color.replace("0.4", `${r.alpha}`).replace("0.2", `${r.alpha}`);
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // Draw beautiful flowing vector ribbons (Swaying Aura Waves)
      const drawFlowingRibbon = (offsetY: number, amplitude: number, speedMultiplier: number, color1: string, color2: string) => {
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 1.5;
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, "rgba(0,0,0,0)");
        grad.addColorStop(0.3, color1);
        grad.addColorStop(0.7, color2);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.strokeStyle = grad;

        for (let x = 0; x <= width; x += 15) {
          const waveInput = x * 0.0018 + time * speedMultiplier;
          const y = offsetY + Math.sin(waveInput) * amplitude + Math.cos(x * 0.0006 - time * speedMultiplier * 0.4) * (amplitude * 0.4) - scrollOffset.y * 0.15;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
        ctx.restore();
      };

      if (isDarkMode) {
        drawFlowingRibbon(height * 0.35, 35, 12, "rgba(59, 130, 246, 0.08)", "rgba(147, 51, 234, 0.08)");
        drawFlowingRibbon(height * 0.65, 45, -8, "rgba(236, 72, 153, 0.06)", "rgba(6, 182, 212, 0.06)");
      } else {
        drawFlowingRibbon(height * 0.35, 30, 10, "rgba(59, 130, 246, 0.04)", "rgba(147, 51, 234, 0.04)");
        drawFlowingRibbon(height * 0.65, 40, -7, "rgba(236, 72, 153, 0.03)", "rgba(6, 182, 212, 0.03)");
      }

      // Draw ambient grid background nodes (neon dust) with fluid drift
      particles.forEach((p) => {
        // Move particle deeper along the Z axis, or loop
        p.z -= p.speed;
        p.angle += p.rotSpeed;

        if (p.z <= 10) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * 1800;
          p.y = (Math.random() - 0.5) * 1800;
        }

        // Apply 3D perspective projection formula with fluid breeze/sway
        const fov = 400; // focal length of viewer camera
        
        // Fluid breeze calculations based on time and drift seed
        const swayX = Math.sin(time * 6 + p.driftSeed) * 20;
        const swayY = Math.cos(time * 4 + p.driftSeed) * 15;

        // Mouse + Scroll influences X and Y coordinate displacements for perspective stereoscopic parallax
        const projX = ((p.x + swayX - mouseRef.current.x * 3) * fov) / p.z + width / 2;
        const projY = ((p.y + swayY - mouseRef.current.y * 3 - scrollOffset.y * 0.8) * fov) / p.z + height / 2;
        const scale = fov / p.z;
        const size = p.size * scale;

        // Clip drawing if projection falls outside visible boundary
        if (projX < -50 || projX > width + 50 || projY < -50 || projY > height + 50) {
          return;
        }

        ctx.save();
        ctx.translate(projX, projY);
        ctx.rotate(p.angle);

        // High Performance Glow alternative to expensive shadowBlur
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;

        if (p.shape === "circle") {
          // Draw outer glow circle
          ctx.fillStyle = p.color.replace("0.45", "0.08").replace("0.35", "0.06");
          ctx.beginPath();
          ctx.arc(0, 0, Math.max(1, size * 2.2), 0, Math.PI * 2);
          ctx.fill();

          // Draw core circle
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, Math.max(0.5, size), 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "square") {
          // Draw core square
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
      const pColor1 = isDarkMode ? "rgba(147, 51, 234, 0.08)" : "rgba(147, 51, 234, 0.04)"; 
      const pColor2 = isDarkMode ? "rgba(59, 130, 246, 0.08)" : "rgba(59, 130, 246, 0.04)"; 

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
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMoveOrigin);
      window.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.unobserve(container);
    };
  }, [isDarkMode]);

  return (
    <div
      id="3d-background-container"
      ref={containerRef}
      className={`fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none z-0 transition-colors duration-300 ${
        isDarkMode ? "bg-[#060608]" : "bg-[#f4f4f7]"
      }`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
        perspectiveOrigin: "50% 50%"
      }}
    >
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
