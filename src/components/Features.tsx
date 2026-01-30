"use client";

import { useRef, useState, useCallback } from "react";
import { WaterParticles, DataStreams } from "./WaterEffects";
import { features as styles } from "@/styles/components";

const featuresList = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 16v5" />
        <path d="M16 14v7" />
        <path d="M20 10v11" />
        <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
        <path d="M4 18v3" />
        <path d="M8 14v7" />
      </svg>
    ),
    title: "Previsão de Gastos",
    description:
      "Algoritmos de Machine Learning analisam padrões históricos para prever gastos, considerando inúmeros fatores para uma maior precisão.",
    gradient: "from-[#045fb5] to-[#07a8da]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 21v-1" />
        <path d="M10 4V3" />
        <path d="M10 9a3 3 0 0 0 0 6" />
        <path d="m14 20 1.25-2.5L18 18" />
        <path d="m14 4 1.25 2.5L18 6" />
        <path d="m17 21-3-6 1.5-3H22" />
        <path d="m17 3-3 6 1.5 3" />
        <path d="M2 12h1" />
        <path d="m20 10-1.5 2 1.5 2" />
        <path d="m3.64 18.36.7-.7" />
        <path d="m4.34 6.34-.7-.7" />
      </svg>
    ),
    title: "Análise Climática",
    description:
      "Integração com dados meteorológicos para antecipar demandas e ajustar operações conforme condições climáticas previstas.",
    gradient: "from-[#ffab03] to-[#d66d04]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97" />
        <path d="M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z" />
        <path d="M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15" />
        <path d="M2 21v-4" />
        <path d="M7 9h.01" />
      </svg>
    ),
    title: "Monitoramento de Reservatórios",
    description:
      "Acompanhamento em tempo real dos níveis de água em cada reservatório com alertas inteligentes e dashboards interativos.",
    gradient: "from-[#00e0f0] to-[#0d99a3]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" />
      </svg>
    ),
    title: "Gestão de Bombas",
    description:
      "Controle inteligente das bombas de água com previsão de manutenção preventiva e otimização de consumo energético.",
    gradient: "from-[#4f02ba] to-[#7e36c2]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M11 7v4" />
        <path d="M11 15h.01" />
      </svg>
    ),
    title: "Detecção de Anomalias",
    description:
      "Identificação automática de comportamentos suspeitos através de análises com inúmeros dados.",
    gradient: "from-[#a80309] to-[#ff3b29]",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
        <path d="M8 11h8" />
        <path d="M8 7h6" />
      </svg>
    ),
    title: "Relatórios Inteligentes",
    description:
      "Geração automática de relatórios com insights acionáveis, tendências e recomendações para um melhor gerenciamento.",
    gradient: "from-[#53cf82] to-[#0c9c20]",
  },
];

function MobileCarousel() {
  const total = featuresList.length;
  const [current, setCurrent] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const dragStartTime = useRef(0);
  const [snapTo, setSnapTo] = useState<null | number>(null);

  const CARD_WIDTH = 270;
  const SIDE_OFFSET = 200;

  const getIndex = (i: number) => ((i % total) + total) % total;

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    dragStart.current = e.touches[0].clientX;
    dragStartTime.current = Date.now();
    setDragOffset(0);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const diff = e.touches[0].clientX - dragStart.current;
      setDragOffset(diff);
    },
    [isDragging],
  );

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);

    const velocity =
      dragOffset / Math.max(1, Date.now() - dragStartTime.current);
    const threshold = CARD_WIDTH * 0.2;

    let direction = 0;

    if (dragOffset > threshold || velocity > 0.5) {
      direction = 1;
    } else if (dragOffset < -threshold || velocity < -0.3) {
      direction = -1;
    }

    setSnapTo(direction);

    setTimeout(() => {
      if (direction === 1) {
        setCurrent((prev) => getIndex(prev - 1));
      } else if (direction === -1) {
        setCurrent((prev) => getIndex(prev + 1));
      }

      setDragOffset(0);
      setSnapTo(null);
    }, 400);
  }, [isDragging, dragOffset, getIndex]);

  const effectiveOffset = snapTo !== null ? snapTo * SIDE_OFFSET : dragOffset;

  const dragProgress = Math.max(-1, Math.min(1, effectiveOffset / SIDE_OFFSET));

  const getCardStyle = (position: number) => {
    const p = position + dragProgress;
    const absP = Math.abs(p);

    const translateX = p * SIDE_OFFSET;
    const translateY = absP * -40;
    const translateZ = -absP * 100;

    const rotateY = p * -15;
    const rotateX = absP * 2;

    const scale = Math.max(0.65, 1 - absP * 0.2);
    const opacity = Math.max(0, 1 - absP * 0.2);
    const zIndex = 10 - Math.round(absP * 4);

    return {
      width: CARD_WIDTH,
      left: "50%",
      transform: `
      translateX(calc(-50% + ${translateX}px))
      translateY(${translateY}px)
      perspective(800px)
      rotateY(${rotateY}deg)
      rotateX(${rotateX}deg)
      translateZ(${translateZ}px)
      scale(${scale})
    `,
      opacity,
      zIndex,
      transition: isDragging
        ? "none"
        : "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
    };
  };

  const visiblePositions = [-2, -1, 0, 1, 2];

  return (
    <div className="md:hidden">
      <div
        className="relative overflow-hidden"
        style={{ height: 280, perspective: 800, touchAction: "pan-y" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {visiblePositions.map((pos) => {
            const idx = getIndex(current + pos);
            const feature = featuresList[idx];
            const cardStyle = getCardStyle(pos);

            return (
              <div
                key={`${current}-${pos}`}
                className="absolute glass-card p-5 flex flex-col"
                style={cardStyle}
              >
                <div className={styles.cardIcon(feature.gradient)}>
                  {feature.icon}
                </div>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.cardDescription}>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-4">
        <svg
          className="mr-15"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        {featuresList.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 w-3 rounded-full transition-all duration-400 origin-center ${
              i === current
                ? "w-4 bg-gradient-to-r from-[#0162b1] to-[#07a8da] scale-x-100"
                : "w-2 bg-dark-600 scale-x-50"
            }`}
          />
        ))}
        <svg
          className="ml-15"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.gridPattern} />
      <div className={styles.orb} />

      <DataStreams />
      <WaterParticles count={8} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Funcionalidades</span>
          <h2 className={styles.title}>
            Tecnologia que{" "}
            <span className={styles.titleGradient}>transforma dados</span> em
            decisões
          </h2>
          <p className={styles.description}>
            Nossa plataforma combina inteligência artificial com expertise em
            saneamento para oferecer soluções completas de gestão hídrica.
          </p>
        </div>

        <MobileCarousel />

        <div className={`hidden md:grid ${styles.grid}`}>
          {featuresList.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon(feature.gradient)}>
                {feature.icon}
              </div>

              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
