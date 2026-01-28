"use client";

import { useEffect, useState } from "react";
import { waterEffects as styles } from "@/styles/components";

export function NeuralNetwork() {
  const [nodes, setNodes] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);

  useEffect(() => {
    const newNodes = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      delay: Math.random() * 3,
    }));
    setNodes(newNodes);
  }, []);

  return (
    <div className={styles.neuralNetwork}>
      <svg className="w-full h-full">
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((target, j) => {
            const distance = Math.sqrt(
              Math.pow(node.x - target.x, 2) + Math.pow(node.y - target.y, 2),
            );
            if (distance < 35) {
              return (
                <line
                  key={`${i}-${j}`}
                  x1={`${node.x}%`}
                  y1={`${node.y}%`}
                  x2={`${target.x}%`}
                  y2={`${target.y}%`}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  opacity={1 - distance / 35}
                  className="animate-pulse"
                  style={{ animationDelay: `${node.delay}s` }}
                />
              );
            }
            return null;
          }),
        )}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#07a8da" />
            <stop offset="100%" stopColor="#62cfd1" />
          </linearGradient>
        </defs>
        {nodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="4"
              fill="#07a8da"
              className="animate-pulse"
              style={{ animationDelay: `${node.delay}s` }}
            />
            <circle
              cx={`${node.x}%`}
              cy={`${node.y}%`}
              r="8"
              fill="none"
              stroke="#07a8da"
              strokeWidth="1"
              opacity="0.3"
              className="animate-ping"
              style={{
                animationDelay: `${node.delay}s`,
                animationDuration: "3s",
              }}
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function DataStreams() {
  return (
    <div className={styles.dataStreams}>
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={styles.dataStreamLine}
          style={{
            top: `${15 + i * 18}%`,
            left: "-100%",
            width: "50%",
            animation: `dataStream 8s linear infinite`,
            animationDelay: `${i * 1.5}s`,
          }}
        />
      ))}
    </div>
  );
}

export function CodeParticles({ count = 15 }: { count?: number }) {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      char: string;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const chars = ["0", "1", "<>", "//", "{}", "[]", "AI", "ML", "::"];
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      char: chars[Math.floor(Math.random() * chars.length)],
      duration: 15 + Math.random() * 10,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className={styles.codeParticles}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.codeParticle}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        >
          {particle.char}
        </div>
      ))}
    </div>
  );
}

export function TechCircles() {
  return (
    <div className={styles.techCircles}>
      <svg className={styles.techCircleRight}>
        <circle
          cx="192"
          cy="192"
          r="180"
          fill="none"
          stroke="#07a8da"
          strokeWidth="1"
          strokeDasharray="10 5"
          className="animate-spin"
          style={{ animationDuration: "60s" }}
        />
        <circle
          cx="192"
          cy="192"
          r="140"
          fill="none"
          stroke="#0162b1"
          strokeWidth="1"
          strokeDasharray="20 10"
          className="animate-spin"
          style={{ animationDuration: "45s", animationDirection: "reverse" }}
        />
        <circle
          cx="192"
          cy="192"
          r="100"
          fill="none"
          stroke="#62cfd1"
          strokeWidth="1"
          strokeDasharray="5 15"
          className="animate-spin"
          style={{ animationDuration: "30s" }}
        />
      </svg>
      <svg className={styles.techCircleLeft}>
        <circle
          cx="128"
          cy="128"
          r="120"
          fill="none"
          stroke="#07a8da"
          strokeWidth="1"
          strokeDasharray="8 4"
          className="animate-spin"
          style={{ animationDuration: "50s", animationDirection: "reverse" }}
        />
        <circle
          cx="128"
          cy="128"
          r="80"
          fill="none"
          stroke="#0162b1"
          strokeWidth="1"
          strokeDasharray="15 8"
          className="animate-spin"
          style={{ animationDuration: "35s" }}
        />
      </svg>
    </div>
  );
}

export function WaterWaves() {
  return (
    <div className={styles.waterWaves}>
      <svg
        className="absolute bottom-0 w-[200%] h-112 animate-wave-slow"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#022e7b"
          fillOpacity="0.4"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,165.3C840,171,960,213,1080,213.3C1200,213,1320,171,1440,160C1560,149,1680,171,1800,186.7C1920,203,2040,213,2160,197.3C2280,181,2400,139,2520,128C2640,117,2760,139,2820,149.3L2880,160L2880,320L2820,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1440,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      <svg
        className="absolute bottom-0 w-[200%] h-110 animate-wave-medium"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#62cfd1"
          fillOpacity="0.25"
          d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,218.7C840,235,960,245,1080,234.7C1200,224,1320,192,1440,181.3C1560,171,1680,181,1800,197.3C1920,213,2040,235,2160,229.3C2280,224,2400,192,2520,181.3C2640,171,2760,181,2820,186.7L2880,192L2880,320L2820,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1440,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      <svg
        className="absolute bottom-0 w-[200%] h-110 animate-wave-fast"
        viewBox="0 0 2880 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#07a8da"
          fillOpacity="0.3"
          d="M0,256L60,261.3C120,267,240,277,360,272C480,267,600,245,720,234.7C840,224,960,224,1080,234.7C1200,245,1320,267,1440,261.3C1560,256,1680,224,1800,218.7C1920,213,2040,235,2160,245.3C2280,256,2400,256,2520,245.3C2640,235,2760,213,2820,202.7L2880,192L2880,320L2820,320C2760,320,2640,320,2520,320C2400,320,2280,320,2160,320C2040,320,1920,320,1800,320C1680,320,1560,320,1440,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </div>
  );
}

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
    <div className={styles.waterParticles}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={styles.waterParticle}
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
