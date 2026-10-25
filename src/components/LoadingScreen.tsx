import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timeoutDuration = prefersReducedMotion ? 400 : 2000;

    const timer = setTimeout(() => {
      setIsFading(true);
      const fadeTimer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(fadeTimer);
    }, timeoutDuration);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#171817] text-[#F7F4EE] transition-opacity duration-700 ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-4 px-6 text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#B99A65] font-medium animate-pulse">
          Interiors & Blinds World
        </span>
        <h1 className="text-3xl md:text-5xl font-serif-editorial tracking-wider font-light">
          CCA INTERIOR
        </h1>
        <div className="w-24 h-[1px] bg-[#B99A65] mt-2 transition-all duration-1000 ease-out transform scale-x-100" />
      </div>
    </div>
  );
}
