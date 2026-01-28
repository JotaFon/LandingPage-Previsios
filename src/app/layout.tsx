import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PREVISIOS - Gestão Inteligente de Saneamento",
  description:
    "Sistema de gestão de dados e gerenciamento para empresas de saneamento com Machine Learning. Preveja gastos, monitore reservatórios e otimize operações.",
  keywords: [
    "saneamento",
    "gestão de água",
    "machine learning",
    "previsão",
    "bombas de água",
    "reservatório",
  ],
  authors: [{ name: "PREVISIOS" }],
  openGraph: {
    title: "PREVISIOS - Gestão Inteligente de Saneamento",
    description:
      "Sistema de gestão de dados e gerenciamento para empresas de saneamento com Machine Learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
