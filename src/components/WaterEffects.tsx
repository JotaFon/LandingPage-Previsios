"use client";

import { useEffect, useState } from "react";

// Componente de bolhas flutuantes
export function Bubbles({ count = 20 }: { count?: number }) {
  const [bubbles, setBubbles] = useState<
    Array<{
      id: number;
      left: number;
      size: number;
      delay: number;
      duration: number;
    }>
  >([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 20 + 5,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 10,
    }));
    setBubbles(newBubbles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-primary-400/20 to-secondary-400/10 animate-bubble"
          style={{
            left: `${bubble.left}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        >
          {/* Brilho da bolha */}
          <div className="absolute top-1 left-1 w-1/3 h-1/3 rounded-full bg-white/30" />
        </div>
      ))}
    </div>
  );
}

// Componente de ondas animadas mais elaborado
export function WaterWaves() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[520px] overflow-hidden pointer-events-none">
      {/* Camada 1 - Onda mais ao fundo (mais alta) */}
      <svg
        className="absolute bottom-0 w-[200%] h-112 text-primary-900/30 animate-wave-slow"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,165.3C840,171,960,213,1080,213.3C1200,213,1320,171,1440,160C1560,149,1680,171,1800,186.7C1920,203,2040,213,2160,197.3C2280,181,2400,139,2520,128C2640,117,2760,139,2820,149.3L2880,160L2880,320L2820,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1440,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

      {/* Camada 2 - Onda do meio */}
      <svg
        className="absolute bottom-0 w-[200%] h-110 text-secondary-700/35 animate-wave-medium"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,218.7C840,235,960,245,1080,234.7C1200,224,1320,192,1440,181.3C1560,171,1680,181,1800,197.3C1920,213,2040,235,2160,229.3C2280,224,2400,192,2520,181.3C2640,171,2760,181,2820,186.7L2880,192L2880,320L2820,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1440,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

      {/* Camada 3 - Onda da frente */}
      <svg
        className="absolute bottom-0 w-[200%] h-110 text-primary-700/35 animate-wave-fast"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,256L60,261.3C120,267,240,277,360,272C480,267,600,245,720,234.7C840,224,960,224,1080,234.7C1200,245,1320,267,1440,261.3C1560,256,1680,224,1800,218.7C1920,213,2040,235,2160,245.3C2280,256,2400,256,2520,245.3C2640,235,2760,213,2820,202.7L2880,192L2880,320L2820,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1440,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
  );
}

// Componente de gotículas caindo
export function WaterDroplets({ count = 15 }: { count?: number }) {
  const [droplets, setDroplets] = useState<
    Array<{
      id: number;
      left: number;
      delay: number;
      duration: number;
      size: number;
    }>
  >([]);

  useEffect(() => {
    const newDroplets = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: Math.random() * 3 + 2,
      size: Math.random() * 8 + 4,
    }));
    setDroplets(newDroplets);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {droplets.map((droplet) => (
        <div
          key={droplet.id}
          className="absolute animate-droplet"
          style={{
            left: `${droplet.left}%`,
            animationDelay: `${droplet.delay}s`,
            animationDuration: `${droplet.duration}s`,
          }}
        >
          {/* Formato de gota */}
          <svg
            width={droplet.size}
            height={droplet.size * 1.5}
            viewBox="0 0 20 30"
            className="text-primary-400/40"
          >
            <path
              fill="currentColor"
              d="M10 0C10 0 0 12 0 20C0 25.5 4.5 30 10 30C15.5 30 20 25.5 20 20C20 12 10 0 10 0Z"
            />
            {/* Brilho */}
            <ellipse cx="7" cy="18" rx="2" ry="3" fill="white" opacity="0.4" />
          </svg>
        </div>
      ))}
    </div>
  );
}

// Efeito de ripple/ondulação ao redor de elementos
export function RippleEffect() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div className="relative">
        <div className="absolute w-96 h-96 rounded-full border border-primary-500/20 animate-ripple" />
        <div className="absolute w-96 h-96 rounded-full border border-secondary-500/20 animate-ripple animation-delay-1000" />
        <div className="absolute w-96 h-96 rounded-full border border-primary-500/20 animate-ripple animation-delay-2000" />
      </div>
    </div>
  );
}

// Partículas flutuantes de água
export function WaterParticles({ count = 30 }: { count?: number }) {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: number;
      top: number;
      size: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-br from-primary-400/30 to-transparent animate-float-particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
