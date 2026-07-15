import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  max?: number; // Maximum rotation in degrees
  scale?: number; // Scale factor on hover
  glowColor?: string; // Glare reflection color
  key?: any;
  style?: React.CSSProperties;
}

export default function Tilt({
  children,
  className = "",
  max = 10,
  scale = 1.02,
  glowColor = "rgba(139, 92, 246, 0.15)", // Violet glow default
  style
}: TiltProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const el = containerRef.current;
    const rect = el.getBoundingClientRect();

    // Mouse coordinates relative to card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Percentages (from -0.5 to 0.5)
    const px = x / rect.width - 0.5;
    const py = y / rect.height - 0.5;

    // Calculate rotation:
    const rotateX = -py * max * 2;
    const rotateY = px * max * 2;

    // Dynamic Glare Position Percentage
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    // Animate the card movement with GSAP for buttery smooth rendering
    // We animate transform rotation AND perspectiveOrigin for a dynamic parallax look!
    gsap.to(el, {
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
      perspectiveOrigin: `${50 + px * 35}% ${50 + py * 35}%`,
      duration: 0.4,
      ease: "power2.out",
      overwrite: "auto"
    });

    // Animate glare positioning and opacity
    if (glareRef.current) {
      gsap.to(glareRef.current, {
        background: `radial-gradient(circle 140px at ${glareX}% ${glareY}%, ${glowColor}, transparent 80%)`,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  };

  const handleMouseEnter = () => {
    if (!containerRef.current) return;

    // Depth-of-Field Blur effect on other cards
    // We select other cards that have the same [data-tilt-card] attribute and blur them
    const siblings = document.querySelectorAll("[data-tilt-card]");
    siblings.forEach((sib) => {
      if (sib !== containerRef.current) {
        gsap.to(sib, {
          filter: "blur(2.5px)",
          opacity: 0.5,
          scale: 0.98,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto"
        });
      } else {
        // Active card is super sharp and pops forward
        gsap.to(sib, {
          filter: "blur(0px)",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
      }
    });

    // Apply soft depth-of-field blur to the interactive background canvas
    const bgContainer = document.getElementById("3d-background-container");
    if (bgContainer) {
      gsap.to(bgContainer, {
        filter: "blur(2px)",
        scale: 1.01,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;

    const el = containerRef.current;

    // Restore card to neutral state
    gsap.to(el, {
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`,
      perspectiveOrigin: "50% 50%",
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto"
    });

    if (glareRef.current) {
      gsap.to(glareRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto"
      });
    }

    // Restore all other cards from blur to crystal-clear state
    const siblings = document.querySelectorAll("[data-tilt-card]");
    siblings.forEach((sib) => {
      gsap.to(sib, {
        filter: "blur(0px)",
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto"
      });
    });

    // Restore background canvas focus state
    const bgContainer = document.getElementById("3d-background-container");
    if (bgContainer) {
      gsap.to(bgContainer, {
        filter: "blur(0px)",
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto"
      });
    }
  };

  // Clean up GSAP animations on unmount to prevent leaks
  useEffect(() => {
    return () => {
      if (containerRef.current) {
        gsap.killTweensOf(containerRef.current);
      }
      if (glareRef.current) {
        gsap.killTweensOf(glareRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-tilt-card="true"
      className={`relative select-none ${className}`}
      style={{
        transformStyle: "preserve-3d",
        ...style
      }}
    >
      {/* Glare Reflection Layer */}
      <div
        ref={glareRef}
        className="absolute inset-0 rounded-inherit pointer-events-none z-30 opacity-0"
        style={{
          background: `radial-gradient(circle 140px at 50% 50%, ${glowColor}, transparent 80%)`,
          mixBlendMode: "screen",
          borderRadius: "inherit"
        }}
      />
      
      {/* Sub-container that preserves 3D for child elements if they need translation */}
      <div style={{ transform: "translateZ(10px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </div>
  );
}
