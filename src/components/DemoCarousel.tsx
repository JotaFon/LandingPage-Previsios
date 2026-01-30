"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import slide1 from "@/images/slide1.png";
import slide2 from "@/images/slide2.png";
import slide3 from "@/images/slide3.png";
import { demoCarousel as styles } from "@/styles/components";

const slides = [
  {
    image: slide1,
    title: "Monitoramento Regional",
    description:
      "Mapa interativo com status de bombas e análise de consumo em tempo real",
  },
  {
    image: slide2,
    title: "Gestão de Reservatórios",
    description:
      "Acompanhe níveis, demanda e autonomia de todos os reservatórios",
  },
  {
    image: slide3,
    title: "Relatórios e KPIs",
    description:
      "Dashboards executivos com métricas de performance e insights de IA",
  },
];

export default function DemoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="demo" className={styles.section}>
      <div className={styles.gridPattern} />
      <div className={styles.orb} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Demonstração</span>
          <h2 className={styles.title}>
            Conheça a <span className={styles.titleGradient}>Plataforma</span>
          </h2>
          <p className={styles.description}>
            Uma pequena demonstração da nossa plataforma de soluções completa
            para gestão inteligente de saneamento.
          </p>
        </div>

        <div className={styles.carouselContainer}>
          <div className={styles.card}>
            <div className={styles.slideHeader}>
              <div>
                <h3 className={styles.slideTitle}>
                  {slides[currentSlide].title}
                </h3>
                <p className={styles.slideDescription}>
                  {slides[currentSlide].description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className={styles.slideCounter}>
                  {currentSlide + 1} / {slides.length}
                </span>
              </div>
            </div>

            <div className={styles.slideArea}>
              <div
                className={styles.slideTrack}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, index) => (
                  <div key={index} className={styles.slide}>
                    <Image
                      src={slide.image}
                      alt={`${slide.title} - ${slide.description}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px"
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              <button
                onClick={prevSlide}
                className={`${styles.navButton} ${styles.navButtonLeft}`}
                aria-label="Slide anterior"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className={`${styles.navButton} ${styles.navButtonRight}`}
                aria-label="Próximo slide"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className={styles.dots}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-1 w-4 rounded-full origin-center transition-transform duration-300 ${
                    i === currentSlide
                      ? "bg-gradient-to-r from-[#0162b1] to-[#07a8da] scale-x-100"
                      : "bg-dark-600 scale-x-50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
