"use client";

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
        <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
        <path d="M12 15h.01" />
        <path d="M12 7v4" />
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

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className={styles.gridPattern} />
      <div className={styles.orb} />

      <DataStreams />
      <WaterParticles count={15} />

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

        <div className={styles.grid}>
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
