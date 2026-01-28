"use client";

import {
  WaterWaves,
  NeuralNetwork,
  TechCircles,
  CodeParticles,
} from "./WaterEffects";
import { hero as styles } from "@/styles/components";

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.gridPattern} />

      <div className={styles.orbLeft} />
      <div className={styles.orbRight} />

      <NeuralNetwork />
      <TechCircles />
      <CodeParticles count={20} />

      <WaterWaves />

      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.badgeDot}>
            <span className={styles.badgeDotPing}></span>
            <span className={styles.badgeDotInner}></span>
          </span>
          <span className={styles.badgeText}>
            Tecnologia de ponta em gestão hídrica
          </span>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.headlineWhite}>Gestão Inteligente</span>
          <span className={styles.headlineGradient}>de Saneamento</span>
        </h1>

        <p className={styles.subheadline}>
          A PREVISIOS é uma plataforma SaaS que utiliza{" "}
          <span className={styles.highlight}>Machine Learning</span> e dados
          operacionais já existentes para monitorar reservatórios, prever
          demanda e antecipar riscos, otimizando a operação de concessionárias
          de saneamento
        </p>

        <div className={styles.ctaContainer}>
          <a href="#contato" className={styles.ctaPrimary}>
            <span className={styles.ctaShine} />
            <span className="relative">Entrar em Contato</span>
            <svg
              className="relative w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a href="#features" className={styles.ctaSecondary}>
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
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            Conheça as Funcionalidades
          </a>
        </div>

        <div className={styles.statsGrid}>
          <div
            className={styles.statCard}
            style={{
              animation: "floatOnWater 3s ease-in-out infinite",
              animationDelay: "0s",
            }}
          >
            <div className={styles.statCardInner}>
              <div className={styles.statIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
              </div>

              <div className="text-1xl md:text-2xl font-bold gradient-text mb-2">
                97%
              </div>
              <div className={styles.statLabel}>Precisão nas Previsões</div>
            </div>
          </div>

          <div
            className={styles.statCard}
            style={{
              animation: "floatOnWater 3s ease-in-out infinite",
              animationDelay: "0.5s",
            }}
          >
            <div className={styles.statCardInner}>
              <div className={styles.statIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5" />
                  <path d="m16 19 3 3 3-3" />
                  <path d="M18 12h.01" />
                  <path d="M19 16v6" />
                  <path d="M6 12h.01" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>

              <div className="text-1xl md:text-2xl font-bold gradient-text mb-2">
                ECONOMIA
              </div>
              <div className={styles.statLabel}>Redução de Gastos</div>
            </div>
          </div>

          <div
            className={styles.statCard}
            style={{
              animation: "floatOnWater 3s ease-in-out infinite",
              animationDelay: "1s",
            }}
          >
            <div className={styles.statCardInner}>
              <div className={styles.statIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 22h14" />
                  <path d="M5 2h14" />
                  <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                  <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
                </svg>
              </div>

              <div className="text-1xl md:text-2xl font-bold gradient-text mb-2">
                24/7
              </div>
              <div className={styles.statLabel}>Monitoramento</div>
            </div>
          </div>

          <div
            className={styles.statCard}
            style={{
              animation: "floatOnWater 3s ease-in-out infinite",
              animationDelay: "1.5s",
            }}
          >
            <div className={styles.statCardInner}>
              <div className={styles.statIcon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 8V4H8" />
                  <rect width="16" height="12" x="4" y="8" rx="2" />
                  <path d="M2 14h2" />
                  <path d="M20 14h2" />
                  <path d="M15 13v2" />
                  <path d="M9 13v2" />
                </svg>
              </div>

              <div className="text-1xl md:text-2xl font-bold gradient-text mb-2">
                IA
              </div>
              <div className={styles.statLabel}>Machine Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
