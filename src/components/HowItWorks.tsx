"use client";

import { howItWorks as styles } from "@/styles/components";

const steps = [
  {
    number: "01",
    title: "Integração de Dados",
    description:
      "Conectamos com seus sistemas existentes e sensores IoT para coletar dados em tempo real de toda a operação.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path d="M3 12A9 3 0 0 0 21 12" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Análise com IA",
    description:
      "Nossos modelos de Machine Learning processam os dados e geram previsões precisas.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Insights Acionáveis",
    description:
      "Receba alertas, recomendações e relatórios personalizados para tomar decisões informadas rapidamente.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Otimização Contínua",
    description:
      "O sistema aprende continuamente, melhorando suas previsões e recomendações ao longo do tempo.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="m2 9 3-3 3 3" />
        <path d="M13 18H7a2 2 0 0 1-2-2V6" />
        <path d="m22 15-3 3-3-3" />
        <path d="M11 6h6a2 2 0 0 1 2 2v10" />
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
