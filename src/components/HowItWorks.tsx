"use client";

import { howItWorks as styles } from "@/styles/components";

const steps = [
  {
    number: "01",
    title: "Integração de Dados",
    description:
      "Conectamos com seus sistemas existentes e sensores IoT para coletar dados em tempo real de toda a operação.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#fff" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Análise com IA",
    description:
      "Nossos modelos de Machine Learning processam os dados e geram previsões precisas.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#fff" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Insights Acionáveis",
    description:
      "Receba alertas, recomendações e relatórios personalizados para tomar decisões informadas rapidamente.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#fff" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Otimização Contínua",
    description:
      "O sistema aprende continuamente, melhorando suas previsões e recomendações ao longo do tempo.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="#fff" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className={styles.section}>
      <div className={styles.gridPattern} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Como Funciona</span>
          <h2 className={styles.title}>
            Da coleta de dados até a{" "}
            <span className={styles.titleGradient}>ação inteligente</span>
          </h2>
          <p className={styles.description}>
            Um processo simplificado que transforma dados brutos em inteligência
            operacional para sua empresa de saneamento.
          </p>
        </div>

        <div className={styles.stepsContainer}>
          <div className={styles.connectionLine} />

          <div className={styles.grid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepWrapper}>
                <div className={styles.card}>
                  <div className={styles.stepNumber}>{step.number}</div>

                  <div className={styles.iconWrapper}>{step.icon}</div>

                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className={styles.mobileArrow}>
                    <svg
                      className="w-6 h-6 text-primary-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
