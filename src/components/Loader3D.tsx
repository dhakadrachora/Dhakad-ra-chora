import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Cpu, Terminal } from "lucide-react";

export default function Loader3D() {
  const [loadingStep, setLoadingStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const statusLogs = [
    "Establishing Safe Sandbox Node...",
    "Igniting 3D Neon Particle Arrays...",
    "Mapping Responsive Portfolios...",
    "Launching Rohit Kumar Nagar Core v2.4..."
  ];

  useEffect(() => {
    // Cycle through status messages
    const logInterval = setInterval(() => {
      setLoadingStep((prev) => {
        if (prev < statusLogs.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 450);

    // Fade out after completion
    const closeTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => {
      clearInterval(logInterval);
      clearTimeout(closeTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="3d-preloader-canvas"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#060608] flex flex-col items-center justify-center z-[100] text-center"
        >
          {/* Decorative ambient glowing backdrops */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-blue-600/10 rounded-full blur-[80px]" />

          <div className="space-y-10 relative z-10 p-6 max-w-sm">
            
            {/* 3D Spinning Neon Core Logo */}
            <div className="flex items-center justify-center">
              <div className="relative w-24 h-24 flex items-center justify-center">
                {/* Outermost cyan glow ring with spin direction 1 */}
                <div className="absolute inset-0 border-2 border-dashed border-cyan-500/25 rounded-full animate-spin [animation-duration:8s]" />
                
                {/* Secondary purple inner ring with fast reverse spin */}
                <div className="absolute inset-2 border-2 border-dotted border-purple-500/35 rounded-full animate-spin [animation-duration:3s] [animation-direction:reverse]" />
                
                {/* Innermost pulsing diamond card */}
                <motion.div
                  animate={{
                    rotateY: [0, 180, 360],
                    rotateX: [0, 90, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-600 to-pink-500 shadow-[0_0_25px_rgba(168,85,247,0.7)] flex items-center justify-center"
                >
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
                </motion.div>
                
                {/* Small orbital satellites */}
                <div className="absolute w-2 h-2 rounded-full bg-cyan-400 animate-ping" style={{ top: "10%", left: "10%" }} />
                <div className="absolute w-2 h-2 rounded-full bg-purple-400 animate-ping" style={{ bottom: "10%", right: "10%" }} />
              </div>
            </div>

            {/* Static Core Title */}
            <div className="space-y-1.5 pl-1">
              <span className="font-mono text-[9px] text-purple-400 font-bold uppercase tracking-widest block">
                Loading Digital Experience
              </span>
              <h3 className="font-sans font-black text-2xl tracking-normal text-white">
                Rohit Kumar Nagar
              </h3>
            </div>

            {/* Animated Loading Status logs */}
            <div className="h-6 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={loadingStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 font-mono text-[10px] text-zinc-400"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{statusLogs[loadingStep]}</span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Simulated progress wireframe bar */}
            <div className="w-48 h-[2px] bg-zinc-900 mx-auto rounded-full overflow-hidden border border-zinc-800">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.8, ease: "linear" }}
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
